"use client";
import ContactForm from "@/components/ContactForm";
import Cover from "@/components/Cover";
import CardSection from "@/components/sections/CardSection";
import Hero from "@/components/sections/Hero";
import ProjectsCardSection from "@/components/sections/ProjectsCardSection";
import {
  backendCard,
  databaseCard,
  frontendCard,
  otherCards,
  projectCard,
} from "@/components/utils/Data";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    toast.success(
      <div className='font-bold pt-3 pb-3 text-lg flex items-center justify-center text-gray-100'>
        Welcome to my Portfolio!
      </div>,
      {
        position: "top-center",
        style: {
          background: "#2bd576",
          color: "white",
        },
        icon: "🚀",
        iconTheme: {
          fontSize: "50px", // Adjust the size as needed
        },
      }
    );

    return () => toast.remove();
  }, []);
  return (
    <div>
      <Cover />
      <Hero />
      <div className='flex flex-col gap-10 lg:px-10'>
        <ProjectsCardSection title='Projects' data={projectCard} />{" "}
        <CardSection title='Frontend' data={frontendCard} />
        <CardSection title='Backend' data={backendCard} />
        <CardSection title='Database' data={databaseCard} />
        <CardSection title='Others' data={otherCards} />
      </div>
    </div>
  );
}
