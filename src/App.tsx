import { useState } from 'react';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { timeline } from './data/timeline';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { AlgorithmVisualizer } from './components/AlgorithmVisualizer';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';

function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] px-4 py-8 md:px-12 lg:px-24 relative z-10 transition-colors duration-300">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Command Palette */}
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* ===== HERO ===== */}
      <header className="max-w-5xl mx-auto py-12 md:py-20 border-b border-terminal-border relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              <span className="text-terminal-green">$</span>
              <span className="text-white dark:text-white">niloy</span>
              <span className="text-terminal-gray">@</span>
              <span className="text-terminal-blue">iut</span>
              <span className="terminal-cursor text-terminal-green ml-1">█</span>
            </h1>
            <p className="text-terminal-gray text-lg mt-3 max-w-2xl">
              CSE undergrad · building intelligent, well-architected systems
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <span className="text-terminal-green">●</span>
              <span className="text-terminal-gray">ML / AI</span>
              <span className="text-terminal-gray">|</span>
              <span className="text-terminal-blue">●</span>
              <span className="text-terminal-gray">Systems</span>
              <span className="text-terminal-gray">|</span>
              <span className="text-terminal-purple">●</span>
              <span className="text-terminal-gray">Full-stack</span>
              <button
                onClick={() => setCommandOpen(true)}
                className="ml-4 text-xs bg-terminal-border px-3 py-1 rounded text-terminal-gray hover:text-terminal-green transition font-mono"
              >
                ⌘K
              </button>
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/sunbimhaqueniloy"
              className="text-terminal-gray hover:text-terminal-green transition"
              target="_blank"
            >
              ⌨
            </a>
            <a
              href="https://linkedin.com/in/sunbimhaqueniloy"
              className="text-terminal-gray hover:text-terminal-blue transition"
              target="_blank"
            >
              🔗
            </a>
            <a
              href="mailto:sunbimhaqueniloy@gmail.com"
              className="text-terminal-gray hover:text-terminal-orange transition"
            >
              ✉
            </a>
          </div>
        </div>
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-5xl mx-auto py-16 border-b border-terminal-border scroll-mt-20">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// about</h2>
        <p className="text-gray-300 dark:text-gray-300 max-w-3xl leading-relaxed">
          I'm a CSE undergraduate at IUT with a passion for building intelligent,
          well-architected systems — not just CRUD apps. My work spans
          <span className="text-terminal-blue"> machine learning</span> (ECG arrhythmia classification),
          <span className="text-terminal-purple"> distributed systems</span> (Diceymio), and
          <span className="text-terminal-orange"> full-stack development</span> (BloodLink).
          I believe the best systems are both elegant and functional.
        </p>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="max-w-5xl mx-auto py-16 border-b border-terminal-border scroll-mt-20">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-blue font-semibold mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map(lang => (
                <span key={lang} className="bg-[var(--terminal-bg)] px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-purple font-semibold mb-3">ML / AI</h3>
            <div className="flex flex-wrap gap-2">
              {skills.mlAi.map(skill => (
                <span key={skill} className="bg-[var(--terminal-bg)] px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-orange font-semibold mb-3">Web</h3>
            <div className="flex flex-wrap gap-2">
              {skills.web.map(skill => (
                <span key={skill} className="bg-[var(--terminal-bg)] px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-terminal-card p-5 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-gray font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span key={skill} className="bg-[var(--terminal-bg)] px-3 py-1 rounded-full text-sm text-gray-300 border border-terminal-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="max-w-5xl mx-auto py-16 border-b border-terminal-border scroll-mt-20">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-terminal-card p-6 rounded-lg border border-terminal-border hover:border-terminal-blue transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-terminal-blue/10"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-terminal-blue transition">
                {project.title}
              </h3>
              <p className="text-terminal-gray text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs bg-[var(--terminal-bg)] px-2 py-1 rounded text-terminal-green border border-terminal-border">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-sm">
                <span className="text-terminal-blue hover:underline cursor-pointer">Click to expand →</span>
                <span className="text-terminal-gray">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ALGORITHM VISUALIZER ===== */}
      <section id="visualizer" className="max-w-5xl mx-auto py-16 border-b border-terminal-border scroll-mt-20">
        <h2 className="text-2xl font-bold text-terminal-green mb-6">// algorithm visualizer</h2>
        <AlgorithmVisualizer />
      </section>

      {/* ===== TIMELINE ===== */}
      <section id="timeline" className="max-w-5xl mx-auto py-16 border-b border-terminal-border scroll-mt-20">
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
      <footer id="contact" className="max-w-5xl mx-auto py-12 text-center text-terminal-gray text-sm scroll-mt-20">
        <p>© {new Date().getFullYear()} Niloy · Built with React + Vite + Tailwind</p>
        <p className="mt-1">
          <span className="text-terminal-green">$</span> echo "sunbimhaqueniloy@gmail.com"
          <span className="text-terminal-green"> →</span>
          <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-terminal-blue hover:underline ml-1">send mail</a>
        </p>
        <p className="mt-4 text-xs text-terminal-gray/60">
          Press <kbd className="px-2 py-1 bg-terminal-border rounded text-terminal-green">⌘K</kbd> to navigate
        </p>
      </footer>
    </div>
  );
}

export default App;