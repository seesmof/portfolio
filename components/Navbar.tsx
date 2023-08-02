import Link from "next/link";
import React from "react";

const LinkStyles = ``;

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2 p-4">
          <Link className="font-medium" href="/">
            versions
          </Link>
          <Link className="font-medium" href="/">
            github
          </Link>
          <Link className="font-medium" href="/"></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
