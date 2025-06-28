import React from 'react';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:riya.verma.4030@gmail.com',
      label: 'Email',
      color: 'text-cyan-400 hover:text-cyan-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/riya-verma-38512a2b8',
      label: 'LinkedIn',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: MapPin,
      href: '#',
      label: 'Delhi, India',
      color: 'text-purple-400 hover:text-purple-300'
    }
  ];

  return (
    <footer className="relative z-10 bg-black/90 backdrop-blur-md border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Riya Verma
            </h3>
            <p className="text-sm text-gray-400">Aspiring AI Innovator</p>
          </div>

          {/* Center - Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`p-2 rounded-lg ${link.color} transition-all duration-200 hover:scale-110 hover:bg-gray-800/50`}
                  aria-label={link.label}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart size={14} className="text-pink-400" />
              <span>by Riya Verma</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;