import { projects } from './data/projects';
import { skills } from './data/skills';
import { timeline } from './data/timeline';

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg px-4 py-8 md:px-12 lg:px-24">
      {/* ===== HERO ===== */}
      <header className="max-w-5xl mx-auto py-12 md:py-20 border-b border-terminal-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              <span className="text-terminal-green">$</span> 
              <span className="text-white">niloy</span>
              <span className="text-terminal-gray">@</span>
              <span className="text-terminal-blue">iut</span>
            </h1>
            <p className="text-terminal-gray text-lg mt-3 max-w-2xl">
              CSE undergrad · building intelligent, well-architected systems
            </p>
            <div className="flex gap-4 mt-4 text-sm">
              <span className="text-terminal-green">●</span>
              <span className="text-terminal-gray">ML / AI</span>
              <span className="text-terminal-gray">|</span>
              <span className="text-terminal-blue">●</span>
              <span className="text-terminal-gray">Systems</span>
              <span className="text-terminal-gray">|</span>
              <span className="text-terminal-purple">●</span>
              <span className="text-terminal-gray">Full-stack</span>
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/niloy" className="text-terminal-gray hover:text-terminal-green transition" target="_blank">⌨</a>
            <a href="https://linkedin.com/in/niloy" className="text-terminal-gray hover:text-terminal-blue transition" target="_blank">🔗</a>
            <a href="mailto:hello@niloy.dev" className="text-terminal-gray hover:text-terminal-orange transition">✉</a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section className="max-w-5xl mx-auto py-16 border-b border-terminal-border">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// about</h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          I'm a CSE undergraduate at IUT with a passion for building intelligent, 
          well-architected systems — not just CRUD apps. My work spans 
          <span className="text-terminal-blue"> machine learning</span> (ECG arrhythmia classification),
          <span className="text-terminal-purple"> distributed systems</span> (Diceymio), and
          <span className="text-terminal-orange"> full-stack development</span> (BloodLink).
          I believe the best systems are both elegant and functional.
        </p>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="max-w-5xl mx-auto py-16 border-b border-terminal-border">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-blue font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(lang => (
                <span key={lang} className="bg-terminal-bg px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">{lang}</span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-purple font-semibold mb-3">ML / AI</h3>
            <div className="flex flex-wrap gap-2">
              {skills.mlAi.map(skill => (
                <span key={skill} className="bg-terminal-bg px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-orange font-semibold mb-3">Web</h3>
            <div className="flex flex-wrap gap-2">
              {skills.web.map(skill => (
                <span key={skill} className="bg-terminal-bg px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-gray font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span key={skill} className="bg-terminal-bg px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="max-w-5xl mx-auto py-16 border-b border-terminal-border">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-terminal-card p-6 rounded-lg border border-terminal-border hover:border-terminal-blue transition group">
              <h3 className="text-xl font-bold text-white group-hover:text-terminal-blue transition">
                {project.title}
              </h3>
              <p className="text-terminal-gray text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs bg-terminal-bg px-2 py-1 rounded text-terminal-green border border-terminal-border">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-sm">
                {project.github && (
                  <a href={project.github} className="text-terminal-blue hover:underline" target="_blank">GitHub →</a>
                )}
                <span className="text-terminal-gray">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-5xl mx-auto py-16 border-b border-terminal-border">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// timeline</h2>
        <div className="relative pl-8 border-l-2 border-terminal-border">
          {timeline.map((item, idx) => (
            <div key={idx} className={`mb-8 ${item.isFuture ? 'opacity-40' : ''}`}>
              <div className="absolute w-3 h-3 bg-terminal-green rounded-full -left-[7px] mt-1.5"></div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <span className="text-terminal-gray text-sm font-mono min-w-[100px]">{item.semester}</span>
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-terminal-gray text-sm">{item.description}</p>
                </div>
                {item.isFuture && (
                  <span className="text-xs bg-terminal-border px-2 py-0.5 rounded text-terminal-gray ml-auto">Coming</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER / CONTACT ===== */}
      <footer className="max-w-5xl mx-auto py-12 text-center text-terminal-gray text-sm">
        <p>© {new Date().getFullYear()} Niloy · Built with React + Vite + Tailwind</p>
        <p className="mt-1">
          <span className="text-terminal-green">$</span> echo "hello@niloy.dev" 
          <span className="text-terminal-green"> →</span> 
          <a href="mailto:hello@niloy.dev" className="text-terminal-blue hover:underline ml-1">send mail</a>
        </p>
      </footer>
    </div>
  );
}

export default App;