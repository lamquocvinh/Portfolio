import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hinhCv from './assets/hinh-CV.jpg';
import CV from './assets/Lâm_Quốc_Vinh_CV.pdf';
import fptLogo from './assets/logo_FPT-removebg-preview.png';
import { useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiVercel,
  SiGithub,
  SiFigma,
  SiPostman,
  SiMongodb,
  SiAntdesign,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Portfolio() {

  const prefersReducedMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();
  const blob1YTransform = useTransform(scrollY, [0, 1000], [0, 200]);
  const blob2YTransform = useTransform(scrollY, [0, 1000], [0, -150]);

  const blob1Y = (isMobile || prefersReducedMotion) ? 0 : blob1YTransform;
  const blob2Y = (isMobile || prefersReducedMotion) ? 0 : blob2YTransform;

  const phrases = ["Web development", "Software engineer", "Eager to learn"];

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, prefersReducedMotion]);


  useEffect(() => {

    if (isMobile || prefersReducedMotion) {
      setTypedText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIndex, isMobile, prefersReducedMotion]);

  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "React Native", icon: TbBrandReactNative, color: "text-cyan-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "RTK Query", icon: SiRedux, color: "text-purple-400" },
    { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "Git & GitHub", icon: SiGithub, color: "text-gray-300" },
    { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Antd", icon: SiAntdesign, color: "text-blue-400" },

  ];


  return (
    <div className="relative min-h-screen overflow-hidden  text-white">

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#050505]" />

      <div className="absolute -top-10 -right-10 w-[400px] h-[400px] bg-violet-300/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-violet-500/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 -right-40 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-2/4 -left-40 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[1000px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%)]" />

      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

        {/* Animated blobs with Framer Motion */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            x: mousePosition.x / 20,
            y: blob1Y,
            opacity: 0.3
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
            x: -mousePosition.x / 30,
            y: mousePosition.y / 30 + 100,
            opacity: 0.2
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute left-1/4 bottom-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            y: blob2Y,
            opacity: 0.2
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>



      {/* Content */}
      <div className="relative px-6 md:px-20 lg:px-24 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-32"
        >
          <div>
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-3"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "200% 50%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "linear-gradient(90deg, #fff, #a78bfa, #ec4899, #fff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Lâm Quốc Vinh
            </motion.h1>
            <div className="flex items-center gap-3">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-gray-400 text-2xl">Frontend Developer</p>
            </div>
          </div>

          <motion.nav
            className="flex gap-8 text-lg"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {["Education", "Projects", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
                variants={fadeUp}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-3xl flex-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building digital experiences that{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  matter
                </span>
              </h2>

              {/* Typing animation */}
              <div className="text-3xl md:text-4xl font-semibold mb-8 h-12 flex items-center">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent pb-1">
                  {typedText}
                </span>
                {!isMobile && !prefersReducedMotion && (
                  <motion.span
                    className="inline-block w-1 h-8 bg-purple-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}

              </div>

              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Frontend Developer with expertise in building scalable web applications.
                Strong background in frontend architecture, backend integration, and
                system design. Team Lead with experience guiding developers and
                designing application flows.
              </p>
            </div>

            {/* Profile Image Container */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ padding: "4px" }}
              />

              {/* Image container */}

              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black"
                whileHover={
                  !isMobile && !prefersReducedMotion
                    ? { scale: 1.05 }
                    : {}
                }

              >
                <img
                  src={hinhCv}
                  alt="Lam Quoc Vinh"
                  className="w-full h-full object-cover object-[50%_35%]"
                />
              </motion.div>


              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            Education
          </motion.h2>

          <motion.div
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.3)" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="
    w-14 h-14 rounded-lg
    bg-white/10
    flex items-center justify-center
    border border-white/15
    backdrop-blur-sm
  ">
                <img
                  src={fptLogo}
                  alt="FPT University"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">FPT University</h3>
                <p className="text-gray-400">Bachelor of Software Engineering</p>
              </div>
            </div>


            <div className="flex flex-wrap gap-3 mb-6">

              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                GPA: 3.0 / 4.0
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              Studying at FPT University, a leading institution in technology education in Vietnam. Currently pursuing a degree in Software Engineering with a focus on web development and modern software solutions
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={CV}
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <motion.h2
            className="text-4xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Contract Management System (CoMS)",
                desc: "A corporate contract management system developed for Hisoft, featuring digital approval workflows, real-time notifications, and integrated digital signatures to streamline enterprise contract operations.",
                tech: ["React", "Tailwind CSS", "RTK Query", "Socket.io", "REST API", "React Native"],
                color: "from-indigo-500/20 to-purple-500/20",
                github: ""
              },
              {
                title: "Travel Booking Platform",
                desc: "Online hotel booking platform with multi-role access, payment integration, and optimized performance.",
                tech: ["React", "Tailwind CSS", "REST API", "PayOS"],
                color: "from-pink-500/20 to-purple-500/20",
                github: "https://github.com/lamquocvinh/travelbooking"
              },
              {
                title: "School Medical Management System",
                desc: "Web-based system for managing student health records, vaccinations, and medical workflows with role-based access control.",
                tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
                color: "from-purple-500/20 to-blue-500/20",
                github: "https://github.com/lamquocvinh/Health_management_FE"
              },
              {
                title: "History Course Web Application",
                desc: "E-learning platform for Vietnamese history courses with chapter-based roadmap, interactive lessons, and quiz assessments after each video lesson.",
                tech: ["React", "Tailwind CSS", "REST API"],
                color: "from-indigo-500/20 to-purple-500/20",
                github: "https://github.com/lamquocvinh/History_education_FE"
              },


            ].map((project) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl
    border border-white/10
    bg-white/5 md:backdrop-blur-xl
    p-8 cursor-pointer"
                variants={fadeUp}
                whileHover={
                  isMobile
                    ? {}
                    : { y: -12, scale: 1.03 }
                }

                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* ===== BG MÀU – HIỆN RÕ ===== */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-br ${project.color}
      transition-opacity duration-300`}
                />

                {/* ===== GLOW ===== */}
                <div
                  className="absolute inset-0 rounded-2xl
      opacity-0 group-hover:opacity-100
      shadow-[0_0_60px_rgba(168,85,247,0.35)]
      transition-opacity duration-300"
                />

                {/* ===== CONTENT ===== */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    <motion.svg
                      className="w-6 h-6 text-gray-400 group-hover:text-purple-400"
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ duration: 0.2 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </motion.svg>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full
            bg-black/30 border border-white/10
            text-gray-200"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(168,85,247,0.6)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  {/* ===== ACTIONS ===== */}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
      inline-flex items-center gap-2 mt-6
      px-5 py-2.5 rounded-xl
      border border-white/20
      text-sm font-medium text-white
      hover:bg-white/10
      transition
    "
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* GitHub Icon */}
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.41-5.24 5.69.41.35.77 1.05.77 2.12v3.15c0 .31.21.67.8.56a11.52 11.52 0 0 0 7.86-10.96C23.5 5.74 18.27.5 12 .5z" />
                      </svg>
                      View on GitHub
                    </motion.a>
                  )}

                </div>
              </motion.div>

            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-32">
          <motion.h2
            className="text-4xl font-bold mb-12 flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            Skills & Technologies
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  className="
          group relative flex items-center gap-3
          px-6 py-3 rounded-full
          border border-white/10
          bg-white/5 md:backdrop-blur-md
          text-gray-300 cursor-pointer
        "
                  variants={{
                    initial: { opacity: 0, scale: 0.85 },
                    animate: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: "rgba(168, 85, 247, 0.6)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Glow */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Icon */}
                  <Icon
                    className={`relative text-xl ${skill.color} group-hover:scale-110 transition`}
                  />

                  {/* Text */}
                  <span className="relative font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

        </section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            Get In Touch
          </h2>

          <div className="max-w-2xl">
            <p className="text-xl text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:lamvinh940@gmail.com"
                className="group flex items-center gap-3 text-gray-300"
                whileHover={{ x: 10, color: "#a78bfa" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                  whileHover={{ borderColor: "rgba(168, 85, 247, 0.5)", scale: 1.1 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <span className="text-lg">lamvinh940@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://github.com/lamquocvinh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300"
                whileHover={{ x: 10, color: "#a78bfa" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                  whileHover={{ borderColor: "rgba(168, 85, 247, 0.5)", scale: 1.1 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span className="text-lg">github.com/lamquocvinh</span>
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center py-12 pb-0 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500">
            © 2025 Lam Quoc Vinh. Crafted with passion and code.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}