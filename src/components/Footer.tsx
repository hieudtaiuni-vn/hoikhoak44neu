import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2f3038] text-white w-full py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-700">
          
          <div>
            <h4 className="font-['Montserrat',sans-serif] text-xl font-bold text-white mb-3">NEU K44</h4>
            <div className="text-sm text-gray-300 leading-relaxed space-y-2">
              <p>
                Hội khóa kỷ niệm 20 năm ngày ra trường (2006 - 2026) - Đại học Kinh tế Quốc dân.<br/>
                <em>"Thanh xuân - Luôn đẹp khi ta có nhau."</em>
              </p>
              <div className="mt-3 text-xs text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[#ffb4a9] font-semibold">Phó Ban tổ chức Thường trực:</span> 
                  <a href="tel:0982135393" className="hover:text-white underline">0982 135 393 (Nguyễn Thị Giang)</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-[#ffb4a9] mb-4">Liên Kết Nhanh</h5>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Trang Chủ</button></li>
              <li><button onClick={() => scrollToSection('message')} className="hover:text-white transition-colors">Thư Ngỏ</button></li>
              <li><button onClick={() => scrollToSection('committee')} className="hover:text-white transition-colors">Ban Tổ Chức</button></li>
              <li><button onClick={() => scrollToSection('gallery-section')} className="hover:text-white transition-colors">Không Gian Sự Kiện</button></li>
              <li><button onClick={() => scrollToSection('schedule-section')} className="hover:text-white transition-colors">Lịch Trình Sự Kiện</button></li>
              <li><button onClick={onOpenRegister} className="text-[#ffb4a9] hover:underline font-semibold">Đăng Ký Tham Gia (Google Form)</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-[#ffb4a9] mb-4">Hệ Thống Tích Hợp</h5>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Bảo mật thông tin cựu sinh viên K44</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © 2026 NEU K44 Alumni Association. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span> <Heart size={14} className="text-red-500 fill-red-500" /> <span>for NEU K44 Generation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
