import React from 'react';
import GameCard from './GameCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';



const GameGrid = ({ games, onQuickAdd, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 })?.map((_, index) => (
          <div key={index} className="bg-card rounded-xl border border-border overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-muted"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-full"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
              <div className="flex space-x-2">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-16"></div>
              </div>
              <div className="h-8 bg-muted rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (games?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <Icon name="Search" size={32} className="text-text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Tidak ada game ditemukan
        </h3>
        <p className="text-text-secondary mb-6">
          Coba ubah kata kunci pencarian atau filter kategori
        </p>
        <Button
          variant="outline"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => window.location?.reload()}
        >
          Reset Filter
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games?.map((game) => (
        <GameCard
          key={game?.id}
          game={game}
          onQuickAdd={onQuickAdd}
        />
      ))}
    </div>
  );
};

export default GameGrid;