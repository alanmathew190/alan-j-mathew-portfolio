import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import meImg from "../images/me1.png";
import { useDarkMode } from "./ThemeContext";
import alangpt from "../images/alangpt.png"


function HeroBanner() {
  const { darkMode } = useDarkMode();

  const tiltOptions = {
    max: 10,
    scale: 1.05,
    speed: 1000,
    perspective: 1000,
    glareEnable: true,
    glareMaxOpacity: 0.2,
    glareColor: "#ffffff",
    glarePosition: "all",
  };

  const linkColor = darkMode
    ? "text-gray-300 hover:text-cyan-400"
    : "text-gray-700 hover:text-cyan-600";

  return (
    <div
      className={`p-7 pt-50 relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-[#FFFDF2] text-gray-900"
      }`}
      id="about"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full top-30 left-20 animate-pulse mix-blend-multiply"></div>
        <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full bottom-15 right-30 animate-pulse mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left: Text */}
        <div className="md:w-3/5 lg:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-colors duration-500 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-cyan-600 via-sky-600 to-blue-900 bg-clip-text text-transparent animate-gradient">
              Alan J Mathew
            </span>
          </motion.h1>

          <motion.div
            className={`text-2xl md:text-3xl lg:text-4xl mt-4 font-medium transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "React Developer",
                  "Django Backend Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.p
            className={`max-w-3xl text-base md:text-lg mt-6 leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            B.Tech graduate specializing in full stack web development, building
            scalable applications using React, Django, and RESTful APIs with a
            strong UI focus.
          </motion.p>

          {/* Buttons and Links */}
          <motion.div
            className="flex flex-col sm:flex-row mt-8 md:mt-10 items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            {/* Resume Download */}
            <motion.a
              href="/AlanResume14-10-25.pdf"
              download
              className="bg-gradient-to-r from-cyan-600 to-blue-700 px-7 py-3 font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-lg mb-4 sm:mb-0 sm:mr-5"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>

            {/* Social Links */}
            <div className="flex w-40 justify-between">
              {[
                {
                  href: "https://www.linkedin.com/in/alan-j-mathew/",
                  icon: (
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  ),
                },
                {
                  href: "https://github.com/alanmathew190",
                  icon: (
                    <path d="M12 1C5.924 1 1 5.924 1 12c0 4.867 3.153 8.987 7.523 10.437.55.102.75-.238.75-.53v-1.866c-3.065.666-3.706-1.48-3.706-1.48-.5-1.273-1.222-1.613-1.222-1.613-.998-.682.076-.668.076-.668 1.103.078 1.684 1.132 1.684 1.132.981 1.682 2.576 1.197 3.207.915.1-.71.384-1.197.698-1.472-2.447-.279-5.017-1.223-5.017-5.438 0-1.203.429-2.186 1.132-2.955-.113-.28-.49-1.403.108-2.925 0 0 .923-.296 3.027 1.129a10.51 10.51 0 0 1 5.506 0c2.104-1.425 3.027-1.129 3.027-1.129.598 1.522.221 2.645.108 2.925.703.769 1.132 1.752 1.132 2.955 0 4.228-2.576 5.155-5.031 5.429.395.34.75 1.013.75 2.047v3.04c0 .296.2.64.756.53C19.85 20.988 23 16.868 23 12c0-6.076-4.924-11-11-11z" />
                  ),
                },
                {
                  href: "mailto:alanmathew190@gmail.com",
                  icon: (
                    <>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </>
                  ),
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkColor} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Tilt options={tiltOptions}>
            <div
              className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden border-4 shadow-2xl transition-colors duration-500 ${
                darkMode ? "border-gray-700" : "border-[#FFFDF2]"
              }`}
            >
              <img
                className="absolute w-full h-full object-cover object-top"
                src={alangpt}
                alt="Alan J Mathew"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroBanner;
