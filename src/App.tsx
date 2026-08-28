/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Message } from './components/Message';
import { Committee } from './components/Committee';
import { Gallery } from './components/Gallery';
import { InspirationSection } from './components/InspirationSection';
import { Schedule } from './components/Schedule';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { UserPlus } from 'lucide-react';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf8ff] text-[#1a1b22] font-['Inter',sans-serif] flex flex-col selection:bg-[#b40006] selection:text-white">
      
      {/* Floating Quick Register Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="flex items-center gap-2 px-5 py-3.5 bg-[#b40006] text-white font-bold text-sm rounded-full shadow-xl hover:bg-[#da251d] transition-all hover:scale-105 animate-bounce"
        >
          <UserPlus size={18} /> Đăng Ký Hội Khóa
        </button>
      </div>

      {/* Top Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
        <Message />
        <Committee />
        <Gallery />
        <InspirationSection />
        <Schedule />
        <VideoSection />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Register Modal with Google Form embedded */}
      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

    </div>
  );
}
