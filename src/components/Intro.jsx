const Intro = () => {
  return ( 
    <div className="bg-base-100 w-full text-base-content scroll-smooth">
      <div className="w-full">
        <div id="intro" className="intro flex flex-col-reverse md:flex-row items-center justify-center gap-1 md:gap-8 py-12">
          <div className="intro-text md:w-1/2 text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold mb-4 leading-tight">
              Hi, I am
              <span className="block text-orange-500">Withman S.</span>
              <span className="block">I create solutions that make life easier through code.</span>
            </h1>
          </div>
          <div className="intro-image md:w-1/2 flex justify-end mb-4 md:mb-0">
            <img
              src="/src/assets/iwithman.jpg"
              alt="Withman profile"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Intro;