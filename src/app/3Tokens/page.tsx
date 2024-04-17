import React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import ProtocolStack from "./components/ProtocolStack"
import RevenueModel from "./components/RevenueModel"
import Features from "./components/Features"
import AgentEconomics from "./components/AgentEconomics"
import Tokenomics from "./components/Tokenomics"
import Team from "./components/Team"
import Divider from "./components/Divider"
import Footer from "./components/Footer"
import Edge from "./components/Edge"
import Brands from "./components/Brands"
import Utility from "./components/Utility"
import Roadmap from "./components/Roadmap"

const ThreeTokens: React.FC = () => {
    
    return (
      <div className="bg-[#060606] overflow-x-hidden">
        <Header/>
        <Hero/>
        <Edge/>
        <Brands/>
        <Divider/>
        <Mission/>
        <Utility/>
        <ProtocolStack/>
        <Divider/>
        <RevenueModel/>
        <Divider/>
        <Features/>
        <AgentEconomics/>
        <Divider/>
        <Tokenomics/>
        <Divider/>
        <Team/>
        <Roadmap/>
        <Divider/>
        <Footer/>
      </div>
    );
}

export default ThreeTokens

  