import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OrderSummary = ({ selectedGame, selectedAmount, selectedMethod, userInfo }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const calculateTotal = () => {
    if (!selectedAmount) return 0;
    const basePrice = selectedAmount?.price;
    const fee = selectedMethod?.fee || 0;
    return basePrice + fee;
  };

  const getDiscountAmount = () => {
    // Mock discount for first-time users or special promotions
    if (selectedAmount && selectedAmount?.price >= 100000) {
      return Math.floor(selectedAmount?.price * 0.05); // 5% discount for orders above 100k
    }
    return 0;
  };

  const discount = getDiscountAmount();
  const subtotal = selectedAmount?.price || 0;
  const fee = selectedMethod?.fee || 0;
  const total = subtotal + fee - discount;

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming sticky top-24">
      <div className="flex items-center space-x-2 mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Ringkasan Pesanan</h3>
        <Icon name="Receipt" size={18} className="text-primary" />
      </div>
      {/* Game Information */}
      {selectedGame && (
        <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg mb-4">
          <Image
            src={selectedGame?.image}
            alt={selectedGame?.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-text-primary">{selectedGame?.name}</h4>
            <p className="text-sm text-text-secondary">{selectedGame?.publisher}</p>
          </div>
        </div>
      )}
      {/* Amount Information */}
      {selectedAmount && (
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Nominal:</span>
            <span className="font-semibold text-text-primary">
              {selectedAmount?.diamonds?.toLocaleString('id-ID')} {
                selectedGame?.id === 'mobile-legends' ? 'Diamonds' : 
                selectedGame?.id === 'free-fire' ? 'Diamonds' :
                selectedGame?.id === 'pubg-mobile' ? 'UC' : 'Genesis Crystals'
              }
            </span>
          </div>
          
          {selectedAmount?.bonus > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Bonus:</span>
              <span className="font-semibold text-success">
                +{selectedAmount?.bonus} {
                  selectedGame?.id === 'mobile-legends' ? 'Diamonds' : 
                  selectedGame?.id === 'free-fire' ? 'Diamonds' :
                  selectedGame?.id === 'pubg-mobile' ? 'UC' : 'Crystals'
                }
              </span>
            </div>
          )}
        </div>
      )}
      {/* Payment Method */}
      {selectedMethod && (
        <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg mb-6">
          <div className="flex items-center space-x-3">
            <Image
              src={selectedMethod?.logo}
              alt={selectedMethod?.name}
              className="w-8 h-8 rounded object-cover"
            />
            <span className="font-medium text-text-primary">{selectedMethod?.name}</span>
          </div>
          <Icon name="Check" size={16} className="text-primary" />
        </div>
      )}
      {/* User Information */}
      {userInfo && (
        <div className="space-y-2 mb-6 p-4 bg-muted rounded-lg">
          <h5 className="font-semibold text-text-primary mb-2">Informasi Akun</h5>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-text-secondary">User ID:</span>
              <span className="text-text-primary font-medium">{userInfo?.userId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Server:</span>
              <span className="text-text-primary font-medium">{userInfo?.server}</span>
            </div>
            {userInfo?.username && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Username:</span>
                <span className="text-text-primary font-medium">{userInfo?.username}</span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Price Breakdown */}
      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Subtotal:</span>
          <span className="text-text-primary">{formatPrice(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Diskon:</span>
            <span className="text-success">-{formatPrice(discount)}</span>
          </div>
        )}

        {fee > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Biaya Admin:</span>
            <span className="text-text-primary">{formatPrice(fee)}</span>
          </div>
        )}

        <div className="border-t border-border pt-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-text-primary">Total Pembayaran:</span>
            <span className="font-bold text-lg text-primary">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      {/* Promo Code Section */}
      <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Tag" size={16} className="text-accent" />
          <span className="font-semibold text-accent">Kode Promo Tersedia</span>
        </div>
        <p className="text-sm text-text-secondary mb-3">
          Gunakan kode "NEWUSER" untuk diskon 10% (minimal pembelian Rp 50.000)
        </p>
        <button className="text-accent hover:text-accent/80 text-sm font-medium">
          Masukkan Kode Promo
        </button>
      </div>
      {/* Trust Indicators */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center space-x-2 text-sm text-success">
          <Icon name="Shield" size={14} />
          <span>Transaksi Dijamin Aman</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-success">
          <Icon name="Zap" size={14} />
          <span>Proses Otomatis &lt; 5 Menit</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-success">
          <Icon name="Headphones" size={14} />
          <span>Customer Service 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;