import { ArrowRight } from "lucide-react";
import bgImage from "../assets/Desktop.svg";
import mobileImage from "../assets/Mobile.svg";
import characterImage from "../assets/big_memorae_logo.png";
import { Button, ChatBubble, Pill } from "./ui";
import memoraeLogo from "../assets/memorae_logo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/committed'); // Navigate back to Hero
    };
    return (
        <>
            <div
                className=" w-full h-[100%] bg-cover bg-center bg bg-no-repeat hidden md:block"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* desktop */}
                <div className=" relative z-20 h-full flex md:items-end md:justify-center px-6 lg:px-20 pt-[15em] ">
                    {/* Left: Floating Character */}
                    <div className="max-w-[400px] w-full flex justify-start items-end pb-[160px]">
                        <img
                            src={characterImage}
                            alt="Memorae Character"
                            className="w-full max-w-full drop-shadow-xl order-2"
                        />
                    </div>

                    {/* Right: Chat + Button */}
                    <div className="flex flex-col items-start gap-6 max-w-[420px] w-full text-right pb-[210px]">
                        <ChatBubble arrow="left" className="h-[300px]">
                            <div className="flex flex-col gap-2 text-left">
                                <Pill icon={memoraeLogo} text="MEMORAE" />
                               <p className="font-medium">
                                    Ahora toca lo importante:
                                    ¿te comprometes conmigo a que tu caos se vaya bien lejos?
                                    <br />
                                    <br />
                                    Necesito que me respondas un contundente: “¡Sí, estoy comprometido!” — así sabemos que esto va en serio.
                                </p>
                            </div>
                        </ChatBubble>

                        <Button
                            onClick={handleNext}
                            text="¡Si, me comprometo!"
                            bg="bg-gradient-to-r from-[#9634E7] to-[#E6469E] text-white"
                            className="hover:opacity-90"
                        />
                    </div>
                </div>
            </div>
            <div
                className=" w-full h-screen bg-cover bg-center bg bg-no-repeat block md:hidden"
                style={{ backgroundImage: `url(${mobileImage})` }}
            >
                {/* mobile */}
                <div className=" relative z-20 h-full items-end justify-center px-6 lg:px-20 pt-[130px]">
                    {/* Left: Floating Character */}


                    {/* Right: Chat + Button */}
                    <div className="flex flex-col items-start gap-6 max-w-[420px] w-full text-right pb-0">
                        <ChatBubble arrow="bottom" className="min-h-[150px] h-[311px] ">
                            <div className="flex flex-col gap-2 text-left">
                                <Pill icon={memoraeLogo} text="MEMORAE" />
                                <p className="font-medium">
                                    Ahora toca lo importante:
                                    ¿te comprometes conmigo a que tu caos se vaya bien lejos?
                                    <br />
                                    Necesito que me respondas un contundente: “¡Sí, estoy comprometido!” — así sabemos que esto va en serio.
                                </p>
                            </div>
                        </ChatBubble>


                    </div>
                    <div className="mt-5 ">
                        <img
                            src={characterImage}
                            alt="Memorae Character"
                            className="w-full max-w-[240px] drop-shadow-xl mx-auto"
                        />
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button
                            fontSize="text-lg"
                            fontWeight="font-semibold"
                            text="¡Si, me comprometo!"
                            icon={ArrowRight}
                            bg="bg-gradient-to-r from-[#9634E7] to-[#E6469E]"
                            className="hover:opacity-90 leading-[1.4]"
                        />
                    </div>

                </div>
            </div>
        </>

    );
};

export default Hero;
