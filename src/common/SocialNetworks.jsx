import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const SocialNetworks = ({ isNavBar }) => {
  return (
    <>
      <a
        href="https://github.com/iwithman"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/withman-s-15a74615b"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition-colors"
      >
        <FaLinkedin />
      </a>
      {
        isNavBar ? (
          <a
            href="https://wsp.iwithman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaGlobe />
          </a>
        ) : (
          <a
            href="mailto:withman.simprevil@gmail.com"
            className="hover:text-orange-400 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        )
      }
    </>
  );
};

export default SocialNetworks;
