"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import "@/styles/Screen.css"



export default function Home() {


  const [count, setCount] = useState(0)


  const [init, setInit] = useState(false);


  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        opacity: 0.5,
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#820202",
        },
        links: {
          color: "#820202",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 7,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "square"
        },
        size: {
          value: { min: 3, max: 10 },
        },
        rotate: {
          value: { min: 0, max: 360 },
        }
      },
      spawn: {
        position: "outside", // Forces particles to start off-screen
      },
      detectRetina: true,
    }),
    [],
  );

  const titleFont = "main-title-font md:tracking-widest "
  const secondaryFont = ""

  // Colour Palette 
  const theme = {
    "violet": "rgb(41,25,67)",
    "lilac": "rgb(144,95,158)",
    "amethyst": "rgb(156,139,167)",
    "red": "rgb(136,28,60)",
    "ruber": "rgb(203,81,114)"
  }
  return (

    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />

      <div className='flex flex-col items-center justify-center'>

        <Navbar />



        <div className=" z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-30">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 z-10">
            <div className="w-full max-w-[95vw] sm:max-w-2xl mx-auto rounded-3xl border-black border-4 shadow-lg p-2 bg-gray-700 overflow-hidden" >
              <div className="bg-gray-800 rounded-3xl font-mono text-sm text-primary/90 p-3 sm:p-4 md:p-6 space-y-4">
                <div className="bg-black border p-4 sm:p-6 border-primary/50 overflow-hidden shadow-lg crt">

                  <div className="flex flex-row items-center justify-center space-x-8 p-6">
                    {/* Profile Image */}
                    <div className="hidden md:block crt rounded-xl ">
                      <img
                        src="/image.png"
                        alt="Shrey Patel"
                        className="md:h-78 md:w-200 rounded-2xl shadow-lg object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-xl md:text-left text-center ">
                      <h1 className="md:text-5xl text-3xl font-bold">Shrey Patel</h1>
                      <br />
                      <p className="text-white md:text-lg  text-xs  leading-relaxed">
                        Computer Science student at the University of Manchester, with a passion for hardware systems, dynamic programming, and full-stack web development.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-3 w-full max-w-full scale-[0.7] sm:scale-100 transition-transform duration-300 p-4">

                {/* Left buttons */}
                <div className="hidden md:flex  flex-col justify-center items-center gap-2">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500"></div>
                  <div className="flex flex-row gap-1">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-500"></div>
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full "></div>
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-green-500"></div>
                  </div>
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500"></div>
                </div>

                {/* Label */}
                <h1 className={`${titleFont} text-[14px] md:text-[20px] font-bold mt-4 md:mt-20 hidden md:flex`}>ShreyBot3000</h1>

                {/* Right buttons */}
                <div className="hidden md:flex flex-col justify-center items-center gap-2">
                  <div className="flex flex-row gap-2">
                    <div className="w-3 h-3 md:w-6 md:h-6 rounded-full"></div>
                    <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-gray-500"></div>
                    <div className="w-3 h-3 md:w-6 md:h-6 rounded-full"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </>
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}


//  Venue Info
//                   <section className="venue-details">
//                     {/* This will be part of parralex text */}
//                     {/* <h1 className={`${titleFont} md:text-[30px] text-[20px] z-10 mt-[20px] text-white`}>MANCHESTER'S GREATEST HACKATHON</h1> */}
//                     <h1 className={` md:text-[30px] text-[20px] z-10 mt-[10px]`} >[LOCATION COMING SOON]</h1>

//                   </section>

//                   <div className="flex justify-center gap-px">


//                     <h1 className={` md:text-[30px] text-[20px] z-10 mt-[10px]`} style={{ color: theme["amethyst"] }}>[DATES COMING SOON]</h1>


//                   </div>

//                   {/* Social Links */}
//                   <section className="socials">
//                     {/* Your existing social icons */}
//                   </section>

//                   <h1 className={`${titleFont} mx-[5vw] md:text-[30px] text-[20px] underline underline-offset-[4px] md:underline-offset-[10px]`} style={{ color: theme["ruber"] }}>
//                     APPLICATIONS OPENING SOON
//                   </h1>
