import React from 'react';
import { Trophy, Award, Star, Calendar, MapPin, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      rank: '1st Place',
      title: 'Prismatica\'25 Case Challenge',
      organization: 'SNS Institutions',
      description: 'Secured first position in a competitive case study challenge focusing on innovative problem-solving and strategic thinking.',
      date: '2025',
      icon: Trophy,
      color: 'gold',
      details: [
        'Strategic Problem Solving',
        'Team Leadership',
        'Presentation Excellence',
        'Innovation in Approach'
      ]
    },
    {
      rank: '3rd Place',
      title: 'Niti Policy Hackathon',
      organization: 'Kirori Mal College',
      description: 'Achieved third position in a policy-focused hackathon addressing real-world governance challenges through technology solutions.',
      date: '2024',
      icon: Award,
      color: 'bronze',
      details: [
        'Policy Analysis',
        'Technology Integration',
        'Collaborative Problem Solving',
        'Public Sector Innovation'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      gold: {
        gradient: 'from-yellow-400 to-yellow-600',
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30',
        accent: 'bg-yellow-500'
      },
      bronze: {
        gradient: 'from-orange-400 to-orange-600',
        bg: 'bg-orange-500/10',
        text: 'text-orange-400',
        border: 'border-orange-500/30',
        accent: 'bg-orange-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getRankIcon = (rank: string) => {
    if (rank.includes('1st')) return '🥇';
    if (rank.includes('2nd')) return '🥈';
    if (rank.includes('3rd')) return '🥉';
    return '🏆';
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in innovation, problem-solving, and academic pursuits
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const colors = getColorClasses(achievement.color);
            
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Section */}
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-6">
                        {/* Rank Badge */}
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-full text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{getRankIcon(achievement.rank)}</span>
                        </div>
                        
                        {/* Achievement Info */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 ${colors.bg} ${colors.text} ${colors.border} border rounded-full text-sm font-bold`}>
                              {achievement.rank}
                            </span>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{achievement.date}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          
                          <div className="flex items-center space-x-2 text-gray-300 mb-4">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{achievement.organization}</span>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Key Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                          <Star className="w-5 h-5 text-cyan-400" />
                          <span>Key Highlights</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {achievement.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center space-x-3 p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:shadow-md hover:shadow-purple-500/10 transition-all duration-200"
                            >
                              <div className={`w-2 h-2 ${colors.accent} rounded-full`}></div>
                              <span className="text-gray-300 font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Section - Icon */}
                    <div className="hidden lg:block lg:ml-8">
                      <div className={`p-6 bg-gradient-to-r ${colors.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievement Summary
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-gray-400">Total Awards</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-gray-400">Competitions</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-gray-400">First Place</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;