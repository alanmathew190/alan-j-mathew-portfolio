import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Award } from "lucide-react";
import { useDarkMode } from "./ThemeContext";

function Certificates() {
  const { darkMode } = useDarkMode();

  const certificates = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Feb 2024",
      link: "https://www.freecodecamp.org/certification/fcc13f7c373-87f7-4da2-a3ab-377893146af6/responsive-web-design",
    },
    {
      id: 2,
      title: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn",
      date: "Nov 2024",
      link: "https://www.linkedin.com/learning/certificates/c408c03e8fc2df4ee4c79c47f54f91479c66696ef56d19b80f5fb4d6461d2813",
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Dec 2024",
      link: "https://www.freecodecamp.org/certification/fcc13f7c373-87f7-4da2-a3ab-377893146af6/javascript-algorithms-and-data-structures-v8",
    },
  ];

  return (
    <div
      className={`h-fit py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-[#FFFDF2] text-gray-900"
      }`}
      id="certificates"
    >
      <h2
        className={`text-4xl font-bold left-1/2 transform -translate-x-1/2 text-center mb-12 relative inline-block`}
      >
        Certificates
        <span
          className={`absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 rounded ${
            darkMode ? "bg-purple-500" : "bg-green-400"
          }`}
        ></span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={darkMode ? 0.2 : 0.15}
              scale={1.05}
              transitionSpeed={1500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 relative overflow-hidden ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:shadow-xl hover:border-purple-500"
                    : "bg-white border-gray-200 hover:shadow-lg hover:border-green-400"
                }`}
              >
                {/* Glass shimmer / subtle blur overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                    darkMode
                      ? "bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-30 group-hover:opacity-50"
                      : "bg-gradient-to-tr from-green-400/10 via-yellow-200/5 to-cyan-400/10 opacity-30 group-hover:opacity-50"
                  }`}
                ></div>

                <div className="relative flex flex-col gap-2">
                  <div className="flex items-center gap-4 z-10 relative">
                    <Award
                      className={`w-10 h-10 transition-colors duration-500 ${
                        darkMode ? "text-purple-400" : "text-green-500"
                      }`}
                    />
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                  </div>
                  <p className="text-sm">{cert.issuer}</p>
                  <p className="text-xs">{cert.date}</p>
                </div>
              </motion.div>
            </Tilt>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
