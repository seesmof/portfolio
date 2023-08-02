import Link from "next/link";
import React from "react";

const LinkStyles = `font-medium hover:underline underline-offset-4`;

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 md:gap-6 p-4">
        <Link className={LinkStyles} href="/">
          older versions
        </Link>
        <Link className={LinkStyles} href="/">
          github page
        </Link>
        <Link className={LinkStyles} href="/">
          other projects
        </Link>
      </div>
    </>
  );
};

export default Navbar;
