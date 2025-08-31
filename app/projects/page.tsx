"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Image_Carasouel from "@/components/Image_Carasouel";
import projects from '@/app/data/projects.json';
import "@/styles/Screen.css"



export default function Page() {
  const members = projects.projects;

  // [{ "name": "Sean bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Lead dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }];
  return (
    <div className="flex flex-col mt-20">
      <Image_Carasouel members={members} />
      <div className=" z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-10">
        <div className="w-full max-w-[95vw] sm:max-w-5xl rounded-3xl border-black border-4 shadow-lg p-2 bg-gray-700 overflow-hidden" >
          <div className="bg-gray-800 rounded-3xl font-mono text-sm text-primary/90 p-3 sm:p-4 md:p-6 space-y-4">
            <div className="bg-black border p-4 sm:p-6 border-primary/50 overflow-hidden shadow-lg crt">
              <p>
                A selection of projects created over the past 4 years. Click on one to find out more information!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

