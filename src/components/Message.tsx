import React from 'react';

export const Message: React.FC = () => {
  return (
    <section id="message" className="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-8 text-center font-['Montserrat',sans-serif]">
          Thư Ngỏ
        </h3>
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl border border-[#e6bdb7] bg-white group relative">
          <img 
            src="https://lh3.googleusercontent.com/d/15Xj61ilYqxUlBXqccJDEvBx9N4wmBIM-" 
            alt="Thư Ngỏ Hội Khóa K44 NEU" 
            className="w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
