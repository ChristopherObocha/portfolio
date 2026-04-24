'use client'

import Link from 'next/link'
import { useNavScroll } from '@/hooks/useNavScroll'

interface NavProps {
  page?: 'home' | 'writing'
}

export default function Nav({ page = 'home' }: NavProps) {
  const scrolled = useNavScroll()

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link href={page === 'writing' ? '/' : '#hero'} className="nav-logo">
        CO
      </Link>
      {page === 'home' ? (
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#writing">Writing</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      ) : (
        <Link href="/#writing" className="nav-back">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2L3 7l5 5"/>
          </svg>
          Back to portfolio
        </Link>
      )}
    </nav>
  )
}
