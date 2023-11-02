import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full shrink-0  z-10">
      <nav
        className="max-w-[1440px] mx-auto flex
        justify-between items-centre md:px-16 sm:px-10 px-6 py-6 shrink-0"
      >
        <Link href="/" className="flex justify-center items-center shrink-0">
          <Image
            src="./logo-no-background.svg"
            alt="logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="justify-between w-1/2 lg:w-1/3 flex items-center">
          <Link
            href="/"
            className="hover:text-red-600 text-gray-800 font-semibold "
          >
            Compare
          </Link>

          <Link
            href="/"
            className="hover:text-red-600 text-gray-800 font-semibold "
          >
            Bookmarks
          </Link>

          <Link
            href="/"
            className="hover:text-red-600 text-gray-800 font-semibold "
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
