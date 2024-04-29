import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
