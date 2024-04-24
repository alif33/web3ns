// "use client"
import React from "react"
import Image from "next/image"
import Link from 'next/link'
import SearchBar from "./SearchBar"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

interface HeadingProps {
}

const Heading: React.FC<HeadingProps>  = () => {
  // const userState = useSelector((state: RootState) =>  state.user)

  return (
    <div className="flex-col">
      <div className="items-center py-4 px-3 md:px-12 bg-white">
        <div className="bg-gray-100 rounded-xl flex items-center border-2 border-grey-800 p-2 w-full">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="items-center mr-8">
              <Image src="/logo.svg" height={36} width={36} alt="logo" className="header-logo" />
            </a>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex-grow">
            <ul className="flex justify-end space-x-6 md:space-x-8">
              <li><a href="https://www.3token.xyz/" target="_blank" className="nav-link text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-500 px-0 md:px-4 py-1">3Token</a></li>
              <li><Link  href="/login" className="nav-link text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-500 px-0 md:px-4 py-1">Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sub-header with page title and search bar */}
      <div className="flex flex-col items-center justify-center my-12">
        <div className="px-10">
          <p className="text-center text-sm md:text-lg domain-registration-text">Register a domain space for your AI Agent</p>
          <h1 className="ClashDisplayBold text-center text-[42px] leading-[48px] md:text-5xl font-bold my-4">
            Web3 &nbsp; Smart &nbsp; Agent &nbsp; Names
          </h1>
        </div>
        
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
      <div className="hidden md:block">
        <Image
          height={300}
          width={1612}
          src="/nft.svg"
          alt="/Nft images"
        />
      </div>
      {/* NFT for mobile screen */}
      <div className="block md:hidden">
        <div className="flex justify-center">
          <Image
            height={300}
            width={1612}
            src="/landingPage/nfts.png"
            alt="/Nft images"
          />
        </div>
      </div>
    </div>
  );
}

export default Heading
