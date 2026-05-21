import RevealWrapper from './RevealWrapper'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-tag">À propos</div>
        <h2 className="section-title">
          Architecte de<br />solutions numériques
        </h2>
        <RevealWrapper>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Passionné par la <strong>conception de systèmes applicatifs complexes</strong>, 
                je combine une expertise technique solide en .NET avec une vision produit orientée résultats.
                Mon approche allie rigueur architecturale et pragmatisme de développement afin de concevoir des solutions performantes, évolutives et maintenables.
              </p>
              <p>
                Actuellement en Alternance chez <strong>METRO France</strong> en tant que Développeur Full Stack C# .NET,
                je participe au développement et à l’évolution d’applications métiers à forte valeur ajoutée, 
                tout en travaillant sur des projets techniques orientés architecture logicielle et performance applicative.
              </p>
              <p>
                Ma stack de prédilection s’articule autour de <strong>C# / .NET 9, d’ASP.NET Core, d’Entity Framework Core</strong>,
                des architectures événementielles avec <strong>Apache Kafka, du Domain-Driven Design (DDD) et de l’orchestration via Docker et Traefik</strong>, 
                avec une attention particulière portée à la qualité, à la maintenabilité et à la scalabilité du code.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-card">
                {/*<div className="card-icon">⚙️</div>*/}
                <div className="card-val">.NET<span>9</span></div>
                <div className="card-desc">Stack principale</div>
              </div>
              <div className="about-card">
                {/*<div className="card-icon">🔀</div>*/}
                <div className="card-icon"></div>
                <div className="card-val">Kafka<span>+</span></div>
                <div className="card-desc">Event-Driven</div>
              </div>
              <div className="about-card">
                {/*<div className="card-icon">🐳</div>*/}
                <div className="card-icon"></div>
                <div className="card-val">Docker</div>
                <div className="card-desc">Containerisation</div>
              </div>
              <div className="about-card">
                {/*<div className="card-icon">🌍</div>*/}
                <div className="card-val">West<span>Afr</span></div>
                <div className="card-desc">Marchés cibles</div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
