import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip periodically
    const tooltipTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo Finn Gaming Store! 👋\n\nSaya tertarik untuk top up game. Bisa bantu saya?`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            showTooltip
              ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-lg shadow-gaming p-3 border border-border max-w-xs">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-text-primary text-sm mb-1">
                  Finn Customer Service
                </div>
                <div className="text-text-secondary text-xs mb-2">
                  Halo! Ada yang bisa kami bantu untuk top up game kamu? 😊
                </div>
                <div className="text-xs text-text-secondary">
                  Biasanya membalas dalam beberapa menit
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-float bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-gaming-hover transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Hubungi WhatsApp"
        >
          <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>

        {/* Label */}
        <div className="absolute bottom-0 right-full mr-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Hubungi Finn
        </div>
      </div>

      {/* Online Status Indicator */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white rounded-full px-3 py-1 shadow-gaming border border-border flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-text-secondary">Online</span>
        </div>
      </div>

      {/* Recent Activity Notification */}
      <div className="fixed bottom-36 right-6 z-40">
        <div className="bg-white rounded-lg shadow-gaming border border-border p-3 max-w-xs animate-slideInRight">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={14} className="text-green-600" />
            </div>
            <span className="text-xs font-semibold text-text-primary">
              Transaksi Berhasil
            </span>
          </div>
          <div className="text-xs text-text-secondary">
            Rizky baru saja top up Mobile Legends 429 Diamonds
          </div>
          <div className="text-xs text-text-secondary mt-1">
            2 menit yang lalu
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;