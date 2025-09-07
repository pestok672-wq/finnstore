import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Chat langsung dengan tim support',
      responseTime: 'Biasanya dibalas dalam 3 menit',
      availability: '06:00 - 24:00 WIB',
      icon: 'MessageCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      contact: '+62 812-3456-7890',
      action: () => window.open('https://wa.me/6281234567890?text=Halo%20Finn%20Gaming,%20saya%20butuh%20bantuan', '_blank'),
      isPrimary: true
    },
    {
      id: 'email',
      name: 'Email Support',
      description: 'Kirim pertanyaan detail via email',
      responseTime: 'Respon maksimal 2 jam',
      availability: '24 jam setiap hari',
      icon: 'Mail',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      contact: 'pestok672@gmail.com',
      action: () => window.open('mailto:pestok672@gmail.com?subject=Bantuan%20Finn%20Gaming&body=Halo%20tim%20support,%0A%0ASaya%20membutuhkan%20bantuan%20untuk:%0A%0A[Jelaskan%20masalah%20Anda%20di%20sini]', '_blank'),
      isPrimary: false
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Chat cepat via Telegram',
      responseTime: 'Biasanya dibalas dalam 5 menit',
      availability: '08:00 - 22:00 WIB',
      icon: 'Send',
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      buttonColor: 'bg-sky-600 hover:bg-sky-700',
      contact: '@finngaming_support',
      action: () => window.open('https://t.me/finngaming_support', '_blank'),
      isPrimary: false
    }
  ];

  const supportTeam = [
    {
      id: 1,
      name: 'Andi Pratama',
      role: 'Senior Support Specialist',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      speciality: 'Mobile Legends, Free Fire',
      rating: 4.9,
      responseTime: '2 menit'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      role: 'Payment Support Expert',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      speciality: 'DANA, OVO, GoPay',
      rating: 4.8,
      responseTime: '3 menit'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Technical Support Lead',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      speciality: 'PUBG Mobile, Genshin Impact',
      rating: 4.9,
      responseTime: '4 menit'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Hubungi Kami
          </h2>
          <p className="text-text-secondary">
            Tim support kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative bg-card border-2 ${method?.borderColor} rounded-xl p-6 hover:shadow-gaming transition-all duration-300 ${
                method?.isPrimary ? 'ring-2 ring-primary ring-opacity-20' : ''
              }`}
            >
              {method?.isPrimary && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Tercepat
                  </span>
                </div>
              )}

              <div className={`${method?.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={method?.icon} size={24} className={method?.color} />
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {method?.name}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4">
                {method?.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">
                    {method?.responseTime}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">
                    {method?.availability}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary font-medium">
                    {method?.contact}
                  </span>
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={method?.action}
                className={`${method?.buttonColor} text-white`}
                iconName={method?.icon}
                iconPosition="left"
              >
                Hubungi {method?.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Support Team */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Tim Support Kami
          </h2>
          <p className="text-text-secondary">
            Kenalan dengan para ahli yang siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportTeam?.map((member) => (
            <div key={member?.id} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-gaming transition-all duration-300">
              <div className="relative mb-4">
                <img
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {member?.name}
              </h3>
              
              <p className="text-sm text-text-secondary mb-3">
                {member?.role}
              </p>

              <div className="bg-muted rounded-lg p-3 mb-4">
                <p className="text-xs text-text-secondary mb-1">Spesialisasi:</p>
                <p className="text-sm font-medium text-text-primary">
                  {member?.speciality}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                  <span className="font-medium text-text-primary">
                    {member?.rating}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="text-text-secondary">
                    ~{member?.responseTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
            <Icon name="AlertTriangle" size={24} className="text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Masalah Urgent?
            </h3>
            <p className="text-red-700 text-sm mb-4">
              Jika Anda mengalami masalah pembayaran yang urgent atau kehilangan diamond dalam jumlah besar, hubungi hotline darurat kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                className="bg-red-600 hover:bg-red-700 text-white"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+6281234567890')}
              >
                Hotline: 085867662334
              </Button>
              <Button
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://wa.me/6281234567890?text=URGENT:%20Saya%20membutuhkan%20bantuan%20segera', '_blank')}
              >
                WhatsApp Urgent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;