import Link from 'next/link'

interface WritingProps {
  preview?: boolean
}

export default function Writing({ preview = false }: WritingProps) {
  return (
    <section id="writing">
      <div className="container">
        <p className="section-label reveal">Writing &amp; Speaking</p>
        <h2 className="section-title reveal">Sharing what I know</h2>
        <div className="writing-grid reveal-stagger" style={{ marginBottom: '32px' }}>

          {/* Talk — not a link */}
          <div className="writing-card">
            <div className="writing-type">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 1v10M1 6h10"/>
              </svg>
              Talk
            </div>
            <div className="writing-title">Secure Authentication &amp; Authorisation in React Native</div>
            <div className="writing-meta">LeedsJS Meetup, Leeds — February 2024</div>
            <p className="writing-desc">A practical deep-dive into securing mobile apps — covering token storage, OAuth flows, biometric auth, and common vulnerabilities.</p>
            <div className="writing-arrow">Presented at LeedsJS →</div>
          </div>

          {/* Article — links to Medium */}
          <a
            href="https://medium.com/@christopherobocha/secure-authentication-and-authorisation-in-react-native-a260f1787a89"
            target="_blank"
            rel="noopener"
            className="writing-card"
          >
            <div className="writing-type">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 7l-4 4-4-4M6 11V1"/>
              </svg>
              Article
            </div>
            <div className="writing-title">Secure Authentication &amp; Authorisation in React Native</div>
            <div className="writing-meta">Published on Medium</div>
            <p className="writing-desc">A practical deep-dive into securing mobile apps — covering token storage, OAuth flows, biometric auth, and common vulnerabilities.</p>
            <div className="writing-arrow">Read on Medium →</div>
          </a>

        </div>

        {preview && (
          <div className="reveal" style={{ marginTop: '32px' }}>
            <Link
              href="/writing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'gap 0.2s',
              }}
            >
              See all writing &amp; talks
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
