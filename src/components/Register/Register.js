import { getAuth, verifyBeforeUpdateEmail } from "@firebase/auth";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import app from "../../firebase.init";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, sendEmailVerification] =
    useCreateUserWithEmailAndPassword(getAuth(app));

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

  if (user) {
    navigate("/login");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password != confirmPass) {
      setError("Password mismatch.");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification = true;
  };

  return (
    <div className="my-16 mx-80">
      <p>{error}</p>
      <form
        onSubmit={handleCreateUser}
        className="border w-auto h-auto mx-auto"
      >
        <h1 className="mt-5"> Please register with your email </h1> <br />
        <input
          onBlur={handleNameBlur}
          className="border-2 mb-2 p-1 w-80"
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          required
          onBlur={handleEmailBlur}
          className="border-2 mb-2 p-1 w-80"
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          required
          onBlur={handlePasswordBlur}
          className="border-2 mb-2 p-1 w-80"
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          required
          onBlur={handleConfirmPassBlur}
          className="border-2 mb-2 p-1 w-80"
          type="password"
          placeholder="Confirm password"
        />
        <br />
        <input
          className="bg-orange-500 mt-3 w-28 h-6 cursor-pointer"
          type="submit"
          value="Register"
        />
        <br />
        <h6 className="my-5">
          Already have an account?
          <a href="/login" className="text-orange-400  ml-1 cursor-pointer">
            Log in
          </a>
        </h6>
      </form>
    </div>
  );
};

export default Register;
