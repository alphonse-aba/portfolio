import './App.css'
function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <span style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Alp Dev</span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="avatar">A</div>
        <h1>Alphonse Abafoum</h1>
        <p className="subtitle">Développeur Full Stack</p>
        <p className="desc">Passionné par le développement web, je crée des applications modernes avec React et Django.</p>
        <div>
          <a href="#projets" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-outline">Me contacter</a>
        </div>
      </div>

      {/* À PROPOS */}
      <section id="apropos">
        <div className="section-title">À propos</div>
        <div className="section-line"></div>
        <p style={{ color: "#4a5568", fontSize: "16px", lineHeight: "1.8", maxWidth: "700px" }}>
          Étudiant en Génie Informatique à <strong>UCAO-UUT</strong> (Lomé, Togo), je me spécialise dans le développement Full Stack.
          Mon objectif est de travailler en <strong>remote pour des clients internationaux</strong>.
          Je maîtrise Python, JavaScript, React et Django.
        </p>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="skills">
        <div className="section-title">Compétences</div>
        <div className="section-line"></div>
        <div className="skills-grid">
          {[
            "🐍 Python", "⚡ JavaScript", "⚛️ React", "🎸 Django",
            "🌶️ Flask", "🔌 REST API", "🔐 JWT", "🐙 Git/GitHub",
            "🎨 HTML/CSS", "🗄️ SQL"
          ].map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets">
        <div className="section-title">Projets</div>
        <div className="section-line"></div>
        <div className="projects-grid">

          <div className="project-card">
            <div className="project-emoji">🎓</div>
            <h3>Gestionnaire d'Étudiants</h3>
            <p>Application Full Stack avec React + Django REST Framework + JWT Authentication.</p>
            <div className="tags">
              {["React", "Django", "JWT", "DRF"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href="https://react-etudiants.vercel.app" target="_blank" className="project-link">🔗 Voir le projet →</a>
          </div>

          <div className="project-card">
            <div className="project-emoji">🌤️</div>
            <h3>Application Météo</h3>
            <p>App météo en JavaScript avec Fetch API et Async/Await. Données en temps réel.</p>
            <div className="tags">
              {["JavaScript", "Fetch API", "HTML/CSS"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href="https://github.com/alphonse-aba/meteo--app" target="_blank" className="project-link">🔗 Voir le projet →</a>
          </div>

          <div className="project-card">
            <div className="project-emoji">🐍</div>
            <h3>Student Manager</h3>
            <p>Application de gestion d'étudiants en Python avec Flask et SQLite.</p>
            <div className="tags">
              {["Python", "Flask", "SQLite"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href="https://github.com/alphonse-aba/student-manager" target="_blank" className="project-link">🔗 Voir le projet →</a>
          </div>

          <div className="project-card">
            <div className="project-emoji">🏫</div>
            <h3>Gestion Institut</h3>
            <p>Application CRUD complète en PHP/MySQL pour gérer instituts, filières et étudiants.</p>
            <div className="tags">
              {["PHP", "MySQL", "Bootstrap"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href="https://github.com/alphonse-aba" target="_blank" className="project-link">🔗 Voir le projet →</a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="section-title">Contact</div>
        <div className="section-line" style={{ margin: "8px auto 32px" }}></div>
        <p>Tu as un projet ? Je suis disponible pour travailler avec toi !</p>
        <a href="mailto:alphonseabafoum357@gmail.com" className="btn-primary">📧 M'envoyer un email</a>
        <div className="social-links">
          <a href="https://github.com/alphonse-aba" target="_blank">GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default App