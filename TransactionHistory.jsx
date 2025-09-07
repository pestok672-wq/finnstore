import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransactionHistory = ({ transactions }) => {
  const [showAll, setShowAll] = useState(false);
  const displayTransactions = showAll ? transactions : transactions?.slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Berhasil':
        return 'text-success bg-success/10';
      case 'Diproses':
        return 'text-warning bg-warning/10';
      case 'Selesai':
        return 'text-primary bg-primary/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Berhasil':
        return 'CheckCircle';
      case 'Diproses':
        return 'Clock';
      case 'Selesai':
        return 'CheckCircle2';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Riwayat Transaksi</h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          onClick={() => window.location.href = '/transaction-history'}
        >
          Lihat Semua
        </Button>
      </div>
      <div className="space-y-3">
        {displayTransactions?.map((transaction) => (
          <div key={transaction?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={transaction?.gameIcon} 
                alt={transaction?.gameName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/assets/images/no_image.png';
                }}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-text-primary truncate">{transaction?.gameName}</h4>
              <p className="text-sm text-text-secondary">{transaction?.itemName}</p>
              <p className="text-xs text-text-secondary">{transaction?.date}</p>
            </div>
            
            <div className="text-right flex-shrink-0">
              <p className="font-semibold text-text-primary">
                Rp {transaction?.amount?.toLocaleString('id-ID')}
              </p>
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction?.status)}`}>
                <Icon name={getStatusIcon(transaction?.status)} size={12} />
                <span>{transaction?.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {transactions?.length > 5 && !showAll && (
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(true)}
          >
            Tampilkan {transactions?.length - 5} Transaksi Lainnya
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;