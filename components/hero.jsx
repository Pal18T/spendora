// "use client"
// import React, { useEffect, useMemo, useRef, useState } from 'react'
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from './ui/button';
// import Image from 'next/image';

// const HeroSection = () => {
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const imageElement = imageRef.current;
    
//         const handleScroll = () => {
//           const scrollPosition = window.scrollY;
//           const scrollThreshold = 100;
    
//           if (scrollPosition > scrollThreshold) {
//             imageElement.classList.add("scrolled");
//           } else {
//             imageElement.classList.remove("scrolled");
//           }
//         };
    
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//       }, []);


//     const [titleNumber, setTitleNumber] = useState(0);
//     const titles = useMemo(() => [
//         "Precision",
//         "Innovation",
//         "Intelligence",
//         "Spendora"
//     ], []);
//     useEffect(() => {
//         const timeoutId = setTimeout(() => {
//             if(titleNumber === titles.length - 1){
//                 setTitleNumber(0);
//             } else {
//                 setTitleNumber(titleNumber + 1);
//             }
//         }, 3000);
//         return () => clearInterval(timeoutId);
//     },[titleNumber,titles])
//   return (
//     <section className="pt-20  md:pt-40 pb-20  md:pb-20 px-4">
    
//         <div className="container mx-auto text-center">
//            <h1 className="text-5xl md:text-7xl lg:text-7xl font-regular gradient-title mb-6">
//             <div className="flex flex-col items-center">
//                 <span className="block mb-4">Manage your Finance</span>
//                 <div className="inline-flex items-center justify-center relative h-16 md:h-20">
//                    <span className="mr-2">with <span> </span></span>
//                 <span className="relative h-full w-48 md:w-56 texr-left">
//                     {titles.map((title, index) => (
//                         <motion.span 
//                         key={index}
//                         className="absolute left-0 font-semibold"
//                         initial={{opacity: 0, stiffness: 50}}
//                         animate={
//                             titleNumber === index ? {y:0, opacity:1} : {y:titleNumber > index ? -150 : 150, opacity: 0}
//                         }
//                         >
//                             {title}
//                         </motion.span>
//                     ))}
                    

//                 </span>
//                 </div>
//                 </div>
//                 </h1>
//                 <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                     Simplify expense tracking, gain valuable insights, and make informed decisions with real-time AI-powered tools.
//                 </p>
//                 <div className="flex justify-center space-x-4 py-1">
//                     <Link href="/dashboard">
//                     <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
//                         Get Started
//                     </Button>
//                     </Link>
//                 </div>
//                 <div className="hero-image-wrapper mt-5 md:mt-0">
//                     <div ref={imageRef} className="hero-image">
//                         <Image
//                         src="/banner.jpg"
//                         width={1280}
//                         height={720}
//                         alt="Dashboard Preview"
//                         className="rounded-lg shadow-2xl border mx-auto"
//                         priority
//                         />
//                     </div>
//                 </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-white/80 to-transparent" />
//     </section>
//   )
// }

// export default HeroSection

"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })
    
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05])

    const [titleNumber, setTitleNumber] = useState(0)
    const titles = useMemo(() => [
        "Precision",
        "Innovation",
        "Intelligence",
        "Spendora"
    ], [])
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
        <section 
            ref={containerRef}
            className="relative pt-10 md:pt-32 pb-24 md:pb-32 px-4 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900"
        >
            {/* Keep background elements from previous version */}
            <motion.div 
                style={{ y: yBg }}
                className="absolute inset-0 -z-10 opacity-40"
            >
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute top-40 right-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl mix-blend-screen" />
            </motion.div>

            <div className="absolute inset-0 -z-20 opacity-30 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Modified text section */}
            <div className="container mx-auto text-center max-w-6xl">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold mb-6 text-white">
                    <div className="flex flex-col items-center">
                        <span className="block mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                            Manage your Finance
                        </span>
                        <div className="inline-flex items-center justify-center relative h-16 md:h-20">
                            <span className="mr-2 text-cyan-100">with</span>
                            <span className="relative h-full w-48 md:w-56 text-left">
                                {titles.map((title, index) => (
                                    <motion.span 
                                        key={index}
                                        className="absolute left-0 font-bold text-white"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{
                                            y: titleNumber === index ? 0 : -50,
                                            opacity: titleNumber === index ? 1 : 0
                                        }}
                                        transition={{ type: 'spring', stiffness: 120 }}
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </div>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Simplify expense tracking, gain valuable insights, and make informed decisions with real-time AI-powered tools.
                </motion.p>

                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center space-x-4 py-1"
                >
                    <Link href="/dashboard">
                        <Button 
                            size="lg" 
                            className="px-8 bg-white text-purple-900 hover:bg-cyan-100 rounded-full shadow-lg transition-all duration-300 font-medium"
                        >
                            Get Started
                        </Button>
                    </Link>
                </motion.div>

                {/* Image container */}
                <motion.div 
                    style={{ scale: scaleImage }}
                    className="mt-16 md:mt-24 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-cyan-400/20 backdrop-blur-sm"
                >
                    <Image
                        src="/banner.jpg"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="w-full h-auto"
                        priority
                    />
                </motion.div>
            </div>

            {/* Subtle particles (reduced quantity) */}
            <div className="absolute inset-0 -z-10">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0, 0.4, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroSection