import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickAddModal = ({ isOpen, onClose, game, selectedDenomination }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!isOpen || !game || !selectedDenomination) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const totalPrice = selectedDenomination?.price * quantity;

  const handleProceedToCheckout = () => {
    navigate('/payment-checkout', {
      state: {
        selectedGame: game,
        selectedDenomination: selectedDenomination,
        quantity: quantity,
        totalPrice: totalPrice,
        fromQuickAdd: true
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl border border-border max-w-md w-full shadow-gaming-modal">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-text-primary">
            Quick Top Up
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={20} className="text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Game Info */}
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={game?.image}
              alt={game?.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary">
                {game?.name}
              </h4>
              <p className="text-sm text-text-secondary">
                {selectedDenomination?.label}
              </p>
            </div>
          </div>

          {/* Denomination Details */}
          <div className="bg-muted rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">Item</span>
              <span className="font-semibold text-text-primary">
                {selectedDenomination?.label}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">Harga Satuan</span>
              <span className="font-semibold text-text-primary">
                {formatPrice(selectedDenomination?.price)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Bonus</span>
              <span className="text-sm text-success font-medium">
                {selectedDenomination?.bonus || 'Tidak ada'}
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Jumlah
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Icon name="Minus" size={16} />
              </button>
              
              <div className="flex-1 text-center">
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e?.target?.value) || 1)))}
                  className="w-full text-center text-lg font-semibold bg-transparent border-none outline-none"
                />
              </div>
              
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                disabled={quantity >= 10}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
            <p className="text-xs text-text-secondary mt-1 text-center">
              Maksimal 10 item per transaksi
            </p>
          </div>

          {/* Total */}
          <div className="bg-primary/10 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-text-primary">
                Total Pembayaran
              </span>
              <span className="text-xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Icon name="Clock" size={14} className="text-text-secondary" />
              <span className="text-xs text-text-secondary">
                Proses otomatis dalam 5 menit
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Batal
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="ShoppingCart"
              iconPosition="left"
              onClick={handleProceedToCheckout}
            >
              Lanjut Bayar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddModal;