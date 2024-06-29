import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Section1 from "@/components/section/section1/section1";
import Section2 from "@/components/section/section2/section2";
import Section3 from "@/components/section/section3/section3";
import Section4 from "@/components/section/section4/section4";
import Section5 from "@/components/section/section5/section5";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </main>
  );
}
