// Footer.jsx
import React from "react";
import fb from './assets/iconfb.png';
import insta from './assets/iconinsta.png';
import twitter from './assets/icontwitter.png';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#A48D7B] py-10">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
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
              className="w-8 h-8 flex items-center justify-center rounded bg-white text-[#480A07] "
            >
                <img src={fb} alt="" className="text-[#480A07]" />
              
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded bg-white text-[#480A07] "
            >
                <img src={insta} alt="" className="text-[#480A07]" />
              
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded bg-white text-[#480A07] "
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
  );
};

export default Footer;
