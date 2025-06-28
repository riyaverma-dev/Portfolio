import React from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div 
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleNavigation('home')}
          >
            Riya Verma
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id as PageType)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-800 bg-black/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id as PageType)}
                  className={`px-3 py-2 text-left rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;