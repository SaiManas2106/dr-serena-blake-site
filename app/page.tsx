import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <div className="border-t border-gray-200 my-12" />

      <About />
      <div className="border-t border-gray-200 my-12" />

      <Services />
      <div className="border-t border-gray-200 my-12" />

      <FAQ />
      <div className="border-t border-gray-200 my-12" />

      <Contact />

      <footer className="w-full bg-white text-center py-4 border-t border-gray-200 text-sm text-gray-500">
  © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
</footer>

    </main>
  );
}
