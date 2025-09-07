import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300D4FF%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Security Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gaming-gradient rounded-2xl mb-8 shadow-gaming pulse-gaming">
            <Icon name="Shield" size={40} color="white" strokeWidth={2.5} />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            Keamanan &{' '}
            <span className="text-gaming-gradient">Kepercayaan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
            Transaksi gaming Anda dilindungi dengan teknologi keamanan tingkat bank dan sertifikasi internasional
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-gaming">
              <Icon name="Lock" size={20} className="text-success" />
              <span className="text-sm font-medium text-text-primary">SSL 256-bit</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-gaming">
              <Icon name="CheckCircle" size={20} className="text-success" />
              <span className="text-sm font-medium text-text-primary">Terdaftar OJK</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-gaming">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">500K+ Pengguna</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gaming flex items-center justify-center space-x-2">
              <Icon name="MessageCircle" size={20} />
              <span>Hubungi Tim Keamanan</span>
            </button>
            <button className="btn-gaming-secondary flex items-center justify-center space-x-2">
              <Icon name="Download" size={20} />
              <span>Unduh Panduan Keamanan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;