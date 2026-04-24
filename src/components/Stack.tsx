const stackGroups = [
  {
    label: 'Mobile',
    tags: ['React Native', 'Expo', 'EAS', 'iOS SDK', 'Android SDK'],
  },
  {
    label: 'Frontend',
    tags: ['TypeScript', 'React', 'Next.js', 'NativeWind', 'TailwindCSS'],
  },
  {
    label: 'Backend',
    tags: ['Supabase', 'PostgreSQL', 'Node.js', 'REST APIs', 'GraphQL / Apollo', 'Edge Functions', 'Python'],
  },
  {
    label: 'AI',
    tags: ['Anthropic Claude API', 'OpenAI API', 'MCP', 'Claude Code'],
  },
  {
    label: 'Cloud & DevOps',
    tags: ['AWS', 'GitHub Actions', 'Sentry', 'Docker'],
  },
  {
    label: 'Tooling',
    tags: ['Figma', 'Zeplin'],
  },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <p className="section-label reveal">Tech Stack</p>
        <h2 className="section-title reveal">Tools of the trade</h2>
        <div className="stack-grid reveal">
          {stackGroups.map((group) => (
            <div key={group.label} className="stack-group">
              <div className="stack-group-label">{group.label}</div>
              <div className="tag-row">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
