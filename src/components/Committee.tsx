import React from 'react';

export const Committee: React.FC = () => {
  return (
    <section id="committee" className="py-12 md:py-20 w-full max-w-[1200px] mx-auto px-4 md:px-6 bg-[#f4f2fd]/50 rounded-3xl my-8">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#b40006] mb-8 text-center font-['Montserrat',sans-serif]">
          Ban Tổ Chức
        </h3>
        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#e6bdb7] bg-white p-2 md:p-4">
          <img 
            src="https://lh3.googleusercontent.com/d/13hEN6PL5cf3n942dNfTANYPkCa3iSVcB" 
            alt="Ban Tổ Chức Hội Khóa K44 NEU" 
            className="w-full h-auto object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
