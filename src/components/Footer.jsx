import SocialNetworks from "../common/SocialNetworks";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center gap-4">
          <div className="md:w-1/2 md:text-left">
            <p className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
              <img src="/iw.svg" alt="Logo" className="w-10 h-10" />
            </p>
          </div>

          <div className="flex justify-end items-center md:w-1/2  mb-4 md:mb-0 gap-4 mt-2 text-xl">
             <a
              href="tel:9549007530"
              className="hover:text-orange-400 transition-colors hidden md:block text-sm"
            >
              954-900-7530
            </a>
            <a
              href="mailto:withman.simprevil@gmail.com"
              className="hover:text-orange-400 transition-colors text-xs md:text-sm"
            >
              Withman.Simprevil@gmail.com
            </a>
            
            <SocialNetworks />
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} iWithman - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
