import Informetion from "./informetion";
import Button from "../ui/Button";
import Logo from "../shared/Logo";
import MoreInformetion from "./MoreInformetion";
import { useState } from "react";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll"; //

const steps = {
  1: Informetion,
  2: MoreInformetion,
};

const AddSpaceInfo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const Step = steps[currentStep];

  useEffect(() => {
    scroll.scrollToTop({ behavior: "smooth", duration: 500 });
  }, [currentStep]);

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <Logo />
          <Button variant="primary">Save & Exit</Button>
        </div>
        <Step setCurrentStep={setCurrentStep} />
        <div className="flex items-center justify-center gap-2 mb-16">
          <div
            onClick={() => setCurrentStep(1)}
            className={`p-1  rounded-full cursor-pointer ${
              currentStep === 1 ? " w-3 h-3 bg-black" : "w-2 h-2 bg-[#D9D9D9]"
            }`}
          ></div>
          <div
            onClick={() => setCurrentStep(2)}
            className={`p-1  rounded-full cursor-pointer ${
              currentStep === 2 ? " w-3 h-3 bg-black" : "w-2 h-2 bg-[#D9D9D9]"
            } `}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AddSpaceInfo;
