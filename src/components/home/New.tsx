import React from "react"
import Image from "next/image"

const New = () => {
  return (
    <div className="relative bg-white">
      <div className="hidden md:block absolute top-0 right-0">
        <Image
          width={200}
          height={300}
          src="/landingPage/right-dots.svg"
          alt="Art"
        />
      </div>
      <div className="bg-[url('/landingPage/bg-new.png')] bg-opacity-75 md:bg-opacity-100 bg-custom-bg bg-no-repeat bg-cover inset-0 w-50 h-50">
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#333333]">
            Secure a 
              <span className="relative text-black">
                <div className="absolute -top-3 left-1">
                  <Image
                    width={216}
                    height={89}
                    src="/landingPage/circle.svg"
                    alt=""

                  />
                </div>
                <span> valuable </span>
              </span> 
            Web3 domain space
          </h1>
          <p className="text-sm md:text-md text-center mt-2 pb-6 text-[#333333]">
            Don’t miss out on registering a domain space for your Ai Agent
            today. <br className="hidden md:block"/>
            Secure a brand name(“apple”, “tesla”...) or just your own
            name(“John”, “Jane”...) could be hugely valuable.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center mx-20">
            <Image
              width={950}
              height={690}
              src="/landingPage/3grid.png"
              alt="3 grid images"
            />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex flex-col items-center">
            <Image
              width={312}
              height={312}
              src="/landingPage/first-single.png"
              alt="3 grid images"
            />
            <Image
              width={312}
              height={312}
              src="/landingPage/second-single.png"
              alt="3 grid images"
            />
            <Image
              width={312}
              height={312}
              src="/landingPage/third-single.png"
              alt="3 grid images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
/* Glass_sphere.svg */
export default New;
