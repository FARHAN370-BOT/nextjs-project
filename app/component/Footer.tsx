import Image from "next/image";
import Logo from "@/app/Asset/Logo.png";

import React from "react";

const Footer = () =>{
    return(
        <>
        <div className="w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] bg-[#043873] gap-[200px]">
            <div className="w-full h-[289px] flex gap-[100px] text-white">
                <div className="flex w-full h-[169px] gap-[100px] justify-between">
                    <div className="w-[295px] h-[169px] gap-[15px]">
                        <div className="w-[191px] h-[34px]">
                            <Image src={Logo} alt="Logo" className="cursor-pointer"/>
                            
                        </div>
                        <div className="w-[240px] h-[120px]">
                            <p className="font-normal text-lg leading-[30px] text-[#F7F7EE] cursor-pointer hover:text-[#FFE492]">Whitepace was created for the new ways we live and work. We make a better workspace around the world.

                            </p>
                        </div>

                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px] cursor-pointer">
                        <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] cursor-pointer">
                        Product


                        </h2>
                        <p className="text-base text-[#FFE492] hover:text-white cursor-pointer">
                        Overview
                         </p>
                         <p className="text-white hover:text-[#FFE492] cursor-pointer">Pricing</p>
                         <p className="text-white hover:text-[#FFE492] cursor-pointer">
                         Customer stories
                         </p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-4 flex flex-col">
                        <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] cursor-pointer">Resources

                        </h2>
                    <p className="text-white hover:text-[#FFE492] cursor-pointer">Blog
                    </p>
                    <p className="text-white hover:text-[#FFE492] cursor-pointer"> Guides & tutorials</p>
                    <p className="text-white hover:text-[#FFE492] cursor-pointer">Help center</p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-4 flex flex-col">
            <h2 className="font-bold text-lg text-white hover:text-[#4F9CF9] cursor-pointer">
              Company
            </h2>
            <p className="text-white hover:text-[#FFE492] cursor-pointer">
              About us
            </p>
            <p className="text-white hover:text-[#FFE492] cursor-pointer">
              Careers
            </p>
            <p className="text-white hover:text-[#FFE492] cursor-pointer">
              Media kit
            </p>
          </div>
                </div>
            </div>


        </div>
        </>

    );
}
export default Footer;

