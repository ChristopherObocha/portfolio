import ProjectLinks from '@/components/ProjectLinks'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">Selected work</h2>
        <div className="projects-grid reveal-stagger">

          {/* Runwae — no public URL */}
          <a href="https://runwae.io" target="_blank" rel="noopener" className="project-card">
            <div className="project-role">Co-founder &amp; CTO</div>
            <div className="project-name">Runwae</div>
            <p className="project-desc">Travel-tech startup. AI-powered trip planning and group itinerary collaboration. Integrates Anthropic Claude for itinerary generation, Viator for experiences, and LiteAPI for hotel booking.</p>
            <div className="project-tags">
              {/* <span className="project-tag">React Native</span>
              <span className="project-tag">Next.js</span> */}
              <span className="project-tag">TypeScript</span>
              <span className="project-tag">PostgreSQL</span>
              <span className="project-tag">Supabase</span>
              <span className="project-tag">Claude API</span>
            </div>
            <ProjectLinks links={[
              { type: 'github', url: 'https://github.com/chris-runwae/Runwae-OneStop' },
            ]} />
          </a>

          {/* Hylark — has public URL */}
          <a href="https://app.hylark.com" target="_blank" rel="noopener" className="project-card">
            <div className="project-role">Lead Software Engineer</div>
            <div className="project-name">Hylark</div>
            <p className="project-desc">AI-powered life management and productivity platform. ISO 27001 certified. Features notes, tasks, calendar, pinboard, links, and collaboration tools — all in one app.</p>
            <div className="project-tags">
              <span className="project-tag">React Native</span>
              <span className="project-tag">GraphQL / Apollo</span>
              <span className="project-tag">Zustand</span>
              <span className="project-tag">Push Notifications</span>
            </div>
            <ProjectLinks links={[
              { type: 'ios', url: 'https://apps.apple.com/gb/app/hylark/id6504600893' },
              { type: 'web', url: 'https://app.hylark.com' },
            ]} />
          </a>

          {/* GoodShape — no public URL */}
          <a href="https://www.goodshape.com" target="_blank" rel="noopener" className="project-card">
            <div className="project-role">Lead Software Engineer</div>
            <div className="project-name">GoodShape</div>
            <p className="project-desc">UK enterprise health and absence management app. 120,000+ annual engaged users. £220k+ project investment.</p>
            <div className="project-award">🏆 App of the Year — Prolific Tech Awards 2023</div>
            <div className="project-tags">
              <span className="project-tag">React Native</span>
              <span className="project-tag">Enterprise</span>
              <span className="project-tag">EBM AI</span>
            </div>
            <ProjectLinks links={[
              { type: 'ios', url: 'https://apps.apple.com/gb/app/goodshape/id1638145769' },
            ]} />
          </a>

          {/* Charge EV */}
          <div className="project-card">
            <div className="project-role">Software Engineer</div>
            <div className="project-name">Charge EV (Swarco UK)</div>
            <p className="project-desc">Pan-European EV charging network app. Real-time charge point map and status, session management, RFID and in-app payment flows, session history and invoicing. Thousands of charge points across the UK and Europe.</p>
            <div className="project-tags">
              <span className="project-tag">iOS</span>
              <span className="project-tag">Android</span>
              <span className="project-tag">Real-time</span>
              <span className="project-tag">Node.js</span>
            </div>
            <ProjectLinks links={[
              { type: 'ios', url: 'https://apps.apple.com/gb/app/charge-ev-charging/id6453164132' },
            ]} />
          </div>

          {/* Ordo — no public URL */}
          <a href="https://github.com/christopherobocha/ordo" target="_blank" rel="noopener" className="project-card">
            <div className="project-role">Software Engineer</div>
            <div className="project-name">Ordo</div>
            <p className="project-desc">Liturgical rota and clergy coordination app, built in partnership with the Cathedral Church of St Anne, Leeds — mother church of the Diocese of Leeds, serving ~170,000 Catholics across West Yorkshire.</p>
            <div className="project-tags">
              <span className="project-tag">TypeScript</span>
              <span className="project-tag">Python</span>
              <span className="project-tag">Convex</span>
              <span className="project-tag">Romcal</span>
            </div>
            <ProjectLinks links={[
              { type: 'github', url: 'https://github.com/christopherobocha/ordo' },
            ]} />
          </a>

          {/* GitHub CTA */}
          <a href="https://github.com/christopherobocha" target="_blank" rel="noopener" className="project-card github-cta">
            <div>
              <div className="cta-label">
                <GitHubIcon />
                See more on GitHub →
              </div>
              <div className="cta-sub">github.com/christopherobocha</div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
