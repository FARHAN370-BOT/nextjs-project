import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Project2 from "./component/Project2";
import Extension from "./component/Extention";
import CustomiseApp from "./component/CustomiseApp";
import Work from "./component/work";
import Final from "./component/Final";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project2/>
      <Extension/>
      <CustomiseApp/>
      <Work/>
      <Final/>
      <Footer/>
      
      
      
      </div>


  );
   
}
