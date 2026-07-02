"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { AsciiWave } from "./ascii-wave"

export function Hero(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);    


    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
            {/* subtle grid */}
            <div className="absolute inset-0 grid-pattern opacity-50"/>

            {/* ascii wave */}
            {/* <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                <AsciiWave className="w-full h-full"/>
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
                {/* badge */}
                <div 
                    className={`flex justify-center mb-10 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                > 
                </div>

                {/* headline */}
                <div className="text-center max-w-5xl mx-auto mb-10">
                    <h1
                        className={`text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8 transition-all duration-700 delay-100 lg:text-7xl ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        style={{ fontFamily: 'var(--font-geist-pixel-line), monospace' }}
                    >
                        <span className="text-balance">The complete CLI agent tool to</span>
                        <br />
                        <span className="text-balance">Work with</span>
                        <span className="text-balance">Obsidian</span>
                    </h1>
                </div>

            </div>

        </section>
    )
}

