import React from 'react';
import { Clock } from 'lucide-react';
import { ScheduleItem } from '../types';

const scheduleData: ScheduleItem[] = [
  {
    id: '1',
    time: '08:00 – 12:00',
    title: 'Sáng và trưa',
    category: 'Trở về',
    categoryColor: 'bg-red-50 text-[#b40006] border-red-200',
    description: '- Các lớp tự do check in tại NEU và chủ động ăn trưa\n- Giao lưu Pick',
    icon: 'home'
  },
  {
    id: '2',
    time: '15:00 – 17:00',
    title: 'Chào mừng Hội khóa',
    category: 'Hội tụ – Tri ân – Tiếp nối',
    categoryColor: 'bg-amber-50 text-amber-800 border-amber-200',
    description: '- Chào mừng Hội khóa\n- Cựu sinh viên tiêu biểu chia sẻ\n- Tri ân thầy cô\n- Trao cờ gửi gắm thế hệ\n- Chụp ảnh các lớp cùng Thầy cô và bạn bè',
    icon: 'groups'
  },
  {
    id: '3',
    time: '17:00 – 17:30',
    title: 'Nghỉ ngơi',
    category: 'Chuẩn bị',
    categoryColor: 'bg-blue-50 text-blue-800 border-blue-200',
    description: 'Nghỉ ngơi chuẩn bị cho Gala Dinner đặc biệt.',
    icon: 'bedtime'
  },
  {
    id: '4',
    time: '17:30 – 18:30',
    title: 'Chương trình ca nhạc',
    category: 'Đặc sắc K44',
    categoryColor: 'bg-purple-50 text-purple-800 border-purple-200',
    description: 'Chương trình ca nhạc đặc sắc K44 dành tặng nhà trường và các bạn.',
    icon: 'music_note'
  },
  {
    id: '5',
    time: '18:30 – 20:00',
    title: 'Tiệc tối Gala Dinner',
    category: 'Sang trọng',
    categoryColor: 'bg-rose-50 text-rose-800 border-rose-200',
    description: 'Tiệc tối Gala Dinner ấm cúng và đẳng cấp.',
    icon: 'restaurant'
  },
  {
    id: '6',
    time: '20:00 – 20:30',
    title: 'Game vui & Giải thưởng',
    category: 'Kết nối',
    categoryColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    description: 'Game vui và giải thưởng cho các bạn tham gia.',
    icon: 'casino'
  },
  {
    id: '7',
    time: '20:30 – 21:00',
    title: 'Bế mạc & Tri ân',
    category: 'Cảm xúc',
    categoryColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    description: 'Đại diện Ban tổ chức phát biểu cảm ơn và Ban tổ chức chụp ảnh các Thầy cô.',
    icon: 'celebration'
  }
];

export const Schedule: React.FC = () => {
  return (
    <section id="schedule-section" className="py-12 md:py-20 w-full bg-[#f4f2fd]/60 border-y border-[#e6bdb7]/30">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-3 font-['Montserrat',sans-serif]">
            Lịch trình Sự kiện
          </h3>
          <p className="text-base text-[#5f5e5e]">Cấu trúc chương trình trọn ngày (Thứ Bảy, 17/10/2026)</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute left-6 md:left-[125px] top-6 bottom-6 w-0.5 bg-[#e6bdb7] hidden sm:block"></div>

          <div className="flex flex-col gap-6 relative z-10">
            {scheduleData.map((item, idx) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
                
                {/* Time Badge */}
                <div className="flex items-center sm:items-start sm:w-[120px] flex-shrink-0 pt-2">
                  <span className="font-bold text-sm md:text-base text-[#b40006] bg-white px-3 py-1 rounded-lg border border-[#e6bdb7] shadow-xs flex items-center gap-1.5">
                    <Clock size={14} /> {item.time}
                  </span>
                </div>

                {/* Event Card */}
                <div className="relative flex-grow bg-white p-6 rounded-2xl border-t-4 border-t-[#b40006] border border-[#e6bdb7]/50 shadow-md group-hover:shadow-lg transition-shadow">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[53px] top-7 w-4 h-4 rounded-full bg-[#fbf8ff] border-4 border-[#b40006] hidden sm:block"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-50 text-[#b40006] flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg md:text-xl font-bold text-[#1a1b22] font-['Montserrat',sans-serif]">
                          {item.title}
                        </h4>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${item.categoryColor}`}>
                          {item.category}
                        </span>
                      </div>

                      <div className="text-sm md:text-base text-[#5f5e5e] whitespace-pre-line leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
