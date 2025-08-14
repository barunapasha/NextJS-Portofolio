'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassIcons from '@/Components/GlassIcons/GlassIcons';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiFlutter, 
  SiDart,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiGraphql,
  SiAmazon,
  SiVercel
} from 'react-icons/si';
import { 
  MdDevices, 
  MdApi 
} from 'react-icons/md';

const AboutPage = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Flutter', 'Dart',
    'PHP', 'Laravel', 'MySQL', 'MongoDB', 'Firebase', 'TailwindCSS', 'CSS3', 'HTML5',
    'Git', 'GitHub', 'Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Design',
    'RESTful APIs', 'GraphQL', 'Docker', 'AWS', 'Vercel', 'Netlify'
  ];

  // GlassIcons items untuk Skills & Technology
  const skillsIcons = [
    { icon: <SiJavascript className="w-8 h-8" />, color: 'yellow', label: 'JavaScript' },
    { icon: <SiTypescript className="w-8 h-8" />, color: 'blue', label: 'TypeScript' },
    { icon: <SiReact className="w-8 h-8" />, color: 'cyan', label: 'React.js' },
    { icon: <SiNextdotjs className="w-8 h-8" />, color: 'black', label: 'Next.js' },
    { icon: <SiNodedotjs className="w-8 h-8" />, color: 'green', label: 'Node.js' },
    { icon: <SiFlutter className="w-8 h-8" />, color: 'blue', label: 'Flutter' },
    { icon: <SiDart className="w-8 h-8" />, color: 'blue', label: 'Dart' },
    { icon: <SiPhp className="w-8 h-8" />, color: 'purple', label: 'PHP' },
    { icon: <SiLaravel className="w-8 h-8" />, color: 'red', label: 'Laravel' },
    { icon: <SiMysql className="w-8 h-8" />, color: 'blue', label: 'MySQL' },
    { icon: <SiMongodb className="w-8 h-8" />, color: 'green', label: 'MongoDB' },
    { icon: <SiFirebase className="w-8 h-8" />, color: 'orange', label: 'Firebase' },
    { icon: <SiTailwindcss className="w-8 h-8" />, color: 'cyan', label: 'TailwindCSS' },
    { icon: <SiCss3 className="w-8 h-8" />, color: 'blue', label: 'CSS3' },
    { icon: <SiHtml5 className="w-8 h-8" />, color: 'orange', label: 'HTML5' },
    { icon: <SiGit className="w-8 h-8" />, color: 'orange', label: 'Git' },
    { icon: <SiGithub className="w-8 h-8" />, color: 'black', label: 'GitHub' },
    { icon: <SiFigma className="w-8 h-8" />, color: 'purple', label: 'Figma' },
    { icon: <SiAdobexd className="w-8 h-8" />, color: 'pink', label: 'Adobe XD' },
    { icon: <MdDevices className="w-8 h-8" />, color: 'green', label: 'Responsive Design' },
    { icon: <MdApi className="w-8 h-8" />, color: 'blue', label: 'RESTful APIs' },
    { icon: <SiGraphql className="w-8 h-8" />, color: 'pink', label: 'GraphQL' },
    { icon: <SiAmazon className="w-8 h-8" />, color: 'orange', label: 'AWS' },
    { icon: <SiVercel className="w-8 h-8" />, color: 'black', label: 'Vercel' },
  ];

  const experiences = [
    {
      year: '2025 - Present',
      title: 'Computer Network Lab Assistant',
      company: 'Universitas Pertamina',
      description: 'Teaching students networking fundamentals using Cisco Packet Tracer and contributing to curriculum development.',
    },
    {
      year: '2024 - 2024',
      title: 'System Operation Lab Assistant',
      company: 'Universitas Pertamina',
      description: 'Instructed students in Linux system operations and managed laboratory resources for 5 months.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Universitas Pertamina',
      year: '2022 - 2026',
      description: 'Currently in 6th semester, focusing on software engineering and web development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-black/80 dark:via-black/60 dark:to-black/80 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-brand-purple via-purple-600 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white leading-relaxed">
              A passionate frontend developer with a unique journey from competitive swimming to software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">My Journey</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-white leading-relaxed">
                <p>
                  My journey into the world of technology is a bit unconventional. For years, my life revolved around the discipline and rigor of competitive swimming, which taught me about dedication, perseverance, and the pursuit of excellence.
                </p>
                <p>
                  Now, as a 6th-semester computer science student, I've found that the thrill of building an application from scratch rivals the excitement of a race. I was captivated by the process of turning an idea into a functional and beautiful piece of software, and I knew I had found my new passion.
                </p>
                <p>
                  While I may have swapped my swim cap for a keyboard, I carry the same focus and determination from my athletic career into every project I undertake. I'm excited to build amazing digital experiences, and I truly love what I do! 💜
                </p>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900 rounded-full transform -translate-x-4 -translate-y-4 animate-pulse-slow" style={{ filter: 'blur(80px)', zIndex: -1 }}></div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/images/foto-1.jpg"
                    alt="Baruna Pasha"
                    width={500}
                    height={500}
                    className="rounded-2xl w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Technology Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Technologies</h2>
            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-blue-800">
              <GlassIcons items={skillsIcons} className="max-w-6xl mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-black/80 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-blue-800"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    <div className="flex-shrink-0">
                      <div className="text-sm text-brand-purple font-semibold bg-brand-purple/10 px-3 py-1 rounded-full inline-block">
                        {exp.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <p className="text-brand-purple font-medium mb-4">{exp.company}</p>
                      <p className="text-gray-600 dark:text-white leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="bg-white dark:bg-black/80 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-blue-800"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    <div className="flex-shrink-0">
                      <div className="text-sm text-brand-purple font-semibold bg-brand-purple/10 px-3 py-1 rounded-block">
                        {edu.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                      <p className="text-brand-purple font-medium mb-4">{edu.school}</p>
                      <p className="text-gray-600 dark:text-white leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center p-6 lg:p-8 bg-white dark:bg-black/80 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Focus</h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Maintaining laser-sharp focus on goals and delivering exceptional results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center p-6 lg:p-8 bg-white dark:bg-black/80 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Perseverance</h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Overcoming challenges with determination and never giving up on excellence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-center p-6 lg:p-8 bg-white dark:bg-black/80 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
              >
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  Constantly learning and pushing boundaries to create cutting-edge solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-brand-purple/5 via-purple-400/5 to-brand-purple/5 dark:from-brand-purple/10 dark:via-purple-400/10 dark:to-brand-purple/10 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-blue-800">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to work together?</h3>
              <p className="text-lg text-gray-600 dark:text-white mb-8 leading-relaxed">
                Let's create something amazing together. I'm always excited to take on new challenges.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
