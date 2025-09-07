import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      id: 'dana',
      name: 'DANA',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'E-Wallet',
      features: ['Instan', 'Tanpa Biaya Admin', 'Cashback'],
      isPopular: true,
      processingTime: '1-2 menit'
    },
    {
      id: 'ovo',
      name: 'OVO',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'E-Wallet',
      features: ['Instan', 'OVO Points', 'Promo Khusus'],
      isPopular: true,
      processingTime: '1-2 menit'
    },
    {
      id: 'gopay',
      name: 'GoPay',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'E-Wallet',
      features: ['Instan', 'GoCoins', 'Cashback'],
      isPopular: true,
      processingTime: '1-2 menit'
    },
    {
      id: 'qris',
      name: 'QRIS',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'Universal QR',
      features: ['Semua Bank', 'E-Wallet', 'Aman'],
      isPopular: false,
      processingTime: '2-3 menit'
    },
    {
      id: 'bank',
      name: 'Transfer Bank',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'Bank Transfer',
      features: ['BCA', 'Mandiri', 'BNI', 'BRI'],
      isPopular: false,
      processingTime: '5-10 menit'
    },
    {
      id: 'shopeepay',
      name: 'ShopeePay',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop',
      type: 'E-Wallet',
      features: ['Instan', 'Shopee Coins', 'Cashback'],
      isPopular: false,
      processingTime: '1-2 menit'
    }
  ];

  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'SSL Encryption',
      description: 'Data transaksi dienkripsi dengan teknologi SSL 256-bit'
    },
    {
      icon: 'Lock',
      title: 'Secure Payment',
      description: 'Terintegrasi langsung dengan payment gateway resmi'
    },
    {
      icon: 'CheckCircle',
      title: 'Verified Merchant',
      description: 'Merchant resmi dan terverifikasi oleh semua payment partner'
    },
    {
      icon: 'Clock',
      title: 'Real-time Processing',
      description: 'Sistem otomatis memproses transaksi 24/7 tanpa delay'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Metode Pembayaran
            <span className="block text-primary">Aman & Terpercaya</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Pilih metode pembayaran favorit kamu. Semua transaksi dijamin aman dengan enkripsi tingkat bank.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {paymentMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative bg-card rounded-xl border-2 p-6 text-center hover:shadow-gaming-hover transition-all duration-300 cursor-pointer group ${
                method?.isPopular 
                  ? 'border-primary shadow-gaming' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {method?.isPopular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    Populer
                  </span>
                </div>
              )}

              {/* Logo */}
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={method?.logo}
                    alt={method?.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Method Info */}
              <div className="mb-3">
                <h3 className="font-bold text-text-primary mb-1">{method?.name}</h3>
                <p className="text-xs text-text-secondary">{method?.type}</p>
              </div>

              {/* Features */}
              <div className="space-y-1 mb-3">
                {method?.features?.slice(0, 2)?.map((feature, index) => (
                  <div key={index} className="text-xs text-text-secondary">
                    {feature}
                  </div>
                ))}
              </div>

              {/* Processing Time */}
              <div className="flex items-center justify-center text-xs text-primary">
                <Icon name="Clock" size={12} className="mr-1" />
                {method?.processingTime}
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Keamanan Transaksi Terjamin
            </h3>
            <p className="text-text-secondary">
              Finn Gaming Store menggunakan teknologi keamanan terdepan untuk melindungi setiap transaksi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{feature?.title}</h4>
                <p className="text-sm text-text-secondary">{feature?.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-8 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Shield" size={16} className="text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="CheckCircle" size={16} className="text-blue-500" />
              <span>Verified Merchant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Users" size={16} className="text-purple-500" />
              <span>50K+ Trusted Users</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Clock" size={16} className="text-orange-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;