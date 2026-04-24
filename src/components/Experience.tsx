export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-title reveal">Career</h2>
        <div className="timeline reveal">

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-period">2023 — Present</div>
              <div className="timeline-title">Co-founder &amp; CTO</div>
              <div className="timeline-company">Runwae</div>
              <p className="timeline-desc">Leading all technical decisions for a travel-tech startup building AI-powered group itinerary planning. Architecture, engineering, and product — from zero to shipped.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-period">2023 — Present</div>
              <div className="timeline-title">Lead Mobile Engineer</div>
              <div className="timeline-company">Hylark</div>
              <p className="timeline-desc">Leading mobile engineering for an AI-powered life management platform. ISO 27001 certified product serving a growing user base.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-period">2021 — 2023</div>
              <div className="timeline-title">Mobile Software Engineer</div>
              <div className="timeline-company">The Distance (Agency)</div>
              <p className="timeline-desc">Delivered enterprise-grade React Native apps across multiple client verticals — including an award-winning enterprise health platform (GoodShape) and a pan-European EV charging network app (Charge EV / Swarco UK).</p>
            </div>
          </div>

        </div>
        <a
          href="https://linkedin.com/in/christopherobocha"
          target="_blank"
          rel="noopener"
          className="timeline-more reveal"
        >
          Earlier roles on LinkedIn →
        </a>
      </div>
    </section>
  )
}
