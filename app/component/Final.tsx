
import Image from "next/image";
import Apple from "@/app/Asset/Apple.png";
import Microsoft from "@/app/Asset/Microsoft.png";
import sla from "@/app/Asset/sla.png";
import gog from "@/app/Asset/gog.png";
import React from "react";
 const Final = () =>{
    return(

        <>
        <div className="w-[1922px] h-[538px] py-[140px] px-[220px] gap-[100px]">
            <div className="w-[1482px] h-[87px] text-[#212529]">
                <h2 className="font-bold text-[7xl] leading-[87.14px] tracking-[-0.02em] text-center text-[#212529] text-7xl">
                    Our Sponsors

                </h2>
            </div>
            <div className="w-[1482px] h-[71px] m-7 flex justify-between items-center">
                <div className="w-[110px] h-[65px] pt-2 gap-1">
                    <Image src={Apple} alt="Apple Logo" className="hover:bg-slate-100"/>
                </div>
                <div className="m-2 w-[287px] h-[62px] gap-1">
                    <Image src={Microsoft} alt="Microsoft" className="hover:bg-stone-300"/>
                </div>
                <div className=" pt-2 w-[289px] h-[71px]">
                    <Image src={sla} alt="sla" className="hover:opacity-15"/>
                    </div>
                    <div className="w-[211px] h-[69.81]">
                        <Image src={gog} alt="gog" className="hover:opacity-10"/>
                    </div>
            </div>
        </div>
        </>
    );
 }
 export default Final;