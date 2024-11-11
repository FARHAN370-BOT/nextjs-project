import React from "react";
import Image from "next/image";
import pic from "@/app/Asset/pic.png"; 
const Project2=() =>{
return(
    <>
    <div className="w-[1920px] h-[1588px] py-[140px] px[220px] top-[921px] flex items-center ">
        <div className="w-[1480px] h-[547px] gap-[60px]">
            <div className="w-[672px] h-[411px] gap-[60px] ">
                <div className="w-[672px] h-[228px]">
                    <div className="w-[672px] h-[174px]">
                    <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02%em] text-[#212529]">Project Management</h1>
                    <div className="w-[672px] h-[90px] mb-1"><p className="font-normal text-xl leading[30px] tracking[-0.02em] text-[#212529]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p></div>
                        <div className="w-[201px] h-[63px]">
                            <button className="mb-2 rounded-md py-5 px-10 bg-[#4F9CF9] hover:bg-green-300">Get started</button>
                        </div>
                    </div>
                </div>
                </div>
            

                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
               

    </div>
    <br/>
    <br/>
    <br/>
    
    <div className="w-[1480px] h-[661px] gap-[100px] flex items-center">
          <div className="w-[710px] h-[661px] transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <Image src={pic} alt="Image Container" />
          </div>
          <div className="w-[670px] h-[294px]">
            <div className="w-[670px] h-[171px]">
              <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:text-[#4F9CF9] hover:scale-105">
                Work together
              </h1>
            </div>
            <div className="w-[670px] h-[60px]">
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:opacity-80">
                With whitespace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <div className="w-[189px] h-[63px]"></div>
            <button className="py-5 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3a7fdd] transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
              <p className="w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white transition-all duration-500 hover:translate-x-1">
                Try it now
              </p>
              <span className="text-white text-lg transition-all duration-500 hover:translate-x-2"> → </span>
            </button>
          </div>
        </div>
      

                
    
    </>
);    

}
export default Project2;
           