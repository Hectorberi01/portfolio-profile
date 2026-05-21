import RevealWrapper from './RevealWrapper'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="skills-header">
          <div className="section-tag">Compétences</div>
          <h2 className="section-title">Ma stack technique</h2>
        </div>
        <RevealWrapper>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon"></span> Stack principale
              </div>
              <div className="skill-tags">
                <span className="skill-tag highlight">C# / .NET</span>
                <span className="skill-tag highlight">ASP.NET Core</span>
                <span className="skill-tag">Blazor</span>
                <span className="skill-tag highlight">SQL Server</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">REST API</span>
                <span className="skill-tag">EF Core</span>
                <span className="skill-tag">Stored Procedures</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon">️</span> Architecture
              </div>
              <div className="skill-tags">
                <span className="skill-tag highlight">Microservices</span>
                <span className="skill-tag highlight">DDD</span>
                <span className="skill-tag highlight">Event-Driven</span>
                <span className="skill-tag">CQRS</span>
                <span className="skill-tag">Saga Pattern</span>
                <span className="skill-tag">Clean Architecture</span>
                <span className="skill-tag">SOLID</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon"></span> Messaging &amp; Data
              </div>
              <div className="skill-tags">
                <span className="skill-tag highlight">Apache Kafka</span>
                <span className="skill-tag highlight">PostgreSQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">SignalR / WebSocket</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon"></span> DevOps &amp; Infra
              </div>
              <div className="skill-tags">
                <span className="skill-tag highlight">Docker</span>
                <span className="skill-tag highlight">Traefik v3</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Jira / Agile</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon"></span> Frontend &amp; Mobile
              </div>
              <div className="skill-tags">
                <span className="skill-tag highlight">Flutter / Dart</span>
                <span className="skill-tag highlight">HTML / CSS</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Blazor</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-cat-title">
                <span className="skill-cat-icon"></span> Autres
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Java / Spring Boot</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">Solidity</span>
                <span className="skill-tag">OpenTelemetry</span>
                <span className="skill-tag">Serilog</span>
                <span className="skill-tag">Polly</span>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
