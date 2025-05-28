
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
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
      screenshots: ["placeholder1.jpg", "placeholder2.jpg"],
      github: "#",
      demo: "#"
    },
    {
      title: "One Time File sharing System",
      objective: "Develop machine learning dashboard with real-time data visualization",
      tools: ["Python", "Streamlit", "MariaDB"],
      outcome: "Produces a secure one time access links",
      status: "completed",
      difficulty: "A-Rank",
      rewards: "+350 XP, +15 Frontend Mastery ",
      screenshots: ["placeholder3.jpg"],
      github: "#",
      demo: "#"
    },
    {
      title: "Deepfake Detection App",
      objective: "Build a deepfake detection system with autoencoder reconstruction",
      tools: ["Python", "Tensorflow","CNN"],
      outcome: "To predict deepfake images to avoid identity frauds",
      status: "completed",
      difficulty: "S-Rank",
      rewards: "+600 XP, +20 ML Skills",
      screenshots: [],
      github: "#",
      demo: "#"
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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          QUEST BOARD
        </h1>
        <p className="text-muted-foreground text-lg">Mission Archive & Active Assignments</p>
      </div>

      <div className="grid gap-6">
        {quests.map((quest, index) => (
          <Card 
            key={index}
            className={`glass-effect border-primary/30 transition-all duration-300 slide-in ${
              expandedQuest === index ? 'border-primary/60' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="font-orbitron text-xl text-primary">
                    {quest.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(quest.difficulty)}>
                      {quest.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(quest.status)}>
                      {quest.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setExpandedQuest(expandedQuest === index ? null : index)}
                  className="text-primary hover:bg-primary/10"
                >
                  {expandedQuest === index ? 'Collapse' : 'Expand'}
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{quest.objective}</p>
                
                <div className="flex flex-wrap gap-2">
                  {quest.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="border-primary/30 text-primary">
                      #{tool}
                    </Badge>
                  ))}
                </div>

                {expandedQuest === index && (
                  <div className="space-y-4 border-t border-primary/20 pt-4">
                    <div>
                      <h4 className="font-rajdhani font-bold text-secondary mb-2">Outcome:</h4>
                      <p className="text-muted-foreground">{quest.outcome}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-rajdhani font-bold text-secondary mb-2">Rewards:</h4>
                      <p className="text-primary">{quest.rewards}</p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={quest.github}>
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-primary to-secondary text-background"
                        asChild
                      >
                        <a href={quest.demo}>
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
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
