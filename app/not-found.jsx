"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Image src="/404.svg" alt="Page Not Found" width={400} height={300} />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-6xl font-extrabold tracking-tight"
      >
        404
      </motion.h1>
      <p className="text-lg text-gray-400 mt-4 max-w-lg">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6"
      >
        <Link href="/">
          <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 shadow-lg transform hover:scale-105 transition">
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
