import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WhatsAppConfirmation = ({ orderData, onConfirm }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const generateWhatsAppMessage = () => {
    const message = `Halo Finn Gaming Store! 👋

Saya ingin melakukan top-up dengan detail berikut:

🎮 *Game:* ${orderData?.game?.name}
💎 *Nominal:* ${orderData?.amount?.diamonds?.toLocaleString('id-ID')} ${
      orderData?.game?.id === 'mobile-legends' ? 'Diamonds' : 
      orderData?.game?.id === 'free-fire' ? 'Diamonds' :
      orderData?.game?.id === 'pubg-mobile' ? 'UC' : 'Genesis Crystals'
    }
👤 *User ID:* ${orderData?.userInfo?.userId}
🌐 *Server:* ${orderData?.userInfo?.server}
💳 *Metode Pembayaran:* ${orderData?.paymentMethod?.name}
💰 *Total:* ${formatPrice(orderData?.amount?.price + (orderData?.paymentMethod?.fee || 0))}

Mohon diproses ya kak! Terima kasih 🙏`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppRedirect = () => {
    setIsRedirecting(true);
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    
    // Simulate redirect delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
      onConfirm();
    }, 1000);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MessageCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Pesanan Siap Diproses!
        </h3>
        <p className="text-text-secondary">
          Klik tombol di bawah untuk melanjutkan ke WhatsApp dan menyelesaikan pembayaran
        </p>
      </div>
      {/* Order Summary */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-text-primary mb-3">Ringkasan Pesanan</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Game:</span>
            <span className="text-text-primary font-medium">{orderData?.game?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Nominal:</span>
            <span className="text-text-primary font-medium">
              {orderData?.amount?.diamonds?.toLocaleString('id-ID')} {
                orderData?.game?.id === 'mobile-legends' ? 'Diamonds' : 
                orderData?.game?.id === 'free-fire' ? 'Diamonds' :
                orderData?.game?.id === 'pubg-mobile' ? 'UC' : 'Genesis Crystals'
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">User ID:</span>
            <span className="text-text-primary font-medium">{orderData?.userInfo?.userId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Server:</span>
            <span className="text-text-primary font-medium">{orderData?.userInfo?.server}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Pembayaran:</span>
            <span className="text-text-primary font-medium">{orderData?.paymentMethod?.name}</span>
          </div>
          <div className="border-t border-border pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-semibold text-text-primary">Total:</span>
              <span className="font-bold text-primary">
                {formatPrice(orderData?.amount?.price + (orderData?.paymentMethod?.fee || 0))}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Instructions */}
      <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
        <h4 className="font-semibold text-primary mb-3">Langkah Selanjutnya:</h4>
        <div className="space-y-2 text-sm text-text-secondary">
          <div className="flex items-start space-x-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
            <span>Klik tombol "Lanjut ke WhatsApp" di bawah</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
            <span>Pesan otomatis akan terisi dengan detail pesanan Anda</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
            <span>Kirim pesan dan tunggu instruksi pembayaran dari admin</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
            <span>Setelah pembayaran, diamonds akan masuk otomatis ke akun Anda</span>
          </div>
        </div>
      </div>
      {/* Response Time Info */}
      <div className="bg-success/5 rounded-lg p-4 mb-6 border border-success/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Clock" size={16} className="text-success" />
          <span className="font-semibold text-success">Waktu Respon</span>
        </div>
        <p className="text-sm text-text-secondary">
          Admin kami online 24/7 dan akan merespon dalam waktu &lt; 5 menit. 
          Proses top-up biasanya selesai dalam 1-10 menit setelah pembayaran dikonfirmasi.
        </p>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          iconName="MessageCircle"
          iconPosition="left"
          loading={isRedirecting}
          onClick={handleWhatsAppRedirect}
          className="bg-success hover:bg-success/90 text-white font-semibold py-4"
        >
          {isRedirecting ? 'Mengarahkan ke WhatsApp...' : 'Lanjut ke WhatsApp'}
        </Button>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            fullWidth
            iconName="Copy"
            iconPosition="left"
            onClick={() => {
              navigator.clipboard?.writeText(decodeURIComponent(generateWhatsAppMessage()));
              // You could add a toast notification here
            }}
          >
            Salin Pesan
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="ArrowLeft"
            iconPosition="left"
            onClick={() => window.history?.back()}
          >
            Kembali
          </Button>
        </div>
      </div>
      {/* Contact Alternative */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary mb-2">
          Mengalami masalah? Hubungi kami langsung:
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <a
            href="tel:+6281234567890"
            className="flex items-center space-x-1 text-primary hover:text-primary/80"
          >
            <Icon name="Phone" size={14} />
            <span>+62 812-3456-7890</span>
          </a>
          <a
            href="mailto:support@finngaming.com"
            className="flex items-center space-x-1 text-primary hover:text-primary/80"
          >
            <Icon name="Mail" size={14} />
            <span>support@finngaming.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppConfirmation;