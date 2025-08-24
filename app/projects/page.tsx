"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Image_Carasouel from "@/components/Image_Carasouel";
import "@/styles/Screen.css"



export default function Page() {
  return <Image_Carasouel />;
}
