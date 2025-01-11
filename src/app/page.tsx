"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReadyScale from "@/components/ReadyScale";
import Writings from "@/components/Writings";
import SolutionStats from "@/components/SolutionStats";
import ProductInnovation from "@/components/ProductInnovation";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[6.3rem] w-full md:mt-[6.8rem]">
        <ProductInnovation />
        <SolutionStats />
        <Writings />
        <ReadyScale />
      </main>
      <Footer />
    </>
  );
}
