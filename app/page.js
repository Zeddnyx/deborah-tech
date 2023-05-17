"use client"
import Homepage from "@/pages/Homepage";
import Portofolio from "@/pages/Portofolio";
import Team from "@/pages/Team";
import About from "@/pages/About";
import Services from "@/pages/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 lg:p-24">
      <Homepage />
      <Portofolio />
      <Team />
      <Services />
      <About />
    </main>
  );
}
