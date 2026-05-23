import RevealWrapper from './RevealWrapper'

const interests = [
  {
    icon: '⚽',
    label: 'Football',
    desc: 'Passion pour le jeu collectif et la stratégie sur le terrain.',
  },
  {
    icon: '🏋️',
    label: 'Salle de gym',
    desc: 'Discipline quotidienne pour rester en forme et garder l\'énergie.',
  },
  {
    icon: '📚',
    label: 'Lecture',
    desc: 'Tech, entrepreneuriat et développement personnel.',
  },
  {
    icon: '🎮',
    label: 'Jeux vidéo',
    desc: 'Stratégie, RPG et jeux en ligne pour décompresser.',
  },
]

export default function Interests() {
  return (
    <section id="interests">
      <div className="section-inner">
        <div className="section-tag">Intérêts</div>
        <h2 className="section-title">Centres d'intérêt</h2>
        <RevealWrapper>
          <div className="interests-grid">
            {interests.map((item) => (
              <div key={item.label} className="interest-card">
                <span className="interest-icon">{item.icon}</span>
                <h3 className="interest-label">{item.label}</h3>
                <p className="interest-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}