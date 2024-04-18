"use client"
import Image from "next/image"

const CheckOut = ()=>{

    const domains = [
        {name: "gagent-name", domainExtension: "btc", logo: "/checkout/btc.svg", age: "3 Years", category: "Bitcoin", price: 2333.33, sold: false},
        {name: "gagent-name", domainExtension: "xyz", logo: "/checkout/farcaster.svg", age: "3 Years", category: "Ethereum", price: 4333.33, sold: false},
        {name: "gagent-name", domainExtension: "lens.id", logo: "/checkout/lens.svg", age: "3 Years", category: "Polygon", price: 1333.33, sold: false},
        {name: "gagent-name", domainExtension: "eth", logo: "/checkout/ens.svg", age: "3 Years", category: "Ethereum", price: 1333.33, sold: false},
    ]

    const onName  = () => {

    }

    return(
        <div className="mx-40">
            <div>
                <h2 className="text-4xl font-black text-center">Claim your Web3 domain space before it’s gone</h2>
                <h5 className="text-lg text-center py-3">Own your unique Web3 space across multiple domain providers</h5>
            </div>
            {/* Search Box */}
            <div className="flex justify-center">
                <div className="relative search-bar w-[550px]">
                    <input
                        id="id-s03"
                        type="search"
                        name="id-s03"
                        placeholder="Search web3 domain"
                        aria-label="Search content"
                        className="w-full h-14 px-4 rounded-full shadow-inner"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: "600", boxShadow: "inset 0 0 5px #777777" }}
                        onChange={onName}
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
            </div>
            {/* Checkout Item */}
            <div>

            </div>
            {/* Checkout button */}
            <span className="flex justify-center h-12 bg-gradient-to-r from-custom-purple to-custom-pink items-center w-full rounded-md my-5 gap-3">
                <h3 className="text-white text-xl font-bold">Checkout</h3>
                <Image
                    height={20}
                    width={20}
                    src="/checkout/right-arrow.svg"
                    alt="right arrow icon"
                />
            </span>
            {/* Suggested domains */}
            <div>
                <h3 className="py-3">Add Optional Suggested Domains</h3>
                <ul>
                    {
                        domains.map((item, index)=>(
                            <li className="flex justify-between border border-gray-400 p-3 rounded-md mb-5" key={index}>
                                <div className="flex gap-5">
                                    <div>
                                        <Image
                                            width={72}
                                            height={72}
                                            src={item.logo}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <span className="flex text-3xl"> 
                                            <h2>{item.name}</h2>
                                            <h2 className=" font-bold">.{item.domainExtension}</h2>
                                        </span>
                                        <div className="flex">
                                            <div className="min-w-32">
                                                <h1>{item.age}</h1>
                                            </div>
                                            <span className="min-w-24">
                                                <h4>{item.category}</h4>
                                            </span>
                                            <span>
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h2>status</h2>
                                </div>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default CheckOut