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
              <div className="progress--container">
                <div className="progress--inner">
                  {i === props.step && (
                    <div
                      className="progress--child"
                      style={
                        i <= props.step ? { width: "50%" } : { width: "0%" }
                      }
                    ></div>
                  )}
                  {i < props.step && (
                    <div
                      className="progress--child"
                      style={{ width: "100%" }}
                    ></div>
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

function FieldForm1(props) {
  return (
    <div className="field--form1">
      <label className="label--form1" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="field--input">
        <input
          className="input"
          type={props.id === "email" ? "email" : "text"}
          placeholder={props.label}
        />
        <img className="icon--form1" src={props.icon} alt={props.label} />
      </div>
      <span className="label--msg">{props.msg}</span>
    </div>
  );
}

function Form1() {
  return (
    <div className="form1">
      <div className="header header--medium">Contact details</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Lorem ipsum dolor sit amet consectetur adipisc.
      </div>
      <div className="grid--container">
        <div className="grid--box">
          <FieldForm1 id="name" label="Name" icon="images/icon_name.png" />
        </div>
        <div className="grid--box">
          <FieldForm1 id="email" label="Email" icon="images/icon_email.png" />
        </div>
        <div className="grid--box">
          <FieldForm1
            id="phone"
            label="Phone Number"
            icon="images/icon_phone.png"
          />
        </div>
        <div className="grid--box">
          <FieldForm1
            id="company"
            label="Company"
            icon="images/icon_company.png"
            msg="Company is required."
          />
        </div>
      </div>
    </div>
  );
}

function FieldForm2(props) {
  return (
    <div className="field--form2">
      <div className="field--input2">
        <div className="circle--form2"></div>
        <img className="icon--form2" src={props.icon} alt={props.label} />
      </div>
      <div className="label--form2">{props.label}</div>
    </div>
  );
}

function Form2() {
  return (
    <div className="form1">
      <div className="header header--medium">Our services</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Please select which service you are interested in.
      </div>
      <div className="grid--container2">
        <div className="grid--box2">
          <FieldForm2 label="Development" icon="images/icon_dev.png" />
        </div>
        <div className="grid--box2">
          <FieldForm2 label="Web Design" icon="images/icon_web.png" />
        </div>
        <div className="grid--box2">
          <FieldForm2 label="Marketing" icon="images/icon_mar.png" />
        </div>
        <div className="grid--box2">
          <FieldForm2 label="Other" icon="images/icon_oth.png" />
        </div>
      </div>
    </div>
  );
}

function FieldForm3(props) {
  return (
    <div class="radio">
      <input id={props.label} name={props.name} type="radio" />
      <label htmlFor={props.label} class="radio-label">
        {props.label}
      </label>
    </div>
  );
}

function Form3() {
  return (
    <div className="form1">
      <div className="header header--medium">What’s your project budget?</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Please select the project budget range you have in mind.
      </div>
      <div className="grid--container2">
        <div className="grid--box2">
          <FieldForm3 name="budget" label="$5.000 - $10.000" />
        </div>
        <div className="grid--box2">
          <FieldForm3 name="budget" label="$10.000 - $20.000" />
        </div>
        <div className="grid--box2">
          <FieldForm3 name="budget" label="$20.000 - $50.000" />
        </div>
        <div className="grid--box2">
          <FieldForm3 name="budget" label="$50.000 +" />
        </div>
      </div>
    </div>
  );
}

const handleIncrement = () => {
  setStep(step + 1);
};

const handleDecrement = () => {
  setStep(step - 1);
};

function Button(props) {
  return (
    <button className="button" onClick={props.handleClick}>
      {props.title}
    </button>
  );
}

function App() {
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {}, [step]);

  return (
    <div className="home">
      <div className="header header--big" style={{ marginBottom: "12px" }}>
        Get a project quote
      </div>
      <div
        className="description"
        style={{ textAlign: "center", marginBottom: "42.59px" }}
      >
        Please fill the form below to receive a quote for your project. Feel
        free to add as much detail as needed.
      </div>

      <div className="container">
        <RenderStep step={step} />
        <div className="line" />
        {step === 1 && <Form1 />}
        {step === 2 && <Form2 />}
        {step === 3 && <Form3 />}
      </div>

      <div
        className="footer"
        style={
          step === 1
            ? { justifyContent: "end" }
            : { justifyContent: "space-between" }
        }
      >
        {step > 1 && (
          <Button
            title="Previous step"
            handleClick={() => {
              setStep(step - 1);
            }}
          />
        )}
        {step < 4 && (
          <Button
            title="Next step"
            handleClick={() => {
              setStep(step + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
