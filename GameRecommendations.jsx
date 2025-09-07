import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GameRecommendations = ({ recommendations }) => {
  const getRecommendationReason = (reason) => {
    switch (reason) {
      case 'trending':
        return { icon: 'TrendingUp', text: 'Sedang Trending', color: 'text-secondary' };
      case 'similar_users':
        return { icon: 'Users', text: 'Disukai Pengguna Serupa', color: 'text-primary' };
      case 'purchase_history':
        return { icon: 'History', text: 'Berdasarkan Riwayat', color: 'text-accent' };
      case 'new_release':
        return { icon: 'Sparkles', text: 'Rilis Terbaru', color: 'text-success' };
      default:
        return { icon: 'Star', text: 'Rekomendasi', color: 'text-text-secondary' };
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Rekomendasi Game</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="RefreshCw"
          onClick={() => window.location?.reload()}
        >
          Refresh
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recommendations?.map((game) => {
          const reasonData = getRecommendationReason(game?.reason);
          
          return (
            <div key={game?.id} className="border border-border rounded-lg p-4 hover:shadow-gaming transition-all duration-200">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
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
                  <p className="text-sm text-text-secondary mb-2">{game?.category}</p>
                  <div className="flex items-center space-x-1">
                    <Icon name={reasonData?.icon} size={14} className={reasonData?.color} />
                    <span className={`text-xs ${reasonData?.color}`}>{reasonData?.text}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="Star" size={14} className="text-warning" />
                    <span>{game?.rating}</span>
                    <span>•</span>
                    <span>{game?.downloads}</span>
                  </div>
                  <p className="text-primary font-medium mt-1">
                    Mulai dari Rp {game?.minPrice?.toLocaleString('id-ID')}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  onClick={() => window.location.href = `/game-catalog?game=${game?.id}`}
                >
                  Lihat
                </Button>
              </div>
              {game?.discount && (
                <div className="mt-3 p-2 bg-secondary/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Tag" size={14} className="text-secondary" />
                    <span className="text-sm font-medium text-secondary">
                      Diskon {game?.discount}% - Hemat hingga Rp {game?.maxSavings?.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <Button
          variant="outline"
          iconName="ExternalLink"
          iconPosition="right"
          onClick={() => window.location.href = '/game-catalog'}
        >
          Jelajahi Semua Game
        </Button>
      </div>
    </div>
  );
};

export default GameRecommendations;