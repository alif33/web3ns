import React from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/three-token/Header"
import Hero from "@/components/three-token/Hero"
import Mission from "@/components/three-token/Mission"
import ProtocolStack from "@/components/three-token/ProtocolStack"
import RevenueModel from "@/components/three-token/RevenueModel"
import Features from "@/components/three-token/Features"
import AgentEconomics from "@/components/three-token/AgentEconomics"
import Tokenomics from "@/components/three-token/Tokenomics"
import Team from "@/components/three-token/Team"
import Divider from "@/components/three-token/Divider"
import Footer from "@/components/three-token/Footer"
import Edge from "@/components/three-token/Edge"
import Brands from "@/components/three-token/Brands"
import Utility from "@/components/three-token/Utility"
import Roadmap from "@/components/three-token/Roadmap"

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

  