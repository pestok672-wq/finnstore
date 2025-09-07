import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      id: 'topup',
      title: 'Cara Top Up',
      icon: 'CreditCard',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      questions: [
        {
          id: 1,
          question: 'Bagaimana cara melakukan top up game?',
          answer: `Untuk melakukan top up game, ikuti langkah berikut:\n\n1. Pilih game yang ingin di-top up dari katalog\n2. Masukkan User ID atau Player ID Anda\n3. Pilih nominal diamond/coin yang diinginkan\n4. Pilih metode pembayaran (DANA, OVO, GoPay, atau QRIS)\n5. Klik "Bayar Sekarang" dan ikuti instruksi pembayaran\n6. Setelah pembayaran berhasil, diamond/coin akan masuk ke akun game Anda dalam 1-5 menit`
        },
        {
          id: 2,
          question: 'Berapa lama proses top up?',
          answer: `Waktu proses top up bervariasi tergantung metode pembayaran:\n\n• DANA, OVO, GoPay: 1-3 menit\n• QRIS: 1-5 menit\n• Transfer Bank: 5-15 menit\n• Indomaret/Alfamart: 15-30 menit\n\nJika lebih dari waktu tersebut, silakan hubungi customer service kami.`
        },
        {
          id: 3,
          question: 'Apakah bisa top up untuk semua server?',
          answer: `Ya, kami mendukung top up untuk semua server game populer:\n\n• Mobile Legends: Semua server\n• Free Fire: Indonesia, Malaysia, Singapore\n• PUBG Mobile: Global, Korea, Vietnam\n• Genshin Impact: Asia, America, Europe\n• Honkai Star Rail: Semua server\n\nPastikan memilih server yang benar saat melakukan top up.`
        }
      ]
    },
    {
      id: 'payment',
      title: 'Masalah Pembayaran',
      icon: 'AlertCircle',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      questions: [
        {
          id: 4,
          question: 'Pembayaran sudah berhasil tapi diamond belum masuk?',
          answer: `Jika pembayaran sudah berhasil tapi diamond belum masuk:\n\n1. Tunggu hingga 15 menit (kadang ada delay dari server game)\n2. Restart aplikasi game Anda\n3. Periksa kembali User ID yang dimasukkan\n4. Cek email konfirmasi pembayaran\n5. Jika masih belum masuk, hubungi WhatsApp kami dengan menyertakan:\n   - Screenshot bukti pembayaran\n   - User ID game\n   - Nama game dan server`
        },
        {
          id: 5,
          question: 'Metode pembayaran error atau gagal?',
          answer: `Solusi untuk masalah pembayaran:\n\n• Pastikan saldo e-wallet mencukupi\n• Periksa koneksi internet Anda\n• Coba logout dan login kembali di aplikasi e-wallet\n• Gunakan metode pembayaran alternatif\n• Clear cache browser jika menggunakan web\n• Hubungi customer service jika masalah berlanjut`
        },
        {
          id: 6,
          question: 'Bisa refund jika salah top up?',
          answer: `Kebijakan refund kami:\n\n✅ BISA REFUND:\n• Salah memasukkan User ID (dalam 1 jam)\n• Diamond belum masuk setelah 24 jam\n• Double charge/pembayaran ganda\n\n❌ TIDAK BISA REFUND:\n• Diamond sudah masuk ke akun game\n• Salah pilih server (sudah masuk ke akun lain)\n• Perubahan pikiran setelah diamond masuk\n\nUntuk pengajuan refund, hubungi WhatsApp dengan bukti lengkap.`
        }
      ]
    },
    {
      id: 'security',
      title: 'Keamanan Transaksi',
      icon: 'Shield',
      color: 'text-success',
      bgColor: 'bg-success/10',
      questions: [
        {
          id: 7,
          question: 'Apakah transaksi di Finn Gaming aman?',
          answer: `Keamanan adalah prioritas utama kami:\n\n🔒 SERTIFIKASI KEAMANAN:\n• SSL Certificate 256-bit encryption\n• PCI DSS Compliance untuk pembayaran\n• ISO 27001 certified\n\n🛡️ PERLINDUNGAN DATA:\n• Data pribadi tidak disimpan\n• Enkripsi end-to-end\n• Server berlokasi di Indonesia\n\n✅ JAMINAN KEAMANAN:\n• Uang kembali 100% jika terbukti penipuan\n• Monitoring transaksi 24/7\n• Partnership resmi dengan game publisher`
        },
        {
          id: 8,
          question: 'Bagaimana cara melindungi akun saya?',
          answer: `Tips melindungi akun Anda:\n\n1. Jangan bagikan User ID ke sembarang orang\n2. Gunakan password yang kuat untuk akun game\n3. Aktifkan 2FA jika tersedia di game\n4. Hanya top up melalui situs resmi kami\n5. Jangan klik link mencurigakan\n6. Selalu logout setelah bermain di warnet\n7. Update aplikasi game secara berkala`
        }
      ]
    },
    {
      id: 'process',
      title: 'Waktu Proses',
      icon: 'Clock',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      questions: [
        {
          id: 9,
          question: 'Kenapa diamond belum masuk padahal sudah bayar?',
          answer: `Beberapa faktor yang mempengaruhi waktu proses:\n\n⏱️ WAKTU NORMAL:\n• E-wallet: 1-3 menit\n• QRIS: 1-5 menit\n• Transfer bank: 5-15 menit\n\n🕐 DELAY BISA TERJADI KARENA:\n• Server game sedang maintenance\n• Traffic tinggi saat event game\n• Masalah koneksi dengan publisher\n• Verifikasi keamanan tambahan\n\nJika lebih dari 30 menit, langsung hubungi customer service kami.`
        },
        {
          id: 10,
          question: 'Jam berapa saja layanan tersedia?',
          answer: `Layanan Finn Gaming tersedia 24/7:\n\n🕐 OTOMATIS 24 JAM:\n• Top up diamond/coin\n• Pembayaran e-wallet\n• Sistem keamanan\n\n👨‍💼 CUSTOMER SERVICE:\n• WhatsApp: 06:00 - 24:00 WIB\n• Email: 24 jam (respon max 2 jam)\n• Live Chat: 08:00 - 22:00 WIB\n\n⚡ RESPON TERCEPAT:\n• WhatsApp (rata-rata 3 menit)\n• Telegram (rata-rata 5 menit)`
        }
      ]
    }
  ];

  const toggleFAQ = (questionId) => {
    setOpenFAQ(openFAQ === questionId ? null : questionId);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Pertanyaan yang Sering Ditanyakan
        </h2>
        <p className="text-text-secondary">
          Temukan jawaban untuk pertanyaan umum seputar top up game
        </p>
      </div>
      {faqCategories?.map((category) => (
        <div key={category?.id} className="bg-card rounded-xl border border-border overflow-hidden">
          <div className={`${category?.bgColor} px-6 py-4 border-b border-border`}>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-white/80`}>
                <Icon name={category?.icon} size={20} className={category?.color} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {category?.title}
              </h3>
            </div>
          </div>

          <div className="divide-y divide-border">
            {category?.questions?.map((faq) => (
              <div key={faq?.id} className="p-6">
                <button
                  onClick={() => toggleFAQ(faq?.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h4 className="text-base font-medium text-text-primary group-hover:text-primary transition-colors duration-200 pr-4">
                    {faq?.question}
                  </h4>
                  <Icon
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className={`text-text-secondary group-hover:text-primary transition-all duration-200 flex-shrink-0 ${
                      openFAQ === faq?.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFAQ === faq?.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="prose prose-sm max-w-none">
                      {faq?.answer?.split('\n')?.map((line, index) => (
                        <p key={index} className="text-text-secondary leading-relaxed mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;