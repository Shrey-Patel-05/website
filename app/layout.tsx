"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";

// import { Geist, Geist_Mono, Rubik Doodle Shadow } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import "./globals.css";

import { Geist, Geist_Mono, Rubik_Doodle_Shadow } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const rubikDoodleShadow = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  weight: "400", // this font has only one weight
  variable: "--font-rubik-doodle-shadow",
});

// const  conthrax = localFont({
//   src: "../public/fonts/conthrax.otf",
//   variable: "--font-conthrax",
// });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
          value: 600,
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

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikDoodleShadow.variable} antialiased`}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="fixed top-0 left-0 w-full h-full -z-10"
        />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
