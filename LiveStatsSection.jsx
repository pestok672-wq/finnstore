import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveStatsSection = () => {
  const [stats, setStats] = useState({
    todayTransactions: 2847,
    totalUsers: 52341,
    averageProcessTime: 2.3,
    successRate: 99.8
  });

  const [recentTransactions, setRecentTransactions] = useState([
    {
      id: 1,
      user: "Rizky P.",
      game: "Mobile Legends",
      amount: "429 Diamonds",
      time: "2 menit yang lalu",
      status: "success"
    },
    {
      id: 2,
      user: "Sari I.",
      game: "PUBG Mobile",
      amount: "660 UC",
      time: "5 menit yang lalu",
      status: "success"
    },
    {
      id: 3,
      user: "Ahmad F.",
      game: "Free Fire",
      amount: "720 Diamonds",
      time: "8 menit yang lalu",
      status: "success"
    },
    {
      id: 4,
      user: "Maya S.",
      game: "Genshin Impact",
      amount: "330 Crystals",
      time: "12 menit yang lalu",
      status: "success"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        todayTransactions: prev?.todayTransactions + Math.floor(Math.random() * 3),
        totalUsers: prev?.totalUsers + Math.floor(Math.random() * 2)
      }));

      // Add new transaction occasionally
      if (Math.random() < 0.3) {
        const newTransaction = {
          id: Date.now(),
          user: ["Budi S.", "Andi R.", "Lisa M.", "Doni K.", "Rina P."]?.[Math.floor(Math.random() * 5)],
          game: ["Mobile Legends", "PUBG Mobile", "Free Fire", "Genshin Impact"]?.[Math.floor(Math.random() * 4)],
          amount: ["86 Diamonds", "172 Diamonds", "429 Diamonds", "660 UC", "720 Diamonds"]?.[Math.floor(Math.random() * 5)],
          time: "Baru saja",
          status: "success"
        };

        setRecentTransactions(prev => [newTransaction, ...prev?.slice(0, 3)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const mainStats = [
    {
      label: "Transaksi Hari Ini",
      value: stats?.todayTransactions?.toLocaleString('id-ID'),
      icon: "TrendingUp",
      color: "text-green-600",
      bgColor: "bg-green-100",
      change: "+12%"
    },
    {
      label: "Total Pengguna",
      value: `${(stats?.totalUsers / 1000)?.toFixed(1)}K+`,
      icon: "Users",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      change: "+8%"
    },
    {
      label: "Rata-rata Proses",
      value: `${stats?.averageProcessTime} Menit`,
      icon: "Clock",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      change: "-5%"
    },
    {
      label: "Success Rate",
      value: `${stats?.successRate}%`,
      icon: "CheckCircle",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      change: "+0.1%"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Statistik Real-Time
            <span className="block text-primary">Finn Gaming Store</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Data transaksi dan kepuasan pelanggan yang terus diperbarui secara real-time
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats?.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-gaming-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>
                <div className="text-xs text-green-600 font-medium">
                  {stat?.change}
                </div>
              </div>
              
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">
                Transaksi Terbaru
              </h3>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {recentTransactions?.map((transaction) => (
                <div
                  key={transaction?.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary text-sm">
                        {transaction?.user}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {transaction?.game} • {transaction?.amount}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Icon name="CheckCircle" size={14} className="text-green-500" />
                      <span className="text-xs text-green-600 font-medium">Berhasil</span>
                    </div>
                    <div className="text-xs text-text-secondary">
                      {transaction?.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button className="text-sm text-primary hover:text-primary/80 font-medium">
                Lihat Semua Transaksi →
              </button>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Performa Sistem
            </h3>

            <div className="space-y-6">
              {/* Server Status */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Server Status</span>
                  <span className="text-sm text-green-600 font-medium">Optimal</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                </div>
              </div>

              {/* Payment Gateway */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Payment Gateway</span>
                  <span className="text-sm text-green-600 font-medium">99.9%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[99.9%]"></div>
                </div>
              </div>

              {/* Response Time */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Response Time</span>
                  <span className="text-sm text-blue-600 font-medium">1.2s</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Kepuasan Pelanggan</span>
                  <span className="text-sm text-purple-600 font-medium">4.9/5</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[98%]"></div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">24/7</div>
                  <div className="text-xs text-text-secondary">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">SSL</div>
                  <div className="text-xs text-text-secondary">Secured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatsSection;