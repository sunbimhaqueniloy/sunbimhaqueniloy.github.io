import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { timeline } from './data/timeline';
import { funFacts } from './data/funFacts';
import { education } from './data/education';
import { achievements } from './data/achievements';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { AlgorithmVisualizer } from './components/AlgorithmVisualizer';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';
import { TypingEffect } from './components/TypingEffect';
import { FloatingPhoto } from './components/FloatingPhoto';
import { ScrollIndicator } from './components/ScrollIndicator';

function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0e] px-4 py-8 md:px-12 lg:px-24 relative z-10 transition-colors duration-300">
      <ParticleBackground />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ThemeToggle />

      {/* ===== HERO ===== */}
      <header id="hero" className="min-h-[85vh] max-w-6xl mx-auto py-12 md:py-20 border-b border-[#2a2a3a] relative scroll-mt-20 flex items-center">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#8a8a9a] mb-2">
              <span className="text-violet-400">$</span> whoami
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono leading-tight">
              <span className="text-white">niloy</span>
              <span className="text-[#8a8a9a]">@</span>
              <span className="text-cyan-400">iut</span>
              <span className="terminal-cursor text-violet-500 ml-1">█</span>
            </h1>
            <div className="mt-3 min-h-[2.5rem]">
              <TypingEffect
                texts={[
                  'CSE undergrad · building intelligent systems',
                  'ML / AI · Exoplanet Hunter · ECG Research',
                  'Game Dev · Sheikh & Run · Raylib',
                  'Systems Design · FSM · Distributed Computing',
                  'Full-stack · React · Java · Go'
                ]}
                speed={70}
                delay={2500}
              />
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 text-sm">
              <span className="flex items-center gap-1 text-[#8a8a9a]">
                <span className="text-violet-400">●</span> ML / AI
              </span>
              <span className="text-[#2a2a3a]">|</span>
              <span className="flex items-center gap-1 text-[#8a8a9a]">
                <span className="text-cyan-400">●</span> Game Dev
              </span>
              <span className="text-[#2a2a3a]">|</span>
              <span className="flex items-center gap-1 text-[#8a8a9a]">
                <span className="text-violet-400">●</span> Systems
              </span>
              <span className="text-[#2a2a3a]">|</span>
              <span className="flex items-center gap-1 text-[#8a8a9a]">
                <span className="text-cyan-400">●</span> Full-stack
              </span>
              <button
                onClick={() => setCommandOpen(true)}
                className="ml-2 text-xs bg-[#2a2a3a] px-3 py-1.5 rounded text-[#8a8a9a] hover:text-violet-400 hover:border-violet-500 transition border border-transparent font-mono"
              >
                ⌘K
              </button>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-8 text-2xl">
              <a href="https://github.com/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-violet-400 transition-transform hover:scale-110" target="_blank">⌨</a>
              <a href="https://linkedin.com/in/sunbim-haque-niloy-199b49211" className="text-[#8a8a9a] hover:text-cyan-400 transition-transform hover:scale-110" target="_blank">🔗</a>
              <a href="https://x.com/Niloy84865" className="text-[#8a8a9a] hover:text-violet-400 transition-transform hover:scale-110" target="_blank">🐦</a>
              <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-[#8a8a9a] hover:text-violet-400 transition-transform hover:scale-110">✉</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-cyan-400/20 to-violet-500/30 blur-3xl rounded-full animate-pulse" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="/profile.png"
                  alt="Niloy"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[360px] lg:h-[360px] rounded-full object-cover border-[3px] border-violet-500/30 shadow-2xl shadow-violet-500/20"
                  style={{
                    transform: 'perspective(1000px)',
                    transition: 'transform 0.15s ease-out',
                    willChange: 'transform',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) / 25;
                    const y = (e.clientY - rect.top - rect.height / 2) / 25;
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.02)`;
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.3)';
                  }}
                  loading="eager"
                />
              </motion.div>
              <div className="absolute -inset-4 border border-violet-500/10 rounded-full animate-spin-slow" />
              <div className="absolute -inset-10 border border-cyan-400/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👨</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent ml-4" />
          </div>
          <p className="text-gray-300 max-w-4xl leading-relaxed text-lg">
            I'm a <span className="text-violet-400 font-semibold">Computer Science & Engineering</span> student at 
            <span className="text-cyan-400 font-semibold"> Islamic University of Technology (IUT), Bangladesh</span>, 
            passionate about <span className="text-violet-400">web development</span>, 
            <span className="text-cyan-400"> AI/ML</span>, and <span className="text-violet-400">UI/UX design</span>. 
            I enjoy building things, exploring new technologies, and turning ideas into practical digital experiences. 
            Always learning, always creating, and always looking for the next thing to build.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#14141e] p-4 rounded-lg border border-[#2a2a3a] text-center hover:border-violet-500 transition">
              <div className="text-violet-400 text-3xl font-bold font-mono">12+</div>
              <div className="text-[#8a8a9a] text-sm">Projects Built</div>
            </div>
            <div className="bg-[#14141e] p-4 rounded-lg border border-[#2a2a3a] text-center hover:border-cyan-400 transition">
              <div className="text-cyan-400 text-3xl font-bold font-mono">4</div>
              <div className="text-[#8a8a9a] text-sm">National Olympiad Titles</div>
            </div>
            <div className="bg-[#14141e] p-4 rounded-lg border border-[#2a2a3a] text-center hover:border-violet-500 transition">
              <div className="text-violet-400 text-3xl font-bold font-mono">4×</div>
              <div className="text-[#8a8a9a] text-sm">GPA 5.00 + Scholarships</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent ml-4" />
          </div>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id} className="bg-[#14141e] p-6 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                        <p className="text-cyan-400 font-mono">{item.degree}</p>
                      </div>
                      <span className="text-[#8a8a9a] text-sm font-mono bg-[#0a0a0e] px-3 py-1 rounded border border-[#2a2a3a]">{item.period}</span>
                    </div>
                    <p className="text-[#8a8a9a] mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section id="achievements" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent ml-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div key={item.id} className={`bg-[#14141e] p-5 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition group ${item.id === 'talentpool' ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-cyan-400 text-sm font-mono">{item.subtitle}</p>
                    {item.span && <p className="text-[#8a8a9a] text-xs font-mono mt-0.5">{item.span}</p>}
                    <p className="text-[#8a8a9a] text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent ml-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                onClick={() => setSelectedProject(project)}
                className="bg-[#14141e] p-6 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition">{project.title}</h3>
                  <span className="text-xs text-[#8a8a9a] font-mono bg-[#0a0a0e] px-2 py-1 rounded border border-[#2a2a3a]">{project.year}</span>
                </div>
                <p className="text-[#8a8a9a] text-sm mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-[#0a0a0e] px-2 py-1 rounded text-cyan-400 border border-[#2a2a3a]">{tech}</span>
                  ))}
                  {project.tech.length > 4 && <span className="text-xs text-[#8a8a9a] px-2 py-1">+{project.tech.length - 4}</span>}
                </div>
                <div className="flex gap-4 mt-4 text-sm">
                  <span className="text-violet-400 hover:underline cursor-pointer">Click to expand →</span>
                  <span className="text-[#8a8a9a] ml-auto">{project.semester}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://github.com/sunbimhaqueniloy" target="_blank" className="text-[#8a8a9a] hover:text-violet-400 transition font-mono text-sm border border-[#2a2a3a] px-6 py-2 rounded-lg inline-block hover:border-violet-500">
              View all projects on GitHub →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section id="timeline" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Timeline</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent ml-4" />
          </div>
          <div className="relative pl-8 border-l-2 border-[#2a2a3a]">
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`mb-8 ${item.isFuture ? 'opacity-40' : ''}`}>
                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[7px] mt-1.5"></div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <span className="text-[#8a8a9a] text-sm font-mono min-w-[120px]">{item.semester}</span>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-[#8a8a9a] text-sm">{item.description}</p>
                  </div>
                  {item.isFuture && <span className="text-xs bg-[#2a2a3a] px-2 py-0.5 rounded text-cyan-400 ml-auto">Coming</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚡</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent ml-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp} className="bg-[#14141e] p-5 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition">
                <h3 className="text-cyan-400 font-semibold mb-3 capitalize text-lg">
                  {category === 'mlAi' ? ' ML / AI' : 
                   category === 'design' ? ' Design & Architecture' :
                   category === 'data' ? ' Data & Analysis' : 
                   category === 'languages' ? ' Languages' :
                   category === 'web' ? ' Web' :
                   category === 'tools' ? ' Tools' : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill: string) => (
                    <span key={skill} className="bg-[#0a0a0e] px-3 py-1 rounded-full text-sm text-gray-300 border border-[#2a2a3a] hover:border-violet-500 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== FUN FACTS ===== */}
      <section id="funfacts" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Fun Facts</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent ml-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, i) => (
              <div key={i} className="bg-[#14141e] p-4 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition group">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{fact.emoji}</span>
                  <p className="text-sm text-gray-300">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== ALGORITHM VISUALIZER ===== */}
      <section id="visualizer" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Algorithm Visualizer</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent ml-4" />
          </div>
          <AlgorithmVisualizer />
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <footer id="contact" className="max-w-6xl mx-auto py-12 text-center text-[#8a8a9a] text-sm scroll-mt-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-white font-mono text-lg mb-4">Let's build something together.</p>
          <p className="mb-6">
            <span className="text-violet-400">$</span> echo "sunbimhaqueniloy@gmail.com"
            <span className="text-violet-400"> →</span>
            <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-cyan-400 hover:underline ml-1">send mail</a>
          </p>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="https://github.com/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-violet-400 transition" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/sunbim-haque-niloy-199b49211" className="text-[#8a8a9a] hover:text-cyan-400 transition" target="_blank">LinkedIn</a>
            <a href="https://x.com/Niloy84865" className="text-[#8a8a9a] hover:text-violet-400 transition" target="_blank">X</a>
            <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-[#8a8a9a] hover:text-cyan-400 transition">Email</a>
          </div>
          <div className="mt-8 pt-6 border-t border-[#2a2a3a] text-xs text-[#8a8a9a]/60">
            <p>© {new Date().getFullYear()} Niloy · Built with React + Vite + Tailwind</p>
            <p className="mt-2">Press <kbd className="px-2 py-1 bg-[#2a2a3a] rounded text-violet-400">⌘K</kbd> to navigate</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;