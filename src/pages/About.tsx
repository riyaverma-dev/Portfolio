import React from 'react';
import { GraduationCap, Code, Palette, Users, User, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'C', 'HTML'],
      icon: Code,
      color: 'cyan'
    },
    {
      category: 'Tools & Software',
      items: ['Mathematica', 'Canva', 'MS Office', 'Google Sheets'],
      icon: Palette,
      color: 'purple'
    },
    {
      category: 'Creative Skills',
      items: ['Graphic Design', 'Video Editing'],
      icon: Palette,
      color: 'pink'
    },
    {
      category: 'Soft Skills',
      items: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management'],
      icon: Users,
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'from-cyan-500 to-cyan-600 bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      purple: 'from-purple-500 to-purple-600 bg-purple-500/10 text-purple-400 border-purple-500/30',
      pink: 'from-pink-500 to-pink-600 bg-pink-500/10 text-pink-400 border-pink-500/30',
      green: 'from-green-500 to-green-600 bg-green-500/10 text-green-400 border-green-500/30'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about exploring the intersection of technology, mathematics, and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile & Biography Section */}
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Riya Verma</h2>
                  <p className="text-cyan-400 font-medium">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Aspiring AI Innovator
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm">B.Tech Student • University of Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">My Story</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm Riya Verma, a first-year B.Tech. student at <span className="font-semibold text-cyan-400">Cluster Innovation Centre, University of Delhi</span>. I'm passionate about exploring AI, programming, and mathematical problem-solving to build real-world solutions.
                </p>
                
                <p>
                  With a creative mindset and strong analytical skills, I aim to grow through innovation, collaboration, and hands-on learning experiences. My journey in technology is driven by curiosity and the desire to create meaningful impact through intelligent solutions.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Intern @ Scalar School of Technology (YIIC)
                      </span>
                    </h4>
                    <p className="text-gray-300">Working on AI-driven real‑world challenges</p>
                    <p className="text-sm text-gray-400">Current Position</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Academic Background</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">B.Tech. in Information Technology and Mathematical Innovation</h4>
                    <p className="text-gray-300">Cluster Innovation Centre, University of Delhi</p>
                    <p className="text-sm text-gray-400">First Year Student</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Areas of Interest</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Mathematical Modeling', 'Algorithm Design', 'Creative Technology'].map((interest, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700 px-4 py-2 rounded-lg text-center text-sm font-medium text-gray-300 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-200">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              const colorClasses = getColorClasses(skillGroup.color);
              
              return (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 ${colorClasses.split(' ')[2]} ${colorClasses.split(' ')[3]} border ${colorClasses.split(' ')[4]} rounded-full text-sm font-medium hover:shadow-md hover:shadow-purple-500/10 transition-all duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;