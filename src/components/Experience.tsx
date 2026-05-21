import RevealWrapper from './RevealWrapper'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-tag">Expérience</div>
        <h2 className="section-title">Parcours professionnel</h2>
        <RevealWrapper>
          <div className="exp-timeline">
            <div className="exp-item">
              <div className="exp-dot" />
              <div className="exp-period">Août 2023 — Septembre 2026</div>
              <div className="exp-title">Développeur Full Stack C# .NET</div>
              <div className="exp-company">
                METRO <span className="badge">ALTERNANCE</span>
              </div>
              <ul className="exp-bullets">
                <li>Conception, développement et maintenance d'une application métier de pricing en environnement .NET
                </li>
                <li>Développement et optimisation de procédures stockées SQL Server pour le calcul de règles tarifaires
                  complexes
                </li>
                <li>Collaboration avec les équipes métiers pour l'analyse des besoins et l'évolution fonctionnelle</li>
                <li>Participation à l'amélioration continue de la qualité du code et de la stabilité applicative</li>
                <li>Déploiement des environnements de développement, staging et production</li>
              </ul>
            </div>

            <div className="exp-item secondary">
            <div className="exp-dot"/>
              <div className="exp-period">Juin 2022 — Août 2022</div>
              <div className="exp-title">Stagiaire Développement Web</div>
              <div className="exp-company">
                Startup Glwomi · Station F, Paris 13e <span className="badge">Stage</span>
              </div>
              <ul className="exp-bullets">
                <li>Amélioration et optimisation d'un site web existant sous WordPress</li>
                <li>Participation à la conception d'une nouvelle architecture web basée sur Strapi (headless CMS) et Vue.js</li>
                <li>Contribution aux phases de test, détection et correction d'anomalies</li>
                <li>Travail en environnement startup à Station F avec pratiques agiles et forte autonomie</li>
              </ul>
            </div>

            <div className="exp-item tertiary">
              <div className="exp-dot" />
              <div className="exp-period">Juin 2019 — Septembre 2019</div>
              <div className="exp-title">Stagiaire Full Stack</div>
              <div className="exp-company">
                Nautilus Technology · Bénin <span className="badge">Stage</span>
              </div>
              <ul className="exp-bullets">
                <li>Développement d'une plateforme de publication d'actualités basée sur Laravel (CRUD complet)</li>
                <li>Conception d'interfaces dynamiques et responsive avec Bootstrap, optimisées multi-supports</li>
                <li>Structuration selon le pattern MVC pour assurer maintenabilité et évolutivité</li>
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
