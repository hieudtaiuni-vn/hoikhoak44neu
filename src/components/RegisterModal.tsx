import React from 'react';
import { X, ExternalLink, FileText, CheckCircle2, Calendar, MapPin, Shield } from 'lucide-react';
import { trackGoogleAnalytics } from '../utils/audio';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_URL = 'https://forms.gle/FXgU8DHdzdQYex758';

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenForm = () => {
    trackGoogleAnalytics('click_google_form', 'Conversion', 'Official Google Form Popup');
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-[#e6bdb7] flex flex-col animate-scaleUp">
        
        {/* Modal Header */}
        <div className="bg-[#b40006] text-white p-6 flex items-center justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="flex items-center gap-3.5 z-10">
            <div className="p-3 bg-white/20 rounded-2xl shadow-inner">
              <FileText size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold font-['Montserrat',sans-serif]">Đăng Ký Hội Khóa K44 NEU</h3>
              <p className="text-xs text-red-100">Kỷ niệm 20 năm ngày ra trường (2006 - 2026)</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:bg-white/20 p-2 rounded-xl transition-colors z-10"
            aria-label="Đóng"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 text-[#1a1b22]">
          
          <div className="bg-[#f4f2fd] p-5 rounded-2xl border border-[#e6bdb7]/60 space-y-3">
            <h4 className="font-bold text-sm text-[#b40006] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={18} /> Biểu Mẫu Đăng Ký Chính Thức
            </h4>
            <p className="text-sm text-[#5f5e5e] leading-relaxed">
              Ban Tổ Chức sử dụng Google Forms để ghi nhận chính xác thông tin tham dự của quý cựu sinh viên K44 Đại học Kinh tế Quốc dân.
            </p>
            
            <div className="pt-2 border-t border-[#e6bdb7]/40 space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#b40006]" />
                <span>Thời gian: <strong>Thứ Bảy, 17/10/2026</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#b40006]" />
                <span>Địa điểm: Khuôn viên Trường Đại học Kinh tế Quốc dân</span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Bấm vào nút bên dưới để mở cửa sổ Google Form chính thức và điền thông tin tham dự của bạn:
            </p>

            <button
              onClick={handleOpenForm}
              className="w-full py-4 px-6 bg-[#b40006] hover:bg-[#da251d] text-white font-bold text-base rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
            >
              <span>Điền Biểu Mẫu Google Form Ngay</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
            <Shield size={14} className="text-emerald-600" />
            <span>Thông tin được bảo mật và phục vụ công tác tổ chức hội khóa.</span>
          </div>

        </div>

      </div>
    </div>
  );
};
