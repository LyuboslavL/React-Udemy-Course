import { useState, useRef } from "react";

import Input from "./Input.jsx";

export default function Login() {
  /* seperate useState for email and password
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  */

  /* useRef alternative
  const email = useRef();
  const password = useRef();
   */

  // single function and useState to deal with entered email or password
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // const enteredEmail = email.current.value;
    // const enteredPassword = password.current.value;
  }

  const handleInputChange = (identifier, event) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  };

  const emailIsInvalid = !enteredValues.email.includes("@");
  const passwordIsInvalid = !enteredValues.password.trim().length < 6;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Password must be at least 6 characters."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
