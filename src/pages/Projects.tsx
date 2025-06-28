import React from 'react';
import { ExternalLink, Github, Code, Database, Calculator, Image, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Supermarket Billing System',
      description: 'A comprehensive GUI-based billing system for supermarket operations with inventory management, customer tracking, and receipt generation capabilities.',
      technologies: ['Java', 'Swing GUI', 'File Handling'],
      icon: Database,
      color: 'cyan',
      features: ['Product Management', 'Bill Generation', 'Inventory Tracking', 'Customer Records']
    },
    {
      title: 'Fingerprint Recognition using PCA',
      description: 'Team project implementing Principal Component Analysis for fingerprint recognition with GUI interface and training capabilities for multiple fingerprint patterns.',
      technologies: ['Java', 'PCA Algorithm', 'GUI', 'Image Processing'],
      icon: Code,
      color: 'purple',
      features: ['PCA Implementation', 'Fingerprint Training', 'Pattern Recognition', 'User Interface']
    },
    {
      title: 'Profit Maximization Strategy',
      description: 'Mathematical modeling project using calculus to optimize revenue strategies, analyzing market conditions and implementing optimization algorithms.',
      technologies: ['Calculus', 'Mathematical Modeling', 'Optimization'],
      icon: Calculator,
      color: 'green',
      features: ['Revenue Optimization', 'Mathematical Analysis', 'Strategy Modeling', 'Performance Metrics']
    },
    {
      title: 'Library Management System',
      description: 'Complete library management solution built in C with file handling for book inventory, member management, and transaction tracking.',
      technologies: ['C Language', 'File Handling', 'Data Structures'],
      icon: BookOpen,
      color: 'pink',
      features: ['Book Management', 'Member System', 'Transaction Records', 'Search Functionality']
    },
    {
      title: 'Digital Image Compression',
      description: 'Implementation of image compression algorithms using mathematical principles including the pigeonhole principle for efficient data reduction.',
      technologies: ['Algorithm Design', 'Mathematical Principles', 'Image Processing'],
      icon: Image,
      color: 'orange',
      features: ['Compression Algorithms', 'Mathematical Implementation', 'Data Optimization', 'Performance Analysis']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-600 bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      purple: 'from-purple-500 to-purple-600 bg-purple-500/10 text-purple-400 border-purple-500/30',
      green: 'from-green-500 to-green-600 bg-green-500/10 text-green-400 border-green-500/30',
      pink: 'from-pink-500 to-pink-600 bg-pink-500/10 text-pink-400 border-pink-500/30',
      orange: 'from-orange-500 to-orange-600 bg-orange-500/10 text-orange-400 border-orange-500/30'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of academic and technical projects demonstrating my skills in programming, mathematics, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                      <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200">
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} border ${colorClasses.split(' ')[4]} rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-full`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Interested in Collaboration?
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and explore innovative solutions. Let's connect and create something amazing together!
            </p>
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;