import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    year: string;
    problem: string;
    role: string;
    improvements: string;
  } | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-terminal-card border border-terminal-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white font-mono">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-terminal-gray hover:text-white transition text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

          <div className="space-y-4 text-sm">
            <div>
              <span className="text-terminal-green font-mono">// problem</span>
              <p className="text-gray-400 mt-1">{project.problem}</p>
            </div>

            <div>
              <span className="text-terminal-blue font-mono">// my role</span>
              <p className="text-gray-400 mt-1">{project.role}</p>
            </div>

            <div>
              <span className="text-terminal-orange font-mono">// tech stack</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-terminal-bg px-3 py-1 rounded text-xs text-terminal-green border border-terminal-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-terminal-purple font-mono">// what I'd improve</span>
              <p className="text-gray-400 mt-1">{project.improvements}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6 pt-6 border-t border-terminal-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-terminal-blue hover:underline font-mono text-sm"
              >
                GitHub →
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-terminal-green hover:underline font-mono text-sm"
              >
                Live Demo →
              </a>
            )}
            <span className="text-terminal-gray text-sm font-mono ml-auto">{project.year}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}