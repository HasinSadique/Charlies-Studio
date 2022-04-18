import React from "react";

const Register = () => {
  return (
    <div className="p-20">
      <h1>Please register with your email</h1>
      <br />
      <form>
        <input className="border-2" type="text" placeholder="Name" />
        <br />
        <input className="border-2" type="email" placeholder="Email" />
        <br />
        <input className="border-2" type="password" placeholder="Password" />
      </form>
      <br />
      <input type="submit" value="Register" />
    </div>
  );
};

export default Register;
