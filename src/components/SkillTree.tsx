
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const SkillTree = () => {
  const [typedTexts, setTypedTexts] = useState<{[key: string]: string}>({});

  const skillCategories = [
    {
      title: "Active Skills",
      description: "Combat-ready abilities for immediate deployment",
      skills: [
        { 
          name: "React Mastery", 
          level: 85, 
          maxLevel: 100,
          description: "Gained through countless component battles and state management wars. Mastered hooks, context, and performance optimization.",
          experience: "2850/3000 XP"
        },
        { 
          name: "TypeScript Proficiency", 
          level: 90, 
          maxLevel: 100,
          description: "Forged in the fires of type safety. Can catch bugs before they manifest in the material plane.",
          experience: "2700/3000 XP"
        },
        { 
          name: "Three.js Manipulation", 
          level: 75, 
          maxLevel: 100,
          description: "Learned the ancient art of 3D web sorcery. Can bend reality to create immersive experiences.",
          experience: "2250/3000 XP"
        }
      ]
    },
    {
      title: "Passive Skills",
      description: "Continuously active abilities that enhance all operations",
      skills: [
        { 
          name: "Machine Learning Intuition", 
          level: 70, 
          maxLevel: 100,
          description: "Awakened the ability to see patterns in chaos. Neural networks bend to my will.",
          experience: "2100/3000 XP"
        },
        { 
          name: "Problem Solving", 
          level: 88, 
          maxLevel: 100,
          description: "Developed through facing countless debugging dungeons. No bug can hide for long.",
          experience: "2640/3000 XP"
        },
        { 
          name: "Code Architecture", 
          level: 82, 
          maxLevel: 100,
          description: "Mastered the art of building scalable digital fortresses. Structure emerges from chaos.",
          experience: "2460/3000 XP"
        }
      ]
    },
    {
      title: "Unlocked Achievements",
      description: "Rare certifications and legendary accomplishments",
      skills: [
        { 
          name: "AWS Certified", 
          level: 100, 
          maxLevel: 100,
          description: "Proven mastery over cloud kingdoms. Can summon infrastructure from the digital ether.",
          experience: "MAX LEVEL"
        },
        { 
          name: "GitHub Contributions", 
          level: 95, 
          maxLevel: 100,
          description: "Left marks across the open-source realm. 500+ contributions and counting.",
          experience: "2850/3000 XP"
        },
        { 
          name: "Team Leadership", 
          level: 78, 
          maxLevel: 100,
          description: "Earned through guiding fellow developers through treacherous project dungeons.",
          experience: "2340/3000 XP"
        }
      ]
    }
  ];

  useEffect(() => {
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        const key = `${category.title}-${skill.name}`;
        let charIndex = 0;
        const text = skill.description;
        
        const typeInterval = setInterval(() => {
          if (charIndex <= text.length) {
            setTypedTexts(prev => ({
              ...prev,
              [key]: text.slice(0, charIndex)
            }));
            charIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, 30);

        return () => clearInterval(typeInterval);
      });
    });
  }, []);

  const getCategoryColor = (title: string) => {
    switch (title) {
      case 'Active Skills': return 'from-red-500 to-orange-500';
      case 'Passive Skills': return 'from-blue-500 to-purple-500';
      case 'Unlocked Achievements': return 'from-yellow-500 to-green-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          SKILL TREE
        </h1>
        <p className="text-muted-foreground text-lg">Abilities & Mastery Progress</p>
      </div>

      {skillCategories.map((category, categoryIndex) => (
        <div 
          key={category.title}
          className="space-y-6 slide-in"
          style={{ animationDelay: `${categoryIndex * 0.2}s` }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-orbitron font-bold text-secondary mb-2">
              {category.title}
            </h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.skills.map((skill, skillIndex) => {
              const key = `${category.title}-${skill.name}`;
              const typedText = typedTexts[key] || '';
              
              return (
                <Card 
                  key={skill.name}
                  className="glass-effect border-primary/30 hover:border-primary/60 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-rajdhani text-lg">{skill.name}</CardTitle>
                      <Badge className={`bg-gradient-to-r ${getCategoryColor(category.title)} text-white`}>
                        Lv.{skill.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{skill.experience}</span>
                      </div>
                      <Progress value={skill.level} className="h-3">
                        <div 
                          className={`h-full bg-gradient-to-r ${getCategoryColor(category.title)} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </Progress>
                    </div>
                    
                    <div className="min-h-[100px]">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {typedText}
                        {typedText.length < skill.description.length && (
                          <span className="w-2 h-4 bg-primary animate-pulse ml-1 inline-block"></span>
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillTree;
