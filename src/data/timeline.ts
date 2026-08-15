export interface TimelineItem {
  semester: string;
  title: string;
  description: string;
  year: string;
  isFuture?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    semester: 'Spring 2025',
    title: 'ECG Arrhythmia Research',
    description: 'Built CNN classifier with 94% accuracy, presented at 3MT competition.',
    year: '2025',
  },
  {
    semester: 'Fall 2024',
    title: 'BloodLink Launch',
    description: 'Smart matching engine serving 100+ users for emergency blood donation.',
    year: '2024',
  },
  {
    semester: 'Spring 2024',
    title: 'Diceymio Systems Design',
    description: 'Distributed dice roll service with gRPC handling 10K+ concurrent requests.',
    year: '2024',
  },
  {
    semester: 'Fall 2023',
    title: 'JavaFX Calculator',
    description: 'Desktop application with scientific and graphing capabilities.',
    year: '2023',
  },
  {
    semester: 'Fall 2025',
    title: 'ML + Systems Research',
    description: 'Combining machine learning with distributed systems for intelligent infrastructure.',
    year: '2025',
    isFuture: true,
  },
  {
    semester: 'Spring 2026',
    title: 'AI-driven Healthcare Platform',
    description: 'Building an end-to-end platform for AI-powered diagnostics.',
    year: '2026',
    isFuture: true,
  },
];