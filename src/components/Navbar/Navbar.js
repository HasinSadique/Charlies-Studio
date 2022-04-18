import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const Navbar = () => {
  const { user, handelSignOut } = useFirebase();
  // console.log(user.id);

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
          <a href="/about"> About </a>
        </li>
      </ul>
      {user?.uid ? (
        <button className="ml-auto mr-10" onClick={handelSignOut}>
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
