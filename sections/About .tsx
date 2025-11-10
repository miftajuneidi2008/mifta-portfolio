import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import me from "@/assets/images/mifta.jpg";

const About = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-2 sm:h-screen">
      <div className="title-container mb-10">
        <h3 className="title">About Me</h3>
      </div>

      <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left - Image */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="h-64 w-64 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
            
              <img
                src={me.src}
                alt="Profile"
                className="h-full w-full object-cover z-10"
              />
            </motion.div>
            <motion.div
              className="absolute -right-4 -bottom-4 h-12 w-12 rounded-full border-4 border-white bg-green-500 shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full-Stack Web Developer
          </motion.h1>

          <motion.p
            className="mb-6 text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Passionate developer specializing in building modern, scalable web
            applications with cutting-edge technologies. I transform ideas into
            elegant, high-performance digital experiences that users love.
          </motion.p>

          <motion.p
            className="mb-8 text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            With expertise spanning front-end to back-end development, I create
            seamless solutions that combine beautiful interfaces with robust
            architecture. I believe in writing clean, maintainable code and
            staying current with the latest industry best practices.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-white transition-colors hover:bg-slate-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
            <motion.a
              href="#"
              className="p-3 text-slate-700 transition-colors hover:text-slate-900"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
