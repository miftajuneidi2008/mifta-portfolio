import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-20 w-full">
      <nav className="mx-auto flex h-full max-w-7xl items-center">
        <Link href={`/`} className="text-2xl font-bold md:text-3xl bg-linear-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
          Mifta Dev.
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
