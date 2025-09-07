import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyRewards = ({ loyaltyData }) => {
  const { currentPoints, currentTier, nextTier, pointsToNext, availableRewards } = loyaltyData;

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Bronze':
        return 'text-amber-600 bg-amber-50';
      case 'Silver':
        return 'text-gray-600 bg-gray-50';
      case 'Gold':
        return 'text-yellow-600 bg-yellow-50';
      case 'Platinum':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'Bronze':
        return 'Award';
      case 'Silver':
        return 'Medal';
      case 'Gold':
        return 'Trophy';
      case 'Platinum':
        return 'Crown';
      default:
        return 'Star';
    }
  };

  const progressPercentage = nextTier ? ((currentPoints % 1000) / 1000) * 100 : 100;

  return (
    <div className="bg-card rounded-lg p-6 border border-border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Loyalty Rewards</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="Gift"
          onClick={() => window.location.href = '/loyalty-program'}
        >
          Detail Program
        </Button>
      </div>
      {/* Current Tier Status */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full ${getTierColor(currentTier)} flex items-center justify-center`}>
              <Icon name={getTierIcon(currentTier)} size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-text-primary">{currentTier} Member</h4>
              <p className="text-sm text-text-secondary">
                {currentPoints?.toLocaleString('id-ID')} poin
              </p>
            </div>
          </div>
          {nextTier && (
            <div className="text-right">
              <p className="text-sm text-text-secondary">Menuju {nextTier}</p>
              <p className="text-xs text-text-secondary">
                {pointsToNext} poin lagi
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {nextTier && (
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>
      {/* Available Rewards */}
      <div>
        <h4 className="font-medium text-text-primary mb-3">Reward Tersedia</h4>
        <div className="space-y-3">
          {availableRewards?.map((reward) => (
            <div key={reward?.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={reward?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-text-primary">{reward?.title}</h5>
                  <p className="text-sm text-text-secondary">{reward?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-text-primary">
                  {reward?.points} poin
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPoints < reward?.points}
                  onClick={() => console.log('Redeem reward:', reward?.id)}
                >
                  {currentPoints >= reward?.points ? 'Tukar' : 'Tidak Cukup'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;