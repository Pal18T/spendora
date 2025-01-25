"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
    
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = 100;
    
          if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
          } else {
            imageElement.classList.remove("scrolled");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => [
        "Precision",
        "Innovation",
        "Intelligence",
        "Spendora"
    ], []);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(titleNumber === titles.length - 1){
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 3000);
        return () => clearInterval(timeoutId);
    },[titleNumber,titles])
  return (
    <section className="pt-20  md:pt-40 pb-20  md:pb-20 px-4">
    
        <div className="container mx-auto text-center">
           <h1 className="text-5xl md:text-7xl lg:text-7xl font-regular gradient-title mb-6">
            <div className="flex flex-col items-center">
                <span className="block mb-4">Manage your Finance</span>
                <div className="inline-flex items-center justify-center relative h-16 md:h-20">
                   <span className="mr-2">with <span> </span></span>
                <span className="relative h-full w-48 md:w-56 texr-left">
                    {titles.map((title, index) => (
                        <motion.span 
                        key={index}
                        className="absolute left-0 font-semibold"
                        initial={{opacity: 0, stiffness: 50}}
                        animate={
                            titleNumber === index ? {y:0, opacity:1} : {y:titleNumber > index ? -150 : 150, opacity: 0}
                        }
                        >
                            {title}
                        </motion.span>
                    ))}
                    

                </span>
                </div>
                </div>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Simplify expense tracking, gain valuable insights, and make informed decisions with real-time AI-powered tools.
                </p>
                <div className="flex justify-center space-x-4 py-2">
                    <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div ref={imageRef} className="hero-image">
                        <Image
                        src="/banner.jpg"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                        />
                    </div>
                </div>
        </div>
    
    </section>
  )
}

export default HeroSection