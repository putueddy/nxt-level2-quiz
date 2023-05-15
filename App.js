"use strict";

function RenderStep({ step }) {
  const renderStep = [
    { id: '1', value: 1 },
    { id: '2', value: 2 },
    { id: '3', value: 3 },
    { id: '4', value: 4 },
  ];
  return (
    <div className="render--step">
      {renderStep.map((i) => {
        return (
          <div className="step" key={i.id} >
            <div
              className="step--circle"
              style={
                i.value <= step
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
              {i.value.toString()}
            </div>
            {
              i.value < 4 && (
                <div className="progress--container">
                  <div className="progress--inner">
                    {i.value === step && (
                      <div
                        className="progress--child"
                        style={i.value <= step ? { width: "50%" } : { width: "0%" }}
                      ></div>
                    )}
                    {i.value < step && (
                      <div
                        className="progress--child"
                        style={{ width: "100%" }}
                      ></div>
                    )}
                  </div>
                </div>
              )
            }
          </div>
        );
      })}
    </div >
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

function FieldForm2({ label, icon }) {
  return (
    <div className="field--form2">
      <div className="field--input2">
        <div className="circle--form2"></div>
        <img className="icon--form2" src={icon} alt={label} />
      </div>
      <div className="label--form2">{label}</div>
    </div>
  );
}

function Form2({ data, setFormValues }) {
  return (
    <div className="form1">
      <div className="header header--medium">Our services</div>
      <div className="description" style={{ marginBottom: "39.13px" }}>
        Please select which service you are interested in.
      </div>
      <div className="grid--container2">
        <div
          className="grid--box2 pointer"
          style={data.service === "Development" ? styleSelected : styleNormal}
          onClick={() => {
            setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Development",
              };
            });
          }}
        >
          <FieldForm2 label="Development" icon="images/icon_dev.png" />
        </div>
        <div
          className="grid--box2 pointer"
          style={data.service === "Web Design" ? styleSelected : styleNormal}
          onClick={() => {
            setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Web Design",
              };
            });
          }}
        >
          <FieldForm2 label="Web Design" icon="images/icon_web.png" />
        </div>
        <div
          className="grid--box2 pointer"
          style={data.service === "Marketing" ? styleSelected : styleNormal}
          onClick={() => {
            setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Marketing",
              };
            });
          }}
        >
          <FieldForm2 label="Marketing" icon="images/icon_mar.png" />
        </div>
        <div
          className="grid--box2 pointer"
          style={data.service === "Other" ? styleSelected : styleNormal}
          onClick={() => {
            setFormValues((prevData) => {
              return {
                ...prevData,
                service: "Other",
              };
            });
          }}
        >
          <FieldForm2 label="Other" icon="images/icon_oth.png" />
        </div>
      </div>
    </div>
  );
}

