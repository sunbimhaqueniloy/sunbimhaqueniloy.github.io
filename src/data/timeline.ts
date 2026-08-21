export interface TimelineItem {
  semester: string;
  title: string;
  description: string;
  year: string;
  isFuture?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    semester: 'Spring 2026',
    title: 'NASA Exoplanet Hunter',
    description: 'ML-powered exoplanet detection system analyzing astronomical data.',
    year: '2026',
  },
  {
    semester: 'Spring 2026',
    title: 'Sheikh & Run',
    description: 'Political satire chase game built with Raylib framework.',
    year: '2026',
  },
  {
    semester: 'Spring 2026',
    title: 'Earthquake Prediction & Analysis',
    description: 'Seismic analysis platform studying P-wave and S-wave characteristics.',
    year: '2026',
  },
  {
    semester: 'Summer 2026',
    title: 'Java Chat Application',
    description: 'Real-time desktop chat with authentication and database integration.',
    year: '2026',
  },
  {
    semester: 'Summer 2026',
    title: 'AI Telescope',
    description: 'AI-assisted astronomy project for celestial object identification.',
    year: '2026',
  },
  {
    semester: 'Summer 2026',
    title: 'BloodLink',
    description: 'Smart blood-donor matching platform with AI-powered matching.',
    year: '2026',
  },
  {
    semester: 'Fall 2025',
    title: 'FSM Cache Controller',
    description: 'Hardware-level cache controller using Finite State Machine principles.',
    year: '2025',
  },
  {
    semester: 'Fall 2025',
    title: 'Proteus Elevator Simulator',
    description: 'Multi-floor elevator control system simulated in Proteus.',
    year: '2025',
  },
  {
    semester: 'Fall 2025',
    title: 'Coffee Shop Inventory',
    description: 'Database-driven inventory management solution for local coffee shops.',
    year: '2025',
  },
  {
    semester: 'Spring 2025',
    title: 'Netflix Clone',
    description: 'Modern streaming-platform interface inspired by Netflix.',
    year: '2025',
  },
  {
    semester: 'Spring 2025',
    title: 'OMR Evaluation Machine',
    description: 'Automated Optical Mark Recognition system for answer sheet evaluation.',
    year: '2025',
  },
  {
    semester: 'Fall 2024',
    title: 'Snake & Ladder',
    description: 'Digital implementation of the classic Snake & Ladder board game.',
    year: '2024',
  },
  {
    semester: 'Future',
    title: 'Next Big Project',
    description: 'AI-driven healthcare platform combining ML with systems engineering.',
    year: '2027',
    isFuture: true,
  },
];