import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeHeader = ({ userName, userAvatar }) => {
  const currentHour = new Date()?.getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Selamat pagi';
    if (currentHour < 15) return 'Selamat siang';
    if (currentHour < 18) return 'Selamat sore';
    return 'Selamat malam';
  };

  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
          {userAvatar ? (
            <img 
              src={userAvatar} 
              alt={userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon name="User" size={32} color="white" />
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">
            {getGreeting()}, {userName}!
          </h1>
          <p className="text-white/80 text-sm">
            Selamat datang kembali di Finn Gaming Store
          </p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
          <Icon name="Trophy" size={20} color="white" />
          <span className="text-sm font-medium">Gold Member</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;