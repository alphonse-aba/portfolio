
import './App.css'

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", background: "#1a1a2e", color: "white" }}>
        <h2 style={{ margin: 0 }}>Alp Dev</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#apropos" style={{ color: "white", textDecoration: "none" }}>À propos</a>
          <a href="#competences" style={{ color: "white", textDecoration: "none" }}>Compétences</a>
          <a href="#projets" style={{ color: "white", textDecoration: "none" }}>Projets</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#1a1a2e", color: "white", textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "48px", margin: 0 }}>Alphonse Abafoum</h1>
        <p style={{ fontSize: "22px", color: "#a0aec0", margin: "16px 0" }}>Développeur Full Stack</p>
        <p style={{ fontSize: "16px", color: "#718096", maxWidth: "500px", margin: "0 auto 32px" }}>
          Passionné par le développement web, je crée des applications modernes avec React et Django.
        </p>
        <a href="#projets" style={{ background: "#2563eb", color: "white", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
          Voir mes projets
        </a>
      </section>

      {/* À PROPOS */}
      <section id="apropos" style={{ padding: "80px 40px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", borderBottom: "3px solid #2563eb", paddingBottom: "10px" }}>À propos</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4a5568" }}>
          Étudiant en Génie Informatique à UCAO-UUT (Lomé, Togo), je me spécialise dans le développement Full Stack.
          Mon objectif est de travailler en remote pour des clients internationaux. Je maîtrise Python, JavaScript, React et Django.
        </p>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" style={{ background: "#f7fafc", padding: "80px 40px" }}>
        <h2 style={{ fontSize: "32px", textAlign: "center", borderBottom: "3px solid #2563eb", paddingBottom: "10px", maxWidth: "800px", margin: "0 auto 40px" }}>Compétences</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", maxWidth: "800px", margin: "0 auto" }}>
          {["Python", "JavaScript", "React", "Django", "Flask", "REST API", "JWT", "Git/GitHub", "HTML/CSS", "SQL"].map((skill) => (
            <span key={skill} style={{ background: "#2563eb", color: "white", padding: "8px 20px", borderRadius: "20px", fontWeight: "bold" }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" style={{ padding: "80px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", borderBottom: "3px solid #2563eb", paddingBottom: "10px" }}>Projets</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "32px" }}>

          <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <h3 style={{ color: "#2563eb" }}>🎓 Gestionnaire d'Étudiants</h3>
            <p style={{ color: "#4a5568" }}>Application Full Stack avec React + Django REST Framework + JWT Authentication.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "12px 0" }}>
              {["React", "Django", "JWT", "DRF"].map(t => <span key={t} style={{ background: "#ebf4ff", color: "#2563eb", padding: "4px 10px", borderRadius: "12px", fontSize: "12px" }}>{t}</span>)}
            </div>
            <a href="https://react-etudiants.vercel.app" target="_blank" style={{ color: "#2563eb", fontWeight: "bold" }}>🔗 Voir le projet</a>
          </div>

          <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <h3 style={{ color: "#2563eb" }}>🌤️ Application Météo</h3>
            <p style={{ color: "#4a5568" }}>App météo en JavaScript avec Fetch API et Async/Await. Données en temps réel.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "12px 0" }}>
              {["JavaScript", "Fetch API", "HTML/CSS"].map(t => <span key={t} style={{ background: "#ebf4ff", color: "#2563eb", padding: "4px 10px", borderRadius: "12px", fontSize: "12px" }}>{t}</span>)}
            </div>
            <a href="https://github.com/alphonse-aba/meteo--app" target="_blank" style={{ color: "#2563eb", fontWeight: "bold" }}>🔗 Voir le projet</a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#1a1a2e", color: "white", textAlign: "center", padding: "80px 40px" }}>
        <h2 style={{ fontSize: "32px" }}>Contact</h2>
        <p style={{ color: "#a0aec0", marginBottom: "24px" }}>Tu as un projet ? Contacte-moi !</p>
        <a href="mailto:alphonseabafoum357@gmail.com" style={{ background: "#2563eb", color: "white", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
          📧 M'envoyer un email
        </a>
        <div style={{ marginTop: "32px" }}>
          <a href="https://github.com/alphonse-aba" target="_blank" style={{ color: "#a0aec0", margin: "0 16px" }}>GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default App