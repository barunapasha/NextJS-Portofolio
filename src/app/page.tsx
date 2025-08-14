'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiCheck } from 'react-icons/fi';
// import LightRays from '@/Backgrounds/LightRays/LightRays';

const HomePage = () => {
  const projects = [
    {
      title: 'NongkiYuk!',
      description: 'A semi-realtime using Flutter and combine with Firebase that helped people to search any cafe, restaurant, or coffee shop with their own needed based on Jakarta Selatan.',
      image: '/images/nongkiyuk.png',
      tags: ['Flutter', 'Firebase'],
    },
    {
      title: 'UperFood',
      description: 'E-commerce platform using PHP, HTML & TailwindCSS promoting canteen university products with third-party payment integration.',
      image: '/images/uperfood.png',
      tags: ['PHP', 'Laravel', 'TailwindCSS'],
    },
  ];

  const experiences = [
    {
      company: 'Computer Network Lab Assistant',
      location: '@ Universitas Pertamina',
      period: 'Feb 2025 - Present',
      points: [
        'Teach students about the basics of networking using cisco packet tracer',
        'Work with 2 other person and create a great team with just 3 people',
        'Contributed on making final task using cisco',
      ],
    },
    {
      company: 'System Operation Lab Assistant',
      location: '@ Universitas Pertamina',
      period: 'Feb 2024 - Jul 2024',
      points: [
        'Teach students about the basics of System Operation using Linux',
        'Work with 2 other person and create a great team with just 3 people',
        'Work for approximately 5 months on-site',
      ],
    },
  ];

  const skills = [
    {
      category: 'Web Design',
      items: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
    },
    {
      category: 'Frontend',
      items: ['Javascript', 'React.JS', 'Flutter', 'CSS3'],
    },
    {
      category: 'Backend',
      items: ['NodeJs', 'php', 'Laravel', 'MySQL'],
    },
    {
      category: 'Soft Skills',
      items: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-brand-dark dark:via-gray-900 dark:to-brand-dark">
      {/* LightRays Background - Temporarily Disabled */}
      {/* <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <LightRays
          origin="top-center"
          intensity={0.3}
          color="#6E00FF"
          className="custom-rays"
        />
      </div> */}
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
              >
                Hey, I'm Baruna 👋
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
              >
                <span className="bg-gradient-to-r from-brand-purple via-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Frontend
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Developer</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                I'm a frontend developer based in Jakarta, Indonesia, passionate about creating beautiful and functional web experiences.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Projects
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900 rounded-full transform -translate-x-4 -translate-y-4 animate-pulse-slow" style={{ filter: 'blur(80px)', zIndex: -1 }}></div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/images/foto-3.jpg"
                    alt="Baruna"
                    width={480}
                    height={480}
                    className="rounded-full w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative z-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center"
          >
            Newest Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    {project.title}
                    <FiExternalLink className="h-5 w-5 ml-2 text-gray-400 hover:text-brand-purple transition-colors" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gradient-to-r from-brand-purple/10 to-purple-400/10 text-brand-purple dark:text-purple-300 rounded-full text-sm font-medium border border-brand-purple/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative z-10" id="experience">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center"
          >
            Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-sm text-brand-purple font-semibold bg-brand-purple/10 px-3 py-1 rounded-full inline-block">
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.company}</h3>
                    <p className="text-brand-purple font-medium mb-4">{exp.location}</p>
                    <ul className="space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                          <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center"
          >
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <FiCheck className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-12">My Story</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                My journey into the world of technology is a bit unconventional. For years, my life revolved around the discipline and rigor of competitive swimming, which taught me about dedication, perseverance, and the pursuit of excellence.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Now, as a 6th-semester computer science student, I've found that the thrill of building an application from scratch rivals the excitement of a race. I was captivated by the process of turning an idea into a functional and beautiful piece of software, and I knew I had found my new passion.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                While I may have swapped my swim cap for a keyboard, I carry the same focus and determination from my athletic career into every project I undertake. I'm excited to build amazing digital experiences, and I truly love what I do! 💜
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
