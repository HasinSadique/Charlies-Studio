import React from "react";
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const Login = () => {
  //   const { signInWithGoogle } = useFirebase();

  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  return (
    <div className="p-28">
      <h1> Login with email and password</h1>
      <br />
      <form>
        <input className="border-2" type="email" placeholder="Email" />
        <br />
        <input className="border-2" type="password" placeholder="Password" />
      </form>
      <br />
      <input type="submit" value="Login" />
      <br />

      <button
        onClick={() => signInWithGoogle()}
        className="border-4 bg-blue-700 text-white p-2 mt-10 rounded-full"
      >
        Google Sign in
      </button>
    </div>
  );
};

export default Login;
