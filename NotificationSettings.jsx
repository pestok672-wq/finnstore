import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const NotificationSettings = ({ settings, onUpdateSettings }) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [hasChanges, setHasChanges] = useState(false);

  const handleSettingChange = (key, value) => {
    setLocalSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    onUpdateSettings(localSettings);
    setHasChanges(false);
  };

  const handleReset = () => {
    setLocalSettings(settings);
    setHasChanges(false);
  };

  const notificationOptions = [
    {
      key: 'whatsappUpdates',
      label: 'Update WhatsApp',
      description: 'Terima notifikasi status transaksi via WhatsApp',
      icon: 'MessageCircle'
    },
    {
      key: 'promotionalOffers',
      label: 'Penawaran Promosi',
      description: 'Dapatkan info promo dan diskon terbaru',
      icon: 'Gift'
    },
    {
      key: 'transactionConfirmations',
      label: 'Konfirmasi Transaksi',
      description: 'Notifikasi untuk setiap transaksi yang berhasil',
      icon: 'CheckCircle'
    },
    {
      key: 'gameUpdates',
      label: 'Update Game',
      description: 'Info update dan event game favorit',
      icon: 'Gamepad2'
    },
    {
      key: 'loyaltyRewards',
      label: 'Loyalty Rewards',
      description: 'Pemberitahuan poin dan reward baru',
      icon: 'Star'
    },
    {
      key: 'securityAlerts',
      label: 'Alert Keamanan',
      description: 'Notifikasi aktivitas akun dan keamanan',
      icon: 'Shield'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Pengaturan Notifikasi</h3>
        <div className="flex items-center space-x-2">
          {hasChanges && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Save"
                onClick={handleSave}
              >
                Simpan
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {notificationOptions?.map((option) => (
          <div key={option?.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name={option?.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-text-primary">{option?.label}</h4>
                  <p className="text-sm text-text-secondary mt-1">{option?.description}</p>
                </div>
                <Checkbox
                  checked={localSettings?.[option?.key]}
                  onChange={(e) => handleSettingChange(option?.key, e?.target?.checked)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* WhatsApp Integration Status */}
      <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
            <Icon name="MessageCircle" size={20} className="text-success" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-text-primary">WhatsApp Terhubung</h4>
            <p className="text-sm text-text-secondary">
              Nomor: +62 812-3456-7890
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="Settings"
            onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          >
            Kelola
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;