import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityContact = () => {
  const contactMethods = [
    {
      id: 1,
      type: "WhatsApp Security",
      title: "Tim Keamanan 24/7",
      description: "Hubungi langsung tim keamanan untuk masalah urgent atau pertanyaan spesifik",
      contact: "+62 812-3456-7890",
      icon: "MessageCircle",
      color: "text-success",
      bgColor: "bg-success/10",
      available: "24/7",
      responseTime: "< 5 menit"
    },
    {
      id: 2,
      type: "Email Security",
      title: "security@finngaming.id",
      description: "Kirim laporan keamanan atau pertanyaan detail melalui email resmi",
      contact: "security@finngaming.id",
      icon: "Mail",
      color: "text-primary",
      bgColor: "bg-primary/10",
      available: "24/7",
      responseTime: "< 1 jam"
    },
    {
      id: 3,
      type: "Emergency Hotline",
      title: "Hotline Darurat",
      description: "Untuk kasus penipuan atau kebocoran akun yang memerlukan tindakan segera",
      contact: "0804-1-FINN-SEC",
      icon: "Phone",
      color: "text-error",
      bgColor: "bg-error/10",
      available: "24/7",
      responseTime: "Langsung"
    },
    {
      id: 4,
      type: "Live Chat",
      title: "Chat Keamanan",
      description: "Chat real-time dengan spesialis keamanan melalui website",
      contact: "finngaming.id/security-chat",
      icon: "MessageSquare",
      color: "text-accent",
      bgColor: "bg-accent/10",
      available: "06:00-24:00",
      responseTime: "< 2 menit"
    }
  ];

  const securityTeam = [
    {
      id: 1,
      name: "Dr. Andi Wijaya",
      role: "Chief Security Officer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      expertise: "Cybersecurity & Risk Management",
      experience: "15+ tahun",
      certifications: ["CISSP", "CISM", "ISO 27001"]
    },
    {
      id: 2,
      name: "Sarah Kusuma",
      role: "Security Analyst Lead",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      expertise: "Fraud Detection & Prevention",
      experience: "10+ tahun",
      certifications: ["GCFA", "GCIH", "CEH"]
    },
    {
      id: 3,
      name: "Rizky Pratama",
      role: "Incident Response Manager",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      expertise: "Security Incident & Recovery",
      experience: "8+ tahun",
      certifications: ["GCIR", "GNFA", "CISSP"]
    }
  ];

  const emergencySteps = [
    {
      id: 1,
      title: "Deteksi Masalah",
      description: "Segera hubungi tim keamanan jika menemukan aktivitas mencurigakan",
      icon: "AlertTriangle"
    },
    {
      id: 2,
      title: "Laporan Cepat",
      description: "Berikan detail lengkap melalui WhatsApp atau hotline darurat",
      icon: "Phone"
    },
    {
      id: 3,
      title: "Tindakan Segera",
      description: "Tim akan mengamankan akun dan menghentikan aktivitas berbahaya",
      icon: "Shield"
    },
    {
      id: 4,
      title: "Pemulihan",
      description: "Proses recovery dan penguatan keamanan akun Anda",
      icon: "RefreshCw"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Kontak Tim Keamanan
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Tim keamanan profesional siap membantu Anda 24/7 untuk menjaga keamanan akun dan transaksi
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="gaming-card bg-card p-8 rounded-2xl border border-border group hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 ${method?.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={method?.icon} 
                    size={28} 
                    className={method?.color}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-primary mb-1">
                    {method?.type}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {method?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {method?.description}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <div className="font-mono text-lg font-semibold text-text-primary mb-2">
                  {method?.contact}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-success" />
                    <span className="text-text-secondary">
                      Tersedia: {method?.available}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={14} className="text-primary" />
                    <span className="text-text-secondary">
                      Respon: {method?.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full btn-gaming flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform duration-300">
                <Icon name={method?.icon} size={20} />
                <span>Hubungi Sekarang</span>
              </button>
            </div>
          ))}
        </div>

        {/* Security Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Tim Keamanan Profesional
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Dipimpin oleh para ahli keamanan bersertifikat internasional dengan pengalaman puluhan tahun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityTeam?.map((member) => (
              <div
                key={member?.id}
                className="text-center bg-card p-8 rounded-2xl border border-border gaming-card"
              >
                {/* Avatar */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={member?.avatar}
                      alt={member?.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-card">
                    <Icon name="Shield" size={16} color="white" />
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-xl font-bold text-text-primary mb-2">
                  {member?.name}
                </h4>
                <p className="text-primary font-medium mb-3">
                  {member?.role}
                </p>
                <p className="text-text-secondary mb-4">
                  {member?.expertise}
                </p>

                {/* Experience */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-sm font-medium text-text-primary">
                    {member?.experience}
                  </span>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member?.certifications?.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Response */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-error/10 rounded-xl mb-6">
              <Icon name="AlertTriangle" size={32} className="text-error" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Prosedur Darurat Keamanan
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Langkah-langkah cepat yang harus dilakukan jika mengalami masalah keamanan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySteps?.map((step, index) => (
              <div
                key={step?.id}
                className="relative text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-error rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step?.id}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-error/10 rounded-lg mb-4">
                  <Icon name={step?.icon} size={24} className="text-error" />
                </div>

                {/* Content */}
                <h4 className="font-semibold text-text-primary mb-3">
                  {step?.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step?.description}
                </p>

                {/* Connection Arrow */}
                {index < emergencySteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-error to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <div className="bg-error/5 rounded-lg p-6 inline-block">
              <h4 className="font-bold text-text-primary mb-2">
                Kontak Darurat 24/7
              </h4>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://wa.me/6281234567890"
                  className="flex items-center space-x-2 text-success hover:text-success/80 font-medium"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp: +62 812-3456-7890</span>
                </a>
                <span className="text-text-secondary">|</span>
                <a
                  href="tel:08041FINNSEC"
                  className="flex items-center space-x-2 text-error hover:text-error/80 font-medium"
                >
                  <Icon name="Phone" size={20} />
                  <span>Hotline: 0804-1-FINN-SEC</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityContact;