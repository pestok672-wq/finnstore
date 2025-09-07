import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentMethods = ({ savedMethods, onAddMethod, onRemoveMethod, onSetDefault }) => {
  const [showAll, setShowAll] = useState(false);
  const displayMethods = showAll ? savedMethods : savedMethods?.slice(0, 3);

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'DANA':
        return 'Wallet';
      case 'OVO':
        return 'CreditCard';
      case 'GoPay':
        return 'Smartphone';
      case 'QRIS':
        return 'QrCode';
      default:
        return 'CreditCard';
    }
  };

  const getPaymentColor = (type) => {
    switch (type) {
      case 'DANA':
        return 'text-blue-600 bg-blue-50';
      case 'OVO':
        return 'text-purple-600 bg-purple-50';
      case 'GoPay':
        return 'text-green-600 bg-green-50';
      case 'QRIS':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Metode Pembayaran</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          onClick={onAddMethod}
        >
          Tambah
        </Button>
      </div>
      <div className="space-y-3">
        {displayMethods?.map((method) => (
          <div key={method?.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg ${getPaymentColor(method?.type)} flex items-center justify-center`}>
                <Icon name={getPaymentIcon(method?.type)} size={20} />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-text-primary">{method?.type}</h4>
                  {method?.isDefault && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary">{method?.accountInfo}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {!method?.isDefault && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onSetDefault(method?.id)}
                >
                  Set Default
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                iconName="Trash2"
                onClick={() => onRemoveMethod(method?.id)}
                className="text-error hover:text-error hover:bg-error/10"
              />
            </div>
          </div>
        ))}
      </div>
      {savedMethods?.length > 3 && !showAll && (
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(true)}
          >
            Tampilkan {savedMethods?.length - 3} Metode Lainnya
          </Button>
        </div>
      )}
      {savedMethods?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="CreditCard" size={48} className="text-text-secondary mx-auto mb-3" />
          <p className="text-text-secondary mb-4">Belum ada metode pembayaran tersimpan</p>
          <Button
            variant="outline"
            iconName="Plus"
            iconPosition="left"
            onClick={onAddMethod}
          >
            Tambah Metode Pembayaran
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;