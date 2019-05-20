import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import nolanLogo from "../images/logo-nolan.png";
import nolanBlackLogo from "../images/logo-nolan-black.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="z-40">
      {/* Desktop Nav */}
      <div className="invisible md:visible absolute bg-transparent flex flex-wrap items-center justify-between w-screen mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <img
            className="fill-current h-16 mr-2"
            src={nolanLogo}
            alt="Nolan Hill Logo"
          />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-md">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Meet Us
            </Link>
            <Link
              to="/#office"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="visible md:invisible fixed bg-white flex flex-wrap items-center justify-between w-screen mx-auto px-4 py-2 md:p-8 shadow-md">
        <Link to="/" className="flex items-center no-underline text-white">
          <img
            className="fill-current h-16 mr-2"
            src={nolanBlackLogo}
            alt="Nolan Hill logo"
          />
        </Link>

        <button
          className="block md:hidden border border-regal-blue flex items-center px-3 py-2 rounded text-regal-blue"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-lg mb-4">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-regal-blue"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-regal-blue"
            >
              Meet Us
            </Link>
            <Link
              to="/#office"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-regal-blue"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
