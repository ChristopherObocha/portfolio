'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PhotoWrapper() {
  const [errored, setErrored] = useState(false)

  const containerStyle: React.CSSProperties = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '2px solid var(--border)',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'var(--shadow)',
    background: 'var(--accent-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  if (errored) {
    return (
      <div style={containerStyle}>
        <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <rect width="160" height="160" fill="#EBF0EB"/>
          <circle cx="80" cy="62" r="22" fill="#B8CCB8"/>
          <path d="M36 136 Q36 104 80 104 Q124 104 124 136" fill="#B8CCB8"/>
        </svg>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <Image
        src="/photo.jpg"
        alt="Christopher Obocha"
        width={160}
        height={160}
        style={{ objectFit: 'cover' }}
        priority
        onError={() => setErrored(true)}
      />
    </div>
  )
}
