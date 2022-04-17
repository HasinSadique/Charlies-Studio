import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "Service Section", link: "/service-section" },
    { id: 5, name: "About", link: "/about" },
  ];
  return (
    <nav className=" absolute text-white bg-transparent w-full ">
      <ul className="flex justify-center px-16 py-3">
        <li className="mr-10 lg:mr-16">
          <a href="/"> Home </a>
        </li>
        <li className="mr-10 lg:mr-16">
          <a href="/blog"> Blog </a>
        </li>
        <li className="mr-10 lg:mr-16">
          <a href="/about"> About </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
