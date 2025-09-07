import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SecurityTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rizki",
      role: "Mobile Legends Player",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content: `Sudah 2 tahun pakai Finn Gaming untuk top-up ML. Yang paling saya suka adalah keamanannya yang terjamin. Pernah ada masalah dengan transaksi, tapi tim support langsung bantu dan uang saya dikembalikan dalam 24 jam. Benar-benar aman dan terpercaya!`,
      securityFocus: "Perlindungan Dana",
      gameSpent: "Rp 2.5M+",
      memberSince: "2022"
    },
    {
      id: 2,
      name: "Sari Dewi",
      role: "PUBG Mobile Enthusiast", 
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      content: `Sebagai perempuan, saya sangat concern dengan keamanan data pribadi. Finn Gaming memberikan rasa aman dengan enkripsi yang kuat. Tidak pernah ada kebocoran data atau transaksi yang mencurigakan. Customer service juga sangat responsif via WhatsApp.`,
      securityFocus: "Perlindungan Data Pribadi",
      gameSpent: "Rp 1.8M+",
      memberSince: "2023"
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Free Fire Pro Player",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      content: `Pernah hampir kena penipuan di platform lain, tapi sejak pakai Finn Gaming merasa lebih tenang. Sistem verifikasinya ketat tapi tidak ribet. Transaksi selalu berhasil dan diamonds langsung masuk ke akun game. Recommended banget untuk gamers Indonesia!`,
      securityFocus: "Anti-Fraud Protection",
      gameSpent: "Rp 3.2M+",
      memberSince: "2021"
    },
    {
      id: 4,
      name: "Maya Putri",
      role: "Genshin Impact Player",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: `Yang bikin saya percaya sama Finn Gaming adalah transparansi mereka soal keamanan. Semua proses dijelaskan dengan jelas, ada notifikasi untuk setiap step transaksi. Plus, mereka punya sertifikasi resmi yang bisa diverifikasi. Sangat professional!`,
      securityFocus: "Transparansi Keamanan",
      gameSpent: "Rp 1.5M+",
      memberSince: "2023"
    }
  ];

  const securityStats = [
    {
      id: 1,
      icon: "Shield",
      value: "99.9%",
      label: "Uptime Keamanan",
      description: "Sistem keamanan aktif 24/7"
    },
    {
      id: 2,
      icon: "Lock",
      value: "0",
      label: "Kebocoran Data",
      description: "Sejak tahun 2021"
    },
    {
      id: 3,
      icon: "CheckCircle",
      value: "500K+",
      label: "Transaksi Aman",
      description: "Berhasil diproses"
    },
    {
      id: 4,
      icon: "Users",
      value: "98%",
      label: "Kepuasan Keamanan",
      description: "Rating dari pengguna"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Testimoni Keamanan
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Pengalaman nyata pengguna tentang keamanan dan kepercayaan terhadap Finn Gaming Store
          </p>
        </div>

        {/* Security Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityStats?.map((stat) => (
            <div
              key={stat?.id}
              className="text-center p-6 bg-card rounded-xl border border-border gaming-card"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                {stat?.value}
              </div>
              <div className="font-medium text-text-primary mb-1">
                {stat?.label}
              </div>
              <div className="text-sm text-text-secondary">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-card rounded-2xl p-8 lg:p-12 border border-border gaming-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* User Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-2 border-card">
                  <Icon name="CheckCircle" size={16} color="white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-2">
                {testimonials?.[activeTestimonial]?.name}
              </h3>
              <p className="text-text-secondary mb-4">
                {testimonials?.[activeTestimonial]?.role}
              </p>

              {/* User Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">
                    {testimonials?.[activeTestimonial]?.securityFocus}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="DollarSign" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">
                    Total: {testimonials?.[activeTestimonial]?.gameSpent}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-sm text-text-secondary">
                    Member sejak {testimonials?.[activeTestimonial]?.memberSince}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Icon 
                  name="Quote" 
                  size={40} 
                  className="text-primary/20 absolute -top-4 -left-2" 
                />
                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed italic pl-8">
                  "{testimonials?.[activeTestimonial]?.content}"
                </blockquote>
              </div>

              {/* Security Badge */}
              <div className="mt-6 inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-lg">
                <Icon name="CheckCircle" size={16} />
                <span className="text-sm font-medium">Verified Secure Transaction</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 pointer-events-auto shadow-gaming"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300 pointer-events-auto shadow-gaming"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border inline-block">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Bergabung dengan 500K+ Gamers yang Percaya
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Rasakan sendiri keamanan dan kepercayaan yang telah dibuktikan oleh ribuan gamers Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gaming flex items-center justify-center space-x-2">
                <Icon name="Shield" size={20} />
                <span>Mulai Transaksi Aman</span>
              </button>
              <button className="btn-gaming-secondary flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Tanya Tim Keamanan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTestimonials;