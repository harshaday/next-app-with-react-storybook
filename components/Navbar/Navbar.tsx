import React from "react";
import Link from "next/link";
import HeaderWrapper from "./Navbar.styled";

const Navbar = () => {
  return (
    <HeaderWrapper>
      <div className="navHeader">
        <a className="brand">Sky</a>
        <nav>
          <ul className="navWrapper">
            <li className="navItem">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/posts">
                <a>Sky Packages</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Navbar;
