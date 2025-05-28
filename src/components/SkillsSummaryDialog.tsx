
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface SkillsSummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SkillsSummaryDialog = ({ open, onOpenChange }: SkillsSummaryDialogProps) => {
  const skills = [
    { name: 'Frontend Development', level: 85, category: 'Active' },
    { name: 'Machine Learning', level: 70, category: 'Active' },
    { name: 'React/Next.js', level: 90, category: 'Active' },
    { name: 'Python/Flask', level: 75, category: 'Active' },
    { name: 'Data Analysis', level: 80, category: 'Passive' },
    { name: 'Team Leadership', level: 85, category: 'Passive' },
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Analytics Certified',
    'React Developer Certification',
    'Machine Learning Specialization'
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl glass-effect border-primary/30">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-primary text-xl neon-glow">
            {'>> HUNTER PROFILE SUMMARY'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-lg text-secondary">Active Skills</h3>
            {skills.filter(skill => skill.category === 'Active').map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-rajdhani">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}/100</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-orbitron text-lg text-secondary">Passive Skills</h3>
            {skills.filter(skill => skill.category === 'Passive').map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-rajdhani">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}/100</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="font-orbitron text-lg text-secondary">Unlocked Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge 
                  key={cert}
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="font-orbitron text-lg text-secondary">Hunter Classification</h3>
            <p className="text-muted-foreground leading-relaxed">
              S-Class Developer specializing in Frontend Architecture and Machine Learning Integration. 
              Exceptional problem-solving abilities with proven track record in team leadership and 
              innovative solution development. Current XP: 15,420 | Next Level: 20,000
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsSummaryDialog;