function FieldForm3({ name, label, value, setFormValues }) {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormValues((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="radio">
      <input
        id={label}
        name={name}
        value={label}
        type="radio"
        onChange={handleChange}
        checked={value === label}
      />
      <label htmlFor={label} className="radio-label">
        {label}
      </label>
    </div>
  );
}

function Form3({ data, setFormValues }) {
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
            data.budget === "$5.000 - $10.000" ? styleSelected : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$5.000 - $10.000"
            value={data.budget}
            setFormValues={setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={
            data.budget === "$10.000 - $20.000" ? styleSelected : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$10.000 - $20.000"
            value={data.budget}
            setFormValues={setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={
            data.budget === "$20.000 - $50.000" ? styleSelected : styleNormal
          }
        >
          <FieldForm3
            name="budget"
            label="$20.000 - $50.000"
            value={data.budget}
            setFormValues={setFormValues}
          />
        </div>
        <div
          className="grid--box2"
          style={data.budget === "$50.000 +" ? styleSelected : styleNormal}
        >
          <FieldForm3
            name="budget"
            label="$50.000 +"
            value={data.budget}
            setFormValues={setFormValues}
          />
        </div>
      </div>
    </div>
  );
}

function Form4({ data }) {
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
        onClick={() => alert(JSON.stringify(data))}
      >
        Submit
      </div>
    </div>
  );
}

const Input = React.forwardRef(
  ({ type, name, placeholder, icon, value, handleChange }, ref) => {
    return (
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

  const [inputValid, setInputValid] = React.useState({
    name: { isRequired: true, emptyMessage: "", invalidMessage: "" },
    email: { isRequired: true, emptyMessage: "Email is required.", invalidMessage: "Email is invalid." },
    phone: { isRequired: true, emptyMessage: "Phone is required.", invalidMessage: "Phone is invalid." },
    company: { isRequired: true, emptyMessage: "Company is required.", invalidMessage: "" },
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
    setInputValid((prevData) => {
      return {
        ...prevData,
        [event.target.name]: { isRequired: true, emptyMessage: "", invalidMessage: "" },
      };
    });
  }

  function handleIncrement() {
    if (formValues.name === "") {
      setInputValid((prevData) => {
        return {
          ...prevData,
          name: { isRequired: false, emptyMessage: "Name is required.", invalidMessage: "" },
        };
      });
      return nameRef.current.focus();
    }
    if (!validEmail(formValues.email)) {
      setInputValid((prevData) => {
        return {
          ...prevData,
          email: { isRequired: false, emptyMessage: "Email is required.", invalidMessage: "Email is invalid." },
        };
      });
      return emailRef.current.focus();
    }
    if (!validPhone(formValues.phone)) {
      setInputValid((prevData) => {
        return {
          ...prevData,
          phone: { isRequired: false, emptyMessage: "Phone is required.", invalidMessage: "Phone is invalid." },
        };
      });
      return phoneRef.current.focus();
    }
    if (formValues.company === "") {
      setInputValid((prevData) => {
        return {
          ...prevData,
          company: { isRequired: false, emptyMessage: "Company is required.", invalidMessage: "" },
        };
      });
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
                <div className="field--form1">
                  <label
                    className="label--form1"
                    htmlFor="name"
                    style={
                      inputValid.name.isRequired
                        ? { color: "var(--neutral-800)" }
                        : { color: "var(--primary-color2)" }
                    }
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    icon="images/icon_name.png"
                    value={formValues.name}
                    handleChange={handleChange}
                    ref={nameRef}
                  />
                  <span
                    className="label--msg"
                    style={
                      inputValid.name.isRequired
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    {formValues.name === "" ? inputValid.name.emptyMessage : inputValid.name.invalidMessage}
                  </span>
                </div>
              </div>
              <div className="grid--box">
                <div className="field--form1">
                  <label
                    className="label--form1"
                    htmlFor="email"
                    style={
                      inputValid.email.isRequired
                        ? { color: "var(--neutral-800)" }
                        : { color: "var(--primary-color2)" }
                    }
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    icon="images/icon_email.png"
                    value={formValues.email}
                    handleChange={handleChange}
                    ref={emailRef}
                  />
                  <span
                    className="label--msg"
                    style={
                      inputValid.email.isRequired
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    {formValues.email === "" ? inputValid.email.emptyMessage : inputValid.email.invalidMessage}
                  </span>
                </div>
              </div>
              <div className="grid--box">
                <div className="field--form1">
                  <label
                    className="label--form1"
                    htmlFor="phone"
                    style={
                      inputValid.phone.isRequired
                        ? { color: "var(--neutral-800)" }
                        : { color: "var(--primary-color2)" }
                    }
                  >
                    Phone Number
                  </label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    icon="images/icon_phone.png"
                    value={formValues.phone}
                    handleChange={handleChange}
                    ref={phoneRef}
                  />
                  <span
                    className="label--msg"
                    style={
                      inputValid.phone.isRequired
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    {formValues.phone === "" ? inputValid.phone.emptyMessage : inputValid.phone.invalidMessage}
                  </span>
                </div>
              </div>
              <div className="grid--box">
                <div className="field--form1">
                  <label
                    className="label--form1"
                    htmlFor="company"
                    style={
                      inputValid.company.isRequired
                        ? { color: "var(--neutral-800)" }
                        : { color: "var(--primary-color2)" }
                    }
                  >
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    icon="images/icon_company.png"
                    value={formValues.company}
                    handleChange={handleChange}
                    ref={companyRef}
                  />
                  <span
                    className="label--msg"
                    style={
                      inputValid.company.isRequired
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    {formValues.company === "" ? inputValid.company.emptyMessage : inputValid.company.invalidMessage}
                  </span>
                </div>
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
