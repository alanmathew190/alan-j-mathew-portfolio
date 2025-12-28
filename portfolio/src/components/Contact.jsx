// src/components/Contact/Contact.jsx

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { Element } from "react-scroll";
import { useDarkMode } from "./ThemeContext";
import emailjs from "emailjs-com";


const Contact = () => {
const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [step, setStep] = useState(1);
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

  const codeSnippet = [
    "// Initialize Alan's contact form API client",
    "const client = new ContactClient('alan-j-mathew.dev');",
    "",
    "// Prepare the message payload",
    "const payload = {",
    `  senderName: "${formData.name || "senderName"}",`,
    `  senderEmail: "${formData.email || "senderEmail"}",`,
    `  content: "${formData.message || "Your message here"}"`,
    "};",
    "",
    "// Attempt to send the message",
    "client.send(payload).then(response => {",
    "  console.log('Message sent successfully!', response.id);",
    "}).catch(error => {",
    "  console.error('Failed to send:', error);",
    "});",
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "alanmathew190@gmail.com",
      link: "mailto:alanmathew190@gmail.com",
      color: "text-cyan-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+91 9446631601",
      link: "https://wa.me/919446631601",
      color: "text-green-500",
    },
  ];

  const socialInfo = [
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedIn.com/in/alan-j-mathew",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: FaGithub,
      link: "https://github.com/alanmathew190",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/alan.j.mathew",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "name" && e.target.value.trim() !== "") setStep(2);
    if (e.target.name === "email" && e.target.value.trim() !== "") setStep(3);
    if (e.target.name === "message" && e.target.value.trim() !== "") setStep(4);
  };
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  emailjs
    .send(
      "service_fwiiy4z",
      "template_qth2lz6",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "bjoSYB7QE_bswMXRa"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setStep(1);

      setTimeout(() => setSuccess(false), 4000);
    })
    .catch((error) => {
      setLoading(false);
      console.error("EmailJS Error:", error);
    });
};


  return (
    <Element
      name="contact"
      className={
        darkMode ? "bg-gray-950 text-gray-100" : "bg-[#FFFDF2] text-gray-800"
      }
    >
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className={
              darkMode
                ? "text-4xl font-bold mb-12 text-center text-white"
                : "text-4xl font-bold mb-12 text-center text-gray-900"
            }
          >
            <span className="relative pb-2 inline-block">
              Let&apos;s Connect
              <span
                className={
                  darkMode
                    ? "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-cyan-400 rounded"
                    : "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-cyan-500 rounded"
                }
              ></span>
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            {" "}
            {/* --- COLUMN 1: CODE BLOCK --- */}{" "}
            <div className="lg:w-7/12">
              {" "}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                {" "}
                <div className="flex items-center p-3 bg-gray-800 text-gray-300 rounded-t-xl">
                  {" "}
                  <div className="flex space-x-2 mr-3">
                    {" "}
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>{" "}
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>{" "}
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>{" "}
                  </div>{" "}
                  <span className="text-sm font-mono">
                    {" "}
                    src/components/Contact.js{" "}
                  </span>{" "}
                </div>{" "}
                <div className="p-6 bg-gray-900 overflow-x-auto">
                  {" "}
                  <pre className="text-sm font-mono leading-relaxed">
                    {" "}
                    {codeSnippet.map((line, index) => (
                      <p
                        key={index}
                        className={
                          line.includes("//")
                            ? "text-gray-500"
                            : line.includes("const") || line.includes("return")
                            ? "text-yellow-400"
                            : line.includes("client.") ||
                              line.includes("log") ||
                              line.includes("error")
                            ? "text-blue-400"
                            : line.includes("{") ||
                              line.includes("}") ||
                              line.includes("(")
                            ? "text-white"
                            : "text-green-300"
                        }
                      >
                        {" "}
                        <span className="inline-block w-5 text-right text-gray-500 mr-2 select-none">
                          {" "}
                          {index + 1}{" "}
                        </span>{" "}
                        {line}{" "}
                      </p>
                    ))}{" "}
                  </pre>{" "}
                </div>{" "}
              </div>
              {/* Form */}
              <div
                className={`p-6 mt-4 rounded-lg shadow-lg ${
                  darkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={
                    darkMode
                      ? "text-2xl font-semibold mb-6 text-white"
                      : "text-2xl font-semibold mb-6 text-gray-800"
                  }
                >
                  Input Parameters
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {step >= 1 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        className={
                          darkMode
                            ? "block text-sm font-medium text-gray-200 mb-1"
                            : "block text-sm font-medium text-gray-700 mb-1"
                        }
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 ${
                          darkMode
                            ? "bg-gray-800 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-800"
                        }`}
                        placeholder="senderName"
                      />
                    </div>
                  )}

                  {step >= 2 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        className={
                          darkMode
                            ? "block text-sm font-medium text-gray-200 mb-1"
                            : "block text-sm font-medium text-gray-700 mb-1"
                        }
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 ${
                          darkMode
                            ? "bg-gray-800 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-800"
                        }`}
                        placeholder="senderEmail"
                      />
                    </div>
                  )}

                  {step >= 3 && (
                    <div className="transition-all duration-500 ease-in-out">
                      <label
                        className={
                          darkMode
                            ? "block text-sm font-medium text-gray-200 mb-1"
                            : "block text-sm font-medium text-gray-700 mb-1"
                        }
                      >
                        Message (content):
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 transition duration-150 ${
                          darkMode
                            ? "bg-gray-800 border-gray-600 text-white"
                            : "bg-white border-gray-300 text-gray-800"
                        }`}
                        placeholder="Your message content here..."
                      ></textarea>
                    </div>
                  )}

                  {step >= 4 && (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex items-center justify-center space-x-3 px-6 py-3 rounded-md shadow-lg text-white transition duration-300 ${
                        loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 hover:-translate-y-0.5"
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-lg" />
                          <span>Execute Client.Send()</span>
                        </>
                      )}
                    </button>
                  )}
                </form>
                {success && (
                  <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 animate-fade-in">
                    ✅ Message sent successfully! I’ll get back to you soon.
                  </div>
                )}
              </div>
            </div>
            {/* Contact Info */}
            <div
              className={`lg:w-5/12 p-8 rounded-lg shadow-xl ${
                darkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={
                  darkMode
                    ? "text-2xl font-bold mb-6 text-white border-b pb-2 border-cyan-700"
                    : "text-2xl font-bold mb-6 text-gray-900 border-b pb-2 border-cyan-100"
                }
              >
                Reach Out Directly
              </h3>
              <div className="space-y-4 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 -ml-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                  >
                    <item.icon
                      className={`text-2xl ${item.color} group-hover:scale-105 transition duration-300`}
                    />
                    <div>
                      <span
                        className={
                          darkMode
                            ? "block text-sm font-semibold text-white"
                            : "block text-sm font-semibold text-gray-900"
                        }
                      >
                        {item.label}
                      </span>
                      <span
                        className={
                          darkMode
                            ? "block text-sm text-gray-300"
                            : "block text-sm text-gray-600"
                        }
                      >
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <h3
                className={
                  darkMode
                    ? "text-xl font-bold mb-4 text-white border-b pb-2 border-cyan-700"
                    : "text-xl font-bold mb-4 text-gray-900 border-b pb-2 border-cyan-100"
                }
              >
                Connect Online
              </h3>
              <div className="flex space-x-6 pt-2">
                {socialInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl text-gray-500 transition duration-200 ${item.color} hover:scale-110`}
                    aria-label={item.label}
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={
          darkMode
            ? "w-full bg-gray-800 border-t border-gray-700 py-4"
            : "w-full bg-gray-100 border-t border-gray-200 py-4"
        }
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className={
              darkMode ? "text-gray-300 text-sm" : "text-gray-500 text-sm"
            }
          >
            &copy; 2025 Alan J Mathew. All rights reserved.
          </p>
        </div>
      </footer>
    </Element>
  );
};

export default Contact;
