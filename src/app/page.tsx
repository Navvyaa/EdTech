import MainContent from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative  bg-background text-foreground lg:px-6 rounded-lg flex flex-col  h-[100dvh] sm:flex-row">
      <Navbar />
      <MainContent />
      
    
  </div>
    );
}
