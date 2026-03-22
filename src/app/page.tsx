import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import SystemDemo from "@/components/SystemDemo";
import BeforeAfter from "@/components/BeforeAfter";
import Strengths from "@/components/Strengths";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import Options from "@/components/Options";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <SystemDemo />
        <BeforeAfter />
        <Strengths />
        <CaseStudy />
        <Pricing />
        <Options />
        <Flow />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
