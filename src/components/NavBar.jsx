import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SocialNetworks from "../common/SocialNetworks";

const Navbar = () => {
  return (
    <div className="bg-base-100 card text-gray-500 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="navbar max-w-screen-lg mx-auto px-4">
        <div className="navbar-start">
          <HashLink smooth to="/#home" className="hidden md:inline-block">
            <img 
              src="/iw.svg" 
              alt="Logo" 
              className="w-10 h-10"
            />
          </HashLink>
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <HashLink smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <HashLink smooth to="/#tech-stack">
                  Tech Stack
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#projects">
                  Projects
                </HashLink>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 text-sm md:text-md">
            <HashLink
              smooth
              to="/#intro"
              className="text-gray-500 hover:text-orange-400"
            >
              Home
            </HashLink>
            <Link to="/about" className="text-gray-500 hover:text-orange-400">
              About
            </Link>
            <HashLink
              smooth
              to="/#tech-stack"
              className="text-gray-500 hover:text-orange-400"
            >
              Tech Stack
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className="text-gray-500 hover:text-orange-400"
            >
              Projects
            </HashLink>
            <Link to="/contact" className="text-gray-500 hover:text-orange-400">
              Contact
            </Link>
          </div>

          <div className="flex gap-4 text-xl">
            <SocialNetworks isNavBar={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
