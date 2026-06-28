function App() {
  return (
    <div className="font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-900 text-white px-10 py-4 flex justify-between items-center z-50 shadow-lg">
        <h2 className="text-xl font-bold text-blue-400">Alp Dev</h2>
        <div className="flex gap-6">
          <a href="#apropos" className="hover:text-blue-400 transition">À propos</a>
          <a href="#competences" className="hover:text-blue-400 transition">Compétences</a>
          <a href="#projets" className="hover:text-blue-400 transition">Projets</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-slate-900 text-white text-center pt-40 pb-24 px-6">
        <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold mx-auto mb-6">
          A
        </div>
        <h1 className="text-5xl font-bold mb-4">Alphonse Abafoum</h1>
        <p className="text-xl text-blue-400 mb-4">Développeur Full Stack</p>
        <p className="text-slate-400 max-w-lg mx-auto mb-8">
          Passionné par le développement web, je crée des applications modernes avec React et Django.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projets" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition">
            Voir mes projets
          </a>
          <a href="#contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-bold transition">
            Me contacter
          </a>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">À propos</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <p className="text-slate-600 text-lg leading-relaxed">
          Étudiant en Génie Informatique à <strong>UCAO-UUT</strong> (Lomé, Togo), je me spécialise dans le développement Full Stack.
          Mon objectif est de travailler en <strong>remote pour des clients internationaux</strong>.
          Je maîtrise Python, JavaScript, React et Django.
        </p>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Compétences</h2>
          <div className="w-16 h-1 bg-blue-500 mb-8"></div>
          <div className="flex flex-wrap gap-3">
            {[
              { nom: "Python", emoji: "🐍" },
              { nom: "JavaScript", emoji: "⚡" },
              { nom: "React", emoji: "⚛️" },
              { nom: "Django", emoji: "🎸" },
              { nom: "Flask", emoji: "🌶️" },
              { nom: "REST API", emoji: "🔌" },
              { nom: "JWT", emoji: "🔐" },
              { nom: "Git/GitHub", emoji: "🐙" },
              { nom: "HTML/CSS", emoji: "🎨" },
              { nom: "SQL", emoji: "🗄️" },
            ].map((skill) => (
              <span key={skill.nom} className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-slate-700 font-medium hover:border-blue-400 hover:text-blue-600 transition">
                {skill.emoji} {skill.nom}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projets</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Gestionnaire d'Étudiants</h3>
            <p className="text-slate-500 mb-4">Application Full Stack avec React + Django REST Framework + JWT Authentication.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Django", "JWT", "DRF"].map(t => (
                <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
            <a href="https://react-etudiants.vercel.app" target="_blank" className="text-blue-600 font-bold hover:underline">🔗 Voir le projet →</a>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🌤️</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Application Météo</h3>
            <p className="text-slate-500 mb-4">App météo en JavaScript avec Fetch API et Async/Await. Données en temps réel.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "Fetch API", "HTML/CSS"].map(t => (
                <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
            <a href="https://github.com/alphonse-aba/meteo--app" target="_blank" className="text-blue-600 font-bold hover:underline">🔗 Voir le projet →</a>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🐍</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Student Manager</h3>
            <p className="text-slate-500 mb-4">Application de gestion d'étudiants en Python avec Flask et SQLite.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Flask", "SQLite"].map(t => (
                <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
            <a href="https://github.com/alphonse-aba/student-manager" target="_blank" className="text-blue-600 font-bold hover:underline">🔗 Voir le projet →</a>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🏫</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Gestion Institut</h3>
            <p className="text-slate-500 mb-4">Application CRUD complète en PHP/MySQL pour gérer instituts, filières et étudiants.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["PHP", "MySQL", "Bootstrap"].map(t => (
                <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
              ))}
            </div>
            <a href="https://github.com/alphonse-aba" target="_blank" className="text-blue-600 font-bold hover:underline">🔗 Voir le projet →</a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 text-white text-center py-24 px-6">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-slate-400 mb-8 text-lg">Tu as un projet ? Je suis disponible pour travailler avec toi !</p>
        <a href="mailto:alphonseabafoum357@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition inline-block mb-8">
          📧 M'envoyer un email
        </a>
        <div className="flex justify-center gap-8 mt-4">
          <a href="https://github.com/alphonse-aba" target="_blank" className="text-slate-400 hover:text-white transition">GitHub</a>
        </div>
      </section>

    </div>
  )
}

export default App