import React from 'react';
import { Play, ListVideo } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#b40006] text-xs font-bold uppercase tracking-wider mb-3 border border-red-200">
            <ListVideo size={16} /> Danh Sách Phát YouTube (Playlist)
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-2 font-['Montserrat',sans-serif]">
            Thước Phim Kỷ Niệm & Playlist K44 NEU
          </h3>
          <p className="text-base text-[#5f5e5e]">Trải nghiệm liên tục danh sách phát các kỷ niệm và sự kiện hội khóa</p>
        </div>

        {/* Video Player Wrapper */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-[#e6bdb7] overflow-hidden flex flex-col">
          
          {/* Iframe Playlist Container */}
          <div className="relative w-full aspect-video bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PLC6eYT2Mm9WE&autoplay=1&mute=1&loop=1" 
              title="YouTube Playlist K44 NEU" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Integrated Info Bar */}
          <div className="bg-[#f4f2fd] px-6 py-4 flex items-center justify-between gap-4 border-t border-[#e6bdb7]/50">
            
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#b40006] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Play size={20} className="fill-white" />
              </div>
              <div>
                <span className="text-xs text-[#5f5e5e] font-semibold uppercase tracking-wider">Đang phát từ danh sách YouTube</span>
                <h4 className="font-bold text-sm md:text-base text-[#1a1b22] font-['Montserrat',sans-serif]">
                  Hội Khóa K44 NEU - 20 Năm Ngày Ra Trường (2006 - 2026)
                </h4>
              </div>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
};
