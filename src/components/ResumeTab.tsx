
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Mail, Phone, Globe } from 'lucide-react';

const ResumeTab = () => {
  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Corp',
      period: '2022 - Present',
      description: 'Led development of scalable React applications with 99.9% uptime. Implemented ML-powered features resulting in 40% user engagement increase.',
      technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      period: '2020 - 2022',
      description: 'Built and maintained web applications serving 100k+ users. Optimized performance resulting in 60% faster load times.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Developed responsive web interfaces and collaborated in agile development environment.',
      technologies: ['JavaScript', 'React', 'CSS', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Google Analytics Certified',
    'React Developer Certification',
    'Machine Learning Specialization - Stanford'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          RESUME DATABASE
        </h1>
        <p className="text-muted-foreground text-lg">Shane Joans - Full Stack Developer & ML Engineer</p>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Download className="mr-2" size={16} />
          Download PDF Resume
        </Button>
      </div>

      {/* Contact Information */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>shane.joans@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span>linkedin.com/in/shanejoans</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-6 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="font-rajdhani font-bold text-lg">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-secondary font-medium">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="outline" 
                    className="border-primary/50 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Education</CardTitle>
        </CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="font-rajdhani font-bold text-lg">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-secondary font-medium">{edu.institution}</p>
              <p className="text-muted-foreground">GPA: {edu.gpa}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2 p-3 rounded border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-rajdhani">{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeTab;
