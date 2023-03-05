"use strict";

function RenderStep(props) {
  const renderStep = [1, 2, 3, 4];

  return (
    <div className="render--step">
      {renderStep.map((i, index) => {
        return (
          <div className="step" key={index}>
            <div
              className="step--circle"
              style={
                i <= props.step
                  ? {
                      backgroundColor: "var(--primary-color)",
                      color: "var(--neutral-100)",
                    }
                  : {
                      backgroundColor: "var(--neutral-300)",
                      color: "var(--neutral-600)",
                    }
              }
            >
              {i.toString()}
            </div>
            {i < 4 && (
              <div className="line--container">
                <div className="inner">
                  {i === props.step && (
                    <div
                      className="child"
                      style={
                        i <= props.step ? { width: "50%" } : { width: "0%" }
                      }
                    ></div>
                  )}
                  {i < props.step && (
                    <div className="child" style={{ width: "100%" }}></div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Form() {
  const [step, setStep] = React.useState(1);

  return (
    <div className="form">
      <RenderStep step={step} />
    </div>
  );
}

const container = (
  <div className="container">
    <div className="headings">Get a project quote</div>
    <div className="paragraphs">
      Please fill the form below to receive a quote for your project. Feel free
      to add as much detail as needed.
    </div>

    <Form />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(container);
