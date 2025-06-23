import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import bgImage from "../../assets/multistep_bg.svg";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    password: "",
    // other fields...
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full h-screen pt-10 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="main-container">
        <div className="flex justify-center items-center py-4 pb-1">
          <div className="flex items-center space-x-4">
              </div>
        </div>

        {step === 1 && (
          <StepOne handleNext={nextStep} formData={formData} onChange={handleChange} />
        )}
        {step === 2 && (
          <StepTwo handleNext={nextStep} prev={prevStep} formData={formData} onChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;