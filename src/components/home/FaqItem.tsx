import React from "react"
import Image from "next/image"

// isOpen={isOpen}
// setIsOpen={setIsOpen}
// size={faqData.length}
interface ItemProps{
    question: string
    answer: string
    index: number
    size: number
    isOpen: number
    handleToggle: (n: number)=>void
}

const FaqItem:React.FC<ItemProps> = ({ question, answer, index, size, isOpen, handleToggle })=>{
    return(
        <div
            className={`mb-5 ${
            index !== size - 1 ? "border-b border-gray-300 pb-5" : ""
            }`}
        >
        <div className="flex justify-between items-center">
          <p className="text-left flex-1 text-[#1A1A1A] font-bold">
            {question}
          </p>
          <button
            onClick={() => handleToggle(index)}
            className="ml-4 p-2 rounded hover:bg-gray-300 hover:text-white transition-colors duration-200 ease-in-out cursor-pointer"
          >
            {isOpen===index ? (
              <Image
                src="/down-arrow.png"
                alt="Collapse"
                width={20}
                height={20}
                className="transform rotate-180"
              />
            ) : (
              <Image
                src="/down-arrow.png"
                alt="Expand"
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
        {
            isOpen===index && (
                <div className="faqs transition-all duration-200 ease-in-out">
                    <p className="mt-2" dangerouslySetInnerHTML={{__html: answer}}></p>
                </div>
            )   
        }
      </div>
    )
}

export default FaqItem