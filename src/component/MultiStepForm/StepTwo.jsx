import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { ChevronLeft } from "lucide-react";
import memoraeLogo from "../../assets/memorae_logo.png";
import { ChatBubble } from "../ui";

const StepTwo = ({ handleNext, prev, formData, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex">
        <ChevronLeft />
        <a href="/step-one" className="text-[#01214F] mb-8 self-start ml-1" onClick={(e) => e.preventDefault()}>
          Atrás
        </a>
      </div>
      <div className="text-center flex gap-4 items-center mb-12">
        <img
          src={memoraeLogo}
          alt="Assistant Character"
          className="w-24 h-24"
        />
        <ChatBubble arrow="left" className="h-full">
          <div className="flex flex-col gap-2 text-left">
            <p className="font-medium">
              ¿Cómo quisieras que te llame?
            </p>
          </div>
        </ChatBubble>
      </div>
      <div className="w-full max-w-md">
        <TextInput

          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <Button className="text-white" text="Siguiente" onClick={handleNext} />
      </div>
    </div>
  );
};

export default StepTwo;
