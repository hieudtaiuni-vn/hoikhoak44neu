import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles } from 'lucide-react';
import { trackGoogleAnalytics } from '../utils/audio';
import { IMAGES } from '../data/images';

const galaSlides = IMAGES.galaSlides;

export const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galaSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    trackGoogleAnalytics('slideshow_next', 'Gallery', 'Next Slide');
    setCurrentSlide((prev) => (prev + 1) % galaSlides.length);
  };

  const handlePrev = () => {
    trackGoogleAnalytics('slideshow_prev', 'Gallery', 'Prev Slide');
    setCurrentSlide((prev) => (prev - 1 + galaSlides.length) % galaSlides.length);
  };

  return (
    <section id="gallery-section" className="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-3 font-['Montserrat',sans-serif]">
          Không Gian Sự Kiện
        </h3>
        <p className="text-base text-[#5f5e5e]">Trải nghiệm đẳng cấp và đầy cảm xúc</p>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* Concept 1: Con đường ký ức */}
        <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#e6bdb7]/55 hover:shadow-md transition-shadow">
          <div className="w-full rounded-xl overflow-hidden shadow-md bg-black">
            <img 
              src={IMAGES.galleryImages.gateMain} 
              alt="Con đường ký ức - Dấu ấn hành trình" 
              className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#b40006] mb-3 font-['Montserrat',sans-serif]">
              Con đường ký ức - Dấu ấn hành trình
            </h4>
            <p className="text-[#5f5e5e] text-base leading-relaxed mb-4">
              - Bước qua con đường ký ức, trở về những năm tháng rực rỡ.<br/>
              - Ôn lại hành trình 20 năm trưởng thành và gắn kết của các cựu sinh viên K44.
            </p>
            <div className="w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-md border border-gray-100 mt-4 bg-black">
              <img 
                src={IMAGES.galleryImages.gateDetail} 
                alt="Cổng Ký Ức Chi Tiết" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Concept 2: Gala Dinner Slideshow (Không gian dạ tiệc) */}
        <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#e6bdb7]/55 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-[#b40006] font-['Montserrat',sans-serif] flex items-center gap-2">
                <Sparkles size={22} className="text-[#b40006]" /> Dạ Tiệc Tri Ân - Gala Dinner
              </h4>
              <p className="text-[#5f5e5e] text-sm mt-1">Không gian tiệc tối sang trọng, ấm cúng và đầy cảm xúc.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">


              {/* Slideshow Auto/Manual Controls */}
              <div className="flex items-center gap-2 bg-[#f4f2fd] p-1.5 rounded-full border border-[#e6bdb7]">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1a1b22] shadow-xs flex items-center gap-1 hover:bg-[#b40006] hover:text-white transition-colors"
                  title={isAutoPlaying ? "Tạm dừng chạy tự động" : "Bật chạy tự động"}
                >
                  {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoPlaying ? 'Tự động' : 'Tạm dừng'}</span>
                </button>
                <div className="flex gap-1 px-1">
                  <button 
                    onClick={handlePrev}
                    className="p-1.5 rounded-full bg-white hover:bg-[#b40006] hover:text-white text-[#1a1b22] transition-colors shadow-xs"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-1.5 rounded-full bg-white hover:bg-[#b40006] hover:text-white text-[#1a1b22] transition-colors shadow-xs"
                    aria-label="Ảnh tiếp theo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow Screen & Caption below */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-video md:aspect-[16/9] max-h-[550px] rounded-2xl overflow-hidden shadow-xl bg-black">
              {galaSlides.map((slide, idx) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium shadow-sm">
                    Ảnh {idx + 1} / {galaSlides.length}
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Caption Below */}
            <div className="bg-[#faf8f6] p-4 md:p-6 rounded-xl border border-[#e6bdb7]/40 shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#b40006] font-bold mb-1 block">Ảnh {currentSlide + 1} / {galaSlides.length}</span>
              <h5 className="text-lg md:text-xl font-bold font-['Montserrat',sans-serif] text-[#1a1b22] mb-2">{galaSlides[currentSlide].title}</h5>
              <p className="text-sm md:text-base text-[#5f5e5e] leading-relaxed">{galaSlides[currentSlide].description}</p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {galaSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  trackGoogleAnalytics('slideshow_dot', 'Gallery', `Slide ${idx + 1}`);
                  setCurrentSlide(idx);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentSlide ? 'w-8 bg-[#b40006]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Chuyển đến ảnh ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-left mt-2">
            <p className="text-[#5f5e5e] text-sm leading-relaxed">
              - Không gian tiệc tối sang trọng, ấm cúng.<br/>
              - Gắn kết yêu thương, khoảnh khắc tri ân đặc biệt.<br/>
              - Mang phong cách Organic Luxury đẳng cấp ngay tại khuôn viên trường.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
