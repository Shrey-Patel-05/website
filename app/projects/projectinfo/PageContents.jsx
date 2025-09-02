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
import { GitHub } from '@mui/icons-material';

const PageContents = ({ project }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-10">
                <div className="w-full max-w-[95vw] lg:max-w-6xl rounded-3xl border-black border-4 shadow-2xl p-3 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl font-mono text-sm text-primary/90 p-4 sm:p-6 md:p-8 space-y-6">

                        {/* Header Section */}
                        <div className="bg-black border  overflow-hidden shadow-2xl crt">

                            {/* Title  */}
                            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-6 border-b border-green-400/30">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 text-center drop-shadow-lg tracking-wider"
                                    style={{ fontFamily: "var(--font-rubik-doodle-shadow)" }}>
                                    {project?.name}
                                </h1>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-6 md:p-8">

                                {/* Project Image Section */}
                                <div className="flex flex-col space-y-4">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        <div className="relative overflow-hidden rounded-xl border-2 border-green-400/50 shadow-2xl">
                                            <img
                                                src={project?.image}
                                                alt={project?.name}
                                                className="w-full h-64 md:h-80 object-cover transition-all duration-500 hover:scale-105 hover:brightness-110"
                                                style={{
                                                    boxShadow: "inset 0 0 0 2px rgba(34, 197, 94, 0.3), 0 0 20px rgba(34, 197, 94, 0.2)"
                                                }}
                                            />
                                            {/* Image Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details Section */}
                                <div className="flex flex-col items-start space-y-6">

                                    {/* Description */}
                                    <div className="bg-gray-900/50 rounded-lg p-6 border border-green-400/20 w-full">
                                        <h3 className="text-green-300 text-lg font-semibold mb-3 flex items-center">
                                            Project Description
                                        </h3>

                                        <div className="px-8 mt-3 mb-6 ">
                                            <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                                        </div>
                                        <p className="text-white text-sm md:text-base font-medium leading-relaxed text-left drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]">
                                            {project?.description}
                                        </p>

                                        {project?.techStack && (
                                            <div className="bg-gray-900/50 rounded-lg p-6 border border-green-400/20">
                                                <h3 className="text-green-300 text-lg font-semibold mb-3">
                                                    Tech Stack
                                                </h3>
                                                <div className="h-px bg-gradient-to-r from-green-400/50 via-green-400/20 to-transparent mb-4"></div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-300 text-xs font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="px-8 mt-6 ">
                                            <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
                                        </div>

                                        {project?.github && <div className="flex flex-col items-center text-center mt-5">
                                            <a href={project?.github} target="_blank" className="text-gray-300 text-sm md:text-base underline"> <img src="/github.png" className="w-20 h-20"></img></a>
                                            <a href={project?.github} target="_blank" className="text-green-300 text-sm md:text-base underline"> Github</a>
                                        </div>}
                                    </div>

                                </div>
                            </div>




                            <div className="h-10"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageContents





