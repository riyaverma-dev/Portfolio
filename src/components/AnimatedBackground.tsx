import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="circuit-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="8s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#circuit-gradient-2)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="100,0;50,50;0,100;50,50;100,0" dur="10s" repeatCount="indefinite" />
        </line>
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="15s" repeatCount="indefinite" />
        </line>
        
        {/* Vertical lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="12s" repeatCount="indefinite" />
        </line>
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#circuit-gradient-2)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="100,0;50,50;0,100;50,50;100,0" dur="9s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;50,50;0,100" dur="14s" repeatCount="indefinite" />
        </line>

        {/* Diagonal circuit paths */}
        <line x1="0" y1="0" x2="30%" y2="30%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0;25,25;0,50" dur="11s" repeatCount="indefinite" />
        </line>
        <line x1="70%" y1="0" x2="100%" y2="30%" stroke="url(#circuit-gradient-2)" strokeWidth="1" className="animate-pulse">
          <animate attributeName="stroke-dasharray" values="50,0;25,25;0,50;25,25;50,0" dur="13s" repeatCount="indefinite" />
        </line>

        {/* Circuit nodes */}
        <circle cx="25%" cy="20%" r="3" fill="#3b82f6" className="animate-ping" />
        <circle cx="75%" cy="60%" r="3" fill="#8b5cf6" className="animate-ping" style={{animationDelay: '1s'}} />
        <circle cx="25%" cy="60%" r="3" fill="#ec4899" className="animate-ping" style={{animationDelay: '2s'}} />
        <circle cx="75%" cy="20%" r="3" fill="#10b981" className="animate-ping" style={{animationDelay: '3s'}} />
        <circle cx="50%" cy="40%" r="2" fill="#06b6d4" className="animate-ping" style={{animationDelay: '4s'}} />
        <circle cx="25%" cy="80%" r="2" fill="#f59e0b" className="animate-ping" style={{animationDelay: '5s'}} />
        <circle cx="75%" cy="80%" r="2" fill="#ef4444" className="animate-ping" style={{animationDelay: '6s'}} />

        {/* Tech geometric shapes */}
        <rect x="10%" y="10%" width="8" height="8" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" className="animate-pulse" />
        <rect x="85%" y="15%" width="6" height="6" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{animationDelay: '2s'}} />
        <rect x="15%" y="85%" width="10" height="10" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.3" className="animate-pulse" style={{animationDelay: '4s'}} />
        
        {/* Hexagonal tech patterns */}
        <polygon points="80,50 85,40 95,40 100,50 95,60 85,60" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}} />
        <polygon points="20,300 25,290 35,290 40,300 35,310 25,310" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2" className="animate-pulse" style={{animationDelay: '3s'}} />
      </svg>

      {/* Floating particles with different sizes and colors */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500/40 rounded-full animate-bounce"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-pink-500/40 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-green-500/40 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-500/40 rounded-full animate-bounce" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-indigo-500/40 rounded-full animate-bounce" style={{animationDelay: '6s'}}></div>

      {/* Additional floating geometric elements */}
      <div className="absolute top-1/5 left-1/5 w-3 h-3 border border-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/5 right-1/5 w-4 h-4 border border-purple-400/30 rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      <div className="absolute top-1/2 left-1/8 w-2 h-2 border border-cyan-400/30 rotate-45 animate-spin" style={{animationDuration: '30s'}}></div>

      {/* Pulsing tech dots */}
      <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/2 left-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-1/2 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default AnimatedBackground;