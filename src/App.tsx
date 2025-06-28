import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export type PageType = 'home' | 'about' | 'projects' | 'achievements' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const isHomePage = currentPage === 'home';

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <AnimatedBackground />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className={`relative z-10 flex-1 transition-all duration-500 ease-in-out ${isHomePage ? 'pt-16 pb-8' : ''}`}>
        {renderPage()}
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;