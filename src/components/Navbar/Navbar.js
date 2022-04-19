import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="flex justify-center items-center bg-black text-white w-full ">
      <ul className="flex justify-center px-16 py-3">
        <li className="hover:text-red-400 mr-10 lg:mr-16">
          <a href="/"> Home </a>
        </li>
        <li className="hover:text-red-400 mr-10 lg:mr-16">
          <a href="/blog"> Blog </a>
        </li>
        <li className="hover:text-red-400 mr-10 lg:mr-16">
          <a href="/checkout"> Check Out </a>
        </li>
        <li className="hover:text-red-400 mr-10 lg:mr-16">
          <a href="/about"> About </a>
        </li>
      </ul>
      {user?.uid ? (
        <button className="ml-auto mr-10" onClick={() => signOut(auth)}>
          Log out
        </button>
      ) : (
        <ul className="flex ml-auto">
          <li className="list-none ml-auto mr-10">
            <a className="hover:text-red-400" href="/register">
              Register
            </a>
          </li>
          <li className="list-none mr-10">
            <a className="hover:text-red-400" href="/login">
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
