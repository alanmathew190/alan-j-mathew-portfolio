import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import weather from "../images/weatherapp.png";
import todo from "../images/toda.png";
import fullstacknotes from "../images/notesappfull.png";
import netflix from "../images/netflix.png";
import eventsphere from "../images/eventsphere.png";
import port from "../images/port.png";
import { useDarkMode } from "./ThemeContext";

function Projects() {
  const { darkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: eventsphere,
      title: "EventSphere – Event Management System",
      desc: `
A feature-rich full-stack event management platform designed for real-world use cases.
Includes role-based access control, admin approvals, event hosting, paid and free registrations, and QR-code based attendance verification.
Built using React for the frontend and Django for the backend, focusing on scalability, security, and structured data handling.
      `,
      live: "https://event-management-system-snowy-one.vercel.app/",
      git: "https://github.com/alanmathew190/EventManagementSystem.git",
      tags: ["React", "Django", "RBAC", "QR Code", "Admin Panel"],
    },
    {
      img: fullstacknotes,
      title: "Full Stack Notes Application",
      desc: `
A complete full-stack notes application with secure user authentication.
Users can register, log in, and manage personal notes with full CRUD functionality.
The backend is built using Django REST Framework with JWT authentication and PostgreSQL for persistent storage.
This project demonstrates full-stack integration, authentication workflows, and RESTful API design.
      `,
      live: "https://notes-full-stack-app.vercel.app/",
      git: "https://github.com/alanmathew190/NotesFullStackApp.git",
      tags: ["React", "Django", "JWT", "PostgreSQL"],
    },
    {
      img: todo,
      title: "To-Do List Application (React)",
      desc: `
A fully interactive task management application built using React.
Users can add, delete, and reorder tasks dynamically with smooth UI updates.
The project focuses on component-based architecture, state management, and clean UI interactions.
This app demonstrates strong understanding of React fundamentals, props, state handling, and user-driven workflows.
      `,
      live: "https://react-arcite-green.vercel.app/",
      git: "https://github.com/alanmathew190/reactArcite",
      tags: ["React", "State Management", "UI Logic"],
    },
    {
      img: weather,
      title: "Weather Forecast Application (React)",
      desc: `
A real-time weather application that allows users to search for any city and instantly view current weather conditions.
The app consumes a public weather API and dynamically updates the UI based on fetched data.
It includes error handling for invalid city inputs and demonstrates API integration, conditional rendering, and responsive design.
      `,
      live: "https://react-weather-app-nine-nu.vercel.app/",
      git: "https://github.com/alanmathew190/React-Weather-App.git",
      tags: ["React", "REST API", "Error Handling"],
    },
    {
      img: netflix,
      title: "Netflix Clone (TMDB API)",
      desc: `
A Netflix-inspired web application built with React that fetches movie and TV show data from the TMDB API.
Features include categorized listings such as Top Rated and Popular content, dynamic rendering, and localStorage usage.
The project focuses on API-driven UI, reusable components, and real-world data handling.
      `,
      live: "https://netflix-clone-app-bp9p.vercel.app/",
      git: "https://github.com/alanmathew190/Netflix-Clone-App.git",
      tags: ["React", "TMDB API", "Dynamic Rendering"],
    },
    {
      img: port,
      title: "Personal Portfolio Website",
      desc: `
A modern and responsive personal portfolio built using React and Tailwind CSS.
The website showcases projects, skills, and experience with smooth animations powered by Framer Motion.
Designed with a clean UI, dark mode support, and interactive sections to improve user engagement and readability.
      `,
      live: "https://react-portfolio-c8ri.vercel.app/",
      git: "https://github.com/alanmathew190/react-portfolio.git",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen py-16 px-6 ${
        darkMode ? "bg-[#000011]" : "bg-[#FFFDF2]"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Project Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Tilt key={index} scale={1.04}>
            <motion.div
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className={`cursor-pointer rounded-2xl overflow-hidden shadow-xl border ${
                darkMode
                  ? "bg-[#0d0d1a] border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Click to view details →
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* ✨ ENHANCED MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 40, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-xl w-full mx-4 rounded-3xl p-7 shadow-2xl border ${
                darkMode
                  ? "bg-[#0d0d1a]/90 border-purple-500/30"
                  : "bg-white/80 border-cyan-300/40 backdrop-blur-xl"
              }`}
            >
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mb-5" />

              {/* Description Box */}
              <div
                className={`rounded-xl p-4 mb-6 text-sm leading-relaxed ${
                  darkMode
                    ? "bg-[#141428] text-gray-300"
                    : "bg-cyan-50 text-gray-700"
                }`}
              >
                {selectedProject.desc}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                          : "bg-cyan-100 text-cyan-800"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  className="flex-1 text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition"
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.git}
                  target="_blank"
                  className="flex-1 text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
                >
                  GitHub
                </a>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
