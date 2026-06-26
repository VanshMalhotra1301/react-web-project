import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useIntersection } from '@/hooks/useIntersection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const FACULTY = [
  {
    name: 'Vansh Malhotra',
    designation: 'Founder & Director',
    subject: 'Mathematics',
    experience: '25+ Years',
    photo: '/faculty/director.jpg',
    slug: 'dr-rajesh-malhotra',
    bio: 'Ph.D. in Mathematics with a passion for transforming students into confident problem solvers. Pioneer of Rohtak\'s premier coaching ecosystem.',
  },
  {
    name: 'Mrs. Sunita Sharma',
    designation: 'Senior Faculty',
    subject: 'Physics',
    experience: '18+ Years',
    photo: '/faculty/physics.jpg',
    slug: 'sunita-sharma',
    bio: 'M.Sc. Physics from Delhi University, known for making complex concepts accessible through real-world applications.',
  },
  {
    name: 'Mr. Vikram Singh',
    designation: 'Senior Faculty',
    subject: 'Chemistry',
    experience: '15+ Years',
    photo: '/faculty/chemistry.jpg',
    slug: 'vikram-singh',
    bio: 'M.Sc. Chemistry with JEE Advanced mentoring expertise. Has guided 100+ students to top engineering colleges.',
  },
  {
    name: 'Dr. Priya Gupta',
    designation: 'Senior Faculty',
    subject: 'Biology',
    experience: '12+ Years',
    photo: '/faculty/biology.jpg',
    slug: 'priya-gupta',
    bio: 'Ph.D. in Molecular Biology, specialising in NEET preparation with a track record of producing top medical college selections.',
  },
];

/**
 * Top Faculty spotlight with profile cards.
 */
export function TopFaculty() {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-brand-navy" aria-label="Our faculty">
      <Container>
        <SectionHeading
          subtitle="Meet Our Experts"
          title="Learn From the Best Faculty in Rohtak"
          description="Our handpicked team of educators brings decades of combined expertise to deliver exceptional academic guidance."
          theme="dark"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl glass p-6 text-center transition-all duration-300 hover:bg-white/10">
                {/* Photo placeholder */}
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-brand-gold/30 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5">
                  <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-brand-gold font-heading">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white font-heading">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-gold">{member.subject}</p>
                <p className="mt-0.5 text-xs text-white/50">{member.designation} • {member.experience}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/50 line-clamp-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link to="/faculty">
            <Button
              variant="ghost"
              size="lg"
              className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Meet All Faculty
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
