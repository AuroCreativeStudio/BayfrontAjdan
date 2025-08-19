import React, { useState, useEffect, useRef } from "react";
import img1 from "./assets/v01.jpg";
import img2 from "./assets/v02.jpg";
import img3 from "./assets/v03.jpg";
import img4 from "./assets/v05.jpg";
import img5 from "./assets/v06.jpg";
import bayfrontLogo from "./assets/logobayfront.png";
import logo from "./assets/logo.png";
import image from "./assets/image.png";
const images = [img1, img2, img3, img4, img5];

const Bayfront = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [showMiniForm, setShowMiniForm] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const heroSectionRef = useRef(null);
  const contentSectionRef = useRef(null);

  const handleThumbClick = (img, e, index) => {
    e.stopPropagation();
    setBgImage(img);
    setCurrentThumbnailIndex(index);
  };

  const unlockScroll = () => {
    setIsScrollable(true);
    setTimeout(() => {
      contentSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowFullForm(true);
    setShowMiniForm(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full ${isScrollable ? "overflow-y-auto" : "h-screen overflow-hidden"}`}>
      {/* Enquire Button */}
      <div
        className="fixed right-[-55px] top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-1 text-md rotate-90 cursor-pointer z-50"
        onMouseEnter={() => setShowMiniForm(true)}
        onMouseLeave={() => setShowMiniForm(false)}
        onClick={handleFormClick}
      >
        ENQUIRE NOW
      </div>

      {/* Mini Form on Hover */}
      {showMiniForm && !showFullForm && (
        <div 
          className="fixed z-50 w-48 p-3 transform -translate-y-1/2 bg-white shadow-md left-12 top-1/2"
          onMouseEnter={() => setShowMiniForm(true)}
          onMouseLeave={() => setShowMiniForm(false)}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="mb-2 text-lg font-bold text-black">Quick Enquiry</h2>
          <input
            className="w-full p-1 mb-2 text-xs border"
            placeholder="Name"
            onClick={(e) => e.stopPropagation()}
          />
          <input
            className="w-full p-1 mb-2 text-xs border"
            placeholder="Email"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="w-full px-3 py-1 mt-2 text-xs text-white bg-orange-500"
            onClick={(e) => {
              e.stopPropagation();
              setShowFullForm(true);
              setShowMiniForm(false);
            }}
          >
            Continue
          </button>
        </div>
      )}

{/* Hero Section */}
<section
  ref={heroSectionRef}
  className={`relative w-full ${
    isScrollable ? "h-screen sticky top-0" : "fixed h-screen"
  }`}
  onClick={unlockScroll}
>
  {/* Background */}
  <div
    className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${
      showFullForm ? "backdrop-blur-md" : ""
    }`}
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>

  {/* Left Overlay Content Box */}
  <div className="absolute top-0 left-0 h-[450px] ml-6 w-full md:w-[25%] bg-black/60 p-8 flex flex-col justify-between text-white z-20">
    <div>
      <h1 className="text-6xl font-ivy ml-[-6px] md:text-9xl">BAYFRONT</h1>
      <h2 className="mt-4 text-xl font-ivy text-white md:text-2xl">
        First public beach experience <br /> in Eastern Province
      </h2>
      <p className="mt-4 font-foco text-sm leading-relaxed text-gray-200">
        An Almuhaidib Group (AMG) and Ajdan partnership project, BAYFRONT is a
        world-class seafront transformation that is creating waves as an
        avant-garde premium destination for Saudi Arabia&apos;s East Coast.
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2  mt-2 font-medium text-white pointer-events-auto ">
       <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5"
  viewBox="0 0 32 32"
  fill="currentColor"
>
  <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.653.875 5.102 2.362 7.083L4 29l7.121-2.313A11.946 11.946 0 0016.003 27C22.633 27 28 21.627 28 15.003 28 8.373 22.633 3 16.003 3zm0 21.818a9.774 9.774 0 01-5.003-1.373l-.36-.214-3.963 1.289 1.296-3.844-.235-.374A9.747 9.747 0 016.182 15c0-5.43 4.392-9.818 9.821-9.818 5.427 0 9.818 4.388 9.818 9.818 0 5.429-4.391 9.818-9.818 9.818zm5.362-7.301c-.294-.147-1.74-.86-2.011-.958-.27-.099-.468-.148-.665.147-.197.294-.764.958-.936 1.155-.173.197-.345.222-.64.074-.294-.147-1.242-.458-2.367-1.458-.875-.78-1.465-1.74-1.637-2.034-.173-.294-.018-.453.13-.6.134-.134.294-.345.442-.517.148-.173.197-.296.296-.493.099-.197.05-.37-.025-.517-.074-.147-.665-1.602-.91-2.194-.24-.576-.484-.498-.665-.507-.173-.009-.37-.011-.567-.011s-.517.074-.788.37c-.27.294-1.04 1.016-1.04 2.478s1.065 2.876 1.213 3.074c.148.197 2.096 3.202 5.082 4.489.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.74-.71 1.986-1.396.246-.687.246-1.276.172-1.396-.074-.118-.27-.196-.563-.343z"/>
</svg>

        Speak to our agents today
      </button>
    </div>
  </div>
  
<div className="absolute top-12 right-[-12px] z-30 flex flex-col items-center space-y-8 font-ivy text-white text-sm">
  {/* Instagram */}
  <a href="#" className="hover:text-gray-300 rotate-90 origin-center">
    Instagram
  </a>

  {/* Dot Divider */}
  <div className="w-1 h-1 rounded-full bg-white"></div>

  {/* Facebook */}
  <a href="#" className="hover:text-gray-300 rotate-90 origin-center">
    Facebook
  </a>

</div>

{/* Bottom Left Logos with Divider */}
<div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent to-black/80 flex items-center px-12 gap-6">
  {/* First Logo */}
  <img
    src={bayfrontLogo}
    alt="Bayfront Logo"
    className="object-contain w-auto h-12"
  />

  {/* Divider */}
  <div className="w-[2px] h-8 bg-gray-300"></div>

  {/* Second Logo */}
  <img
    src={logo}
    alt="Logo"
    className="object-contain w-auto h-12"
  />
</div>

{/* Thumbnails with Carousel Dots */}
<div className="fixed z-30 pointer-events-auto bottom-4 right-4">
  {/* Thumbnails row */}
  <div className="flex gap-2">
    {images.slice(0, 4).map((img, i) => (
      <img
        key={i}
        src={img}
        onClick={(e) => handleThumbClick(img, e, i)}
        className="object-cover h-24 transition border border-white cursor-pointer w-36 hover:scale-105"
        alt={`Thumbnail ${i}`}
      />
    ))}
  </div>

  {/* Carousel dots indicator */}
  <div className="flex justify-start gap-2 mt-2">
    {images.slice(0, 4).map((_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full transition ${
          i === currentThumbnailIndex ? "bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</div>
</section>



      {/* Content Below Hero Section */}
      <div 
        ref={contentSectionRef}
        className={`relative z-20 bg-white ${isScrollable ? "block" : "hidden"}`}
      >
        {/* Full Enquiry Form */}
        {showFullForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className="absolute inset-0 backdrop-blur-sm bg-black/50"
              onClick={() => setShowFullForm(false)}
            ></div>
            
            <div 
              className="bg-white p-6 w-96 max-w-[90%] relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFullForm(false)}
                className="absolute text-xl text-black top-2 right-2"
              >
                ×
              </button>
              <h2 className="mb-4 text-lg font-bold text-black">Enquiry Form</h2>
              <input
                className="w-full p-2 mb-3 text-sm border"
                placeholder="Name"
              />
              <input
                className="w-full p-2 mb-3 text-sm border"
                placeholder="Email"
              />
              <textarea
                className="w-full p-2 text-sm border"
                placeholder="Message"
              />
              <button className="w-full px-4 py-2 mt-3 text-sm text-white bg-orange-500">
                Submit
              </button>
            </div>
          </div>
        )}

       {/* SECTION-2 */}

<div className="text-center py-8 ">
  <h1 className=" text-7xl mb-4 font-ivy">
    A Curated Coastal Escape Like No Other
  </h1>
  <p className="text-xl leading-relaxed font-foco text-gray-800 max-w-4xl mx-auto">
    Bayfront aims to transform AL Khobar into one of the leading 100 cities worldwide in line with the Saudi 
Vision 2030. The Blue Flag requirements include global technical and environmental standards that 
complement the Kingdom’s regard for safety measures, while promoting tourism.
  </p>
  <button className="border px-4 mt-10 border text-[#480A07] border-[#480A07] py-2">Download Broucher</button>
</div>


       {/* SECTION-3 */}

 <div className="relative w-full h-auto">
  {/* Background image */}
  <img
    src={img3}
    alt="Land area"
    className="object-cover w-full h-full"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  {/* Overlay text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h2 className="text-2xl md:text-3xl tracking-widest uppercase">
      TOTAL LAND AREA
    </h2>

    <h1 className="mt-2 text-8xl md:text-[200px] font-light">
      100K+1,6K
    </h1>

    <p className="mt-2 text-2xl md:text-4xl tracking-wider">
      SQM
    </p>
  </div>
</div>



        {/* SECTION 4 - Staggered 4-Column Gallery */}
   <div className="bg-[#8B7261] w-full py-12 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    
    {/* Left Content (smaller) */}
    <div className="text-white md:col-span-5">
      <p className="text-lg font-foco leading-relaxed">
        An Almuhaidib Group (AMG) and Ajdan partnership project, BAYFRONT is a
        world-class seafront transformation that is creating waves as an
        avant-garde premium destination for Saudi Arabia&apos;s East Coast.
        Cutting edge architecture, unobstructed sea views, creative placemaking
        and top of the line amenities align to serve a perfectly curated and
        unprecedented luxury lifestyle offering.
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-[#8B7261] transition">
        Enquire Now
      </button>
    </div>

    {/* Right Image (larger) */}
    <div className="md:col-span-7">
      <img
        src={image} // replace with your image import
        alt="Bayfront"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>
  
  {/* SECTION 5 */}
    <main className="bg-white grid justify-items-center [align-items:start] w-screen">
      <section className="bg-white w-full h-full">
        <div className="relative h-full top-12px">
          <div className="absolute w-[1920px] h-[1331px] top-3 left-0">
            {/* Rectangle image */}
            <div className="absolute w-[396px] h-[507px] top-[167px] left-0">
              <img
                className="absolute w-[396px] h-[507px] top-0 left-0"
                alt="Bayfront beach resort view"
                src={img1}
              />
            </div>

            {/* ClipPath image */}
            <img
              className="absolute w-[373px] h-[383px] top-[668px] left-[1547px]"
              alt="Bayfront resort aerial view"
              src={img2}
            />

            {/* Normal image */}
            <img
              className="absolute w-[394px] h-80 top-[1010px] left-[520px]"
              alt="Bayfront beach facilities"
              src={img3}
            />

            {/* Rectangle2 */}
            <img
              className="absolute w-[494px] h-[564px] top-0 left-[352px]"
              alt="Bayfront resort interior design"
              src={img4}
            />

            {/* Rectangle4 */}
            <img
              className="absolute w-[536px] h-[437px] top-[306px] left-[1279px]"
              alt="Bayfront beachfront view"
              src={img5}
            />

            {/* Rectangle5 */}
            <img
              className="absolute w-[753px] h-[476px] top-[765px] left-[868px]"
              alt="Bayfront resort amenities"
              src={img1}
            />

            {/* Rectangle6 */}
            <img
              className="absolute w-[696px] h-[494px] top-[586px] left-[149px]"
              alt="Bayfront shoreline experience"
              src={img2}
            />
          </div>

          {/* Text block */}
          <article className="absolute w-[507px] h-[294px] top-0 left-[1296px] mix-blend-multiply opacity-[0.88]">
            <p className="absolute top-[35px] left-0 font-light text-[#977d68] text-[28.3px] tracking-[1.91px] leading-[34px]">
              Bayfront brings forward the
              <br />
              beach experience the way it is
              <br />
              meant to be experienced.
              <br />
              Fronting the beautiful Khobar
              <br />
              shoreline, the beach at Bayfront
              <br />
              falls within a holistic environment
              <br />
              where visitors have access to the
              <br />
              finest facilities.
            </p>
          </article>

          {/* Rectangle3 positioned */}
          <img
            className="absolute w-[387px] h-[583px] top-[172px] left-[868px]"
            alt="Bayfront resort landscape"
            src={img1}
          />
        </div>
      </section>
    </main>
  

      </div>
    </div>
  );
};

export default Bayfront;