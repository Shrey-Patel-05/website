"use client";
import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import Image_Carasouel from "@/components/Image_Carasouel";
import projects from '@/app/data/projects.json';
import { useRouter, useSearchParams } from 'next/navigation';
import "@/styles/Screen.css"

const PageContents = ({ project }) => {
    return (
        <div className="flex flex-col h-full">
            <div className=" z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-10">
                <div className="w-full max-w-[95vw] sm:max-w-5xl rounded-3xl border-black border-4 shadow-lg p-2 bg-gray-700 overflow-hidden" >
                    <div className="bg-gray-800 rounded-3xl font-mono text-sm text-primary/90 p-3 sm:p-4 md:p-6 space-y-4">
                        <div className="bg-black border p-4 sm:p-6 border-primary/50 overflow-hidden shadow-lg crt flex flex-col">
                            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mt-2" style={{ fontFamily: "var(--font-rubik-doodle-shadow)" }}>{project?.name}</h1>

                            <img
                                src={project?.image}
                                className="w-full h-full object-cover border-2 border-red-700 rounded-lg"
                                style={{ boxShadow: '0 0 0 2px #ffffff' }}
                            />


                            <p className="mb-20 mt-10 text-white text-2xl font-extrabold drop-shadow-[0_0_6px_rgba(0,255,0,0.7)]  ">
                                {project?.description}
                            </p>
                            <div className="mb-10"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContents