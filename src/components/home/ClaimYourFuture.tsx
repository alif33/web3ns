// In your parent component file
import React from "react"
import Image from "next/image"

const MyComponent1 = ({}) => {
  return (
    <div className="w-80 h-60 bg-white border border-gray-300 rounded-3xl p-4 flex flex-col justify-center items-center space-y-4">
      {/* Image at the top */}
      <img
        src="./landingPage/1-card.png" // Replace with your image URL
        alt="Descriptive alt text"
        className="w-24 h-24 object-cover rounded-full" // Adjust width, height, and rounding as needed
      />
      {/* Heading */}
      <h3 className="text-2xl md:text-lg  font-bold text-black">Own</h3>
      {/* Text below the heading */}
      <p className="text-base text-black">Own your Web3 namespace.</p>
    </div>
  );
};

const MyComponent2 = ({}) => {
  return (
    <div
      className="w-80 h-60 bg-white border border-gray-300 rounded-3xl p-4 flex flex-col justify-center items-center space-y-4 relative"
      style={{ backgroundImage: "linear-gradient(135deg, #486EB9, #D12865)" }}
    >
      {/* Image at the top */}
      <img
        src="./landingPage/2-card.png" // Replace with your image URL
        alt="Descriptive alt text"
        className="w-28 h-26 object-cover rounded-full" // Adjust width, height, and rounding as needed
      />
      {/* Heading */}
      <h3 className="text-2xl md:text-lg font-bold text-white">Secure</h3>
      {/* Text below the heading */}
      <p className="text-base text-white">Secure your private smart agent.</p>
      {/* Additional image in the bottom right */}
      <div className="absolute -bottom-10 -right-10 w-3/4 h-3/4">
        <img
          src="./landingPage/lock_big.svg" // Replace with your second image URL
          alt="Additional descriptive alt text"
          className="w-50 h-50 object-cover" // Adjust to cover the designated space
        />
      </div>
    </div>
  );
};

const MyComponent3 = ({}) => {
  return (
    <div className="w-80 h-60 bg-white border border-gray-300 rounded-3xl p-4 flex flex-col justify-center items-center space-y-4">
      {/* Image at the top */}
      <img
        src="./landingPage/3-card.png" // Replace with your image URL
        alt="Descriptive alt text"
        className="w-24 h-24 object-cover rounded-full" // Adjust width, height, and rounding as needed
      />
      {/* Heading */}
      <h3 className="text-2xl md:text-lg font-bold text-black">Earn</h3>
      {/* Text below the heading */}
      <p className="text-base text-black">Earn from your Data.</p>
    </div>
  );
};

const ClaimYourFuture = () => {
  return (
    <div className="bg-white relative mt-24">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#333333]">
          Claim your future today
        </h1>
        <p className="text-sm text-center mt-2 mb-8">
          3NS.ai  your gateway to not being left behind.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 w-full md:items-stretch space-y-5 md:space-y-0 items-center">
          <MyComponent1 />
          <MyComponent2 />
          <MyComponent3 />
        </div>
      </div>
      <img
        src="./landingPage/Glass_sphere.svg" // Replace with your image URL
        alt="Descriptive alt text"
        className="absolute -top-20 right-40  w-40 h-40 hidden lg:flex" // Adjust width, height, and rounding as needed
      />
    </div>
  );
};
/* Glass_sphere.svg */
export default ClaimYourFuture;
