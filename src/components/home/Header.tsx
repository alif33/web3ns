import React, { ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import Link from 'next/link';
import SearchBar from "./SearchBar";

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
              <Image src="/logo.svg" height={36} width={36} alt="logo" className="header-logo" />
            </a>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex-grow">
            <ul className="flex justify-end space-x-8">
              <li><a href="https://www.3token.xyz/" target="_blank" className="nav-link text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-500 px-4 py-1">3Token</a></li>
              <li><Link href="/login" legacyBehavior><a className="nav-link text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-500 px-4 py-1">Login</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sub-header with page title and search bar */}
      <div className="flex flex-col items-center justify-center my-8 p-10">
        <p className="text-center text-lg domain-registration-text">Register a domain space for your AI Agent</p>
        <h1 className="ClashDisplayBold text-5xl font-bold my-4">
          Web3 &nbsp; Smart &nbsp; Agent &nbsp; Names
        </h1>

        {/* Search Bar */}
        <SearchBar/>

        {/* Brands */}
        <div className="flex mt-7 gap-7">
          <div>
            <Image
                width={150}
                height={77}
                src="/icons/icann.png"
                alt="brand icon"
              />
          </div>
           <div>
            <Image
                width={150}
                height={77}
                src="/icons/btc.png"
                alt="brand icon"
              />
           </div>
            <div>
              <Image
                width={145}
                height={74}
                src="/icons/farcaster.png"
                alt="brand icon"
              />
            </div>
            <div>
              <Image
                width={150}
                height={78}
                src="/icons/ens.png"
                alt="brand icon"
              />
            </div>
        </div>
      </div>
      {/* Nft */}
      <div>
          <Image
            height={300}
            width={1612}
            src="/nft.svg"
            alt="/Nft images"
          />
        </div>
    </div>
  );
}

export default Heading;
