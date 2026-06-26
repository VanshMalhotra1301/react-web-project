export interface FacultyMember {
  id: string;
  slug: string;
  name: string;
  designation: string;
  subject: string;
  experience: string;
  qualifications: string[];
  bio: string;
  image: string;
  expertise: string[];
  achievements: string[];
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'f1',
    slug: 'vansh-malhotra',
    name: 'Vansh Malhotra',
    designation: 'Founder & Director',
    subject: 'Mathematics & Physics',
    experience: 'Expert Mentor',
    qualifications: ['Founder, Malhotra Classes'],
    bio: 'Vansh Malhotra is the driving force behind Malhotra Classes. With a deep passion for education and an innovative approach to learning, he ensures every student receives personalized attention and the best possible foundation for competitive and board exams.',
    image: '/images/faculty/director.jpg',
    expertise: ['Competitive Mathematics', 'Physics Foundation', 'Strategic Exam Prep'],
    achievements: [
      'Founded Malhotra Classes to revolutionize education in Rohtak',
      'Committed to modern, highly-personalized teaching methodologies'
    ]
  },
  {
    id: 'f2',
    slug: 'physics-expert',
    name: 'Physics Expert',
    designation: 'Senior Faculty',
    subject: 'Physics',
    experience: 'Subject Expert',
    qualifications: ['M.Sc. Physics'],
    bio: 'Our Physics lead brings the subject to life through real-world applications. The conceptual approach to teaching eliminates the need for rote memorisation, making it perfect for NEET and JEE aspirants.',
    image: '/images/faculty/physics.jpg',
    expertise: ['Mechanics', 'Electromagnetism', 'Modern Physics'],
    achievements: [
      'Focus on conceptual clarity',
      'Expert in problem-solving strategies'
    ]
  },
  {
    id: 'f3',
    slug: 'chemistry-expert',
    name: 'Chemistry Expert',
    designation: 'Senior Faculty',
    subject: 'Chemistry',
    experience: 'Subject Expert',
    qualifications: ['M.Sc. Chemistry'],
    bio: 'Known for an engaging teaching style, our Chemistry expert specialises in Organic and Physical Chemistry, ensuring students build the strong fundamentals required for competitive exams.',
    image: '/images/faculty/chemistry.jpg',
    expertise: ['Organic Chemistry', 'Physical Chemistry', 'JEE & NEET Prep'],
    achievements: [
      'Dedicated to student success',
      'Developer of rapid revision techniques'
    ]
  },
  {
    id: 'f4',
    slug: 'biology-expert',
    name: 'Biology Expert',
    designation: 'Senior Faculty',
    subject: 'Biology',
    experience: 'Subject Expert',
    qualifications: ['M.Sc. Zoology / Botany'],
    bio: 'Our Biology expert is dedicated to NEET aspirants. The line-by-line NCERT mastery approach combined with visual learning techniques makes learning highly effective.',
    image: '/images/faculty/biology.jpg',
    expertise: ['Human Physiology', 'Genetics', 'Botany'],
    achievements: [
      'Expert in NCERT diagram-based questions',
      'Specialist in NEET preparation'
    ]
  }
];

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  return FACULTY_MEMBERS.find(member => member.slug === slug);
}
