import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { trackGoogleAnalytics } from '../utils/audio';
import { IMAGES } from '../data/images';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Target date: October 17, 2026 08:00:00
  const targetDate = new Date('2026-10-17T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const scrollToSchedule = () => {
    trackGoogleAnalytics('click_view_schedule', 'Engagement', 'Hero Section');
    const el = document.getElementById('schedule-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full py-12 md:py-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fbf8ff] via-[#f4f2fd] to-[#fbf8ff]">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e6bdb7] mb-6 shadow-sm">
          <Sparkles className="text-[#b40006]" size={18} />
          <span className="font-semibold text-xs md:text-sm text-[#1a1b22] tracking-wide">2006 – 2026 | 20 NĂM NGÀY RA TRƯỜNG</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1b22] mb-4 tracking-tight font-['Montserrat',sans-serif]">
          20 NĂM NGÀY RA TRƯỜNG
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold text-[#b40006] mb-6 font-['Montserrat',sans-serif]">
          Hội khóa K44 - Đại học Kinh tế Quốc dân
        </h2>

        <p className="text-base md:text-lg text-[#5f5e5e] max-w-2xl mb-8 leading-relaxed">
          Trở về mái trường xưa, ôn lại những kỷ niệm thanh xuân rực rỡ và cùng nhau viết tiếp câu chuyện của những người con NEU.
        </p>

        {/* Event Meta Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-medium text-[#5f5e5e]">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
            <Calendar size={16} className="text-[#b40006]" />
            <span>Thứ Bảy, 17/10/2026</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
            <Clock size={16} className="text-[#b40006]" />
            <span>08:00 Sáng</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
            <MapPin size={16} className="text-[#b40006]" />
            <span>Nhà Văn hóa ĐH Kinh tế Quốc dân Hà Nội</span>
          </div>
        </div>

        {/* Countdown Timer Card */}
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#e6bdb7]/60 mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#b40006] mb-3">
            ⏱ Đếm ngược thời gian đến Ngày hội chính (17/10/2026)
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-[#f4f2fd] p-3 rounded-xl border border-gray-100">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#1a1b22] font-['Montserrat',sans-serif]">{timeLeft.days}</span>
              <span className="text-xs text-[#5f5e5e] font-semibold">Ngày</span>
            </div>
            <div className="bg-[#f4f2fd] p-3 rounded-xl border border-gray-100">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#1a1b22] font-['Montserrat',sans-serif]">{timeLeft.hours}</span>
              <span className="text-xs text-[#5f5e5e] font-semibold">Giờ</span>
            </div>
            <div className="bg-[#f4f2fd] p-3 rounded-xl border border-gray-100">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#1a1b22] font-['Montserrat',sans-serif]">{timeLeft.minutes}</span>
              <span className="text-xs text-[#5f5e5e] font-semibold">Phút</span>
            </div>
            <div className="bg-[#f4f2fd] p-3 rounded-xl border border-gray-100">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#b40006] font-['Montserrat',sans-serif] animate-pulse">{timeLeft.seconds}</span>
              <span className="text-xs text-[#5f5e5e] font-semibold">Giây</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center">
          <button 
            onClick={() => {
              trackGoogleAnalytics('click_register_hero', 'Conversion', 'Hero CTA');
              onOpenRegister();
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#b40006] text-white font-semibold text-base rounded-full hover:bg-[#da251d] transition-all shadow-[0_4px_14px_0_rgba(180,0,6,0.39)] hover:shadow-[0_6px_20px_rgba(180,0,6,0.23)] hover:-translate-y-1 gap-2"
          >
            Đăng Ký Tham Gia Ngay <ArrowRight size={18} />
          </button>
          <button 
            onClick={scrollToSchedule}
            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#916f6a] text-[#1a1b22] font-semibold text-base rounded-full hover:bg-[#eeedf7] transition-colors"
          >
            Xem Lịch Trình Chi Tiết
          </button>
        </div>

        {/* Main Event Poster Image */}
        <div className="w-full flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-bold text-[#b40006] uppercase tracking-wider">🌟 Tiệc Gala Dinner đặc biệt - 20 năm Về lại Thanh Xuân</span>

        </div>
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#e6bdb7] group bg-white">
          <img 
            src={IMAGES.heroPoster} 
            alt="Hội Khóa K44 NEU - Về Lại Thanh Xuân" 
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
};
