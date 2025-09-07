import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: "Lock",
      title: "Enkripsi SSL 256-bit",
      description: "Semua data transaksi dienkripsi dengan standar perbankan internasional untuk melindungi informasi pribadi Anda.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      icon: "Shield",
      title: "Perlindungan Data",
      description: "Kami tidak menyimpan informasi kartu kredit atau data sensitif. Semua transaksi diproses melalui gateway aman.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 3,
      icon: "Eye",
      title: "Monitoring 24/7",
      description: "Sistem pemantauan otomatis mendeteksi aktivitas mencurigakan dan melindungi akun Anda dari penipuan.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 4,
      icon: "CheckCircle",
      title: "Verifikasi Berlapis",
      description: "Proses verifikasi multi-tahap memastikan hanya Anda yang dapat mengakses dan menggunakan akun Anda.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: 5,
      icon: "RefreshCw",
      title: "Backup Otomatis",
      description: "Data transaksi Anda dicadangkan secara otomatis di server terenkripsi untuk mencegah kehilangan data.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 6,
      icon: "AlertTriangle",
      title: "Deteksi Penipuan",
      description: "AI canggih menganalisis pola transaksi untuk mendeteksi dan mencegah aktivitas penipuan secara real-time.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Fitur Keamanan Terdepan
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Teknologi keamanan berlapis yang melindungi setiap aspek transaksi gaming Anda dengan standar internasional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className="gaming-card bg-card p-8 rounded-2xl border border-border group hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature?.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon 
                  name={feature?.icon} 
                  size={28} 
                  className={feature?.color}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {feature?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature?.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm">
                  <span>Pelajari Lebih Lanjut</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-lg">
            <Icon name="CheckCircle" size={20} />
            <span className="font-medium">Semua fitur keamanan aktif 24/7 untuk melindungi Anda</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;