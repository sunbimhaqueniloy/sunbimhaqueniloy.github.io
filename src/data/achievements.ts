export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  span?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'bdmo',
    title: 'Bangladesh Mathematical Olympiad — BDMO',
    subtitle: 'Regional & National Champion',
    description: 'Earned championship-level recognition through multiple years of participation in mathematics olympiad.',
    icon: '',
    span: '2017–2020',
  },
  {
    id: 'bdpho',
    title: 'Bangladesh Physics Olympiad — BdPhO',
    subtitle: 'Regional & National Champion',
    description: 'Achieved regional and national championship recognition in physics olympiad.',
    icon: '',
    span: '2018–2020',
  },
  {
    id: 'bdjso',
    title: 'Bangladesh Junior Science Olympiad — BdJSO',
    subtitle: 'Regional & National Champion',
    description: 'Demonstrated interdisciplinary strength across mathematics, physics, and science.',
    icon: '',
    span: '2016–2018',
  },
  {
    id: 'srijonshil',
    title: 'Srijonshil Medha Onneshon Protijogita',
    subtitle: 'Mathematics & Computer Category',
    description: 'Recognized for performance in Mathematics and Computer categories at the national level.',
    icon: '',
    span: '2017–2018',
  },
  {
    id: 'talentpool',
    title: 'Academic Excellence — Talentpool Scholarship',
    subtitle: 'PSC, JSC, SSC & HSC | GPA 5.00',
    description: 'Awarded Talentpool Scholarships at all major academic milestones with a perfect GPA throughout.',
    icon: '',
  },
];