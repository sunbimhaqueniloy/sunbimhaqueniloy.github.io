import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { timeline } from './data/timeline';
import { funFacts } from './data/funFacts';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';
import { AlgorithmVisualizer } from './components/AlgorithmVisualizer';
import { ThemeToggle } from './components/ThemeToggle';
import { ParticleBackground } from './components/ParticleBackground';
import { TypingEffect } from './components/TypingEffect';
import { GitHubStats } from './components/GitHubStats';
import { FloatingPhoto } from './components/FloatingPhoto';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FunFacts } from './components/FunFacts';

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
      <header id="hero" className="max-w-6xl mx-auto py-12 md:py-20 border-b border-[#2a2a3a] relative scroll-mt-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex-1"
          >
            <div className="flex items-center gap-2 text-sm text-[#8a8a9a] mb-2">
              <span className="text-violet-400">$</span> whoami
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
              <span className="text-white">niloy</span>
              <span className="text-[#8a8a9a]">@</span>
              <span className="text-cyan-400">iut</span>
              <span className="terminal-cursor text-violet-500 ml-1">█</span>
            </h1>
            <div className="mt-3">
              <TypingEffect
                texts={[
                  'CSE undergrad · building intelligent systems',
                  'ML / AI Engineer · ECG Arrhythmia Research',
                  'Systems Architect · Distributed Computing',
                  'Full-stack Developer · React + Go'
                ]}
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              <span className="text-violet-400">●</span>
              <span className="text-[#8a8a9a]">ML / AI</span>
              <span className="text-[#8a8a9a]">|</span>
              <span className="text-cyan-400">●</span>
              <span className="text-[#8a8a9a]">Systems</span>
              <span className="text-[#8a8a9a]">|</span>
              <span className="text-violet-400">●</span>
              <span className="text-[#8a8a9a]">Full-stack</span>
              <button
                onClick={() => setCommandOpen(true)}
                className="ml-4 text-xs bg-[#2a2a3a] px-3 py-1 rounded text-[#8a8a9a] hover:text-violet-400 transition font-mono"
              >
                ⌘K
              </button>
            </div>
            <div className="flex gap-4 mt-6 text-2xl">
              <a href="https://github.com/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-violet-400 transition" target="_blank">⌨</a>
              <a href="https://linkedin.com/in/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-cyan-400 transition" target="_blank">🔗</a>
              <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-[#8a8a9a] hover:text-violet-400 transition">✉</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="flex-shrink-0"
          >
            <FloatingPhoto src="/profile.png" alt="Niloy" />
          </motion.div>
        </div>
        <ScrollIndicator />
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// about</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            I'm a CSE undergraduate at Islamic University of Technology (IUT), currently in my 4th semester,
            with a passion for building intelligent, well-architected systems. My work spans
            <span className="text-violet-400"> machine learning</span> (ECG arrhythmia classification),
            <span className="text-cyan-400"> distributed systems</span> (Diceymio), and
            <span className="text-violet-400"> full-stack development</span> (BloodLink).
            I believe the best systems are both elegant and functional.
          </p>
          <div className="mt-6">
            <GitHubStats />
          </div>
        </motion.div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={fadeUp}
                className="bg-[#14141e] p-5 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition"
              >
                <h3 className="text-cyan-400 font-semibold mb-3 capitalize">{category.replace('mlAi', 'ML / AI')}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill: string) => (
                    <span key={skill} className="bg-[#0a0a0e] px-3 py-1 rounded-full text-sm text-gray-300 border border-[#2a2a3a]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                onClick={() => setSelectedProject(project)}
                className="bg-[#14141e] p-6 rounded-lg border border-[#2a2a3a] hover:border-violet-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-violet-500/10"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition">
                  {project.title}
                </h3>
                <p className="text-[#8a8a9a] text-sm mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-[#0a0a0e] px-2 py-1 rounded text-cyan-400 border border-[#2a2a3a]">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs text-[#8a8a9a] px-2 py-1">+{project.tech.length - 4}</span>
                  )}
                </div>
                <div className="flex gap-4 mt-4 text-sm">
                  <span className="text-violet-400 hover:underline cursor-pointer">Click to expand →</span>
                  <span className="text-[#8a8a9a]">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== ALGORITHM VISUALIZER ===== */}
      <section id="visualizer" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// algorithm visualizer</h2>
          <AlgorithmVisualizer />
        </motion.div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section id="timeline" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// timeline</h2>
          <div className="relative pl-8 border-l-2 border-[#2a2a3a]">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`mb-8 ${item.isFuture ? 'opacity-40' : ''}`}
              >
                <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[7px] mt-1.5"></div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <span className="text-[#8a8a9a] text-sm font-mono min-w-[120px]">{item.semester}</span>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-[#8a8a9a] text-sm">{item.description}</p>
                  </div>
                  {item.isFuture && (
                    <span className="text-xs bg-[#2a2a3a] px-2 py-0.5 rounded text-cyan-400 ml-auto">Coming</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== FUN FACTS ===== */}
      <section id="funfacts" className="max-w-6xl mx-auto py-16 border-b border-[#2a2a3a] scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-violet-400 mb-6 font-mono">// fun facts</h2>
          <FunFacts />
        </motion.div>
      </section>

      {/* ===== CONTACT ===== */}
      <footer id="contact" className="max-w-6xl mx-auto py-12 text-center text-[#8a8a9a] text-sm scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>© {new Date().getFullYear()} Niloy · Built with React + Vite + Tailwind</p>
          <p className="mt-1">
            <span className="text-violet-400">$</span> echo "sunbimhaqueniloy@gmail.com"
            <span className="text-violet-400"> →</span>
            <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-cyan-400 hover:underline ml-1">send mail</a>
          </p>
          <p className="mt-4 text-xs text-[#8a8a9a]/60">
            Press <kbd className="px-2 py-1 bg-[#2a2a3a] rounded text-violet-400">⌘K</kbd> to navigate
          </p>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="https://github.com/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-violet-400 transition" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/sunbimhaqueniloy" className="text-[#8a8a9a] hover:text-cyan-400 transition" target="_blank">LinkedIn</a>
            <a href="mailto:sunbimhaqueniloy@gmail.com" className="text-[#8a8a9a] hover:text-violet-400 transition">Email</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;