import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PromotionalBanner = ({ promotions }) => {
  if (!promotions || promotions.length === 0) return null;

  const mainPromotion = promotions[0];

  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Content */}
            <div className="flex-1 text-white mb-6 lg:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Zap" size={20} className="text-yellow-300" />
                <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                  {mainPromotion.badge}
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {mainPromotion.title}
              </h2>
              
              <p className="text-lg opacity-90 mb-4">
                {mainPromotion.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">Berlaku hingga {mainPromotion.validUntil}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span className="text-sm">{mainPromotion.usedCount} orang sudah menggunakan</span>
                </div>
              </div>

              <Button
                variant="secondary"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90"
              >
                Lihat Semua Promo
              </Button>
            </div>

            {/* Visual */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={mainPromotion.image}
                  alt={mainPromotion.title}
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-xl"
                />
                <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {mainPromotion.discount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Promotions */}
      {promotions.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {promotions.slice(1, 4).map((promo) => (
            <div key={promo.id} className="bg-card border border-border rounded-xl p-4 hover:shadow-gaming transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={promo.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary text-sm">
                    {promo.title}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {promo.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-secondary">
                    {promo.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionalBanner;