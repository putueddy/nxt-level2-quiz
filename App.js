"use strict";

function RenderStep(props) {
  const renderStep = [1, 2, 3, 4];
  return (
    <div className="render--step">
      {renderStep.map((i, index) => {
        return (
          <div className="step" key={self.crypto.randomUUID()}>
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

const styleNormal = {
  border: "1px solid var(--neutral-300)",
  boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
};
const styleSelected = {
  border: "2px solid var(--primary-color)",
  boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
};

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

function Form2(props) {
  return (
    <div className="form1">
      <div className="header header--medium">Our services</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Please select which service you are interested in.
      </div>
      <div className="grid--container2">
        <div
          className="grid--box2 pointer"
          style={
            props.data.service === "Development" ? styleSelected : styleNormal
          }
          onClick={() => {
            props.setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Development",
              };
            });
          }}
        >
          <FieldForm2
            label="Development"
            icon="images/icon_dev.png"
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2 pointer"
          style={
            props.data.service === "Web Design" ? styleSelected : styleNormal
          }
          onClick={() => {
            props.setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Web Design",
              };
            });
          }}
        >
          <FieldForm2
            label="Web Design"
            icon="images/icon_web.png"
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2 pointer"
          style={
            props.data.service === "Marketing" ? styleSelected : styleNormal
          }
          onClick={() => {
            props.setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Marketing",
              };
            });
          }}
        >
          <FieldForm2
            label="Marketing"
            icon="images/icon_mar.png"
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2 pointer"
          style={props.data.service === "Other" ? styleSelected : styleNormal}
          onClick={() => {
            props.setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Other",
              };
            });
          }}
        >
          <FieldForm2
            label="Other"
            icon="images/icon_oth.png"
            setFormValues={props.setFormValues}
          />
        </div>
      </div>
    </div>
  );
}

function FieldForm3(props) {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    props.setFormValues((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="radio">
      <input
        id={props.label}
        name={props.name}
        value={props.label}
        type="radio"
        onChange={handleChange}
        checked={props.value === props.label}
      />
      <label htmlFor={props.label} className="radio-label">
        {props.label}
      </label>
    </div>
  );
}

function Form3(props) {
  return (
    <div className="form1">
      <div className="header header--medium">What’s your project budget?</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Please select the project budget range you have in mind.
      </div>
      <div className="grid--container2">
        <div
          className="grid--box2"
          style={
            props.data.budget === "$5.000 - $10.000"
              ? styleSelected
              : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$5.000 - $10.000"
            value={props.data.budget}
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={
            props.data.budget === "$10.000 - $20.000"
              ? styleSelected
              : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$10.000 - $20.000"
            value={props.data.budget}
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={
            props.data.budget === "$20.000 - $50.000"
              ? styleSelected
              : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$20.000 - $50.000"
            value={props.data.budget}
            setFormValues={props.setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={
            props.data.budget === "$50.000 +" ? styleSelected : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$50.000 +"
            value={props.data.budget}
            setFormValues={props.setFormValues}
          />
        </div>
      </div>
    </div>
  );
}

function Form4(props) {
  return (
    <div className="form1 form4">
      <img
        className="icon--form4"
        src="images/icon_submit.png"
        width="25%"
        alt="Submit"
      />
      <div className="header header--medium">Submit your quote request</div>
      <div
        className="description"
        style={{
          textAlign: "center",
          width: "495px",
          marginBottom: "24px",
        }}
      >
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your message to receive a project
        quote in 24 - 48 hours.
      </div>
      <div
        className="button--submit"
        onClick={() => alert(JSON.stringify(props.data))}
      >
        Submit
      </div>
    </div>
  );
}

const Input = React.forwardRef(
  ({ type, name, placeholder, icon, msg, value, handleChange }, ref) => {
    const isValid =
      (name === "name" && value.trim() != "") ||
      (name === "email" && validEmail(value)) ||
      (name === "phone" && validPhone(value)) ||
      (name === "company" && value.trim() != "");
    return (
      <div className="field--form1">
        <label
          className="label--form1"
          htmlFor={name}
          style={
            isValid
              ? { color: "var(--neutral-800)" }
              : { color: "var(--primary-color2)" }
          }
        >
          {placeholder}
        </label>
        <div className="field--input">
          <input
            className="input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            ref={ref}
          />
          <img className="icon--form1" src={icon} alt={placeholder} />
        </div>
        <span
          className="label--msg"
          style={isValid ? { visibility: "hidden" } : { visibility: "visible" }}
        >
          {msg}
        </span>
      </div>
    );
  }
);

function Button(props) {
  return (
    <button className="button" onClick={props.handleClick}>
      {props.title}
    </button>
  );
}

function validEmail(email) {
  if (/^\w+([\.-]?\w+)*@gmail.com$/.test(email)) {
    return true;
  }
  return false;
}

function validPhone(phone) {
  if (/^08?(\d{7,10}$)/.test(phone)) {
    return true;
  }
  return false;
}

function App() {
  const [step, setStep] = React.useState(1);
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Development",
    budget: "$50.000 +",
  });

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const phoneRef = React.useRef();
  const companyRef = React.useRef();

  function handleChange(event) {
    setFormValues((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleIncrement() {
    if (formValues.name === "") {
      return nameRef.current.focus();
    }
    if (!validEmail(formValues.email)) {
      return emailRef.current.focus();
    }
    if (!validPhone(formValues.phone)) {
      return phoneRef.current.focus();
    }
    if (formValues.company === "") {
      return companyRef.current.focus();
    }
    setStep((prevStep) => prevStep + 1);
  }

  function handleDecrement() {
    setStep((prevStep) => prevStep - 1);
  }

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
        {step === 1 && (
          <div className="form1">
            <div className="header header--medium">Contact details</div>
            <div className="description" style={{ marginBottom: "39.13px" }}>
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
            <div className="grid--container">
              <div className="grid--box">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  icon="images/icon_name.png"
                  msg="Name is required."
                  value={formValues.name}
                  handleChange={handleChange}
                  ref={nameRef}
                />
              </div>
              <div className="grid--box">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  icon="images/icon_email.png"
                  msg="Email is invalid."
                  value={formValues.email}
                  handleChange={handleChange}
                  ref={emailRef}
                />
              </div>
              <div className="grid--box">
                <Input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  icon="images/icon_phone.png"
                  msg="Phone number is invalid."
                  value={formValues.phone}
                  handleChange={handleChange}
                  ref={phoneRef}
                />
              </div>
              <div className="grid--box">
                <Input
                  type="text"
                  name="company"
                  placeholder="Company"
                  icon="images/icon_company.png"
                  msg="Company is required."
                  value={formValues.company}
                  handleChange={handleChange}
                  ref={companyRef}
                />
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <Form2 data={formValues} setFormValues={setFormValues} />
        )}
        {step === 3 && (
          <Form3 data={formValues} setFormValues={setFormValues} />
        )}
        {step === 4 && <Form4 data={formValues} />}
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
          <Button title="Previous step" handleClick={handleDecrement} />
        )}
        {step < 4 && <Button title="Next step" handleClick={handleIncrement} />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
