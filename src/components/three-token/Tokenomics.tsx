import React from "react"
import Image from "next/image"

const Tokenomics: React.FC = () => {
    const data = [
        {distribution: "Seed Round", total: "3.0%", tokens: "99,900,000", price: "$0.003", discount: "66.67%", tge: "2.0%", cliff: "8", vesting: "10"},
        {distribution: "Strategic Round", total: "3.0%", tokens: "99,900,000", price: "$0.006", discount: "33.33%", tge: "6.0%", cliff: "6", vesting: "8"},
    ]

    return (
        <div className="text-white px-14">
            <div className="bg-[url('/3Tokens/tokenomics.png')] bg-custom-bg bg-no-repeat bg-cover inset-0">
                <h2 className="text-5xl text-center py-12">Tokenomics</h2>
            </div>
            <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Distribution</th>
                        <th>Total(%)</th>
                        <th>Tokens</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>%TGE</th>
                        <th>Cliff</th>
                        <th>Vesting</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.distribution}</td>
                            <td>{item.total}</td>
                            <td>{item.tokens}</td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.tge}</td>
                            <td>{item.cliff}</td>
                            <td>{item.vesting}</td>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tokenomics