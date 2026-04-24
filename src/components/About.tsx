import PhotoWrapper from '@/components/PhotoWrapper'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label reveal">About</p>
        <h2 className="section-title reveal">Engineer. Builder. Organiser.</h2>

        <div className="reveal" style={{ marginBottom: '48px' }}>
          <PhotoWrapper />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Senior engineer with <strong>6+ years</strong> shipping production React Native and full-stack TypeScript applications. Co-founder and CTO of <strong>Runwae</strong>, a travel-tech startup. Lead Mobile Engineer at <strong>Hylark</strong>, an AI-powered life management platform. Background spans mobile architecture, Supabase, API integrations, and production AI with the Anthropic Claude API.
            </p>
            <p>
              Organiser of <strong>LeedsJS</strong> — Leeds&apos;s JavaScript community — and a published speaker on mobile security. <strong>MSc Cyber Security with Distinction</strong> from the University of Hertfordshire. Prolific Tech Awards <strong>App of the Year 2023</strong>.
            </p>
            <p>
              Passionate about building things that are both technically sound and genuinely useful to real people.
            </p>
          </div>
          <div className="about-highlights reveal-stagger">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.01l-4.33 2.49.83-4.82L1 6.27l4.91-.01L8 1z"/>
                </svg>
              </div>
              <div>
                <h4>App of the Year 2023</h4>
                <p>Prolific Tech Awards &amp; UK Business Tech Awards — for GoodShape enterprise health app</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="14" height="10" rx="1.5"/>
                  <path d="M5 7h6M5 9.5h4"/>
                </svg>
              </div>
              <div>
                <h4>MSc Cyber Security — Distinction</h4>
                <p>University of Hertfordshire</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="6.5"/>
                  <path d="M8 4v4l2.5 2"/>
                </svg>
              </div>
              <div>
                <h4>6+ Years Production Experience</h4>
                <p>React Native, TypeScript, full-stack web — shipped to real users at scale</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6M8 5V2M5.5 2h5"/>
                  <path d="M4 12v2M12 12v2"/>
                </svg>
              </div>
              <div>
                <h4>LeedsJS Organiser &amp; Speaker</h4>
                <p>Helping grow Leeds&apos;s JavaScript engineering community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
