"use client";
import "./globals.css";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/Testimonials";
import About from "@/components/About";
import Services from "@/components/Service";
import BlogPost from "./blog/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <Hero />
      <About />

      <Services />
      <TestimonialSection />
      <BlogPost />
    </>
  );
}
