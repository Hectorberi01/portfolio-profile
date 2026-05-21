import RevealWrapper from './RevealWrapper'

export default function Formation() {
  return (
    <section id="formation">
      <div className="section-inner">
        <div className="section-tag">Formation</div>
        <h2 className="section-title">Parcours académique</h2>
        <RevealWrapper>
          <div className="edu-grid">
            <div className="edu-card featured">
              <div className="edu-badge">En cours</div>
              <div className="edu-year">2024 — 2026</div>
              <div className="edu-degree">Master Architecture Logiciel</div>
              <div className="edu-school">ESGI Paris</div>
            </div>

            <div className="edu-card featured">
              <div className="edu-badge">Obtenu</div>
              <div className="edu-year">2023 — 2024</div>
              <div className="edu-degree">Bachelor Architecture Logicielle</div>
              <div className="edu-school">ESGI Paris</div>
            </div>

            <div className="edu-card">
              <div className="edu-year">2020 — 2022</div>
              <div className="edu-degree">DUT Génie Électrique et Informatique industrielle</div>
              <div className="edu-school">IUT Villetaneuse · Université Sorbonne Paris Nord</div>
            </div>

            <div className="edu-card">
              <div className="edu-year">2018 — 2019</div>
              <div className="edu-degree">Licence Génie Informatique et Télécommunications</div>
              <div className="edu-school">École Polytechnique AB-Calavi, Bénin</div>
            </div>

            <div className="edu-card">
              <div className="edu-year">2016 — 2018</div>
              <div className="edu-degree">Classe Préparatoire Scientifique</div>
              <div className="edu-school">École Polytechnique AB-Calavi, Bénin</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
