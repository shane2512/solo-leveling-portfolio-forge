
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const SystemLogs = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const logs = [
    {
      date: '2024-10-17',
      title: 'Completed ML Capstone Project',
      description: 'Successfully defended machine learning capstone with 93% accuracy on injury analysis model.',
      category: 'AI/ML',
      type: 'achievement',
      xp: '+300 XP'
    },
    {
      date: '2025-05-17',
      title: 'Published Article on Medium',
      description: 'Article "Building Scalable Gen AI Applications".',
      category: 'GenAI',
      type: 'publication',
      xp: '+150 XP'
    },
    {
      date: '2025-02-23',
      title: 'Won First Place at CTRL+ALT+HACK',
      description: 'Led team of 4 developers to create innovative fintech solution in 48 hours.',
      category: 'Hackathons',
      type: 'competition',
      xp: '+500 XP'
    },
    {
      date: '2025-05-28',
      title: 'Completed Gen AI Academy Certification',
      description: 'Achieved GenAI Certified Developer - certification.',
      category: 'Certifications',
      type: 'certification',
      xp: '+400 XP'
    },
    {
      date: '2025-05-29',
      title: 'Launched Personal Portfolio',
      description: 'Deployed Solo Leveling-inspired portfolio with 3D animations and system interface.',
      category: 'WebDev',
      type: 'project',
      xp: '+200 XP'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Logs', count: logs.length },
    { id: 'AI/ML', label: 'AI/ML', count: logs.filter(log => log.category === 'AI/ML').length },
    { id: 'WebDev', label: 'Web Dev', count: logs.filter(log => log.category === 'WebDev').length },
    { id: 'Hackathons', label: 'Hackathons', count: logs.filter(log => log.category === 'Hackathons').length },
    { id: 'OpenSource', label: 'Open Source', count: logs.filter(log => log.category === 'OpenSource').length }
  ];

  const filteredLogs = activeFilter === 'all' 
    ? logs 
    : logs.filter(log => log.category === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'achievement': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'publication': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'competition': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'certification': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'contribution': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'project': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'presentation': return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
      case 'teaching': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          SYSTEM LOGS
        </h1>
        <p className="text-muted-foreground text-lg">Mission History & Achievement Timeline</p>
      </div>

      {/* Filters */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary flex items-center gap-2">
            <Filter size={20} />
            Quest Log Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`${
                  activeFilter === filter.id 
                    ? 'bg-primary text-background' 
                    : 'border-primary/30 text-primary hover:bg-primary/10'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-6">
        {filteredLogs.map((log, index) => (
          <Card 
            key={index}
            className="glass-effect border-primary/30 slide-in hover:border-primary/60 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="font-orbitron text-xl text-primary">
                    {log.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {new Date(log.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getTypeColor(log.type)}>
                    {log.type.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {log.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {log.description}
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-primary/20">
                  <span className="text-sm text-muted-foreground">Experience Gained:</span>
                  <span className="font-orbitron font-bold text-primary">{log.xp}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SystemLogs;
