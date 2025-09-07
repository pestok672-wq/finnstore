import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PaymentMethodSelector = ({ selectedMethod, onMethodChange }) => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrTimer, setQrTimer] = useState(300); // 5 minutes

  const paymentMethods = [
    {
      id: 'dana',
      name: 'DANA',
      type: 'ewallet',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
      popular: true,
      processingTime: 'Instan',
      fee: 0,
      description: 'Bayar langsung dari saldo DANA'
    },
    {
      id: 'ovo',
      name: 'OVO',
      type: 'ewallet',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?w=100&h=100&fit=crop',
      popular: true,
      processingTime: 'Instan',
      fee: 0,
      description: 'Bayar dengan saldo atau kartu OVO'
    },
    {
      id: 'gopay',
      name: 'GoPay',
      type: 'ewallet',
      logo: 'https://images.pixabay.com/photo/2017/03/23/09/34/smartphone-2167357_1280.jpg?w=100&h=100&fit=crop',
      popular: false,
      processingTime: 'Instan',
      fee: 0,
      description: 'Bayar dengan saldo GoPay'
    },
    {
      id: 'qris',
      name: 'QRIS',
      type: 'qr',
      logo: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=100&h=100&fit=crop',
      popular: false,
      processingTime: 'Instan',
      fee: 0,
      description: 'Scan QR dengan aplikasi bank/e-wallet'
    },
    {
      id: 'bank-transfer',
      name: 'Transfer Bank',
      type: 'bank',
      logo: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?w=100&h=100&fit=crop',
      popular: false,
      processingTime: '1-10 menit',
      fee: 0,
      description: 'Transfer via ATM, mobile banking, atau internet banking'
    },
    {
      id: 'alfamart',
      name: 'Alfamart',
      type: 'retail',
      logo: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=100&h=100&fit=crop',
      popular: false,
      processingTime: '1-24 jam',
      fee: 2500,
      description: 'Bayar di kasir Alfamart terdekat'
    }
  ];

  React.useEffect(() => {
    let interval;
    if (showQRCode && qrTimer > 0) {
      interval = setInterval(() => {
        setQrTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showQRCode, qrTimer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handleMethodSelect = (method) => {
    onMethodChange(method);
    if (method?.id === 'qris') {
      setShowQRCode(true);
      setQrTimer(300);
    } else {
      setShowQRCode(false);
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming">
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Metode Pembayaran</h3>
        <Icon name="CreditCard" size={18} className="text-primary" />
      </div>
      <div className="space-y-3">
        {paymentMethods?.map((method) => (
          <button
            key={method?.id}
            onClick={() => handleMethodSelect(method)}
            className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
              selectedMethod?.id === method?.id
                ? 'border-primary bg-primary/5 shadow-gaming'
                : 'border-border hover:border-primary/50 hover:bg-muted'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src={method?.logo}
                  alt={method?.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                {method?.popular && (
                  <div className="absolute -top-1 -right-1 bg-secondary text-white text-xs px-1 py-0.5 rounded-full font-medium">
                    Populer
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-text-primary">{method?.name}</h4>
                  {selectedMethod?.id === method?.id && (
                    <Icon name="Check" size={16} className="text-primary" />
                  )}
                </div>
                
                <p className="text-sm text-text-secondary mb-2">{method?.description}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    Proses: {method?.processingTime}
                  </span>
                  <span className={`font-medium ${method?.fee > 0 ? 'text-warning' : 'text-success'}`}>
                    {method?.fee > 0 ? `+Rp ${method?.fee?.toLocaleString('id-ID')}` : 'Gratis'}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* QRIS QR Code Display */}
      {showQRCode && selectedMethod?.id === 'qris' && (
        <div className="mt-6 p-6 bg-muted rounded-lg text-center">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-text-primary">Scan QR Code</h4>
            <div className="flex items-center space-x-2 text-warning">
              <Icon name="Clock" size={16} />
              <span className="font-mono font-semibold">{formatTime(qrTimer)}</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg inline-block mb-4">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="QrCode" size={64} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">QR Code QRIS</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm text-text-secondary">
            <p>1. Buka aplikasi bank atau e-wallet favorit Anda</p>
            <p>2. Pilih menu "Scan QR" atau "QRIS"</p>
            <p>3. Arahkan kamera ke QR code di atas</p>
            <p>4. Konfirmasi pembayaran di aplikasi Anda</p>
          </div>
          
          <button
            onClick={() => setShowQRCode(false)}
            className="mt-4 text-primary hover:text-primary/80 text-sm font-medium"
          >
            Tutup QR Code
          </button>
        </div>
      )}
      {/* Security Assurance */}
      <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Shield" size={16} className="text-success" />
          <span className="font-semibold text-success">Transaksi Aman 100%</span>
        </div>
        <p className="text-sm text-text-secondary">
          Semua transaksi dilindungi dengan enkripsi SSL 256-bit dan sistem keamanan berlapis.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;