export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'board' | 'competitive' | 'foundation';
  board?: 'CBSE' | 'HBSE' | 'ICSE';
  description: string;
  longDescription: string;
  duration: string;
  batchSize: string;
  subjects: string[];
  features: string[];
  eligibility: string;
  image: string;
  popular?: boolean;
}

export const COURSES: Course[] = [
  {
    id: 'c1',
    slug: 'class-9-10',
    title: 'Class 9–10 Board Preparation',
    category: 'board',
    board: 'CBSE',
    description: 'Comprehensive preparation for Class 9 and 10 board exams with focus on conceptual clarity.',
    longDescription: 'Our Class 9–10 foundation programme is meticulously designed to build a strong academic base for students. We cover the entire NCERT syllabus while introducing advanced concepts to prepare students for future competitive exams. Regular assessments and personalized attention ensure every student achieves their maximum potential.',
    duration: '1 Year',
    batchSize: '25 Students max',
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    features: [
      'Complete NCERT Coverage',
      'Weekly Topic Tests',
      'Printed Study Material',
      'Doubt Clearing Sessions',
      'Parent-Teacher Meetings'
    ],
    eligibility: 'Students moving to Class 9 or 10',
    image: '/images/courses/class-9-10.jpg',
    popular: true,
  },
  {
    id: 'c2',
    slug: 'class-11-12',
    title: 'Class 11–12 Board Preparation',
    category: 'board',
    board: 'CBSE',
    description: 'Expert coaching for Class 11–12 board exams in Science and Commerce streams.',
    longDescription: 'The critical years of Class 11 and 12 require expert guidance. Our senior secondary programme focuses on deep conceptual understanding necessary for board exam excellence. Our experienced faculty ensures that students are well-prepared for both subjective and objective patterns.',
    duration: '1 Year / 2 Year integrated',
    batchSize: '25 Students max',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Accountancy', 'Economics'],
    features: [
      'Board Exam Oriented Teaching',
      'Previous Year Question Analysis',
      'Mock Board Exams',
      'Career Counseling',
      'Practical Exam Guidance'
    ],
    eligibility: 'Students moving to Class 11 or 12',
    image: '/images/courses/class-11-12.jpg',
  },
  {
    id: 'c3',
    slug: 'jee-foundation',
    title: 'JEE Main & Advanced Foundation',
    category: 'competitive',
    description: 'Build a strong foundation for engineering entrance exams starting early.',
    longDescription: 'Our JEE Foundation programme is the flagship offering for engineering aspirants. We blend board preparation with rigorous competitive exam training. Students are exposed to advanced problem-solving techniques and higher-order thinking skills required to crack IIT-JEE.',
    duration: '2 Years',
    batchSize: '20 Students max',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    features: [
      'Advanced Study Material',
      'All India Test Series',
      'Regular Mentorship',
      'Performance Analytics',
      'Digital Library Access'
    ],
    eligibility: 'Students moving to Class 11 (Science Math)',
    image: '/images/courses/jee.jpg',
    popular: true,
  },
  {
    id: 'c4',
    slug: 'neet-foundation',
    title: 'NEET UG Medical Foundation',
    category: 'competitive',
    description: 'Comprehensive NEET preparation with expert Biology, Chemistry, and Physics coaching.',
    longDescription: 'Designed specifically for medical aspirants, our NEET programme focuses heavily on NCERT mastery along with advanced application. With regular mock tests simulating the actual exam environment, students develop the speed and accuracy needed to secure top medical ranks.',
    duration: '2 Years',
    batchSize: '20 Students max',
    subjects: ['Physics', 'Chemistry', 'Biology (Botany & Zoology)'],
    features: [
      'NCERT Line-by-Line Teaching',
      'Daily Practice Papers (DPP)',
      'NEET Pattern Mock Tests',
      'Doubt Resolution Portal',
      'Stress Management Workshops'
    ],
    eligibility: 'Students moving to Class 11 (Science Biology)',
    image: '/images/courses/neet.jpg',
    popular: true,
  },
  {
    id: 'c5',
    slug: 'class-6-8',
    title: 'Middle School Foundation (Class 6-8)',
    category: 'foundation',
    board: 'CBSE',
    description: 'Strong academic foundation for middle-school students focusing on analytical skills.',
    longDescription: 'The middle school years are crucial for developing study habits and analytical thinking. Our foundation programme makes learning enjoyable while preparing students for the academic rigor of high school. We focus on conceptual clarity in Math and Science.',
    duration: '1 Year',
    batchSize: '30 Students max',
    subjects: ['Mathematics', 'Science', 'English'],
    features: [
      'Interactive Learning',
      'Concept Building',
      'Mental Math Focus',
      'Regular Quizzes',
      'Holistic Development'
    ],
    eligibility: 'Students moving to Class 6, 7, or 8',
    image: '/images/courses/class-6-8.jpg',
  },
  {
    id: 'c6',
    slug: 'olympiad-ntse',
    title: 'Olympiad & NTSE Preparation',
    category: 'competitive',
    description: 'Specialised coaching for Science/Maths Olympiads and NTSE.',
    longDescription: 'This specialised programme is for gifted students aiming for national and international recognition. We train students for various Olympiads (NSO, IMO, IEO) and the National Talent Search Examination (NTSE) through rigorous analytical problem-solving sessions.',
    duration: '6 Months',
    batchSize: '15 Students max',
    subjects: ['Mental Ability', 'Advanced Mathematics', 'Advanced Science'],
    features: [
      'Specialised Faculty',
      'Higher-Order Thinking Skills',
      'Olympiad Mock Tests',
      'National Level Benchmarking',
      'Personalised Mentoring'
    ],
    eligibility: 'Meritorious students of Class 8, 9, or 10',
    image: '/images/courses/olympiad.jpg',
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find(course => course.slug === slug);
}
