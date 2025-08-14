'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'NongkiYuk!',
      description: 'A realtime app with notification that helped people to search any cafe, restaurant, or coffee shop with their own needed based on Jakarta Selatan.',
      image: '/images/nongkiyuk.png',
      tags: ['Flutter', 'Firebase'],
      github: 'https://github.com/barunapasha/nongkiyuk',
      live: '#',
      featured: true,
    },
    {
      title: 'UperFood',
      description: 'E-commerce platform promoting canteen university products with payment integration.',
      image: '/images/uperfood.png',
      tags: ['Laravel', 'PHP', 'TailwindCSS'],
      github: 'https://github.com/barunapasha/uperfood',
      live: '#',
      featured: true,
    },
    {
      title: 'Calendar App',
      description: 'A modern calendar application with event management and scheduling features.',
      image: '/images/calendar-app.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/barunapasha/calendar-app',
      live: '#',
      featured: false,
    },
    {
      title: 'Event Management',
      description: 'Event management platform for organizing and managing events with real-time updates.',
      image: '/images/event-reactJS.png',
      tags: ['React.js', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/barunapasha/event-management',
      live: '#',
      featured: false,
    },
    {
      title: 'Quiz Web App',
      description: 'Interactive quiz application with multiple choice questions and score tracking.',
      image: '/images/quis-web.png',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/barunapasha/quiz-app',
      live: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-black/80 dark:via-black/60 dark:to-black/80 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-brand-purple via-purple-600 to-purple-400 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white leading-relaxed">
              A showcase of my best work and personal projects. Each project represents unique challenges 
              and learning experiences in web and mobile development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-white max-w-2xl">
                These are my standout projects that showcase my skills and passion for development.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group bg-white dark:bg-black/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-blue-800"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={350}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <FiGithub className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <FiExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gradient-to-r from-brand-purple/10 to-purple-400/10 text-brand-purple dark:text-purple-300 rounded-full text-sm font-medium border border-brand-purple/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-blue-400 hover:text-brand-purple transition-colors duration-300 font-medium"
                      >
                        <FiGithub className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-blue-400 hover:text-brand-purple transition-colors duration-300 font-medium"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h2>
            <p className="text-gray-600 dark:text-white max-w-2xl">
              Explore my complete portfolio of projects, from web applications to mobile apps.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-white dark:bg-black/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-blue-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <FiGithub className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <FiExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white text-sm mb-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gradient-to-r from-brand-purple/10 to-purple-400/10 text-brand-purple dark:text-purple-300 rounded-full text-xs font-medium border border-brand-purple/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-blue-400 hover:text-brand-purple transition-colors duration-300 font-medium"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-blue-400 hover:text-brand-purple transition-colors duration-300 font-medium"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-brand-purple/5 via-purple-400/5 to-brand-purple/5 dark:from-brand-purple/10 dark:via-purple-400/10 dark:to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-white mb-8 leading-relaxed">
              Let's discuss your project and bring your ideas to life. I'm always excited to work on new challenges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
