import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import QuickStats from './components/QuickStats';
import QuickActions from './components/QuickActions';
import TransactionHistory from './components/TransactionHistory';
import FavoriteGames from './components/FavoriteGames';
import LoyaltyRewards from './components/LoyaltyRewards';
import PaymentMethods from './components/PaymentMethods';
import NotificationSettings from './components/NotificationSettings';
import GameRecommendations from './components/GameRecommendations';

const AccountDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setUserData({
        name: "Ahmad Rizki",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "ahmad.rizki@email.com",
        phone: "+62 812-3456-7890",
        joinDate: "15 Maret 2023"
      });
      setLoading(false);
    }, 1000);
  }, []);

  // Mock data for dashboard components
  const quickStats = {
    totalSpent: 2450000,
    gamesCount: 12,
    totalSaved: 350000,
    loyaltyPoints: 1250
  };

  const transactionHistory = [
    {
      id: "TRX001",
      gameName: "Mobile Legends",
      itemName: "275 Diamonds",
      amount: 65000,
      date: "7 Sep 2025, 14:30",
      status: "Berhasil",
      gameIcon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop"
    },
    {
      id: "TRX002",
      gameName: "Free Fire",
      itemName: "720 Diamonds",
      amount: 95000,
      date: "6 Sep 2025, 20:15",
      status: "Selesai",
      gameIcon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop"
    },
    {
      id: "TRX003",
      gameName: "PUBG Mobile",
      itemName: "600 UC",
      amount: 85000,
      date: "5 Sep 2025, 16:45",
      status: "Berhasil",
      gameIcon: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&h=100&fit=crop"
    },
    {
      id: "TRX004",
      gameName: "Genshin Impact",
      itemName: "980 Genesis Crystals",
      amount: 199000,
      date: "4 Sep 2025, 12:20",
      status: "Diproses",
      gameIcon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop"
    },
    {
      id: "TRX005",
      gameName: "Call of Duty Mobile",
      itemName: "800 CP",
      amount: 120000,
      date: "3 Sep 2025, 19:30",
      status: "Berhasil",
      gameIcon: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=100&h=100&fit=crop"
    }
  ];

  const favoriteGames = [
    {
      id: "game1",
      name: "Mobile Legends",
      icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop",
      lastPurchase: "7 Sep 2025",
      purchaseCount: 8
    },
    {
      id: "game2",
      name: "Free Fire",
      icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
      lastPurchase: "6 Sep 2025",
      purchaseCount: 5
    },
    {
      id: "game3",
      name: "PUBG Mobile",
      icon: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&h=100&fit=crop",
      lastPurchase: "5 Sep 2025",
      purchaseCount: 3
    }
  ];

  const loyaltyData = {
    currentPoints: 1250,
    currentTier: "Gold",
    nextTier: "Platinum",
    pointsToNext: 750,
    availableRewards: [
      {
        id: "reward1",
        title: "Diskon 10%",
        description: "Berlaku untuk semua game",
        points: 500,
        icon: "Percent"
      },
      {
        id: "reward2",
        title: "Cashback Rp 25.000",
        description: "Minimal pembelian Rp 100.000",
        points: 800,
        icon: "DollarSign"
      },
      {
        id: "reward3",
        title: "Free Diamonds ML",
        description: "100 Diamonds Mobile Legends",
        points: 1000,
        icon: "Gem"
      },
      {
        id: "reward4",
        title: "VIP Support",
        description: "Akses prioritas customer service",
        points: 1500,
        icon: "Crown"
      }
    ]
  };

  const savedPaymentMethods = [
    {
      id: "pm1",
      type: "DANA",
      accountInfo: "••••7890",
      isDefault: true
    },
    {
      id: "pm2",
      type: "OVO",
      accountInfo: "••••5432",
      isDefault: false
    },
    {
      id: "pm3",
      type: "GoPay",
      accountInfo: "••••1234",
      isDefault: false
    }
  ];

  const notificationSettings = {
    whatsappUpdates: true,
    promotionalOffers: true,
    transactionConfirmations: true,
    gameUpdates: false,
    loyaltyRewards: true,
    securityAlerts: true
  };

  const gameRecommendations = [
    {
      id: "rec1",
      name: "Valorant Mobile",
      category: "FPS",
      icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
      rating: "4.8",
      downloads: "10M+",
      minPrice: 50000,
      reason: "trending",
      discount: 15,
      maxSavings: 25000
    },
    {
      id: "rec2",
      name: "Honor of Kings",
      category: "MOBA",
      icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop",
      rating: "4.6",
      downloads: "50M+",
      minPrice: 35000,
      reason: "similar_users"
    },
    {
      id: "rec3",
      name: "Apex Legends Mobile",
      category: "Battle Royale",
      icon: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&h=100&fit=crop",
      rating: "4.7",
      downloads: "25M+",
      minPrice: 75000,
      reason: "new_release",
      discount: 20,
      maxSavings: 40000
    },
    {
      id: "rec4",
      name: "Clash Royale",
      category: "Strategy",
      icon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop",
      rating: "4.5",
      downloads: "100M+",
      minPrice: 25000,
      reason: "purchase_history"
    }
  ];

  const handleTopUp = () => {
    window.location.href = '/game-catalog';
  };

  const handleSupport = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Finn%20Gaming%20Store,%20saya%20butuh%20bantuan', '_blank');
  };

  const handlePromo = () => {
    window.location.href = '/promotions';
  };

  const handleReorder = (game) => {
    window.location.href = `/game-catalog?game=${game?.id}`;
  };

  const handleAddPaymentMethod = () => {
    window.location.href = '/payment-methods/add';
  };

  const handleRemovePaymentMethod = (methodId) => {
    console.log('Remove payment method:', methodId);
    // Implementation for removing payment method
  };

  const handleSetDefaultPayment = (methodId) => {
    console.log('Set default payment method:', methodId);
    // Implementation for setting default payment method
  };

  const handleUpdateNotificationSettings = (newSettings) => {
    console.log('Update notification settings:', newSettings);
    // Implementation for updating notification settings
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-32 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)]?.map((_, i) => (
                <div key={i} className="h-20 bg-muted rounded-lg"></div>
              ))}
            </div>
            <div className="h-64 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <WelcomeHeader 
          userName={userData?.name}
          userAvatar={userData?.avatar}
        />
        
        <QuickStats stats={quickStats} />
        
        <QuickActions 
          onTopUp={handleTopUp}
          onSupport={handleSupport}
          onPromo={handlePromo}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TransactionHistory transactions={transactionHistory} />
            <FavoriteGames 
              favoriteGames={favoriteGames}
              onReorder={handleReorder}
            />
            <PaymentMethods 
              savedMethods={savedPaymentMethods}
              onAddMethod={handleAddPaymentMethod}
              onRemoveMethod={handleRemovePaymentMethod}
              onSetDefault={handleSetDefaultPayment}
            />
          </div>
          
          <div className="space-y-6">
            <LoyaltyRewards loyaltyData={loyaltyData} />
            <NotificationSettings 
              settings={notificationSettings}
              onUpdateSettings={handleUpdateNotificationSettings}
            />
            <GameRecommendations recommendations={gameRecommendations} />
          </div>
        </div>
      </div>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleSupport}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whatsapp-float flex items-center justify-center"
          aria-label="Hubungi WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccountDashboard;