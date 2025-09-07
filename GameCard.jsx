import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GameCard = ({ game, onQuickAdd }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleGameSelect = () => {
    // Navigate to payment checkout with game data
    navigate('/payment-checkout', { 
      state: { 
        selectedGame: game,
        fromCatalog: true 
      } 
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div 
      className="bg-card rounded-xl border border-border overflow-hidden gaming-card cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleGameSelect}
    >
      {/* Game Image */}
      <div className="relative overflow-hidden">
        <Image
          src={game?.image}
          alt={game?.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Promotional Badge */}
        {game?.isPromotional && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-semibold">
            {game?.promotionalText}
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
          <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
          <span>{game?.rating}</span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white">
            <Icon name="Zap" size={32} className="mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">{game?.processingTime}</p>
            <p className="text-xs opacity-80">Klik untuk top up</p>
          </div>
        </div>
      </div>
      {/* Game Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-text-primary text-lg leading-tight">
            {game?.name}
          </h3>
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Users" size={12} />
            <span>{game?.playerCount}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {game?.description}
        </p>

        {/* Price Range */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-text-secondary">Mulai dari</p>
            <p className="font-bold text-primary text-lg">
              {formatPrice(game?.minPrice)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary">Hingga</p>
            <p className="font-semibold text-text-primary">
              {formatPrice(game?.maxPrice)}
            </p>
          </div>
        </div>

        {/* Quick Denominations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {game?.quickDenominations?.slice(0, 3)?.map((denom) => (
            <button
              key={denom?.value}
              onClick={(e) => {
                e?.stopPropagation();
                onQuickAdd(game, denom);
              }}
              className="px-3 py-1 bg-muted hover:bg-primary hover:text-primary-foreground text-xs font-medium rounded-full transition-colors duration-200"
            >
              {formatPrice(denom?.price)}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="ShoppingCart"
            iconPosition="left"
            onClick={handleGameSelect}
          >
            Top Up Sekarang
          </Button>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <Icon name="Clock" size={12} />
            <span>{game?.processingTime}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-text-secondary">
            <Icon name="Shield" size={12} />
            <span>Aman & Terpercaya</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;