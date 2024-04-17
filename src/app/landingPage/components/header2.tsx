import React, { ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import Link from 'next/link';

interface HeadingProps {
  handleNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Heading: React.FC<HeadingProps>  = ({ handleNameInput }) => {
  return (
    <div className="flex-col">
      {/* Top bar with logo and menu items */}
      <div className="items-center py-4 px-12 bg-white">
        <div className="bg-gray-100 rounded-xl flex items-center border-2 border-grey-800 p-2 w-full">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="items-center mr-8">
              <Image src="/landingPage/head/logo.png" height={36} width={36} alt="logo" className="header-logo" />
            </a>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex-grow">
            <ul className="flex justify-end space-x-8">
              <li><Link href="/three-token" legacyBehavior><a className="nav-link cursor-pointer text-gray-600 hover:text-gray-500 px-4 py-1">Three Token</a></Link></li>
              <li><Link href="/login" legacyBehavior><a className="nav-link cursor-pointer text-gray-600 hover:text-gray-500 px-4 py-1">Login</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sub-header with page title and search bar */}
      <div className="flex flex-col items-center justify-center my-8 p-10">
        <p className="text-center text-lg domain-registration-text">Register a domain space for your AI Agent</p>
        <h1 className="text-4xl font-bold my-4">
          Web3 Smart Agent Names
        </h1>

        {/* Search Bar */}
        <div className="relative search-bar w-2/5">
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Search web3 domain"
            aria-label="Search content"
            className="w-full h-14 px-4 rounded-full shadow-inner"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: "600", boxShadow: "inset 0 0 5px #777777" }}
            onChange={handleNameInput}
          />
          <div onClick={()=>{}} className="absolute top-[6px] right-2 flex justify-center items-center w-12 h-12 rounded-full bg-[#2F75FF] shadow-md cursor-pointer">
            <Image
              width={18}
              height={18}
              src="/icons/search.svg"
              alt="search icon"
            />
          </div>
        </div>
        <div className="flex mt-5 gap-4">
            <Image
              width={198}
              height={100}
              src="/icons/icann.png"
              alt="brand icon"
            />
            <Image
              width={198}
              height={102}
              src="/icons/btc.png"
              alt="brand icon"
            />
            <Image
              width={176}
              height={104}
              src="/icons/farcaster.png"
              alt="brand icon"
            />
            <Image
              width={198}
              height={104}
              src="/icons/ens.png"
              alt="brand icon"
            />
        </div>
      </div>
    </div>
  );
}

export default Heading;
