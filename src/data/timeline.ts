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
    description: 'Presented at 3MT competition; built CNN classifier with 94% accuracy',
    year: '2025',
  },
  {
    semester: 'Fall 2024',
    title: 'BloodLink Launch',
    description: 'Smart matching engine for emergency blood donation serving 100+ users',
    year: '2024',
  },
  {
    semester: 'Spring 2024',
    title: 'Diceymio Systems Design',
    description: 'Distributed dice roll service with gRPC handling 10K+ concurrent requests',
    year: '2024',
  },
  {
    semester: 'Fall 2023',
    title: 'JavaFX Calculator',
    description: 'Desktop application with scientific and graphing capabilities',
    year: '2023',
  },
  {
    semester: 'Future',
    title: 'Next Big Thing',
    description: 'Machine learning + systems engineering combined project',
    year: '2026',
    isFuture: true,
  },
];