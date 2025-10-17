import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-base-100 text-gray-500 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="navbar mx-auto px-4">
        <div className="navbar-start">
          <HashLink
              smooth
              to="/#home"
              className="text-orange-500 font-bold text-xl"
            >
              iWithman
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
              className="text-gray-500 hover:text-primary"
            >
              Home
            </HashLink>
            <Link to="/about" className="text-gray-500 hover:text-primary">
              About
            </Link>
            <HashLink
              smooth
              to="/#tech-stack"
              className="text-gray-500 hover:text-primary"
            >
              Tech Stack
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className="text-gray-500 hover:text-primary"
            >
              Projects
            </HashLink>
            <Link to="/contact" className="text-gray-500 hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/iwithman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/withman-s-15a74615b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wsp.iwithman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
