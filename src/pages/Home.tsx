import React from 'react';
import { ArrowRight, Code, Brain, Sparkles, User } from 'lucide-react';
import { PageType } from '../App';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25">
              <User className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Riya Verma
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Aspiring AI Innovator
              </span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Blending logic, creativity, and data to design tomorrow's intelligence.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-6 my-8">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-full group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xs font-medium text-cyan-300">Programming</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs font-medium text-purple-300">AI & ML</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 rounded-full group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <span className="text-xs font-medium text-pink-300">Innovation</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
            <button
              onClick={() => onNavigate('projects')}
              className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => onNavigate('contact')}
              className="group border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold text-sm hover:bg-purple-500 hover:text-white hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12 pt-6 border-t border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">5+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">3+</div>
              <div className="text-xs text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">2</div>
              <div className="text-xs text-gray-400">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;