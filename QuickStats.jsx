import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Belanja',
      value: `Rp ${stats?.totalSpent?.toLocaleString('id-ID')}`,
      icon: 'CreditCard',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Game Dibeli',
      value: stats?.gamesCount,
      icon: 'Gamepad2',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      label: 'Hemat Total',
      value: `Rp ${stats?.totalSaved?.toLocaleString('id-ID')}`,
      icon: 'PiggyBank',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      label: 'Poin Loyalty',
      value: stats?.loyaltyPoints,
      icon: 'Star',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statItems?.map((item, index) => (
        <div key={index} className="bg-card rounded-lg p-4 border border-border">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg ${item?.bgColor} flex items-center justify-center`}>
              <Icon name={item?.icon} size={20} className={item?.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-text-secondary mb-1">{item?.label}</p>
              <p className="font-semibold text-text-primary truncate">{item?.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;