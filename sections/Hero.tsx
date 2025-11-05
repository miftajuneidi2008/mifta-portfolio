import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/mifta.jpg";
import * as motion from "motion/react-client";
const Hero = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh-100px)] max-w-6xl flex-col items-center justify-center md:flex-row">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="font-bold tracking-wide text-cyan-500">Hi</p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl">
            <span className="mb-2 block">My name is</span>
            <span className="block bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mifta Juneidi
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl text-blue-600 lg:text-3xl">
            Building Digital Futures
          </h2>
          <p className="mx-auto max-w-lg leading-relaxed text-slate-600 lg:mx-0">
            Ethiopian Web Developer dedicated to transforming complex ideas into
            intuitive, efficient, and visually stunning web applications.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="flex justify-center lg:justify-end"
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient ring */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-2xl" />

          {/* Image container with gradient border */}
          <div className="relative h-64 w-64 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
            <div className="h-full w-full overflow-hidden rounded-full bg-white p-1">
              <img
                src={HeroImage.src}
                alt="Mifta Juneidi"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 rounded-full bg-white px-4 py-2 shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <p className="text-sm">✨ Available</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 px-4 py-2 text-white shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <p className="text-sm">Web Developer</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
