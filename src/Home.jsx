import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import img1 from "./assets/v01.jpg";
import img2 from "./assets/v02.jpg";
import img3 from "./assets/v03.jpg";
import img4 from "./assets/v05.jpg";
import img5 from "./assets/v06.jpg";
import bayfrontLogo from "./assets/logobayfront.png";
import logo from "./assets/logo.png";
import image from "./assets/image.png";
import whatsapp from "./assets/wa.png";
import fb from './assets/iconfb.png';
import insta from './assets/iconinsta.png';
import twitter from './assets/icontwitter.png';
import section3 from "./assets/section3.webp";
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
    <>
    <div className={`relative w-full ${isScrollable ? "overflow-y-auto" : "h-screen overflow-hidden"} overflow-x-hidden`}>
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

{/* Hero Section - Large Screens Only */}
<section
  ref={heroSectionRef}
  className={`relative w-full hidden sm:hidden md:hidden lg:block ${
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
      <h1 className="text-[171px] font-ivy ml-[-6px] md:text-9xl">BAYFRONT</h1>
      <h2 className="mt-4 text-[36px] font-ivy text-white md:text-2xl">
        First public beach experience <br /> in Eastern Province
      </h2>
      <p className="mt-4 font-foco text-[17px] font-light leading-relaxed text-gray-200">
        An Almuhaidib Group (AMG) and Ajdan partnership project, BAYFRONT is a
        world-class seafront transformation that is creating waves as an
        avant-garde premium destination for Saudi Arabia&apos;s East Coast.
      </p>

      {/* Button */}
      <button className="inline-flex items-center gap-2 mt-2 font-foco font-bold text-[17px] text-white pointer-events-auto">
        <img src={whatsapp} alt="whatsapp" />
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
    <img src={bayfrontLogo} alt="Bayfront Logo" className="object-contain w-auto h-12" />
    <div className="w-[2px] h-8 bg-gray-300"></div>
    <img src={logo} alt="Logo" className="object-contain w-auto h-12" />
  </div>

  {/* Thumbnails with Carousel Dots */}
  <div className="absolute z-30 pointer-events-auto bottom-4 right-4">
    <div className="flex gap-2">
      {images.slice(0, 4).map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={(e) => handleThumbClick(img, e, i)}
          className="object-cover h-24 w-36 transition border border-white cursor-pointer hover:scale-105"
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


{/* Hero Section - Small & Medium Screens */}
<section
  ref={heroSectionRef}
  className={`relative w-full block lg:hidden ${
    isScrollable ? "h-screen sticky top-0" : "fixed h-screen"
  }`}
  onClick={unlockScroll}
>
  {/* Background with Full Overlay */}
  <div
    className={`absolute inset-0 bg-cover bg-center transition-all duration-300`}
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Full Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content Centered */}
  <div className="relative z-20 flex flex-col justify-start pt-12 items-center text-center text-white px-6 h-full md:h-auto">
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-ivy font-bold">BAYFRONT</h1>
    <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-ivy text-white">
      First public beach experience <br /> in Eastern Province
    </h2>
    <p className="mt-4 font-foco text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-md">
      An Almuhaidib Group (AMG) and Ajdan partnership project, BAYFRONT is a
      world-class seafront transformation that is creating waves as an avant-garde premium destination for Saudi Arabia&apos;s East Coast.
    </p>

    {/* Button */}
    <button className="inline-flex items-center gap-2 mt-4 font-foco font-bold text-base sm:text-lg text-white ">
      <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
      Speak to our agents today
    </button>
  </div>

  {/* Logos above thumbnails */}
  <div className="absolute bottom-44 left-0 w-full flex justify-center gap-6 items-center px-6 z-30">
    <img src={bayfrontLogo} alt="Bayfront Logo" className="h-8 sm:h-10" />
    <div className="w-[2px] h-6 bg-gray-300"></div>
    <img src={logo} alt="Logo" className="h-8 sm:h-10" />
  </div>

  {/* Thumbnails with Carousel Dots */}
  <div className="absolute z-30 pointer-events-auto bottom-4 right-4">
    <div className="flex gap-2">
      {images.slice(0, 4).map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={(e) => handleThumbClick(img, e, i)}
          className="object-cover h-16 w-24 transition border border-white cursor-pointer hover:scale-105 sm:h-20 sm:w-28 md:h-24 md:w-36"
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
<div className="text-center py-8 px-4">
  <h1 className="text-3xl sm:text-5xl md:text-7xl mb-4 font-ivy">
    A Curated Coastal Escape Like No Other
  </h1>
  <p className="text-base sm:text-lg md:text-xl leading-relaxed font-foco text-gray-800 max-w-4xl mx-auto">
    Bayfront aims to transform AL Khobar into one of the leading 100 cities worldwide in line with the Saudi 
Vision 2030. The Blue Flag requirements include global technical and environmental standards that 
complement the Kingdom’s regard for safety measures, while promoting tourism.
  </p>
  <button className="border px-4 mt-10 text-[#480A07] border-[#480A07] py-2">
    Download Broucher
  </button>
</div>
{/* SECTION-3 */}
<div className="relative w-full h-auto">
  {/* Background image */}
  <img
    src={section3}
    alt="Land area"
    className="object-cover w-full h-full"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  {/* Overlay text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl 2xl:text-[60px] font-foco font-light tracking-widest uppercase">
      TOTAL LAND AREA
    </h2>

    <h1 className="mt-2 text-5xl sm:text-7xl md:text-[150px] xl:text-[200px] 2xl:text-[256px] font-light font-ivy">
      100K+1,6K
    </h1>

    <p className="mt-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[85px] font-foco font-light tracking-wider">
      SQM
    </p>
  </div>
</div>



{/* SECTION 4 */}
<div className="bg-[#8b7261] w-full py-8 sm:py-10 md:py-12 lg:py-16">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    {/* Left Content (1/3 width) */}
    <div className="text-white md:col-span-1 text-center md:text-left">
      <p className="
        text-base 
        sm:text-lg 
        md:text-xl 
        lg:text-[22px] 
        xl:text-[24px] 
        2xl:text-[24px] 
        font-foco font-light leading-relaxed
      ">
        An Almuhaidib Group (AMG) and Ajdan partnership project, BAYFRONT is a
        world-class seafront transformation that is creating waves as an
        avant-garde premium destination for Saudi Arabia&apos;s East Coast.
        Cutting edge architecture, unobstructed sea views, creative placemaking
        and top of the line amenities align to serve a perfectly curated and
        unprecedented luxury lifestyle offering.
      </p>

      {/* Button */}
      <button className="
        mt-4 sm:mt-5 md:mt-6 lg:mt-8 
        px-4 sm:px-5 md:px-6 lg:px-8 
        py-2 sm:py-2.5 md:py-3 
        border border-white text-white 
        hover:bg-white hover:text-[#8B7261] transition
      ">
        Enquire Now
      </button>
    </div>

    {/* Right Image (2/3 width) */}
    <div className="md:col-span-2">
      <img
        src={image} // replace with your image import
        alt="Bayfront"
        className="
          w-full 
          h-[240px] sm:h-[300px] md:h-[400px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]
          object-cover
        "
      />
    </div>
  </div>
</div>


  
{/* Footer section */}
   <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#8b7261] py-10">
        <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Left Logo */}
          <div className="md:col-span-1 flex flex-col">
            <h2 className="text-3xl font-bold text-white font-ivy">BAYFRONT</h2>
            <p className="mt-16 text-white font-ivy font-semibold">BY AJDAN</p>
          </div>

          {/* Location */}
          <div className="text-white">
            <h3 className="font-semibold uppercase mb-3">Location</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, <br />
              consectetuer adipiscing elit, <br />
              sed diam
            </p>
          </div>

          {/* About Us */}
          <div className="text-white">
            <h3 className="font-semibold uppercase mb-3">About Us</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, <br />
              consectetuer adipiscing elit, <br />
              sed diam
            </p>
          </div>

          {/* Featured Listings */}
          <div className="text-white">
            <h3 className="font-semibold uppercase mb-3">Featured Listings</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, <br />
              consectetuer adipiscing elit, <br />
              sed diam
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-start md:justify-end space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center  text-[#480A07] "
            >
                <img src={fb} alt="" className="text-[#480A07]" />
              
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-[#480A07] "
            >
                <img src={insta} alt="" className="text-[#480A07]" />
              
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-[#480A07] "
            >
                <img src={twitter} alt="" className="text-[#480A07]" />
              
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#6A4F3D] py-4">
        <p className="text-center text-sm text-white uppercase tracking-wider">
          Terms and Conditions | Privacy Policy
        </p>
      </div>
    </footer>
      </div>
      
    </div>
  
    </>
  );
};

export default Bayfront;