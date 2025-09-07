import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityProcess = () => {
  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Pilih Game & Nominal",
      description: "Pilih game favorit dan nominal top-up yang diinginkan melalui interface yang aman",
      icon: "Gamepad2",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      step: "02", 
      title: "Enkripsi Data",
      description: "Semua informasi transaksi dienkripsi dengan SSL 256-bit sebelum dikirim",
      icon: "Lock",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      step: "03",
      title: "Verifikasi Keamanan",
      description: "Sistem AI melakukan verifikasi otomatis untuk mendeteksi aktivitas mencurigakan",
      icon: "Shield",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 4,
      step: "04",
      title: "Proses Pembayaran",
      description: "Pembayaran diproses melalui gateway aman partner terpercaya (DANA, OVO, GoPay)",
      icon: "CreditCard",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: 5,
      step: "05",
      title: "Konfirmasi Real-time",
      description: "Notifikasi instan dikirim untuk mengkonfirmasi status transaksi yang berhasil",
      icon: "CheckCircle",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 6,
      step: "06",
      title: "Pengiriman Aman",
      description: "Item game dikirim langsung ke akun Anda melalui koneksi terenkripsi",
      icon: "Send",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const securityLayers = [
    {
      id: 1,
      layer: "Layer 1",
      name: "Firewall Protection",
      description: "Perlindungan tingkat pertama dari serangan eksternal",
      strength: 95
    },
    {
      id: 2,
      layer: "Layer 2", 
      name: "SSL Encryption",
      description: "Enkripsi data end-to-end dengan standar militer",
      strength: 98
    },
    {
      id: 3,
      layer: "Layer 3",
      name: "AI Fraud Detection",
      description: "Deteksi penipuan menggunakan machine learning",
      strength: 97
    },
    {
      id: 4,
      layer: "Layer 4",
      name: "Multi-Factor Auth",
      description: "Verifikasi berlapis untuk akses akun",
      strength: 99
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Proses Keamanan Transaksi
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Setiap transaksi melalui 6 tahap keamanan berlapis untuk memastikan perlindungan maksimal
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {processSteps?.map((step, index) => (
            <div
              key={step?.id}
              className="relative gaming-card bg-card p-8 rounded-2xl border border-border group hover:border-primary/30"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gaming-gradient rounded-xl flex items-center justify-center shadow-gaming">
                <span className="text-white font-bold text-lg">{step?.step}</span>
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${step?.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon 
                  name={step?.icon} 
                  size={28} 
                  className={step?.color}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {step?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step?.description}
              </p>

              {/* Connection Line (except last item) */}
              {index < processSteps?.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Security Layers Visualization */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Lapisan Keamanan Berlapis
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Sistem keamanan multi-layer yang melindungi data dan transaksi Anda dari berbagai ancaman cyber
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Security Layers List */}
            <div className="space-y-6">
              {securityLayers?.map((layer) => (
                <div
                  key={layer?.id}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{layer?.layer}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {layer?.name}
                    </h4>
                    <p className="text-sm text-text-secondary mb-2">
                      {layer?.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gaming-success-gradient h-full rounded-full transition-all duration-1000"
                          style={{ width: `${layer?.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-success">
                        {layer?.strength}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="gaming-constellation relative w-full h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
                {/* Concentric Security Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer Circle */}
                    <div className="w-64 h-64 border-2 border-primary/20 rounded-full animate-pulse"></div>
                    {/* Middle Circle */}
                    <div className="absolute inset-8 border-2 border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    {/* Inner Circle */}
                    <div className="absolute inset-16 border-2 border-success/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    {/* Core */}
                    <div className="absolute inset-24 bg-gaming-gradient rounded-full flex items-center justify-center shadow-gaming">
                      <Icon name="Shield" size={32} color="white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Security Nodes */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-12 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-16 left-16 w-3 h-3 bg-success rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
              </div>

              {/* Security Status */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground px-6 py-2 rounded-lg shadow-gaming">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} />
                  <span className="font-medium text-sm">Semua Layer Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityProcess;