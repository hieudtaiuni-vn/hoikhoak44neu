import React, { useState } from 'react';
import { Menu, X, UserPlus, Calendar, Home, BookOpen, Users, Image as ImageIcon, Video } from 'lucide-react';
import { trackGoogleAnalytics } from '../utils/audio';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    trackGoogleAnalytics('nav_click', 'Navigation', sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-md w-full sticky top-0 z-50 border-b border-[#e6bdb7]/40 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 max-w-[1200px] mx-auto h-20">
        {/* Logo */}
        <div className="flex items-center gap-3.5 cursor-pointer py-1.5 group" onClick={() => handleNavClick('home')}>
          <div className="p-1.5 bg-gradient-to-br from-red-50 via-white to-red-50/50 rounded-2xl shadow-md border border-[#e6bdb7] transition-all duration-300 group-hover:border-[#b40006] group-hover:shadow-lg group-hover:scale-105 flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2LBvETA6SYn8ZO1hB20HpOytglGwWmqjJT_1AdCvcC1Y9duvd1ogyY4u27VN8hc7DjkSqkCfOCA9tx4VMgYr6zAEVEVAeFtfXEDv_3j9RO77IlhnHEpaRbOBMVnehrGGApixgZ0EoAEhPitTwyjnJLNOWBbIMon5XyHAVQSe6LTVvJtj2LdADagiJdlwJL8Lrnp8mRgXwn8HgvHf-SbeNNQ2R29WSNX61bpG1wAnSSrzEzw5nbDzzJlXcI_T-MPGA_VA" 
              alt="NEU Logo" 
              className="h-10 w-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="font-extrabold text-[#b40006] text-sm tracking-wider block font-['Montserrat',sans-serif]">NEU K44</span>
            <span className="text-xs text-[#5f5e5e] font-semibold">20 Năm Ngày Ra Trường</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center font-semibold text-sm">
          <button onClick={() => handleNavClick('home')} className="text-[#b40006] hover:text-[#da251d] transition-colors flex items-center gap-1">
            <Home size={16} /> Trang Chủ
          </button>
          <button onClick={() => handleNavClick('message')} className="text-[#5f5e5e] hover:text-[#b40006] transition-colors flex items-center gap-1">
            <BookOpen size={16} /> Thư Ngỏ
          </button>
          <button onClick={() => handleNavClick('committee')} className="text-[#5f5e5e] hover:text-[#b40006] transition-colors flex items-center gap-1">
            <Users size={16} /> Ban Tổ Chức
          </button>
          <button onClick={() => handleNavClick('gallery-section')} className="text-[#5f5e5e] hover:text-[#b40006] transition-colors flex items-center gap-1">
            <ImageIcon size={16} /> Không Gian
          </button>
          <button onClick={() => handleNavClick('schedule-section')} className="text-[#5f5e5e] hover:text-[#b40006] transition-colors flex items-center gap-1">
            <Calendar size={16} /> Lịch Trình
          </button>
          <button onClick={() => handleNavClick('video-section')} className="text-[#5f5e5e] hover:text-[#b40006] transition-colors flex items-center gap-1">
            <Video size={16} /> Video & Kỷ Niệm
          </button>
        </nav>

        {/* Right Actions: Music Toggle + Register CTA */}
        <div className="flex items-center gap-3">


          <button 
            onClick={() => {
              trackGoogleAnalytics('click_register_nav', 'Conversion', 'Header Register');
              onOpenRegister();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#b40006] text-white font-semibold text-sm rounded-full hover:bg-[#da251d] transition-all shadow-[0_4px_14px_0_rgba(180,0,6,0.39)] hover:shadow-[0_6px_20px_rgba(180,0,6,0.23)] hover:-translate-y-0.5"
          >
            Đăng Ký Ngay
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu" 
            className="md:hidden text-[#b40006] p-2 hover:bg-red-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e6bdb7] px-6 py-4 shadow-xl flex flex-col gap-4 animate-fadeIn">
          <button onClick={() => handleNavClick('home')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#b40006]">
            Trang Chủ
          </button>
          <button onClick={() => handleNavClick('message')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#5f5e5e]">
            Thư Ngỏ
          </button>
          <button onClick={() => handleNavClick('committee')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#5f5e5e]">
            Ban Tổ Chức
          </button>
          <button onClick={() => handleNavClick('gallery-section')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#5f5e5e]">
            Không Gian Sự Kiện
          </button>
          <button onClick={() => handleNavClick('schedule-section')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#5f5e5e]">
            Lịch Trình Sự Kiện
          </button>
          <button onClick={() => handleNavClick('video-section')} className="text-left font-medium text-lg py-2 border-b border-gray-100 text-[#5f5e5e]">
            Hành Trình & Video
          </button>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full py-3 bg-[#b40006] text-white font-semibold rounded-xl text-center shadow-md mt-2 flex items-center justify-center gap-2"
          >
            <UserPlus size={18} /> Đăng Ký Tham Gia (Google Form & In-App)
          </button>
        </div>
      )}
    </header>
  );
};
