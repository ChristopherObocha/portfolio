'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type FilterType = 'all' | 'article' | 'talk'

const writingItems = [
  {
    type: 'talk' as const,
    date: 'February 2024',
    venue: 'LeedsJS Meetup, Leeds',
    title: 'Secure Authentication & Authorisation in React Native',
    desc: 'A practical deep-dive into securing mobile apps — covering token storage strategies, OAuth flows, biometric authentication with Face ID and fingerprint, and the most common mobile security vulnerabilities to guard against.',
    tags: ['React Native', 'Security', 'OAuth', 'Biometrics', 'Mobile'],
    platform: 'LeedsJS',
    href: null,
  },
  {
    type: 'article' as const,
    date: '2024',
    venue: 'Medium',
    title: 'Secure Authentication & Authorisation in React Native',
    desc: 'The written companion to the LeedsJS talk. Covers token storage (SecureStore vs AsyncStorage), implementing OAuth 2.0 PKCE flows, integrating biometric auth with Expo LocalAuthentication, and hardening your app against common attack vectors.',
    tags: ['React Native', 'Security', 'OAuth', 'Biometrics', 'Mobile'],
    platform: 'Medium',
    href: 'https://medium.com/@christopherobocha/secure-authentication-and-authorisation-in-react-native-a260f1787a89',
  },
]

export default function WritingPage() {
  useScrollReveal()
  const [filter, setFilter] = useState<FilterType>('all')

  const visible = writingItems.filter(
    (item) => filter === 'all' || item.type === filter
  )

  return (
    <>
      <Nav page="writing" />
      <div className="container">
        <header className="page-header reveal">
          <p className="section-label">Writing &amp; Speaking</p>
          <h1 className="page-title">
            Thoughts on<br /><em>building software</em>
          </h1>
          <p className="page-subtitle">
            Articles, conference talks, and meetup presentations on mobile engineering, security, and product development.
          </p>
        </header>

        <div className="filter-row reveal">
          {(['all', 'article', 'talk'] as FilterType[]).map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'article' ? 'Articles' : 'Talks'}
            </button>
          ))}
        </div>

        <div className="writing-list reveal" id="writing-list">
          {visible.map((item, i) => {
            const content = (
              <>
                <div className="item-body">
                  <div className="item-meta-row">
                    <span className="item-type">
                      {item.type === 'talk' ? (
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 1v8M1 5h8"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 9V1M1 5l4 4 4-4"/>
                        </svg>
                      )}
                      {item.type === 'talk' ? 'Talk' : 'Article'}
                    </span>
                    <span className="item-dot" />
                    <span className="item-date">{item.date}</span>
                    <span className="item-dot" />
                    <span className="item-venue">{item.venue}</span>
                  </div>
                  <div className="item-title">{item.title}</div>
                  <p className="item-desc">{item.desc}</p>
                  <div className="item-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="item-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="item-right">
                  <span className="item-platform">{item.platform}</span>
                  {item.href && <span className="item-arrow">→</span>}
                </div>
              </>
            )

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener"
                className="writing-item"
                data-type={item.type}
              >
                {content}
              </a>
            ) : (
              <div key={i} className="writing-item" data-type={item.type}>
                {content}
              </div>
            )
          })}
        </div>

        {visible.length === 0 && (
          <div className="empty-state visible">Nothing here yet — check back soon.</div>
        )}

        <div className="medium-cta reveal">
          <div>
            <h3>More on Medium</h3>
            <p>Follow along for future articles on mobile engineering, AI integration, and product development.</p>
          </div>
          <a href="https://medium.com/@christopherobocha" target="_blank" rel="noopener" className="btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            @christopherobocha on Medium
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
