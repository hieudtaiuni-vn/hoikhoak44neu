import React from 'react';
import { Mail, CheckCircle, Calendar, MapPin, User, Phone, BookOpen, ExternalLink, X } from 'lucide-react';
import { RegistrationData } from '../types';

interface ConfirmationEmailModalProps {
  data: RegistrationData;
  onClose: () => void;
  onOpenGoogleForm: () => void;
}

export const ConfirmationEmailModal: React.FC<ConfirmationEmailModalProps> = ({ data, onClose, onOpenGoogleForm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-[#e6bdb7] animate-scaleUp">
        
        {/* Email Header */}
        <div className="bg-[#b40006] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-xl">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg font-['Montserrat',sans-serif]">Xác Nhận Đăng Ký Thành Công</h3>
              <p className="text-xs text-red-100">Hội Khóa K44 NEU - 20 Năm Ngày Ra Trường</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Email Body */}
        <div className="p-6 space-y-4 text-[#1a1b22]">
          <div className="flex items-center gap-2 text-emerald-600 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <CheckCircle size={20} />
            <span>Đã gửi email xác nhận đến: <strong>{data.email}</strong></span>
          </div>

          <p className="text-sm text-[#5f5e5e]">
            Kính chào cựu sinh viên <strong>{data.fullName}</strong>,<br/>
            Ban Tổ Chức Hội Khóa K44 - Đại học Kinh tế Quốc dân xin trân trọng cảm ơn bạn đã đăng ký tham gia sự kiện đặc biệt kỷ niệm 20 năm ngày ra trường (2006 - 2026).
          </p>

          <div className="bg-[#f4f2fd] p-4 rounded-xl border border-[#e6bdb7]/50 space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500 flex items-center gap-1"><User size={14} /> Họ và tên:</span>
              <span className="font-semibold">{data.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500 flex items-center gap-1"><Phone size={14} /> Số điện thoại:</span>
              <span className="font-semibold">{data.phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500 flex items-center gap-1"><BookOpen size={14} /> Khoa / Lớp:</span>
              <span className="font-semibold">{data.faculty} ({data.classYear})</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-gray-500 flex items-center gap-1"><Calendar size={14} /> Thời gian:</span>
              <span className="font-semibold text-[#b40006]">08:00 - Thứ Bảy, 17/10/2026</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic">
            * Hệ thống đã tự động ghi nhận thông tin của bạn vào danh sách chính thức và gửi thông báo thành công. Vui lòng hoàn tất mẫu Google Form chính thức bên dưới để Ban Tổ Chức chuẩn bị chu đáo nhất.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end border-t border-gray-100">
          <button
            onClick={onOpenGoogleForm}
            className="px-5 py-2.5 bg-[#b40006] text-white text-sm font-semibold rounded-xl hover:bg-[#da251d] transition-all flex items-center justify-center gap-2 shadow-md"
          >
            Mở Google Form Chính Thức <ExternalLink size={16} />
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
