import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [onlineAgents, setOnlineAgents] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isBusinessHours = () => {
    const hour = currentTime?.getHours();
    return hour >= 6 && hour < 24; // 06:00 - 24:00 WIB
  };

  const getResponseTime = () => {
    if (isBusinessHours()) {
      return onlineAgents > 2 ? '1-2 menit' : '3-5 menit';
    }
    return 'Pagi hari (otomatis)';
  };

  const getStatusColor = () => {
    if (isBusinessHours()) {
      return onlineAgents > 2 ? 'bg-green-500' : 'bg-yellow-500';
    }
    return 'bg-red-500';
  };

  const getStatusText = () => {
    if (isBusinessHours()) {
      return `${onlineAgents} agent online`;
    }
    return 'Diluar jam kerja';
  };

  const quickActions = [
    {
      id: 'topup-help',
      title: 'Bantuan Top Up',
      description: 'Masalah dengan proses top up',
      icon: 'CreditCard',
      action: () => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan%20untuk%20top%20up', '_blank')
    },
    {
      id: 'payment-issue',
      title: 'Masalah Pembayaran',
      description: 'Pembayaran gagal atau error',
      icon: 'AlertCircle',
      action: () => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20mengalami%20masalah%20pembayaran', '_blank')
    },
    {
      id: 'diamond-missing',
      title: 'Diamond Tidak Masuk',
      description: 'Diamond belum masuk setelah bayar',
      icon: 'Diamond',
      action: () => window.open('https://wa.me/6281234567890?text=Halo,%20diamond%20saya%20belum%20masuk%20setelah%20pembayaran', '_blank')
    },
    {
      id: 'general-help',
      title: 'Bantuan Umum',
      description: 'Pertanyaan lainnya',
      icon: 'HelpCircle',
      action: () => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan', '_blank')
    }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
              !
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-gaming-hover flex items-center justify-center hover:scale-110 transition-all duration-300 whatsapp-float"
          >
            <Icon name={isOpen ? "X" : "MessageCircle"} size={24} />
          </button>
        </div>
      </div>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] bg-card border border-border rounded-xl shadow-gaming-modal z-40 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Headphones" size={20} />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor()} rounded-full border-2 border-white`}></div>
                </div>
                <div>
                  <h3 className="font-semibold">Finn Gaming Support</h3>
                  <p className="text-xs opacity-90">{getStatusText()}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
              >
                <Icon name="X" size={18} />
              </button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-muted px-4 py-2 border-b border-border">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} className="text-text-secondary" />
                <span className="text-text-secondary">
                  Respon: {getResponseTime()}
                </span>
              </div>
              <div className="text-text-secondary">
                {currentTime?.toLocaleTimeString('id-ID', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'Asia/Jakarta'
                })} WIB
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="mb-4">
              <h4 className="font-semibold text-text-primary mb-2">
                Halo! Ada yang bisa kami bantu?
              </h4>
              <p className="text-sm text-text-secondary mb-4">
                Pilih jenis bantuan yang Anda butuhkan atau langsung chat dengan kami.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 mb-4">
              {quickActions?.map((action) => (
                <button
                  key={action?.id}
                  onClick={action?.action}
                  className="w-full flex items-center space-x-3 p-3 bg-muted hover:bg-muted/80 rounded-lg text-left transition-colors duration-200 group"
                >
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon name={action?.icon} size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-text-primary text-sm">
                      {action?.title}
                    </h5>
                    <p className="text-xs text-text-secondary">
                      {action?.description}
                    </p>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-text-secondary" />
                </button>
              ))}
            </div>

            {/* Direct Contact */}
            <div className="border-t border-border pt-4">
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Finn%20Gaming,%20saya%20butuh%20bantuan', '_blank')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Chat WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+6281234567890')}
                >
                  Telepon Langsung
                </Button>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-blue-800 text-sm mb-1">
                    Jam Operasional
                  </h5>
                  <div className="text-xs text-blue-700 space-y-1">
                    <div>WhatsApp: 06:00 - 24:00 WIB</div>
                    <div>Telepon: 08:00 - 22:00 WIB</div>
                    <div>Email: 24 jam (respon max 2 jam)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default LiveChatWidget;