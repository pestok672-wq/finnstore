import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      category: "Keamanan Data",
      question: "Bagaimana Finn Gaming melindungi data pribadi saya?",
      answer: `Kami menggunakan enkripsi SSL 256-bit yang sama dengan standar perbankan untuk melindungi semua data pribadi Anda. Data sensitif seperti informasi kartu kredit tidak disimpan di server kami dan langsung diproses melalui gateway pembayaran yang tersertifikasi PCI DSS.\n\nSelain itu, kami menerapkan kebijakan akses terbatas dimana hanya staff yang berwenang yang dapat mengakses data tertentu, dan semua akses dicatat dalam log audit yang dipantau 24/7.`
    },
    {
      id: 2,
      category: "Transaksi",
      question: "Apakah transaksi saya aman dari penipuan?",
      answer: `Ya, setiap transaksi dilindungi oleh sistem deteksi penipuan berbasis AI yang menganalisis pola transaksi secara real-time. Jika terdeteksi aktivitas mencurigakan, transaksi akan ditahan untuk verifikasi manual.\n\nKami juga bekerja sama dengan partner pembayaran terpercaya (DANA, OVO, GoPay) yang memiliki sistem keamanan berlapis. Semua transaksi dapat dilacak dan jika terjadi masalah, kami menyediakan garansi pengembalian dana 100%.`
    },
    {
      id: 3,
      category: "Akun",
      question: "Bagaimana cara melindungi akun saya dari hacker?",
      answer: `Gunakan password yang kuat dengan kombinasi huruf besar, kecil, angka, dan simbol. Aktifkan notifikasi email untuk setiap login dan transaksi agar Anda dapat memantau aktivitas akun.\n\nJangan pernah membagikan informasi login Anda kepada siapapun, termasuk yang mengaku sebagai customer service. Tim resmi Finn Gaming tidak akan pernah meminta password atau OTP melalui WhatsApp atau telepon.`
    },
    {
      id: 4,
      category: "Pembayaran",
      question: "Apakah metode pembayaran yang tersedia aman?",
      answer: `Semua metode pembayaran yang kami sediakan telah tersertifikasi dan diregulasi oleh otoritas keuangan Indonesia. DANA, OVO, dan GoPay adalah e-wallet berlisensi resmi dari Bank Indonesia.\n\nQRIS yang kami gunakan juga mengikuti standar keamanan nasional dengan enkripsi tingkat tinggi. Setiap transaksi melalui protokol keamanan berlapis dan dapat diverifikasi melalui sistem perbankan nasional.`
    },
    {
      id: 5,
      category: "Regulasi",
      question: "Apakah Finn Gaming terdaftar resmi dan legal?",
      answer: `Ya, Finn Gaming Store terdaftar resmi sebagai penyedia layanan pembayaran digital dengan nomor izin yang dapat diverifikasi melalui website OJK. Kami juga memiliki sertifikasi ISO 27001 untuk manajemen keamanan informasi.\n\nSemua aktivitas bisnis kami mematuhi regulasi Indonesia termasuk UU ITE, peraturan OJK tentang fintech, dan standar perlindungan konsumen. Anda dapat memverifikasi legalitas kami melalui channel resmi pemerintah.`
    },
    {
      id: 6,
      category: "Dukungan",
      question: "Bagaimana jika saya mengalami masalah keamanan?",
      answer: `Tim keamanan kami tersedia 24/7 melalui WhatsApp di nomor +62 812-3456-7890. Untuk masalah keamanan urgent, Anda juga bisa menghubungi email security@finngaming.id yang akan direspon dalam maksimal 1 jam.\n\nKami memiliki prosedur penanganan insiden keamanan yang cepat dan transparan. Setiap laporan akan ditindaklanjuti dengan investigasi menyeluruh dan Anda akan mendapat update progress secara berkala hingga masalah terselesaikan.`
    },
    {
      id: 7,
      category: "Pencegahan",
      question: "Bagaimana cara menghindari penipuan yang mengatasnamakan Finn Gaming?",
      answer: `Selalu akses website kami melalui URL resmi finngaming.id dan pastikan ada ikon gembok (SSL) di browser. Jangan klik link dari email atau SMS yang mencurigakan.\n\nTim resmi kami hanya menghubungi melalui WhatsApp Business dengan centang hijau dan tidak akan pernah meminta password, PIN, atau OTP. Jika ada yang mencurigakan, langsung laporkan ke tim keamanan kami untuk verifikasi.`
    },
    {
      id: 8,
      category: "Teknologi",
      question: "Teknologi keamanan apa saja yang digunakan Finn Gaming?",
      answer: `Kami menggunakan teknologi keamanan terdepan termasuk:\n• SSL/TLS 1.3 untuk enkripsi komunikasi\n• AES-256 untuk enkripsi data tersimpan\n• Multi-factor authentication (MFA)\n• Web Application Firewall (WAF)\n• DDoS protection\n• Real-time fraud detection dengan machine learning\n• Regular security audit oleh pihak ketiga tersertifikasi\n\nSemua infrastruktur di-host di data center tier-3 dengan sertifikasi internasional dan backup redundant.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const categories = [...new Set(faqData.map(faq => faq.category))];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Pertanyaan Keamanan
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Jawaban lengkap untuk pertanyaan umum tentang keamanan dan perlindungan data di Finn Gaming Store
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <div
              key={category}
              className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-card border border-border rounded-xl overflow-hidden gaming-card"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary mb-1">
                      {faq?.category}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {faq?.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Icon 
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-text-secondary transition-transform duration-300"
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === faq?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <div className="prose prose-sm max-w-none">
                      {faq?.answer?.split('\n')?.map((paragraph, index) => (
                        <p key={index} className="text-text-secondary leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    {/* Helpful Actions */}
                    <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-border">
                      <span className="text-sm text-text-secondary">Apakah ini membantu?</span>
                      <button className="flex items-center space-x-1 text-success hover:text-success/80 transition-colors duration-200">
                        <Icon name="ThumbsUp" size={16} />
                        <span className="text-sm">Ya</span>
                      </button>
                      <button className="flex items-center space-x-1 text-text-secondary hover:text-error transition-colors duration-200">
                        <Icon name="ThumbsDown" size={16} />
                        <span className="text-sm">Tidak</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Masih Ada Pertanyaan Keamanan?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Tim keamanan kami siap membantu Anda 24/7 melalui WhatsApp untuk menjawab pertanyaan spesifik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gaming flex items-center justify-center space-x-2">
                <Icon name="Shield" size={20} />
                <span>Hubungi Tim Keamanan</span>
              </button>
              <button className="btn-gaming-secondary flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Panduan Keamanan PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFAQ;