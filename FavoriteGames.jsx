import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FavoriteGames = ({ favoriteGames, onReorder }) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Game Favorit</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="Settings"
          onClick={() => window.location.href = '/favorite-games'}
        >
          Kelola
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteGames?.map((game) => (
          <div key={game?.id} className="border border-border rounded-lg p-4 hover:shadow-gaming transition-all duration-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={game?.icon} 
                  alt={game?.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-text-primary truncate">{game?.name}</h4>
                <p className="text-sm text-text-secondary">
                  Terakhir: {game?.lastPurchase}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-text-secondary">
                <Icon name="ShoppingCart" size={14} className="inline mr-1" />
                {game?.purchaseCount}x dibeli
              </div>
              <Button
                variant="outline"
                size="sm"
                iconName="RotateCcw"
                onClick={() => onReorder(game)}
              >
                Beli Lagi
              </Button>
            </div>
          </div>
        ))}
      </div>
      {favoriteGames?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Heart" size={48} className="text-text-secondary mx-auto mb-3" />
          <p className="text-text-secondary mb-4">Belum ada game favorit</p>
          <Button
            variant="outline"
            iconName="Plus"
            iconPosition="left"
            onClick={() => window.location.href = '/game-catalog'}
          >
            Jelajahi Game
          </Button>
        </div>
      )}
    </div>
  );
};

export default FavoriteGames;