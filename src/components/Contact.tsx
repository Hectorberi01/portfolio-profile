import RevealWrapper from './RevealWrapper'
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <RevealWrapper>
        <div className="contact-inner">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Travaillons ensemble</h2>
          <p className="contact-subtitle">
            Disponible pour des missions freelance, des collaborations ou des opportunités CDI en
            Île-de-France et en remote. N'hésitez pas à me contacter.
          </p>
          <div className="contact-emails">
            <a className="btn-primary" href="mailto:hector.adjakpa@gmail.com">
              hector.adjakpa@gmail.com
            </a>
            <a className="btn-ghost" href="mailto:hector.adjakpa@outlook.com">
              hector.adjakpa@outlook.com
            </a>
          </div>

          <div className="contact-links">
            <a className="contact-link" href="tel:+33698367919">
              <span className="icon"></span> 📞 +33 6 98 36 79 19
            </a>
            <a
                className="contact-link"
                href="https://github.com/Hectorberi01"
                target="_blank"
                rel="noreferrer"
            >
              <FaGithub />
              <span className="icon"></span> GitHub
            </a>
            <a
                className="contact-link"
                href="https://www.linkedin.com/in/hector-adjakpa/"
                target="_blank"
                rel="noreferrer"
            >
              <FaLinkedinIn/>
              <span className="icon"></span> LinkedIn
            </a>
            <a className="contact-link" href="#">
              <span className="icon"></span> Île-de-France
            </a>
          </div>

          <div className="contact-downloads">
            <p className="contact-downloads-label">Télécharger mes documents</p>
            <div className="contact-download-btns">
              <a
                  className="contact-download-btn"
                  href="/docs/Hector_ADJAKPA_CV_CDI.pdf"
                  download="CV_Hector_Adjakpa.pdf"
              >
                <span className="download-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="download-btn-text">
                  <span className="download-btn-title">Curriculum Vitae</span>
                  <span className="download-btn-ext">PDF</span>
                </span>
              </a>
              <a
                  className="contact-download-btn"
                  href="/lettre-recommandation.pdf"
                  download="Lettre_Recommandation_Hector_Adjakpa.pdf"
              >
                <span className="download-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="download-btn-text">
                  <span className="download-btn-title">Lettre de recommandation</span>
                  <span className="download-btn-ext">PDF</span>
                </span>
              </a>
              <a
                  className="contact-download-btn"
                  href="/docs/Lettre_de_motivation.pdf"
                  download="Lettre_Motivation_Hector_Adjakpa.pdf"
              >
                <span className="download-btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="download-btn-text">
                  <span className="download-btn-title">Lettre de motivation</span>
                  <span className="download-btn-ext">PDF</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}
