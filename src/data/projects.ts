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
    tech: ['React', 'Node.js', 'MongoDB', 'ML'],
    github: 'https://github.com/niloy/bloodlink',
    year: '2025',
    problem: 'Blood donation requests take hours to match manually',
    role: 'Full-stack + ML Engineer',
    improvements: 'Add real-time SMS alerts, optimize matching algorithm',
  },
  {
    id: 'ecg',
    title: 'ECG Arrhythmia CNN',
    description: 'Deep learning classifier for cardiac arrhythmia detection',
    tech: ['Python', 'TensorFlow', 'CNN', 'NumPy'],
    github: 'https://github.com/niloy/ecg-cnn',
    year: '2025',
    problem: 'Manual ECG interpretation is slow and error-prone',
    role: 'ML Researcher',
    improvements: 'Deploy as web app, add explainability (Grad-CAM)',
  },
  {
    id: 'diceymio',
    title: 'Diceymio',
    description: 'System design project with distributed architecture',
    tech: ['Go', 'Redis', 'gRPC', 'Docker'],
    github: 'https://github.com/niloy/diceymio',
    year: '2024',
    problem: 'Monolithic design couldn\'t handle concurrent dice rolls',
    role: 'Systems Architect',
    improvements: 'Add Kubernetes orchestration, improve sharding',
  },
];