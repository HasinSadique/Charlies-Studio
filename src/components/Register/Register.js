// import { getAuth, verifyBeforeUpdateEmail } from "@firebase/auth";
// import React, { useState } from "react";
// import {
//   useCreateUserWithEmailAndPassword,
//   useSendEmailVerification,
// } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router";
// import app from "../../firebase.init";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const [createUserWithEmailAndPassword, user, sendEmailVerification] =
//     useCreateUserWithEmailAndPassword(getAuth(app));

//   const handleNameBlur = (event) => {
//     setName(event.target.value);
//   };
//   const handleEmailBlur = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordBlur = (event) => {
//     setPassword(event.target.value);
//   };
//   const handleConfirmPassBlur = (event) => {
//     setConfirmPass(event.target.value);
//   };

//   if (user) {
//     navigate("/login");
//   }

//   const handleCreateUser = (event) => {
//     event.preventDefault();
//     if (password != confirmPass) {
//       setError("Password mismatch.");
//       return;
//     }
//     createUserWithEmailAndPassword(email, password);
//     sendEmailVerification = true;
//   };

//   return (
//     <div className="my-16 mx-auto">
//       <p>{error}</p>
//       <form
//         onSubmit={handleCreateUser}
//         className="border w-auto h-auto mx-auto"
//       >
//         <h1 className="mt-5"> Please register with your email </h1> <br />
//         <input
//           onBlur={handleNameBlur}
//           className="border-2 mb-2 p-1 w-80"
//           type="text"
//           placeholder="Name"
//         />
//         <br />
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
//           onBlur={handlePasswordBlur}
//           className="border-2 mb-2 p-1 w-80"
//           type="password"
//           placeholder="Password"
//         />
//         <br />
//         <input
//           required
//           onBlur={handleConfirmPassBlur}
//           className="border-2 mb-2 p-1 w-80"
//           type="password"
//           placeholder="Confirm password"
//         />
//         <br />
//         <input
//           className="bg-orange-500 mt-3 w-28 h-6 cursor-pointer"
//           type="submit"
//           value="Register"
//         />
//         <br />
//         <h6 className="my-5">
//           Already have an account?
//           <a href="/login" className="text-orange-400  ml-1 cursor-pointer">
//             Log in
//           </a>
//         </h6>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { verifyBeforeUpdateEmail } from "@firebase/auth";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMSG, setErrorMSG] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signin";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSignUplick = (event) => {
    event.preventDefault();
    if (password == confirmPass) {
      createUserWithEmailAndPassword(email, password);
      //set user role to customer
      // let user = { userEmail: email, userRole: "Customer" };

      console.log("email signup: ", email);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUser: email, userRole: "Customer" }),
      };

      fetch(
        "https://vehicle-parts-solution.herokuapp.com/set-userrole",
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => setResponse(data));
      if (response.success == true) {
        navigate(from, { replace: true });
      }
    } else {
      setErrorMSG("Password mismatch.");
      return;
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="py-20">
      <div
        className={`${
          error?.message ? "text-red-500 text-center mb-10" : "hidden"
        }`}
      >
        {error?.message}
      </div>
      <div className=" w-3/4 lg:w-1/2 mx-auto bg-gray-800 py-5 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-xl text-center mb-10">
          Sign up using email and password
        </h1>
        <form onSubmit={handleSignUplick} className="">
          <input
            onBlur={handleEmailBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            onBlur={handleEmailBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            onBlur={handlePasswordBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Password"
            placeholder="Password"
            required
          />
          <input
            onBlur={handleConfirmPassBlur}
            className="block rounded-lg mx-auto mb-6 w-full px-2"
            type="Password"
            placeholder="Re-Type Password"
            required
          />
          <input
            className="block mx-auto rounded-xl text-white bg-orange-500 px-8 py-1"
            type="submit"
            value="Sign Up"
          />
          <p className="text-white text-center mt-5 mb-2">
            Already have an account ?{" "}
            <a className="hover:text-orange-500" href="/login">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
