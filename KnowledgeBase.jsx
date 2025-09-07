import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua', icon: 'Grid3X3' },
    { id: 'tutorial', name: 'Tutorial', icon: 'PlayCircle' },
    { id: 'payment', name: 'Pembayaran', icon: 'CreditCard' },
    { id: 'account', name: 'Akun', icon: 'User' },
    { id: 'troubleshoot', name: 'Troubleshooting', icon: 'Settings' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Cara Top Up Mobile Legends dengan DANA',
      category: 'tutorial',
      views: 15420,
      readTime: '3 menit',
      difficulty: 'Mudah',
      thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop',
      description: 'Panduan lengkap step-by-step untuk top up diamond Mobile Legends menggunakan DANA dengan aman dan cepat.',
      tags: ['Mobile Legends', 'DANA', 'Diamond'],
      isPopular: true,
      hasVideo: true
    },
    {
      id: 2,
      title: 'Mengatasi Pembayaran Gagal di OVO',
      category: 'troubleshoot',
      views: 12350,
      readTime: '5 menit',
      difficulty: 'Sedang',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
      description: 'Solusi lengkap untuk mengatasi berbagai masalah pembayaran yang gagal saat menggunakan OVO.',
      tags: ['OVO', 'Payment Error', 'Troubleshooting'],
      isPopular: true,
      hasVideo: false
    },
    {
      id: 3,
      title: 'Setup Akun Finn Gaming untuk Pemula',
      category: 'account',
      views: 8920,
      readTime: '4 menit',
      difficulty: 'Mudah',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop',
      description: 'Panduan membuat dan mengatur akun Finn Gaming untuk pengalaman top up yang optimal.',
      tags: ['Account Setup', 'Pemula', 'Registration'],
      isPopular: false,
      hasVideo: true
    },
    {
      id: 4,
      title: 'Cara Menggunakan QRIS untuk Top Up Game',
      category: 'payment',
      views: 11200,
      readTime: '3 menit',
      difficulty: 'Mudah',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
      description: 'Tutorial menggunakan QRIS untuk top up berbagai game dengan mudah dan aman.',
      tags: ['QRIS', 'Payment', 'Universal'],
      isPopular: true,
      hasVideo: true
    },
    {
      id: 5,
      title: 'Mengatasi Diamond Tidak Masuk Setelah Bayar',
      category: 'troubleshoot',
      views: 9850,
      readTime: '6 menit',
      difficulty: 'Sedang',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop',
      description: 'Langkah-langkah troubleshooting ketika diamond atau coin tidak masuk setelah pembayaran berhasil.',
      tags: ['Diamond', 'Payment Issue', 'Support'],
      isPopular: false,
      hasVideo: false
    },
    {
      id: 6,
      title: 'Tutorial Top Up Free Fire dengan GoPay',
      category: 'tutorial',
      views: 13750,
      readTime: '4 menit',
      difficulty: 'Mudah',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
      description: 'Cara mudah dan cepat top up diamond Free Fire menggunakan GoPay dengan bonus tips hemat.',
      tags: ['Free Fire', 'GoPay', 'Diamond'],
      isPopular: true,
      hasVideo: true
    }
  ];

  const filteredArticles = articles?.filter(article => {
    const matchesSearch = article?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         article?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         article?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || article?.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const popularArticles = articles?.filter(article => article?.isPopular)?.slice(0, 3);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Mudah': return 'text-green-600 bg-green-100';
      case 'Sedang': return 'text-yellow-600 bg-yellow-100';
      case 'Sulit': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Pusat Pengetahuan
        </h2>
        <p className="text-text-secondary">
          Tutorial, panduan, dan tips untuk pengalaman top up yang optimal
        </p>
      </div>
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Cari tutorial, panduan, atau tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200"
          />
        </div>
      </div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-gaming'
                : 'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Popular Articles */}
      {selectedCategory === 'all' && !searchQuery && (
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-text-primary">
              Artikel Populer
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {popularArticles?.map((article) => (
              <div key={article?.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-gaming transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={article?.thumbnail}
                    alt={article?.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article?.hasVideo && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="Play" size={32} className="text-white" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {article?.title}
                  </h4>
                  
                  <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article?.views?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{article?.readTime}</span>
                    </div>
                    {article?.hasVideo && (
                      <div className="flex items-center space-x-1">
                        <Icon name="PlayCircle" size={12} />
                        <span>Video</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {article?.tags?.slice(0, 2)?.map((tag) => (
                      <span key={tag} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* All Articles */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">
            {searchQuery ? `Hasil pencarian "${searchQuery}"` : 'Semua Artikel'}
          </h3>
          <span className="text-sm text-text-secondary">
            {filteredArticles?.length} artikel ditemukan
          </span>
        </div>

        {filteredArticles?.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
            <h4 className="text-lg font-medium text-text-primary mb-2">
              Tidak ada artikel ditemukan
            </h4>
            <p className="text-text-secondary mb-6">
              Coba gunakan kata kunci yang berbeda atau hubungi support kami
            </p>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan%20mencari%20informasi', '_blank')}
            >
              Tanya Support
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredArticles?.map((article) => (
              <div key={article?.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-gaming transition-all duration-300 group">
                <div className="flex">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <img
                      src={article?.thumbnail}
                      alt={article?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article?.hasVideo && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Icon name="Play" size={20} className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-200 flex-1 pr-2">
                        {article?.title}
                      </h4>
                      {article?.isPopular && (
                        <Icon name="TrendingUp" size={16} className="text-primary flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-sm text-text-secondary line-clamp-2 mb-3">
                      {article?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={12} />
                          <span>{article?.views?.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{article?.readTime}</span>
                        </div>
                      </div>
                      
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(article?.difficulty)}`}>
                        {article?.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Tidak Menemukan yang Anda Cari?
          </h3>
          <p className="text-text-secondary mb-6">
            Tim support kami siap membantu Anda dengan pertanyaan apapun
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan', '_blank')}
            >
              Chat WhatsApp
            </Button>
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              onClick={() => window.open('mailto:pestok672@gmail.com?subject=Request%20Tutorial%20Baru', '_blank')}
            >
              Request Tutorial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;