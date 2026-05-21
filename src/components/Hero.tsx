export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-avatar">
        <img src="../../public/images/hector1.jpg" alt="Hector Adjakpa" />
      </div>

      <div className="hero-label">Développeur Full Stack C# .NET ASP Core</div>

      <h1 className="hero-title">
        <span className="line"><span>Hector</span></span>
        <span className="line">
          <span><span className="accent">Adjakpa</span></span>
        </span>
        <span className="line"><span>Full Stack Developper</span></span>
      </h1>

      <p className="hero-desc">
        Chef de projet &amp; développeur spécialisé en{' '}
        <strong>architecture microservices</strong>, .NET/ASP.NET Core et systèmes distribués.
        Je conçois des solutions robustes, de la conception au déploiement.
      </p>

      <div className="hero-ctas">
        <a className="btn-primary" href="#contact">Me contacter</a>
        <a
          className="btn-ghost"
          href="https://github.com/Hectorberi01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">3<span>+</span></div>
          <div className="stat-label">Années d'expérience</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">21<span>+</span></div>
          <div className="stat-label">Microservices déployés</div>
        </div>
          {/*<div className="stat-item">
          <div className="stat-num">5<span>+</span></div>
          <div className="stat-label">Marchés africains ciblés</div>
        </div>*/}
        <div className="stat-item">
          <div className="stat-num">2<span>x</span></div>
          <div className="stat-label">Diplômé ESGI Paris</div>
        </div>
      </div>
    </section>
  )
}
