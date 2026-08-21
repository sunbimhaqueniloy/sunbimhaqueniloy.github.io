export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description: string;
  icon?: string;
}

export const education: Education[] = [
  {
    id: 'IUT',
    institution: 'Islamic University of Technology — IUT, OIC',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    period: 'Current',
    description: 'Pursuing undergraduate studies in Computer Science with interests spanning AI, ML, Software Engineering, Web Development, Computer Vision, and Astronomy.',
    icon: '🎓',
  },
  {
    id: 'DC',
    institution: 'Dhaka College',
    degree: 'Higher Secondary Certificate — HSC',
    period: 'GPA 5.00',
    description: 'Completed higher secondary education with a perfect GPA, building a strong foundation in science and analytical disciplines.',
    icon: '📚',
  },
  {
    id: 'BNMPC',
    institution: 'Bir Shreshtha Noor Mohammad Public College',
    degree: 'Secondary School Certificate — SSC',
    period: 'GPA 5.00',
    description: 'Completed secondary education with a perfect GPA alongside active participation in mathematics, physics, and science competitions.',
    icon: '🏫',
  },
];