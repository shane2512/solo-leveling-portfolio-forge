import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const QuestBoard = () => {
  const [expandedQuest, setExpandedQuest] = useState<number | null>(null);

  const quests = [
    {
      title: "Solo Leveling System Interface",
      objective: "Create an immersive web interface inspired by the Solo Leveling manhwa",
      tools: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
      outcome: "Interactive 3D hologram system with responsive design",
      status: "in-progress",
      difficulty: "S-Rank",
      rewards: "+500 XP, +10 Frontend Mastery",
      completion: 85,
      screenshots: ["placeholder1.jpg", "placeholder2.jpg"],
      github: "https://github.com/username/solo-leveling-interface",
      demo: "https://solo-leveling-demo.netlify.app",
      priority: "high"
    },
    {
      title: "One Time File Sharing System",
      objective: "Develop secure file sharing system with one-time access links",
      tools: ["Python", "Streamlit", "MariaDB"],
      outcome: "Produces secure one-time access links with encryption",
      status: "completed",
      difficulty: "A-Rank",
      rewards: "+350 XP, +15 Backend Development",
      completion: 100,
      screenshots: ["placeholder3.jpg"],
      github: "https://github.com/username/file-sharing-system",
      demo: "https://file-sharing-demo.herokuapp.com",
      priority: "medium"
    },
    {
      title: "Deepfake Detection App",
      objective: "Build a deepfake detection system with autoencoder reconstruction",
      tools: ["Python", "TensorFlow", "CNN"],
      outcome: "AI model to predict deepfake images and prevent identity fraud",
      status: "completed",
      difficulty: "S-Rank",
      rewards: "+600 XP, +20 ML Skills",
      completion: 100,
      screenshots: [],
      github: "https://github.com/username/deepfake-detection",
      demo: "https://deepfake-detector-demo.streamlit.app",
      priority: "high"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'planning': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'S-Rank': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'A-Rank': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'B-Rank': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Star className="w-4 h-4 text-red-400" />;
      case 'medium': return <Clock className="w-4 h-4 text-yellow-400" />;
      default: return <CheckCircle className="w-4 h-4 text-green-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="energy-orb w-12 h-12"></div>
          <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
            QUEST BOARD
          </h1>
          <div className="energy-orb w-12 h-12"></div>
        </div>
        <p className="text-muted-foreground text-lg">Mission Archive & Active Assignments</p>
        
        <div className="flex justify-center gap-4 mt-6">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
            {quests.filter(q => q.status === 'completed').length} Completed
          </Badge>
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
            {quests.filter(q => q.status === 'in-progress').length} In Progress
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
            {quests.filter(q => q.status === 'planning').length} Planning
          </Badge>
        </div>
      </div>

      <div className="grid gap-6">
        {quests.map((quest, index) => (
          <Card 
            key={index}
            className={`glass-effect border-primary/30 transition-all duration-300 slide-in quest-card ${
              expandedQuest === index ? 'border-primary/60 scale-[1.02]' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    {getPriorityIcon(quest.priority)}
                    <CardTitle className="font-orbitron text-xl text-primary">
                      {quest.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className={getDifficultyColor(quest.difficulty)}>
                      {quest.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(quest.status)}>
                      {quest.status.toUpperCase()}
                    </Badge>
                    {quest.status === 'in-progress' && (
                      <Badge className="bg-primary/20 text-primary border-primary/50">
                        {quest.completion}% Complete
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setExpandedQuest(expandedQuest === index ? null : index)}
                  className="text-primary hover:bg-primary/10 cyber-button"
                >
                  {expandedQuest === index ? 'Collapse' : 'Expand'}
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">{quest.objective}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {quest.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="border-primary/30 text-primary cyber-button">
                      #{tool}
                    </Badge>
                  ))}
                </div>

                {quest.status === 'in-progress' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{quest.completion}%</span>
                    </div>
                    <div className="progress-enhanced">
                      <Progress value={quest.completion} className="h-3" />
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-2">
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 cyber-button"
                    asChild
                  >
                    <a href={quest.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Repository
                    </a>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-primary to-secondary text-background cyber-button"
                    asChild
                  >
                    <a href={quest.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>

                {expandedQuest === index && (
                  <div className="space-y-4 border-t border-primary/20 pt-4 data-stream">
                    <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <h4 className="font-rajdhani font-bold text-secondary mb-2 flex items-center gap-2">
                        <CheckCircle size={16} />
                        Mission Outcome:
                      </h4>
                      <p className="text-muted-foreground">{quest.outcome}</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg border border-secondary/20">
                      <h4 className="font-rajdhani font-bold text-secondary mb-2 flex items-center gap-2">
                        <Star size={16} />
                        Rewards Earned:
                      </h4>
                      <p className="text-primary font-orbitron">{quest.rewards}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestBoard;