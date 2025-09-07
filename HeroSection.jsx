import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroGames = [
    {
      id: 1,
      name: "Mobile Legends",
      subtitle: "Bang Bang",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      gradient: "from-blue-600 to-purple-700",
      popularAmounts: [
        { diamonds: 86, price: 15000, bonus: "Paling Populer" },
        { diamonds: 172, price: 30000, bonus: "+10 Bonus" },
        { diamonds: 429, price: 75000, bonus: "+25 Bonus" }
      ]
    },
    {
      id: 2,
      name: "PUBG Mobile",
      subtitle: "UC Top Up",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-red-600",
      popularAmounts: [
        { diamonds: 60, price: 15000, bonus: "Hemat" },
        { diamonds: 325, price: 75000, bonus: "+25 UC" },
        { diamonds: 660, price: 150000, bonus: "+60 UC" }
      ]
    },
    {
      id: 3,
      name: "Free Fire",
      subtitle: "Diamonds",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
      gradient: "from-yellow-500 to-orange-600",
      popularAmounts: [
        { diamonds: 70, price: 10000, bonus: "Termurah" },
        { diamonds: 355, price: 50000, bonus: "+35 Bonus" },
        { diamonds: 720, price: 100000, bonus: "+70 Bonus" }
      ]
    },
    {
      id: 4,
      name: "Genshin Impact",
      subtitle: "Genesis Crystals",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      gradient: "from-purple-600 to-pink-600",
      popularAmounts: [
        { diamonds: 60, price: 15000, bonus: "Starter Pack" },
        { diamonds: 330, price: 75000, bonus: "+30 Bonus" },
        { diamonds: 1090, price: 250000, bonus: "+110 Bonus" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroGames.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroGames.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentGame = heroGames[currentSlide];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300D4FF%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                <Icon name="Zap" size={14} className="mr-1" />
                Top Up Instan
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Top Up Game
              <span className="block text-gaming-gradient">Favorit Kamu</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Aman, cepat, dan terpercaya. Lebih dari 50.000 gamers Indonesia sudah mempercayai Finn Gaming Store.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center text-sm text-slate-300">
                <Icon name="Shield" size={16} className="mr-2 text-green-400" />
                100% Aman
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Icon name="Clock" size={16} className="mr-2 text-blue-400" />
                Proses 1-3 Menit
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Icon name="Users" size={16} className="mr-2 text-purple-400" />
                50K+ Gamers
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Gamepad2"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg"
              >
                Top Up Sekarang
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                Hubungi Finn
              </Button>
            </div>
          </div>

          {/* Right Content - Game Carousel */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {/* Game Image */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentGame.gradient} rounded-xl opacity-20`}></div>
                <Image
                  src={currentGame.image}
                  alt={currentGame.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    #{currentSlide + 1} Trending
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {currentGame.name}
                </h3>
                <p className="text-slate-300">{currentGame.subtitle}</p>
              </div>

              {/* Quick Top Up Options */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Pilihan Populer
                </h4>
                {currentGame.popularAmounts.map((amount, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-white font-semibold">
                        {amount.diamonds} {currentGame.name === 'Genshin Impact' ? 'Crystals' : currentGame.name === 'PUBG Mobile' ? 'UC' : 'Diamonds'}
                      </div>
                      <div className="text-xs text-primary">{amount.bonus}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">
                        Rp {amount.price.toLocaleString('id-ID')}
                      </div>
                      <div className="text-xs text-slate-400">~${(amount.price / 15000).toFixed(1)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {heroGames.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-gaming hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Transaksi Hari Ini</div>
                  <div className="text-lg font-bold text-green-600">2,847</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-gaming hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Rata-rata Proses</div>
                  <div className="text-lg font-bold text-blue-600">2.3 Menit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;