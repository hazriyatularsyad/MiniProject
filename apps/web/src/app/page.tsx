

import Cardtes from "@/components/cardtes";
import CarouselComponent from "@/components/carousel";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import NavbarLogin from "./userHome/_components/navbarlogin";


export default function Home() {
  return (
    <>
      {/* <Dashboard /> */}
      <Header/>
      <CarouselComponent />
      <Footer/>
      <Cardtes/>
    </>
  )
}
