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
    <nav className="bg-amber-500 md:flex items-center">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon> </XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <h1 className="font-extrabold">Charlies Studio</h1>
      <ul
        className={`md:flex justify-between md:static md:px-40 absolute bg-amber-500 w-full duration-500 ease-in ${
          open ? "top-6" : "top-[-200px]"
        }`}
      >
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="/service-section"> Service Section </a>
        </li>
        <li>
          <a href="/blog"> Blog </a>
        </li>
        <li>
          <a href="/about"> About </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
