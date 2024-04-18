import React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/3Token/Header"
import Hero from "@/components/3Token/Hero"
import Mission from "@/components/3Token/Mission"
import ProtocolStack from "@/components/3Token/ProtocolStack"
import RevenueModel from "@/components/3Token/RevenueModel"
import Features from "@/components/3Token/Features"
import AgentEconomics from "@/components/3Token/AgentEconomics"
import Tokenomics from "@/components/3Token/Tokenomics"
import Team from "@/components/3Token/Team"
import Divider from "@/components/3Token/Divider"
import Footer from "@/components/3Token/Footer"
import Edge from "@/components/3Token/Edge"
import Brands from "@/components/3Token/Brands"
import Utility from "@/components/3Token/Utility"
import Roadmap from "@/components/3Token/Roadmap"

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

  