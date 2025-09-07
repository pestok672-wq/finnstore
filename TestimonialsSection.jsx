import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rizky Pratama",
      age: 22,
      location: "Jakarta",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      game: "Mobile Legends",
      rating: 5,
      review: `Top up di Finn Gaming Store selalu lancar dan cepat! Baru 2 menit udah masuk diamonds nya. Customer service nya juga ramah banget, selalu siap bantuin via WhatsApp. Recommended banget buat yang sering top up!`,
      purchaseAmount: "429 Diamonds",
      purchaseDate: "3 hari yang lalu",
      isVerified: true,
      whatsappScreenshot: true
    },
    {
      id: 2,
      name: "Sari Indah",
      age: 19,
      location: "Surabaya",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      game: "PUBG Mobile",
      rating: 5,
      review: `Udah langganan top up di sini hampir setahun. Harganya kompetitif, prosesnya cepat, dan yang paling penting aman. Pernah ada masalah kecil, langsung dibantu sama tim Finn lewat WhatsApp. Pelayanannya juara!`,
      purchaseAmount: "660 UC",
      purchaseDate: "1 minggu yang lalu",
      isVerified: true,
      whatsappScreenshot: true
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      age: 25,
      location: "Bandung",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      game: "Free Fire",
      rating: 5,
      review: `Finn Gaming Store emang yang terbaik! Udah top up berkali-kali, gak pernah ada masalah. Metode pembayarannya lengkap, bisa pakai DANA, OVO, atau GoPay. Prosesnya instan dan harga bersaing. Mantap!`,
      purchaseAmount: "720 Diamonds",
      purchaseDate: "2 hari yang lalu",
      isVerified: true,
      whatsappScreenshot: false
    },
    {
      id: 4,
      name: "Maya Sari",
      age: 20,
      location: "Medan",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      game: "Genshin Impact",
      rating: 5,
      review: `Sebagai F2P yang sesekali top up, Finn Gaming Store jadi pilihan utama. Harganya fair, prosesnya transparan, dan customer servicenya responsif. Pernah chat WhatsApp jam 11 malam, tetap direspon cepat. Recommended!`,
      purchaseAmount: "330 Genesis Crystals",
      purchaseDate: "5 hari yang lalu",
      isVerified: true,
      whatsappScreenshot: true
    },
    {
      id: 5,
      name: "Budi Santoso",
      age: 28,
      location: "Yogyakarta",
      avatar: "https://randomuser.me/api/portraits/men/73.jpg",
      game: "Mobile Legends",
      rating: 5,
      review: `Udah jadi customer setia Finn Gaming Store. Selain harga yang bersaing, yang bikin betah itu pelayanannya. Tim support nya sabar banget jelasin proses pembayaran. Transaksi selalu aman dan cepat masuk.`,
      purchaseAmount: "172 Diamonds",
      purchaseDate: "4 hari yang lalu",
      isVerified: true,
      whatsappScreenshot: false
    }
  ];

  const stats = [
    { label: "Total Transaksi", value: "50,000+", icon: "TrendingUp" },
    { label: "Rating Kepuasan", value: "4.9/5", icon: "Star" },
    { label: "Waktu Proses", value: "2.3 Menit", icon: "Clock" },
    { label: "Success Rate", value: "99.8%", icon: "CheckCircle" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentReview = testimonials?.[currentTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Apa Kata Gamers Indonesia?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Lebih dari 50.000 gamers Indonesia sudah mempercayai Finn Gaming Store untuk kebutuhan top up mereka
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-card rounded-2xl border border-border shadow-gaming p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Testimonial Content */}
            <div>
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-sm text-text-secondary">
                  {currentReview?.rating}/5
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-lg text-text-primary mb-6 leading-relaxed">
                "{currentReview?.review}"
              </blockquote>

              {/* Purchase Info */}
              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold text-text-primary">
                      {currentReview?.game}
                    </div>
                    <div className="text-text-secondary">
                      {currentReview?.purchaseAmount}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-text-secondary">
                      {currentReview?.purchaseDate}
                    </div>
                    {currentReview?.whatsappScreenshot && (
                      <div className="flex items-center text-green-600 text-xs mt-1">
                        <Icon name="MessageCircle" size={12} className="mr-1" />
                        WhatsApp Verified
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src={currentReview?.avatar}
                  alt={currentReview?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-text-primary">
                      {currentReview?.name}
                    </h4>
                    {currentReview?.isVerified && (
                      <Icon name="CheckCircle" size={16} className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {currentReview?.age} tahun, {currentReview?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Mockup */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Finn Gaming Store</div>
                      <div className="text-xs text-gray-500">Online</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      Halo! Terima kasih sudah top up di Finn Gaming Store 🎮
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      {currentReview?.purchaseAmount} untuk {currentReview?.game} sudah berhasil diproses ✅
                    </div>
                    <div className="bg-green-500 text-white rounded-lg p-3 text-sm ml-8">
                      Wah cepet banget! Makasih ya, pelayanannya top! 👍
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      Sama-sama! Jangan lupa kasih review ya 😊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary w-8' :'bg-border hover:bg-border/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.slice(0, 3)?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-gaming-hover transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-text-primary mb-4 text-sm leading-relaxed line-clamp-4">
                "{testimonial?.review?.substring(0, 120)}..."
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <h5 className="font-semibold text-text-primary text-sm">
                      {testimonial?.name}
                    </h5>
                    {testimonial?.isVerified && (
                      <Icon name="CheckCircle" size={14} className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-xs text-text-secondary">
                    {testimonial?.game} • {testimonial?.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;