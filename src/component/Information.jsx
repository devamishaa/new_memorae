import bgImage from "../assets/Desktop.svg";
import mobileImage from "../assets/Mobile.svg";
import characterImage from "../assets/big_memorae_logo.png";
import { Button, ChatBubble, Pill } from "./ui";
import memoraeLogo from "../assets/memorae_logo.png";
import { ChevronLeft } from "lucide-react";

const Information = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat w-full min-h-screen overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="main-container">
                
                {/* desktop */}
            <div className="flex items-center mb-4 hidden md:flex pt-10">
                    <ChevronLeft className="mr-1" />
                    <a href="#" className="text-[#01214F] self-start" onClick={(e) => e.preventDefault()}>
                        Atrás
                    </a>
                </div>
                <div className="flex relative z-20 h-full flex md:items-end md:justify-center px-6 hidden lg:flex gap-12 " >
                    {/* Left: Floating Character */}
                  
                    <div className="max-w-[400px] w-full flex justify-start items-end pt-[10em]"> {/* Reduced pb from [160px] to 20 */}
                        <img
                            src={characterImage}
                            alt="Memorae Character"
                            className="w-full max-w-full drop-shadow-xl order-2"
                        />
                    </div>

                    {/* Right: Chat + Button */}
                    <div className="flex flex-col items-start gap-6 max-w-[350px] w-full text-right pb-50"> {/* Reduced pb from [210px] to 20 */}
                        <ChatBubble arrow="left" className="min-h-[150px] h-full">
                            <div className="flex flex-col gap-2 text-left">
                                <Pill icon={memoraeLogo} text="MEMORAE" className="mb-2" />
                                <p className="font-medium text-[22px]">
                                    Desde este momento, tu mente tiene refuerzo oficial.
                                    <br />
                                    <br />
                                    Nada de olvidos, tareas volando o listas que se pierden. Tu caos va a tener que buscar nuevo hogar.
                                    <br />
                                    <br />
                                    ¿Te llevo al chat o prefieres explorar por tu cuenta?
                                </p>
                            </div>
                        </ChatBubble>
                        <Button
                            text="Empezar en WhatsApp"
                            bg="bg-[#1EA952] text-[24px] font-semibold text-white"
                            className="hover:opacity-90"
                        />
                        <Button
                            text="Ir al Dashboard"
                            bg="bg-white text-[24px] font-semibold text-black"
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div
                className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex lg:hidden overflow-hidden"
                style={{ backgroundImage: `url(${mobileImage})` }}
            >
               
                {/* mobile */}
                <div className="relative z-20 h-full items-end justify-center px-6 lg:px-20 pt-5 md:pt-20"> {/* Reduced pt from [130px] to 20 */}
                    {/* Right: Chat + Button */}
                    <div className="flex flex-col items-start gap-6 max-w-[420px] w-full text-right">
                        <ChatBubble arrow="" className="h-full">
                            <div className="flex flex-col gap-2 text-left">
                                <Pill icon={memoraeLogo} text="MEMORAE" />
                                <p className="font-medium text-[22px]">
                                    Desde este momento, tu mente tiene refuerzo oficial.
                                    <br />
                                    <br />
                                    Nada de olvidos, tareas volando o listas que se pierden. Tu caos va a tener que buscar nuevo hogar.
                                    <br />
                                    <br />
                                    ¿Te llevo al chat o prefieres explorar por tu cuenta?
                                </p>
                            </div>
                        </ChatBubble>
                          <div className="card bg-[#F3F3FE] rounded-[12px] w-[350px] h-[100px] px-4 py-3 flex justify-start">
                            <div className="flex">
                                <div className="video">
                                    <div className="w-32 h-20 bg-[#555555] rounded-md flex items-center justify-center mr-4">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="content font-bold">
                                    <p className="text-left text-[14px]">
                                        Ver demostración del
                                        <br /> <span className="bg-gradient-to-r from-[#9734E6] to-[#E5469F] bg-clip-text text-transparent">Plan Supernova</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="md:mt-5">
                        <img
                            src={characterImage}
                            alt="Memorae Character"
                            className="w-full max-w-[240px] drop-shadow-xl mx-auto"
                        />
                    </div>
                    <div className="flex justify-center flex-col items-center mb-10">
                     <Button
                            text="Empezar en WhatsApp"
                            bg="bg-[#1EA952] text-[24px] font-semibold text-white"
                            className="hover:opacity-90 mb-5"
                        />
                        <Button
                            text="Ir al Dashboard"
                            bg="bg-white text-[24px] font-semibold text-black"
                            className=""
                        />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Information;