import React from "react"
import Link from "next/link"
import Image from "next/image"
import Response from "./Response"
import Question from "./Question"

function Conversations() {

    return (    
        <div className="h-[450px] overflow-y-scroll">
             <ul>
                <Response/>
                <Question/>
                <Response/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
             </ul>
          </div>
    )
}

export default Conversations