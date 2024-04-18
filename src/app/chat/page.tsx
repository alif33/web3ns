import React from "react"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/chat/Sidebar"
import Nav from "@/components/chat/Nav"
import Conversations from "@/components/chat/Conversations"
import Footer from "@/components/chat/Footer"

function Chat() {

return (    
   <div className="flex h-screen overflow-y-hidden pl-5 pr-9 py-7 overflow-x-hidden">
      <Sidebar/>
      <div className="w-full pl-8">
        <Nav/>
        <Conversations/>
        <Footer/>
      </div>
   </div>
)
}

export default Chat;
