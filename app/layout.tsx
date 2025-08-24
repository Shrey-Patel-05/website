"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
            <Navbar />

        {children}
      </body>
    </html>
  );
}
