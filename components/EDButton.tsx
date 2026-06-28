'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EDButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
}

export default function EDButton({ children, variant = 'primary', onClick, href }: EDButtonProps) {
  const base = 'ed-button ed-button-' + variant;
  if (href) {
    return <a href={href} className={base}>{children}</a>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
}
