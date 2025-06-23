import { ArrowRight } from "lucide-react";
import { Button, Pill, TextInput, ChatBubble } from "./component/ui";
import useAutoTheme from "./hooks/useAutoTheme";
import memoraeLogo from "./assets/memorae_logo.png";
import Hero from "./component/Hero";
import MultiStepForm from "./component/MultiStepForm/MultiStepForm";
import bgImage from "./assets/multistep_bg.svg"
import Introduction from "./component/Introduction";
import Information from "./component/Information";
import { Routes, Route } from 'react-router-dom';
import FollowUp from './component/FollowUp';
import Committed from "./component/Committed";
import StepOne from "./component/MultiStepForm/StepOne";

function App() {
  useAutoTheme(); 

  return (
    // <div className="min-h-screen p-8 space-y-6 bg-white text-black dark:bg-gray-100 dark:text-white transition-colors duration-500 flex flex-col items-center justify-center">

    //   {/* Buttons */}
    //   <Button
    //     text="¡Si, me comprometo!"
    //     iconPosition="right"
    //     bg="bg-gradient-to-r from-[#9634E7] to-[#E6469E]"
    //     className="hover:opacity-90"
    //   />
    //   <Button
    //     text="¡Si, me comprometo!"
    //     icon={ArrowRight}
    //     iconPosition="right"
    //     bg="bg-gradient-to-r from-[#9634E7] to-[#E6469E]"
    //     className="hover:opacity-90"
    //   />

    //   {/* Pill */}
    //   <Pill icon={memoraeLogo} text="MEMORAE" />

    //   {/* Chat bubbles */}
    //   <ChatBubble arrow="top">
    //     ¿Cómo quisieras que te llame?
    //   </ChatBubble>

    //   <ChatBubble arrow="bottom">
    //     <p className="font-medium">
    //       Ahora toca lo importante:<br />
    //       ¿Te comprometes conmigo a que tu caos se vaya bien?
    //     </p>
    //   </ChatBubble>

    //   {/* Inputs */}
    //   <TextInput placeholder="Nombre" />
    //   <TextInput type="password" placeholder="Contraseña" />
    // </div>
    <>
    
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/follow-up" element={<FollowUp />} />
        <Route path="/committed" element={<Committed />} />
        <Route path="/step-one" element={<MultiStepForm />} />
      </Routes>
        <Information />
        <Introduction />
    </>
  );
}

export default App;
