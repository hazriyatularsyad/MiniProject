

import Cardtes from "@/components/cardtes";
import CarouselComponent from "@/components/carousel";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import NavbarLogin from "./userHome/_components/navbarlogin";
import ListEvent from "@/components/listEvent";


export default function Home() {
  return (
    <>
      {/* <Dashboard /> */}
      <Header/>
      <CarouselComponent />
      <ListEvent/>
      <Footer/>
    </>
  )
}
