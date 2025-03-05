import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full items-center flex justify-between px-4 py-3 bg-white">
      <Link href="/" className="text-3xl font-extrabold tracking-wide ">
        LOGO
      </Link>
      <div className="space-x-3">
        <Link
          href="/upload"
          className="text-xl font-semibold tracking-wide bg-neutral-700 text-white rounded-2xl py-2 px-4"
        >
          Upload csv
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
