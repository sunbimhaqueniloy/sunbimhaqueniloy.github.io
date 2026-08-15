export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  year: string;
  problem: string;
  role: string;
  improvements: string;
}

export const projects: Project[] = [
  {
    id: 'bloodlink',
    title: 'BloodLink',
    description: 'Smart matching engine for emergency blood donation',
    tech: ['React', 'Node.js', 'MongoDB', 'ML', 'WebSocket'],
    github: 'https://github.com/sunbimhaqueniloy/bloodlink',
    year: '2025',
    problem: 'Blood donation requests take hours to match manually',
    role: 'Full-stack + ML Engineer',
    improvements: 'Add real-time SMS alerts, optimize matching algorithm, mobile app',
  },
  {
    id: 'ecg',
    title: 'ECG Arrhythmia CNN',
    description: 'Deep learning classifier for cardiac arrhythmia detection',
    tech: ['Python', 'TensorFlow', 'CNN', 'NumPy', 'Pandas'],
    github: 'https://github.com/sunbimhaqueniloy/ecg-cnn',
    year: '2025',
    problem: 'Manual ECG interpretation is slow and error-prone',
    role: 'ML Researcher',
    improvements: 'Deploy as web app, add explainability (Grad-CAM), real-time monitoring',
  },
  {
    id: 'diceymio',
    title: 'Diceymio',
    description: 'System design project with distributed architecture',
    tech: ['Go', 'Redis', 'gRPC', 'Docker', 'Kubernetes'],
    github: 'https://github.com/sunbimhaqueniloy/diceymio',
    year: '2024',
    problem: 'Monolithic design couldn\'t handle concurrent dice rolls',
    role: 'Systems Architect',
    improvements: 'Add Kubernetes orchestration, improve sharding, add metrics',
  },
  {
    id: 'javafx-calculator',
    title: 'JavaFX Calculator',
    description: 'Desktop calculator with advanced mathematical functions',
    tech: ['Java', 'JavaFX', 'Scene Builder', 'Maven'],
    github: 'https://github.com/sunbimhaqueniloy/javafx-calculator',
    year: '2024',
    problem: 'Basic calculators lack scientific and graphing functions',
    role: 'UI/UX + Backend Developer',
    improvements: 'Add graphing capability, history log, keyboard shortcuts',
  },
];