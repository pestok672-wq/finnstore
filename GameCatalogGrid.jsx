import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GameCatalogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('trending');

  const categories = [
    { id: 'trending', name: 'Trending', icon: 'TrendingUp' },
    { id: 'moba', name: 'MOBA', icon: 'Sword' },
    { id: 'battle-royale', name: 'Battle Royale', icon: 'Target' },
    { id: 'rpg', name: 'RPG', icon: 'Crown' },
    { id: 'casual', name: 'Casual', icon: 'Heart' }
  ];

  const games = [
    {
      id: 1,
      name: "Mobile Legends",
      subtitle: "Bang Bang",
      category: ['trending', 'moba'],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rating: 4.8,
      players: "100M+",
      prices: [
        { amount: 86, price: 15000, label: "Starter" },
        { amount: 172, price: 30000, label: "Popular" },
        { amount: 429, price: 75000, label: "Best Value" }
      ],
      discount: 10,
      isHot: true
    },
    {
      id: 2,
      name: "PUBG Mobile",
      subtitle: "UC Top Up",
      category: ['trending', 'battle-royale'],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      rating: 4.7,
      players: "50M+",
      prices: [
        { amount: 60, price: 15000, label: "Basic" },
        { amount: 325, price: 75000, label: "Popular" },
        { amount: 660, price: 150000, label: "Premium" }
      ],
      discount: 5,
      isHot: true
    },
    {
      id: 3,
      name: "Free Fire",
      subtitle: "Diamonds",
      category: ['trending', 'battle-royale'],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      rating: 4.6,
      players: "80M+",
      prices: [
        { amount: 70, price: 10000, label: "Hemat" },
        { amount: 355, price: 50000, label: "Populer" },
        { amount: 720, price: 100000, label: "Untung" }
      ],
      discount: 15,
      isHot: false
    },
    {
      id: 4,
      name: "Genshin Impact",
      subtitle: "Genesis Crystals",
      category: ['trending', 'rpg'],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.9,
      players: "30M+",
      prices: [
        { amount: 60, price: 15000, label: "Blessing" },
        { amount: 330, price: 75000, label: "Welkin" },
        { amount: 1090, price: 250000, label: "Genesis" }
      ],
      discount: 0,
      isHot: false
    },
    {
      id: 5,
      name: "Valorant",
      subtitle: "VP Points",
      category: ['trending', 'battle-royale'],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rating: 4.5,
      players: "25M+",
      prices: [
        { amount: 475, price: 50000, label: "Basic" },
        { amount: 1000, price: 100000, label: "Standard" },
        { amount: 2050, price: 200000, label: "Premium" }
      ],
      discount: 8,
      isHot: false
    },
    {
      id: 6,
      name: "Clash of Clans",
      subtitle: "Gems",
      category: ['casual'],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      rating: 4.4,
      players: "40M+",
      prices: [
        { amount: 80, price: 15000, label: "Starter" },
        { amount: 500, price: 75000, label: "Builder" },
        { amount: 1200, price: 150000, label: "Master" }
      ],
      discount: 12,
      isHot: false
    }
  ];

  const filteredGames = games?.filter(game => 
    selectedCategory === 'trending' ? game?.isHot || game?.category?.includes('trending') : game?.category?.includes(selectedCategory)
  );

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Katalog Game Terlengkap
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Pilih dari ratusan game populer dengan harga terbaik dan proses instan
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-gaming'
                  : 'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredGames?.map((game) => (
            <div
              key={game?.id}
              className="bg-card rounded-xl border border-border shadow-gaming hover:shadow-gaming-hover transition-all duration-300 overflow-hidden group"
            >
              {/* Game Image */}
              <div className="relative">
                <Image
                  src={game?.image}
                  alt={game?.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {game?.isHot && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      🔥 HOT
                    </span>
                  )}
                  {game?.discount > 0 && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      -{game?.discount}%
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                  <span>{game?.rating}</span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {game?.name}
                  </h3>
                  <p className="text-text-secondary text-sm">{game?.subtitle}</p>
                  
                  <div className="flex items-center space-x-4 mt-2 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{game?.players}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>Instan</span>
                    </div>
                  </div>
                </div>

                {/* Price Options */}
                <div className="space-y-2 mb-4">
                  {game?.prices?.slice(0, 2)?.map((price, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-muted rounded-lg text-sm"
                    >
                      <div>
                        <span className="font-medium text-text-primary">
                          {price?.amount} {game?.name === 'Genshin Impact' ? 'Crystals' : game?.name === 'PUBG Mobile' ? 'UC' : game?.name === 'Valorant' ? 'VP' : 'Diamonds'}
                        </span>
                        <span className="text-text-secondary ml-2">({price?.label})</span>
                      </div>
                      <div className="font-bold text-primary">
                        Rp {price?.price?.toLocaleString('id-ID')}
                      </div>
                    </div>
                  ))}
                  
                  {game?.prices?.length > 2 && (
                    <div className="text-center">
                      <span className="text-xs text-text-secondary">
                        +{game?.prices?.length - 2} pilihan lainnya
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Pilih & Top Up
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="px-8"
          >
            Lihat Semua Game
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameCatalogGrid;