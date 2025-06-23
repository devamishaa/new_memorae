import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import memoraeLogo from "../../assets/memorae_logo.png";
import { ChatBubble } from "../ui";
import { ChevronLeft } from "lucide-react";

const StepOne = ({ handleNext, formData, onChange }) => {
    const isDisabled = formData.nombre.trim() === "";


    return (
        <div className="">
          <div className="flex">
                <ChevronLeft />
                <a href="#" className="text-[#01214F] mb-8 self-start ml-1" onClick={(e) => e.preventDefault()}>
                    Atrás
                </a>
            </div>
             <div className="flex flex-col items-center justify-center pt-24">
         
            {/* Character and ChatBubble */}
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

            {/* Text Input */}
            <div className="w-full max-w-md">
                <TextInput
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => onChange("nombre", e.target.value)}
                    className="w-full w-[350px] mb-6"
                />
            </div>

            {/* Button */}
            <div className="mt-20">
                <Button
                    text="Continuar"
                    onClick={handleNext}
                    disabled={isDisabled}
                    className={`px-6 py-2 text-white rounded-full text-white ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
                        }`}
                />
            </div>
        </div>
        </div>
       
    );
};

export default StepOne;