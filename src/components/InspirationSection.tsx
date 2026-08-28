import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Award } from 'lucide-react';
import { trackGoogleAnalytics } from '../utils/audio';
import { IMAGES } from '../data/images';

const inspirationSlides = IMAGES.inspirationSlides;

export const InspirationSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % inspirationSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    trackGoogleAnalytics('inspiration_next', 'Inspiration', 'Next Slide');
    setCurrentSlide((prev) => (prev + 1) % inspirationSlides.length);
  };

  const handlePrev = () => {
    trackGoogleAnalytics('inspiration_prev', 'Inspiration', 'Prev Slide');
    setCurrentSlide((prev) => (prev - 1 + inspirationSlides.length) % inspirationSlides.length);
  };

  return (
    <section id="inspiration-section" className="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4f2fd] border border-[#e6bdb7] text-[#b40006] text-xs font-bold uppercase tracking-widest mb-3">
          <Award size={16} /> Gương Mặt Tiêu Biểu
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-3 font-['Montserrat',sans-serif]">
          K44 – Người truyền cảm hứng
        </h3>
        <p className="text-base text-[#5f5e5e] max-w-2xl mx-auto">
          Tôn vinh những cựu sinh viên K44 NEU nhiệt huyết, thành công và lan tỏa những giá trị tốt đẹp cho cộng đồng.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-md border border-[#e6bdb7]/55 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-[#b40006] uppercase tracking-wider">
            Ảnh {currentSlide + 1} / {inspirationSlides.length}
          </span>
          
          <div className="flex items-center gap-1.5 bg-[#f4f2fd] p-1 rounded-full border border-[#e6bdb7]">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-[#1a1b22] shadow-xs flex items-center gap-1 hover:bg-[#b40006] hover:text-white transition-colors"
              title={isAutoPlaying ? "Tạm dừng chạy tự động" : "Bật chạy tự động"}
            >
              {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
              <span className="hidden sm:inline">{isAutoPlaying ? 'Tự động' : 'Tạm dừng'}</span>
            </button>
            <div className="flex gap-1">
              <button 
                onClick={handlePrev}
                className="p-1 rounded-full bg-white hover:bg-[#b40006] hover:text-white text-[#1a1b22] transition-colors shadow-xs"
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="p-1 rounded-full bg-white hover:bg-[#b40006] hover:text-white text-[#1a1b22] transition-colors shadow-xs"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Natural Size / Ratio Portrait Frame */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-black mb-6 border border-gray-100 flex items-center justify-center">
          {inspirationSlides.map((slide, idx) => (
            <div 
              key={slide.id}
              className={`w-full transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 relative z-10 block' : 'opacity-0 absolute inset-0 z-0 pointer-events-none hidden'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="bg-[#faf8f6] p-4 rounded-xl border border-[#e6bdb7]/40 shadow-xs mb-6">
          <h5 className="text-base md:text-lg font-bold font-['Montserrat',sans-serif] text-[#1a1b22] mb-1.5">
            {inspirationSlides[currentSlide].title}
          </h5>
          <p className="text-sm text-[#5f5e5e] leading-relaxed">
            {inspirationSlides[currentSlide].description}
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {inspirationSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                trackGoogleAnalytics('inspiration_dot', 'Inspiration', `Slide ${idx + 1}`);
                setCurrentSlide(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-6 bg-[#b40006]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Chuyển đến ảnh ${idx + 1}`}
            />
          ))}
        </div>



      </div>
    </section>
  );
};
