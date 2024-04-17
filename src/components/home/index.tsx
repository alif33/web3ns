// In your parent component file
import React, { ChangeEvent, MouseEvent } from "react";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import ClaimYourFuture from "./ClaimYourFuture";
import New from "./New";
import Heading from "./header2";

interface LandingPageProps {
  handleNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const HomePage: React.FC<LandingPageProps> = ({handleNameInput}) => {
  return (
    <div className="bg-white ">
      <Heading 
        handleNameInput={handleNameInput} 
        // handleButtonClick={handleButtonClick} 
      />
      <New />
      <ClaimYourFuture />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default HomePage;
