import React from 'react';
import Button from '../../../components/ui/Button';

const QuickActions = ({ onTopUp, onSupport, onPromo }) => {
  const actions = [
    {
      label: 'Top Up Lagi',
      icon: 'Plus',
      variant: 'default',
      className: 'bg-primary hover:bg-primary/90',
      onClick: onTopUp
    },
    {
      label: 'Hubungi Support',
      icon: 'MessageCircle',
      variant: 'outline',
      onClick: onSupport
    },
    {
      label: 'Lihat Promo Terbaru',
      icon: 'Gift',
      variant: 'secondary',
      className: 'bg-secondary hover:bg-secondary/90',
      onClick: onPromo
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 border border-border mb-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Aksi Cepat</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {actions?.map((action, index) => (
          <Button
            key={index}
            variant={action?.variant}
            iconName={action?.icon}
            iconPosition="left"
            onClick={action?.onClick}
            className={`${action?.className || ''} justify-center`}
            fullWidth
          >
            {action?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;