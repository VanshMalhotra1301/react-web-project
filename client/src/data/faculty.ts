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
    slug: 'dr-rajesh-malhotra',
    name: 'Dr. Rajesh Malhotra',
    designation: 'Founder & Director',
    subject: 'Mathematics',
    experience: '25+ Years',
    qualifications: ['Ph.D. in Mathematics', 'M.Sc. Mathematics (Gold Medalist)'],
    bio: 'With over two decades of teaching experience, Dr. Rajesh Malhotra is a pioneer in the field of competitive coaching in Rohtak. His unique problem-solving techniques and ability to simplify complex mathematical concepts have helped thousands of students crack JEE Advanced and secure top board ranks.',
    image: '/images/faculty/director.jpg',
    expertise: ['Calculus', 'Algebra', 'JEE Advanced Mathematics'],
    achievements: [
      'Mentored 500+ IITians',
      'Author of 5 Mathematics reference books',
      'Best Teacher Award (State Level) - 2018'
    ]
  },
  {
    id: 'f2',
    slug: 'sunita-sharma',
    name: 'Mrs. Sunita Sharma',
    designation: 'Senior Faculty',
    subject: 'Physics',
    experience: '18+ Years',
    qualifications: ['M.Sc. Physics (Delhi University)', 'B.Ed.'],
    bio: 'Mrs. Sunita Sharma brings physics to life through real-world applications. Her conceptual approach to teaching physics eliminates the need for rote memorisation, making her one of the most loved educators among NEET and JEE aspirants.',
    image: '/images/faculty/physics.jpg',
    expertise: ['Mechanics', 'Electromagnetism', 'Modern Physics'],
    achievements: [
      'Guided 50+ students to full marks in Physics Boards',
      'Specialist in NEET Physics problem-solving strategies'
    ]
  },
  {
    id: 'f3',
    slug: 'vikram-singh',
    name: 'Mr. Vikram Singh',
    designation: 'Senior Faculty',
    subject: 'Chemistry',
    experience: '15+ Years',
    qualifications: ['M.Sc. Chemistry', 'CSIR NET Qualified'],
    bio: 'Known for his engaging teaching style, Mr. Vikram makes Chemistry an intuitive subject. He specialises in Organic and Physical Chemistry, ensuring students build strong fundamentals required for competitive exams.',
    image: '/images/faculty/chemistry.jpg',
    expertise: ['Organic Chemistry', 'Physical Chemistry', 'JEE Main & Advanced'],
    achievements: [
      'Consistent track record of top scorers in Chemistry',
      'Developer of rapid revision techniques for JEE'
    ]
  },
  {
    id: 'f4',
    slug: 'priya-gupta',
    name: 'Dr. Priya Gupta',
    designation: 'Senior Faculty',
    subject: 'Biology',
    experience: '12+ Years',
    qualifications: ['Ph.D. in Molecular Biology', 'M.Sc. Zoology'],
    bio: 'Dr. Priya is exceptionally dedicated to her NEET aspirants. Her line-by-line NCERT mastery approach combined with visual learning techniques has resulted in outstanding success rates in medical entrance exams.',
    image: '/images/faculty/biology.jpg',
    expertise: ['Human Physiology', 'Genetics', 'Botany'],
    achievements: [
      'Mentored AIR 189 in NEET 2023',
      'Expert in NCERT diagram-based questions'
    ]
  },
  {
    id: 'f5',
    slug: 'amit-desai',
    name: 'Mr. Amit Desai',
    designation: 'Faculty',
    subject: 'Mathematics',
    experience: '8+ Years',
    qualifications: ['B.Tech (NIT Kurukshetra)'],
    bio: 'An NIT alumnus, Mr. Amit understands exactly what it takes to crack competitive exams. He brings fresh energy and modern problem-solving methodologies to the classroom, connecting extremely well with young aspirants.',
    image: '/images/faculty/math2.jpg',
    expertise: ['Trigonometry', 'Coordinate Geometry', 'NTSE Mathematics'],
    achievements: [
      'Mentored multiple NTSE Scholars',
      'Expert in shortcut techniques for objective exams'
    ]
  },
  {
    id: 'f6',
    slug: 'neha-verma',
    name: 'Ms. Neha Verma',
    designation: 'Faculty',
    subject: 'Science (Foundation)',
    experience: '10+ Years',
    qualifications: ['M.Sc. General Science', 'B.Ed.'],
    bio: 'Ms. Neha specialises in building strong foundations for Class 9 and 10 students. Her interactive teaching style and practical demonstrations ensure students develop a genuine interest in science from an early age.',
    image: '/images/faculty/science.jpg',
    expertise: ['Class 10 Boards', 'Science Olympiads', 'Foundation Builder'],
    achievements: [
      '100% pass rate in CBSE Class 10 Science for 5 consecutive years',
      'Guided multiple students to National Science Olympiad finals'
    ]
  }
];

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  return FACULTY_MEMBERS.find(member => member.slug === slug);
}
