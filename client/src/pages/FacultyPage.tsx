import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FACULTY_MEMBERS } from '@/data/faculty';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export default function FacultyPage() {
  return (
    <>
      <SEOHead
        title="Our Expert Faculty — Malhotra Classes Rohtak"
        description="Meet our team of highly experienced and dedicated educators. Our faculty includes PhDs and NIT/DU alumni with decades of teaching experience."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Faculty' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Learn From the <span className="text-brand-gold">Best</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              The strength of Malhotra Classes lies in its exceptional faculty. Our educators are not just subject matter experts; they are mentors dedicated to your success.
            </p>
          </div>
        </Container>
      </div>

      <div className="section-padding bg-surface-secondary">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {FACULTY_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border-default bg-white shadow-card transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Photo Section */}
                  <div className="relative w-full shrink-0 bg-gradient-to-br from-brand-navy/10 to-brand-gold/10 p-6 sm:w-48 sm:border-r sm:border-border-default">
                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
                      {/* Using initials as placeholder since we don't have images yet */}
                      <div className="flex h-full w-full items-center justify-center bg-brand-navy text-4xl font-bold text-brand-gold font-heading">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-semibold text-brand-navy font-heading">{member.experience}</p>
                      <p className="text-xs text-text-tertiary">Experience</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-text-primary font-heading">
                        {member.name}
                      </h2>
                      <p className="text-sm font-medium text-brand-gold-dark">
                        {member.designation} • {member.subject}
                      </p>
                    </div>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                      {member.bio}
                    </p>

                    <div className="space-y-4 border-t border-border-default pt-4">
                      {/* Qualifications */}
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                          <GraduationCap className="h-4 w-4" />
                          Qualifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.qualifications.map(q => (
                            <span key={q} className="rounded-md bg-surface-tertiary px-2 py-1 text-xs text-text-secondary">
                              {q}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                          <BookOpen className="h-4 w-4" />
                          Core Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map(exp => (
                            <span key={exp} className="rounded-md bg-brand-navy/5 px-2 py-1 text-xs text-brand-navy">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
                          <Award className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        <ul className="list-inside list-disc space-y-1 text-xs text-text-secondary">
                          {member.achievements.map(ach => (
                            <li key={ach}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
