import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export default function PlanetHero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden h-screen background/10">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/earth.mp4"
          autoPlay
          loop
          muted
        />

        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="max-w-2xl text-center mx-auto py-8 px-6 rounded-lg bg-black bg-opacity-50 backdrop-blur-md shadow-lg">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl text-white">
              Brenden King
            </h1>
            <p className="mt-3 text-xl text-slate-200">
              Building the future and eliminating tech debt along the way!
            </p>
            <div className="h-3"></div>
            <Link className="mt-8" href="#about-me" type="button">
              <Button>
                Learn More <ChevronsDown />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Separator
        className="relative z-10"
        style={{ backgroundColor: "white", height: ".029em" }}
      />
      {/* End Hero */}
    </>
  );
}
