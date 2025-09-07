import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const UserInfoForm = ({ gameId, userInfo, onUserInfoChange }) => {
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const getServerOptions = (gameId) => {
    const serverOptions = {
      'mobile-legends': [
        { value: '2001', label: '2001' },
        { value: '2002', label: '2002' },
        { value: '2003', label: '2003' },
        { value: '2004', label: '2004' },
        { value: '2005', label: '2005' },
        { value: '2006', label: '2006' },
        { value: '2007', label: '2007' },
        { value: '2008', label: '2008' }
      ],
      'free-fire': [
        { value: 'Bermuda', label: 'Bermuda' },
        { value: 'Purgatory', label: 'Purgatory' },
        { value: 'Kalahari', label: 'Kalahari' },
        { value: 'Alpine', label: 'Alpine' }
      ],
      'pubg-mobile': [
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'North America', label: 'North America' },
        { value: 'South America', label: 'South America' }
      ],
      'genshin-impact': [
        { value: 'Asia', label: 'Asia' },
        { value: 'America', label: 'America' },
        { value: 'Europe', label: 'Europe' },
        { value: 'TW_HK_MO', label: 'TW, HK, MO' }
      ]
    };

    return serverOptions?.[gameId] || serverOptions?.['mobile-legends'];
  };

  const validateUserInfo = async () => {
    if (!userInfo?.userId || !userInfo?.server) return;

    setIsValidating(true);
    
    // Simulate API validation
    setTimeout(() => {
      const mockUsernames = {
        '123456789': 'ProGamer123',
        '987654321': 'NinjaWarrior',
        '555666777': 'DragonSlayer',
        '111222333': 'MasterChief'
      };

      const username = mockUsernames?.[userInfo?.userId];
      
      if (username) {
        setValidationResult({
          success: true,
          username: username,
          level: Math.floor(Math.random() * 50) + 1
        });
        onUserInfoChange({
          ...userInfo,
          username: username,
          isValidated: true
        });
      } else {
        setValidationResult({
          success: false,
          message: 'User ID tidak ditemukan. Pastikan User ID dan Server sudah benar.'
        });
      }
      
      setIsValidating(false);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    const updatedInfo = { ...userInfo, [field]: value, isValidated: false };
    onUserInfoChange(updatedInfo);
    setValidationResult(null);
  };

  const getGameSpecificLabels = (gameId) => {
    const labels = {
      'mobile-legends': {
        userIdLabel: 'User ID',
        userIdPlaceholder: 'Masukkan User ID Mobile Legends',
        serverLabel: 'Zone ID',
        note: 'User ID dan Zone ID dapat ditemukan di profil game Anda'
      },
      'free-fire': {
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID Free Fire',
        serverLabel: 'Server',
        note: 'Player ID dapat ditemukan di profil game Anda'
      },
      'pubg-mobile': {
        userIdLabel: 'Player ID',
        userIdPlaceholder: 'Masukkan Player ID PUBG Mobile',
        serverLabel: 'Server',
        note: 'Player ID dapat ditemukan di profil game Anda'
      },
      'genshin-impact': {
        userIdLabel: 'UID',
        userIdPlaceholder: 'Masukkan UID Genshin Impact',
        serverLabel: 'Server',
        note: 'UID dapat ditemukan di menu Paimon > Settings'
      }
    };

    return labels?.[gameId] || labels?.['mobile-legends'];
  };

  const labels = getGameSpecificLabels(gameId);
  const serverOptions = getServerOptions(gameId);

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming">
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Informasi Akun Game</h3>
        <Icon name="User" size={18} className="text-primary" />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={labels?.userIdLabel}
            type="text"
            placeholder={labels?.userIdPlaceholder}
            value={userInfo?.userId || ''}
            onChange={(e) => handleInputChange('userId', e?.target?.value)}
            required
            className="font-mono"
          />

          <Select
            label={labels?.serverLabel}
            placeholder="Pilih Server"
            options={serverOptions}
            value={userInfo?.server || ''}
            onChange={(value) => handleInputChange('server', value)}
            required
          />
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={validateUserInfo}
            disabled={!userInfo?.userId || !userInfo?.server || isValidating}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors duration-200"
          >
            {isValidating ? (
              <>
                <Icon name="Loader2" size={16} className="animate-spin" />
                <span>Memvalidasi...</span>
              </>
            ) : (
              <>
                <Icon name="Search" size={16} />
                <span>Cek Akun</span>
              </>
            )}
          </button>

          {validationResult && (
            <div className={`flex items-center space-x-2 ${
              validationResult?.success ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={validationResult?.success ? "CheckCircle" : "XCircle"} 
                size={16} 
              />
              <span className="text-sm font-medium">
                {validationResult?.success ? 'Akun Ditemukan' : 'Akun Tidak Ditemukan'}
              </span>
            </div>
          )}
        </div>

        {validationResult?.success && (
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="User" size={16} className="text-success" />
              <span className="font-semibold text-success">Informasi Akun</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Username:</span>
                <span className="text-text-primary font-medium">{validationResult?.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Level:</span>
                <span className="text-text-primary font-medium">{validationResult?.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Server:</span>
                <span className="text-text-primary font-medium">{userInfo?.server}</span>
              </div>
            </div>
          </div>
        )}

        {validationResult?.success === false && (
          <div className="p-4 bg-error/5 rounded-lg border border-error/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="AlertCircle" size={16} className="text-error" />
              <span className="font-semibold text-error">Validasi Gagal</span>
            </div>
            <p className="text-sm text-text-secondary">{validationResult?.message}</p>
          </div>
        )}

        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-primary mt-0.5" />
            <div className="text-sm text-text-secondary">
              <p className="font-medium text-text-primary mb-1">Cara menemukan informasi akun:</p>
              <p>{labels?.note}</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nomor WhatsApp"
            type="tel"
            placeholder="+62 812-3456-7890"
            value={userInfo?.whatsapp || ''}
            onChange={(e) => handleInputChange('whatsapp', e?.target?.value)}
            description="Untuk konfirmasi dan notifikasi transaksi"
            required
          />

          <Input
            label="Email (Opsional)"
            type="email"
            placeholder="email@example.com"
            value={userInfo?.email || ''}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            description="Untuk receipt dan riwayat transaksi"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;