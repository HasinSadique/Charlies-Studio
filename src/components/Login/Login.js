// import React, { useState } from "react";
// // import useFirebase from "../../hooks/useFirebase";
// import {
//   useAuthState,
//   useSignInWithEmailAndPassword,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import app from "../../firebase.init";
// import { getAuth } from "firebase/auth";
// import { Navigate, useLocation, useNavigate } from "react-router";
// import auth from "../../firebase.init";

// const Login = () => {
//   const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
//   // console.log("hobe", user);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();f
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   // const [signInWithEmailAndPassword, user, loading, error] =
//   //   useSignInWithEmailAndPassword(getAuth(app));

//   const handleEmailBlur = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordlBlur = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleUserSignIn = (event) => {
//     event.preventDefault();
//     // signInWithEmailAndPassword(email, password);
//   };

//   // if (user1 || user) {
//   if (user1) {
//     navigate(from, { replace: true });
//   }

//   return (
//     <div className="my-10 mx-auto">
//       {" "}
//       {error.message ? (
//         <p className="text-red-700 mb-2"> Email or password does not match </p>
//       ) : (
//         <p> </p>
//       )}
//       <form
//         onSubmit={handleUserSignIn}
//         className="border w-auto h-auto mx-auto"
//       >
//         <h1 className="mt-5"> Login with email and password </h1> <br />
//         <input
//           required
//           onBlur={handleEmailBlur}
//           className="border-2 mb-2 p-1 w-80"
//           type="email"
//           placeholder="Email"
//         />
//         <br />
//         <input
//           required
//           onBlur={handlePasswordlBlur}
//           className="border-2 mb-2 p-1 w-80"
//           type="password"
//           placeholder="Password"
//         />
//         <br />
//         <input
//           className="bg-orange-500 mt-3 w-28 h-6 mb-6 cursor-pointer"
//           type="submit"
//           value="Login"
//         />
//         <br />
//         <a className=" text-slate-400 text-right" href="">
//           Forgot password{" "}
//         </a>{" "}
//         <br />
//         <h6 className="my-5">
//           Don 't have an account?{" "}
//           <a href="/register" className="text-orange-400 cursor-pointer">
//             Create new Account{" "}
//           </a>{" "}
//         </h6>{" "}
//       </form>{" "}
//       <h5 className="my-10"> Or, Sign in with </h5>{" "}
//       <button
//         onClick={() => signInWithGoogle()}
//         className="flex mx-auto cursor-pointer rounded-full border px-5 py-2 hover:bg-slate-100"
//       >
//         <img
//           className="w-6 mr-1"
//           src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
//           alt=""
//         />
//         Google{" "}
//       </button>{" "}
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [user] = useAuthState(auth);

  const handleSignInWithGoogle = (event) => {
    event.preventDefault();
    signInWithGoogle();

    if (userGoogle) {
      console.log("Authstate: ", userGoogle);
    } else {
      console.log("Google Sign in Error");
    }
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordlBlur = (event) => {
    setPassword(event.target.value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

    event.target.reset();
  };

  console.log("userEmail: ", user);

  if (userGoogle || user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="py-20">
      <div>
        <p
          className={`${
            error?.message ? "text-red-600 mb-10 text-center " : "hidden"
          }`}
        >
          {error?.message}
        </p>
      </div>
      <div className="w-3/4 lg:w-1/2 mx-auto bg-gray-800 py-5 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-xl text-center mb-10">
          Login using email and password
        </h1>
        <form onSubmit={handleUserSignIn} className="">
          <input
            onBlur={handleEmailBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            onBlur={handlePasswordlBlur}
            className="block rounded-lg mx-auto w-full px-2"
            type="Password"
            placeholder="Password"
            required
          />
          <h1 className="text-white mb-6 text-right mt-2 hover:text-orange-400 text-sm cursor-pointer">
            Forgot Password?
          </h1>
          <input
            className="block mx-auto rounded-xl text-white bg-orange-500 px-8 py-1"
            type="submit"
            value="Sign In"
          />
          <p className="text-white text-center mt-5 mb-2">
            New Joining?{" "}
            <a className="hover:text-orange-500" href="/register">
              Create New Account
            </a>
          </p>
        </form>
      </div>
      <div className="">
        <hr className=" mt-6 border-gray-200 w-3/4 mx-auto dark:border-gray-700" />
        <h1 className="text-black text-center my-5">Or, Sign in with </h1>
        <button
          onClick={handleSignInWithGoogle}
          className=" hover:bg-blue-600 hover:text-white border-2 hover:scale-105 mx-auto px-5 py-1.5 font-semibold rounded-2xl flex gap-3 bg-white"
        >
          <img
            className="w-6 h-6"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
