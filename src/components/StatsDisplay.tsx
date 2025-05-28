
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatsDisplay = () => {
  const stats = [
    { name: 'Frontend Mastery', value: 70, color: 'from-blue-500 to-cyan-500' },
    { name: 'ML Skills', value: 70, color: 'from-purple-500 to-pink-500' },
    { name: 'Generative AI', value: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Problem Solving', value: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Cloud Engineer', value: 50, color: 'from-indigo-500 to-purple-500' },
    { name: 'Leadership', value: 60, color: 'from-yellow-500 to-orange-500' },
  ];

  const totalXP = 15420;
  const nextLevelXP = 20000;
  const xpProgress = (totalXP / nextLevelXP) * 100;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          HUNTER PROFILE
        </h1>
        <p className="text-muted-foreground text-lg">Shane Joans - Rank: S-Class Developer</p>
      </div>

      {/* XP Bar */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Experience Points</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Level 15</span>
              <span>{totalXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
            </div>
            <Progress value={xpProgress} className="h-4">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 skill-bar"
                style={{ width: `${xpProgress}%` }}
              />
            </Progress>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.name} 
            className="glass-effect border-primary/30 slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle className="font-rajdhani text-lg">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-orbitron font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">/100</span>
                </div>
                <Progress value={stat.value} className="h-3">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${stat.value}%` }}
                  />
                </Progress>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bio Section */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="font-orbitron text-primary">Hunter Codex</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              An elite developer who emerged from the depths of countless debugging sessions and 
              algorithm battles. Specializes in crafting elegant user interfaces and wielding 
              the power of machine learning to solve complex problems. Known for exceptional 
              teamwork abilities and the rare skill of translating technical concepts into 
              human language.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Current mission: Building innovative web applications that push the boundaries 
              of what's possible in the digital realm. Seeks challenging quests that combine 
              creativity with cutting-edge technology.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsDisplay;
