'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EDButton from './EDButton';

export default function EDHero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center">
      <div className="max-w-[1080px] mx-auto px-8 text-center">
        <div className="space-y-[-10px]">
          <h1 className="text-[100px] md:text-[124px] font-black tracking-[-0.02em]">Crafting stories</h1>
          <h1 className="text-[100px] md:text-[124px] font-black tracking-[-0.02em]">that people</h1>
          <h1 className="text-[100px] md:text-[124px] font-black tracking-[-0.02em]">can't ignore.</h1>
        </div>
        <div className="mt-8">
          <span className="text-[38px] text-[#B8892F] font-serif">Precision.</span>
        </div>
        <div className="mt-12 flex gap-4 justify-center">
          <EDButton variant="primary" onClick={scrollToWork}>View the Work</EDButton>
          <EDButton variant="secondary" href="#contact">Begin a Project</EDButton>
        </div>
      </div>
    </section>
  );
}
