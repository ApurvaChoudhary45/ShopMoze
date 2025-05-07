import About from "@/Components/About";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Search from "@/Components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
    <div className="absolute top-0 -z-10 h-full w-full bg-white selection:text-cyan-200 selection:bg-amber-200"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    <Navbar/>
    <About/>
    <Search/>
    <Cards/>
    <Footer/>
    </div>
     
    </>

  );
}
