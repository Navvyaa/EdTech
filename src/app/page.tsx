import MainContent from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";

// import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative  lg:px-6 rounded-lg flex flex-col  h-[100dvh] lg:flex-row">
      <Navbar />
      <MainContent />
      
    
  </div>
    );
}
