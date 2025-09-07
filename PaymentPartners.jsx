import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PaymentPartners = () => {
  const paymentPartners = [
    {
      id: 1,
      name: "DANA",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop&crop=center",
      description: "E-wallet terpercaya dengan sertifikasi keamanan tingkat bank",
      features: ["Enkripsi End-to-End", "Biometric Security", "Real-time Monitoring"],
      trustScore: 98,
      users: "50M+"
    },
    {
      id: 2,
      name: "OVO",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=center",
      description: "Platform pembayaran digital dengan teknologi keamanan terdepan",
      features: ["Multi-Factor Auth", "Fraud Detection", "Secure Token"],
      trustScore: 97,
      users: "40M+"
    },
    {
      id: 3,
      name: "GoPay",
      logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=200&h=100&fit=crop&crop=center",
      description: "Solusi pembayaran terintegrasi dengan perlindungan maksimal",
      features: ["PIN Protection", "Device Binding", "Transaction Limit"],
      trustScore: 96,
      users: "45M+"
    },
    {
      id: 4,
      name: "QRIS",
      logo: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=200&h=100&fit=crop&crop=center",
      description: "Standar QR Code nasional dengan keamanan berlapis",
      features: ["Bank Grade Security", "Instant Verification", "Anti-Fraud System"],
      trustScore: 99,
      users: "100M+"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 27001",
      description: "Sertifikasi keamanan informasi internasional",
      icon: "Award"
    },
    {
      id: 2,
      name: "PCI DSS",
      description: "Standar keamanan industri kartu pembayaran",
      icon: "CreditCard"
    },
    {
      id: 3,
      name: "OJK Registered",
      description: "Terdaftar di Otoritas Jasa Keuangan Indonesia",
      icon: "Building"
    },
    {
      id: 4,
      name: "SOC 2 Type II",
      description: "Audit keamanan dan ketersediaan sistem",
      icon: "Shield"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Partner Pembayaran Terpercaya
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Bekerja sama dengan penyedia layanan pembayaran terkemuka Indonesia yang telah tersertifikasi keamanannya
          </p>
        </div>

        {/* Payment Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {paymentPartners?.map((partner) => (
            <div
              key={partner?.id}
              className="gaming-card bg-card p-8 rounded-2xl border border-border group hover:border-primary/30"
            >
              <div className="flex items-start space-x-6">
                {/* Partner Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden">
                    <Image
                      src={partner?.logo}
                      alt={`${partner?.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-text-primary">
                      {partner?.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} className="text-text-secondary" />
                      <span className="text-sm font-medium text-text-secondary">
                        {partner?.users}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {partner?.description}
                  </p>

                  {/* Trust Score */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-sm font-medium text-text-secondary">
                      Trust Score:
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2 max-w-32">
                      <div 
                        className="bg-gaming-success-gradient h-full rounded-full transition-all duration-1000"
                        style={{ width: `${partner?.trustScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-success">
                      {partner?.trustScore}%
                    </span>
                  </div>

                  {/* Security Features */}
                  <div className="space-y-2">
                    {partner?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Sertifikasi Keamanan
            </h3>
            <p className="text-text-secondary">
              Finn Gaming Store memiliki sertifikasi keamanan internasional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div
                key={cert?.id}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon 
                    name={cert?.icon} 
                    size={24} 
                    className="text-primary"
                  />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPartners;