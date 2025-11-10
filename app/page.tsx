import About from "@/sections/About ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Stack from "@/sections/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
