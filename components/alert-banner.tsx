"use client";
import { ArrowRight } from "lucide-react";
import ContactForm from "./contact";
import { useState } from "react";

export default function AlertBanner() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {/* Alert Banner */}
      <div
        onClick={toggleForm}
        className="w-full bg-green-600 text-black font-bold py-1 px-3 text-left flex justify-between items-center cursor-pointer"
      >
        <div>Get in contact with me!</div>
        <ArrowRight />
      </div>

      {/* Contact Form Overlay */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
