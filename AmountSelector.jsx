import React from 'react';
import Icon from '../../../components/AppIcon';

const AmountSelector = ({ selectedAmount, onAmountChange, gameId }) => {
  const getAmountOptions = (gameId) => {
    const baseOptions = {
      'mobile-legends': [
        { diamonds: 86, price: 20000, bonus: 0, popular: false },
        { diamonds: 172, price: 40000, bonus: 0, popular: false },
        { diamonds: 257, price: 60000, bonus: 0, popular: true },
        { diamonds: 344, price: 80000, bonus: 0, popular: false },
        { diamonds: 429, price: 100000, bonus: 15, popular: false },
        { diamonds: 514, price: 120000, bonus: 20, popular: false },
        { diamonds: 706, price: 160000, bonus: 30, popular: false },
        { diamonds: 963, price: 220000, bonus: 50, popular: false }
      ],
      'free-fire': [
        { diamonds: 100, price: 15000, bonus: 0, popular: false },
        { diamonds: 210, price: 30000, bonus: 0, popular: false },
        { diamonds: 355, price: 50000, bonus: 0, popular: true },
        { diamonds: 720, price: 100000, bonus: 25, popular: false },
        { diamonds: 1450, price: 200000, bonus: 75, popular: false },
        { diamonds: 2180, price: 300000, bonus: 120, popular: false }
      ],
      'pubg-mobile': [
        { diamonds: 60, price: 15000, bonus: 0, popular: false },
        { diamonds: 325, price: 75000, bonus: 0, popular: true },
        { diamonds: 660, price: 150000, bonus: 15, popular: false },
        { diamonds: 1800, price: 400000, bonus: 50, popular: false },
        { diamonds: 3850, price: 850000, bonus: 150, popular: false }
      ],
      'genshin-impact': [
        { diamonds: 60, price: 15000, bonus: 0, popular: false },
        { diamonds: 300, price: 75000, bonus: 0, popular: false },
        { diamonds: 980, price: 250000, bonus: 0, popular: true },
        { diamonds: 1980, price: 500000, bonus: 260, popular: false },
        { diamonds: 3280, price: 800000, bonus: 600, popular: false },
        { diamonds: 6480, price: 1600000, bonus: 1600, popular: false }
      ]
    };

    return baseOptions?.[gameId] || baseOptions?.['mobile-legends'];
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const amountOptions = getAmountOptions(gameId);

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming">
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Pilih Nominal</h3>
        <Icon name="Zap" size={18} className="text-primary" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {amountOptions?.map((option, index) => (
          <button
            key={index}
            onClick={() => onAmountChange(option)}
            className={`relative p-4 rounded-lg border transition-all duration-200 text-left ${
              selectedAmount?.diamonds === option?.diamonds
                ? 'border-primary bg-primary/5 shadow-gaming'
                : 'border-border hover:border-primary/50 hover:bg-muted'
            }`}
          >
            {option?.popular && (
              <div className="absolute -top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded-full font-medium">
                Populer
              </div>
            )}
            
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-text-primary text-lg">
                {option?.diamonds?.toLocaleString('id-ID')}
              </span>
              {selectedAmount?.diamonds === option?.diamonds && (
                <Icon name="Check" size={16} className="text-primary" />
              )}
            </div>
            
            <div className="text-sm text-text-secondary mb-1">
              {gameId === 'mobile-legends' ? 'Diamonds' : 
               gameId === 'free-fire' ? 'Diamonds' :
               gameId === 'pubg-mobile' ? 'UC' : 'Genesis Crystals'}
            </div>
            
            {option?.bonus > 0 && (
              <div className="text-xs text-success font-medium mb-2">
                +{option?.bonus} Bonus
              </div>
            )}
            
            <div className="font-semibold text-primary">
              {formatPrice(option?.price)}
            </div>
          </button>
        ))}
      </div>
      {selectedAmount && (
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Total yang akan dibayar:</span>
            <span className="font-bold text-lg text-text-primary">
              {formatPrice(selectedAmount?.price)}
            </span>
          </div>
          {selectedAmount?.bonus > 0 && (
            <div className="text-sm text-success mt-1">
              Termasuk bonus +{selectedAmount?.bonus} {gameId === 'mobile-legends' ? 'diamonds' : 
               gameId === 'free-fire' ? 'diamonds' :
               gameId === 'pubg-mobile' ? 'UC' : 'crystals'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AmountSelector;