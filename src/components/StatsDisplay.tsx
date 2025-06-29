import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Sword, Brain, Cloud, Users } from 'lucide-react';

const StatsDisplay = () => {
  const stats = [
    { 
      name: 'Frontend Mastery', 
      value: 70, 
      color: 'from-blue-500 to-cyan-500',
      icon: Sword,
      description: 'React, TypeScript, UI/UX'
    },
    { 
      name: 'ML Skills', 
      value: 70, 
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      description: 'TensorFlow, Neural Networks'
    },
    { 
      name: 'Generative AI', 
      value: 90, 
      color: 'from-green-500 to-emerald-500',
      icon: Zap,
      description: 'GPT, Gemini, Prompt Engineering'
    },
    { 
      name: 'Problem Solving', 
      value: 80, 
      color: 'from-orange-500 to-red-500',
      icon: Shield,
      description: 'Algorithm Design, Debugging'
    },
    { 
      name: 'Cloud Engineer', 
      value: 50, 
      color: 'from-indigo-500 to-purple-500',
      icon: Cloud,
      description: 'AWS, Docker, DevOps'
    },
    { 
      name: 'Leadership', 
      value: 60, 
      color: 'from-yellow-500 to-orange-500',
      icon: Users,
      description: 'Team Management, Mentoring'
    },
  ];

  const totalXP = 15420;
  const nextLevelXP = 20000;
  const xpProgress = (totalXP / nextLevelXP) * 100;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="energy-orb w-16 h-16"></div>
          <div>
            <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
              HUNTER PROFILE
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold">
                S-RANK
              </Badge>
              <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-primary">
                Level 15
              </Badge>
            </div>
          </div>
          <div className="energy-orb w-16 h-16"></div>
        </div>
        <p className="text-muted-foreground text-lg">Shane Joans - Elite Developer Classification</p>
      </div>

      {/* Enhanced XP Bar */}
      <Card className="glass-effect border-primary/30 stat-card">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary flex items-center gap-3">
            <Zap className="animate-pulse" size={24} />
            Experience Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Level 15
              </span>
              <span>{totalXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
            </div>
            <div className="progress-enhanced">
              <Progress value={xpProgress} className="h-6">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 skill-bar"
                  style={{ width: `${xpProgress}%` }}
                />
              </Progress>
            </div>
            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                {nextLevelXP - totalXP} XP to next level
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.name} 
              className="glass-effect border-primary/30 slide-in stat-card hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-rajdhani text-lg flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  {stat.name}
                </CardTitle>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-orbitron font-bold text-primary">
                      {stat.value}
                    </span>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">/100</span>
                      <div className="text-xs text-primary">
                        {stat.value >= 80 ? 'Master' : stat.value >= 60 ? 'Expert' : stat.value >= 40 ? 'Advanced' : 'Intermediate'}
                      </div>
                    </div>
                  </div>
                  <div className="progress-enhanced">
                    <Progress value={stat.value} className="h-4">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${stat.value}%` }}
                      />
                    </Progress>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Bio Section */}
      <Card className="glass-effect border-primary/30 stat-card">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary flex items-center gap-3">
            <Shield className="text-secondary" size={24} />
            Hunter Codex
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                An elite developer who emerged from the depths of countless debugging sessions and 
                algorithm battles. Specializes in crafting elegant user interfaces and wielding 
                the power of machine learning to solve complex problems. Known for exceptional 
                teamwork abilities and the rare skill of translating technical concepts into 
                human language.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg border border-secondary/20">
              <p className="text-muted-foreground leading-relaxed">
                Current mission: Building innovative web applications that push the boundaries 
                of what's possible in the digital realm. Seeks challenging quests that combine 
                creativity with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-black/30 rounded-lg border border-green-500/20">
                <div className="text-2xl font-orbitron font-bold text-green-400">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-lg border border-blue-500/20">
                <div className="text-2xl font-orbitron font-bold text-blue-400">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-lg border border-purple-500/20">
                <div className="text-2xl font-orbitron font-bold text-purple-400">15+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsDisplay;