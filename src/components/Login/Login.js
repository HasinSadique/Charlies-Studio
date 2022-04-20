import React, { useState } from "react";
// import useFirebase from "../../hooks/useFirebase";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  // console.log("hobe", user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(getAuth(app));

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordlBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="my-10 mx-80">
      {error?.message ? (
        <p className="text-red-700 mb-2">Email or password does not match</p>
      ) : (
        <p></p>
      )}

      <form
        onSubmit={handleUserSignIn}
        className="border w-auto h-auto mx-auto"
      >
        <h1 className="mt-5"> Login with email and password</h1>
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
          onBlur={handlePasswordlBlur}
          className="border-2 mb-2 p-1 w-80"
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          className="bg-orange-500 mt-3 w-28 h-6 cursor-pointer"
          type="submit"
          value="Login"
        />
        <br />
        <h6 className="my-5">
          Don't have an account?{" "}
          <a href="/register" className="text-orange-400 cursor-pointer">
            Create new Account
          </a>
        </h6>
      </form>
      <h5 className="my-10">Or, Sign in with</h5>
      <button
        onClick={() => signInWithGoogle()}
        className="flex mx-auto cursor-pointer rounded-full border px-5 py-2 hover:bg-slate-100"
      >
        <img
          className="w-6 mr-1"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt=""
        />
        Google
      </button>
    </div>
  );
};

export default Login;
