import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Mail, Phone, Globe } from 'lucide-react';

const ResumeTab = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Loyola -ICAM College of Engineering and Technology',
      period: '2023 - 2027',
      gpa: '7.98/10.0'
    }
  ];

  const certifications = [
    'Google Certified GenAI Expert',
    'Mistral AI Certification',
    'AI Mastery Certification'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          RESUME DATABASE
        </h1>
        <p className="text-muted-foreground text-lg">
          Shane Joans - Full Stack Developer & ML Engineer
        </p>

        {/* Resume Download Button */}
        <a href="Shane Joans V.pdf" download>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Download className="mr-2" size={16} />
            Download PDF Resume
          </Button>
        </a>
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
              <span>shanejoans.27csb@licet.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+91 9600531264</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Chennai,India</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span>linkedin.com/in/shane1225</span>
            </div>
          </div>
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
