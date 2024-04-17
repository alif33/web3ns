// In your parent component file
import React, { ChangeEvent, MouseEvent } from "react";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ClaimYourFuture from "./components/ClaimYourFuture";
import New from "./components/New";
import Heading from "./components/header2";

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
