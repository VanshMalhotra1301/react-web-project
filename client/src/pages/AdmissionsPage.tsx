import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '', phone: '', email: '', class: '', course: '', message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const classOptions = [
    { value: '6', label: 'Class 6' },
    { value: '7', label: 'Class 7' },
    { value: '8', label: 'Class 8' },
    { value: '9', label: 'Class 9' },
    { value: '10', label: 'Class 10' },
    { value: '11', label: 'Class 11' },
    { value: '12', label: 'Class 12' },
  ];

  const courseOptions = [
    { value: 'board', label: 'Board Preparation (CBSE/HBSE)' },
    { value: 'jee', label: 'JEE Foundation' },
    { value: 'neet', label: 'NEET Foundation' },
    { value: 'olympiad', label: 'Olympiad & NTSE' },
    { value: 'foundation', label: 'Middle School Foundation' },
  ];

  return (
    <>
      <SEOHead
        title="Admissions 2026-27 — Apply Now at Malhotra Classes"
        description="Admissions are open for the 2026-27 academic session at Malhotra Classes. Book a free demo class or apply online for CBSE, JEE, and NEET coaching."
      />

      {/* Header Banner */}
      <div className="bg-brand-navy pt-8 pb-16 lg:pt-12 lg:pb-24">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Admissions' }]}
            className="mb-8 text-white/70"
          />
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold text-white font-heading sm:text-5xl lg:text-6xl">
              Start Your Journey to <span className="text-brand-gold">Success</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Admissions for the 2026–27 academic session are now open. Seats are limited to ensure personalised attention for every student.
            </p>
          </div>
        </Container>
      </div>

      <div className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Form Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-primary font-heading">
                  Apply Online / Book a Demo
                </h2>
                <p className="mt-2 text-text-secondary">
                  Fill out the form below and our admission counsellor will get in touch with you shortly.
                </p>
              </div>

              <div className="rounded-2xl border border-border-default bg-white p-6 shadow-sm sm:p-8">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/20 text-brand-emerald">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-text-primary font-heading">Application Submitted!</h3>
                    <p className="text-text-secondary">
                      Thank you for choosing Malhotra Classes. Our counsellor will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                      label="Student Name"
                      placeholder="Enter full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="10-digit mobile number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <Input
                        label="Email Address (Optional)"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Select
                        label="Current Class"
                        options={classOptions}
                        placeholder="Select Class"
                        required
                        value={formData.class}
                        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      />
                      <Select
                        label="Interested Course"
                        options={courseOptions}
                        placeholder="Select Course"
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      />
                    </div>

                    <Textarea
                      label="Message / Query (Optional)"
                      placeholder="Any specific requirements or questions?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting}>
                      Submit Application
                    </Button>
                    <p className="text-center text-xs text-text-tertiary">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Information Section */}
            <div className="lg:pl-8">
              <h2 className="mb-6 text-3xl font-bold text-text-primary font-heading">
                Admission Process
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-navy font-heading">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-text-primary font-heading">Submit Inquiry</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Fill the online application form or visit our centre to submit an inquiry regarding the course you are interested in.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-navy font-heading">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-text-primary font-heading">Counselling Session</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Our expert counsellors will guide the student and parents about the course structure, batch timings, and methodology.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-navy font-heading">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-text-primary font-heading">Demo Class & Assessment</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Attend a free demo class. For foundation and competitive batches, a basic assessment test may be conducted.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold font-bold text-brand-navy font-heading">
                    4
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-text-primary font-heading">Fee Payment & Enrolment</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Complete the registration by submitting the required documents and paying the initial fee.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-surface-secondary p-6">
                <h3 className="mb-4 text-lg font-bold text-text-primary font-heading">Need Assistance?</h3>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-sm font-medium text-text-primary transition-colors hover:text-brand-gold">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-gold shadow-sm">
                      <Phone className="h-4 w-4" />
                    </div>
                    +91 98765 43210
                  </a>
                  <a href="mailto:admissions@malhotraclasses.com" className="flex items-center gap-3 text-sm font-medium text-text-primary transition-colors hover:text-brand-gold">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-gold shadow-sm">
                      <Mail className="h-4 w-4" />
                    </div>
                    admissions@malhotraclasses.com
                  </a>
                  <div className="flex items-center gap-3 text-sm font-medium text-text-primary">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-gold shadow-sm">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Near Model Town, Rohtak, Haryana 124001</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
