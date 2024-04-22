// In your parent component file
import React, { ChangeEvent, MouseEvent } from "react";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import ClaimYourFuture from "./ClaimYourFuture";
import New from "./New";
import Heading from "./Header";


const HomePage: React.FC = () => {
  return (
    <div className="bg-white ">
      <Heading/>
      <New />
      <ClaimYourFuture />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default HomePage;
