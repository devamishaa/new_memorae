import bgImage from "../assets/Desktop.svg";
import mobileImage from "../assets/Mobile.svg";
import characterImage from "../assets/big_memorae_logo.png";
import { Button, ChatBubble, Pill } from "./ui";
import memoraeLogo from "../assets/memorae_logo.png";

const Introduction = () => {
    return (
        <div
            className=" w-full h-[100%] bg-cover bg-center bg bg-no-repeat hidden md:block pt-52"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="main-container">
                {/* desktop */}
                <div className=" relative z-20 h-full flex md:items-end md:justify-center px-6 lg:px-20  ">
                    {/* Left: Floating Character */}
                    <div className="max-w-[400px] w-full flex justify-start items-end pb-[160px]">
                        <img
                            src={characterImage}
                            alt="Memorae Character"
                            className="w-full max-w-full drop-shadow-xl order-2"
                        />
                    </div>

                    {/* Right: Chat + Button */}
                    <div className="flex flex-col items-start gap-6 max-w-[350px] w-full text-right pb-[210px]">
                        <ChatBubble arrow="left" className="min-h-[150px] h-full">
                            <div className="flex flex-col gap-2 text-left">
                                <Pill icon={memoraeLogo} text="MEMORAE"  className="mb-2" />
                                <p className="font-medium text-[22px]">
                                    Y ahora… una introducción como Dios manda.
                                    <br />
                                     <br />
                                    ¿Quieres que te cuente en 2 minutos todo lo que se viene?
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
                         <Button
                        text="Continuar"
                        bg="bg-gradient-to-r from-[#9634E7] to-[#E6469E] text-[24px] font-semibold"
                        className="hover:opacity-90 text-white"
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
                                    ¿te comprometes conmigo a que tu caos se vaya bie
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
                   
                </div>
            </div>
        </div>

    );
};

export default Introduction;
