import RevealWrapper from './RevealWrapper'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Plateforme E-Commerce',
    description:
        "Développement d’une plateforme e-commerce destinée aux marchés européens et africains. " +
        "Conception d’une architecture monolithique intégrant la gestion des commandes, " +
        "des paiements mobiles et du catalogue produits.",
    tags: ['TypeScript', 'React', 'PostgreSQL', 'Ansible', 'Docker','Git Action'],
    github: 'https://github.com/Hectorberi01/hba-store',
    live: 'https://test-projet.com/docs',
    featured: false,
  },
  {
    title: 'Application de gestion des étudiants',
    description:
        'Conception et développement d’une plateforme de gestion académique permettant l’administration des étudiants, ' +
        'le suivi des projets pédagogiques et la centralisation des informations universitaires.',
    tags: ['NodeJS', 'TypeScript', 'React', 'MySQL'],
    github: 'https://github.com/Hectorberi01/NewPA',
    featured: false,
  },

  {
    title: 'Provider de paiement',
    description:
        'Conception d’une plateforme de paiement unifiée permettant l’intégration de plusieurs solutions de paiement via une API centralisée. ' +
        'Mise en place du déploiement automatisé, de l’infrastructure serveur et des workflows CI/CD.',
    tags: ['.NET', 'React', 'PostgreSQL', 'Ansible', 'GitHub Actions', 'Caddy'],
    github: 'https://github.com/Hectorberi01/AfriPay',
    live: 'https://staging-afripay.fr/docs',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-tag">Projets</div>
        <h2 className="section-title">Mes réalisations</h2>
        <RevealWrapper>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`project-card${project.featured ? ' featured' : ''}`}
              >
                {project.featured && (
                  <div className="project-badge">Featured</div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
