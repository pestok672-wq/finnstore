import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const GameSelectionCard = ({ selectedGame, onGameChange }) => {
  const popularGames = [
    {
      id: 'mobile-legends',
      name: 'Mobile Legends',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      publisher: 'Moonton',
      category: 'MOBA'
    },
    {
      id: 'free-fire',
      name: 'Free Fire',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?w=400&h=300&fit=crop',
      publisher: 'Garena',
      category: 'Battle Royale'
    },
    {
      id: 'pubg-mobile',
      name: 'PUBG Mobile',
      image: 'https://images.pixabay.com/photo/2018/05/08/21/29/cyber-3384242_1280.jpg?w=400&h=300&fit=crop',
      publisher: 'Tencent',
      category: 'Battle Royale'
    },
    {
      id: 'genshin-impact',
      name: 'Genshin Impact',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      publisher: 'miHoYo',
      category: 'RPG'
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Pilih Game</h3>
        <button
          onClick={() => onGameChange(null)}
          className="text-primary hover:text-primary/80 text-sm font-medium"
        >
          Ganti Game
        </button>
      </div>
      {selectedGame ? (
        <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="relative">
            <Image
              src={selectedGame?.image}
              alt={selectedGame?.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Check" size={14} color="white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-text-primary">{selectedGame?.name}</h4>
            <p className="text-sm text-text-secondary">{selectedGame?.publisher}</p>
            <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full mt-1">
              {selectedGame?.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {popularGames?.map((game) => (
            <button
              key={game?.id}
              onClick={() => onGameChange(game)}
              className="flex flex-col items-center p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <Image
                src={game?.image}
                alt={game?.name}
                className="w-12 h-12 rounded-lg object-cover mb-2 group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-sm font-medium text-text-primary text-center">{game?.name}</span>
              <span className="text-xs text-text-secondary">{game?.publisher}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameSelectionCard;