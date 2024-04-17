// In your parent component file
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white py-12">
      {/* Background Image Container */}
      <div className="absolute  top-2  w-full h-full md:bg-[url('/world.png')] bg-no-repeat bg-center bg-cover z-0"></div>

      <div className="container mx-auto px-5">
        {/* Top Horizontal Line */}
        <div className="border-2 border-gray-200"></div>

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center space-y-8 md:space-y-0 my-8 ">
          {/* Left Half: Secure Your Space Text */}
          <div className="w-1/2 flex justify-start">
            <div className="w-3/4">
              <p className="montserrat text-black font-extrabold text-4xl" >
                Secure your web3 domain space now{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#486EB9] to-[#D12865]">
                  before it's too late.
                </span>
              </p>
            </div>
          </div>

          {/* Right Half: Platform and Social Links */}
          <div className="w-1/2 flex md:justify-end relative">
            <div className="flex justify-between">
              <div className="flex flex-col w-full md:flex-row justify-between space-x-0 md:space-x-20 space-y-8 md:space-y-0">
                {/*   <!-- Platform --> */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="montserrat text-2xl font-bold text-black capitalize mb-5">
                    <h3>Platform</h3>
                  </div>
                  <div className="flex flex-col items-center md:items-start space-y-3" style={{ fontFamily: 'Inter, sans-serif' , fontWeight: "500"}}>
                    {/*   <!-- Links --> */}
                    <a
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      3token
                    </a>
                    <a
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      Search
                    </a>
                    <a
                      href="#"
                      className="capitalize text-grayishViolet hover:text-cyan"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                {/*    <!-- Social Container --> */}
                <div className="flex flex-col items-center">
                  <div className="montserrat text-2xl font-bold text-black capitalize mb-5 ">
                    <h3>
                      Community
                    </h3>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    {/* Row 1 */}
                    <div className="flex justify-start space-x-4">
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/XSVG.svg"
                          alt="X"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/discordSVG.svg"
                          alt="Discord"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/linkedinSVG.svg"
                          alt="Linkedin"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                    </div>
                    {/* Row 2 */}
                    <div className="flex justify-start space-x-4">
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/telegramSVG.svg"
                          alt="Telegram"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/facebookSVG.svg"
                          alt="Facebook"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/whatsappSVG.svg"
                          alt="Whatsapp"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                    </div>
                    {/* Row 3 */}
                    <div className="flex justify-start space-x-4">
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/tiktokSVG.svg"
                          alt="Tiktok"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/youtubeSVG.svg"
                          alt="Youtube"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                      <a href="#">
                        <Image
                          src="landingpage/socialIcons/instagramSVG.svg"
                          alt="Instagram"
                          width={20}
                          height={20}
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="border-2 border-gray-200 my-12"></div>

        {/* Terms, Policy, and Copyright */}
        {/* Copyright and Terms */}
        <div className="mt-10 flex justify-between items-center px-10">
          <div className="text-sm  text-black flex flex-start" style={{ fontFamily: 'Inter, sans-serif' , fontWeight: "600"}}>
            <span className="mr-2">All Rights Reserved: </span>
            <div>
              <a href="#" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Terms 
              </a>
              {" "}
              | 
              {" "}
              <a href="#" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Policy
              </a>
            </div>
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: "600" }}>Copyright &copy; 2024 3ns.ai</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
