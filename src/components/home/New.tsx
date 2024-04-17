// In your parent component file
import React from "react"
import Image from "next/image"

const MyComponent1 = ({}) => {
  return (
    <div className="w-80 h-60 bg-white border border-gray-300 rounded-3xl p-4 flex flex-col justify-center items-center space-y-4">
      {/* Image at the top */}
      <img
        src="puzzle-dynamic-color.svg" // Replace with your image URL
        alt="Descriptive alt text"
        className="w-24 h-24 object-cover rounded-full" // Adjust width, height, and rounding as needed
      />
      {/* Heading */}
      <h3 className="text-lg font-bold text-black">Own</h3>
      {/* Text below the heading */}
      <p className="text-base text-black">Own your Web3 namespace.</p>
    </div>
  );
};

const New = () => {
  return (
    <div className="bg-white ">
      <div className="bg-[url('/landingPage/bg-new.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 w-50 h-50">
        <div className="flex flex-col items-center justify-center pt-32">
          <h1 className="text-4xl font-bold text-center text-[#333333]">
            Secure a valuable Web3 domain space
          </h1>
          <p className="text-md text-center mt-2 pb-20 text-[#333333]">
            Don’t miss out on registering a domain space for your Ai Agent
            today. <br></br>
            Secure a brand name(“apple”, “tesla”...) or just your own
            name(“John”, “Jane”...) could be hugely valuable.
          </p>
        </div>
        <div className="flex justify-center mx-10">
          <Image
            width={1308}
            height={952}
            src="/landingPage/3grid.png"
            alt="3 grid images"
          />
        </div>

      </div>
    </div>
  );
};
/* Glass_sphere.svg */
export default New;
