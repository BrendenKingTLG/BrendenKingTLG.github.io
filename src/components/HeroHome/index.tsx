import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div className="hero lg:min-h-96  sm:min-h-40 relative pt-20" id="homehero">
      <div className="hero-content text-center flex flex-col justify-center">
        <div className="mx-auto">
          <h1 className="mb-5 text-5xl font-bold font-mono text-white">
            Brenden King
          </h1>
          <p className="mb-5 text-white font-bold font-mono">
            Solving problems with code, one project at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
