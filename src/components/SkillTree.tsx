
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
          name: "React & TypeScript", 
          level: 70,
          maxLevel: 100,
          description: "Proficient in building scalable frontends with strong typing and reusable components.",
          experience: "2500/3000 XP"
        },
        {
          name: "Streamlit + PyFlask",
          level: 85,
          maxLevel: 100,
          description: "Used for creating fast, interactive AI dashboards and data apps with Python backend.",
          experience: "2550/3000 XP"
        },
        {
          name: "Docker",
          level: 55,
          maxLevel: 100,
          description: "Containerized apps for streamlined development and deployment in GenAI projects.",
          experience: "2250/3000 XP"
        }
      ]
    },
    {
      title: "Passive Skills",
      description: "Continuously active abilities that enhance all operations",
      skills: [
        {
          name: "Prompt Engineering",
          level: 88,
          maxLevel: 100,
          description: "Skilled in crafting prompts for Vertex AI & Gemini with structured and creative outputs.",
          experience: "2640/3000 XP"
        },
        {
          name: "Machine Learning & NLP",
          level: 82,
          maxLevel: 100,
          description: "Experienced in ML pipelines, preprocessing, and language tasks using TensorFlow & ChromaDB.",
          experience: "2460/3000 XP"
        },
        {
          name: "UI Design & Web Dev",
          level: 80,
          maxLevel: 100,
          description: "Designed interactive UIs with attention to usability, responsiveness, and 3D animation.",
          experience: "2400/3000 XP"
        }
      ]
    },
    {
      title: "Unlocked Achievements",
      description: "Certifications & major AI accomplishments",
    skills: [
      {
        name: "Google Generative AI Badge",
        level: 100,
        maxLevel: 100,
        description: "Mastered Vertex AI, Gemini API, Imagen & RAG in applied AI badge courses.",
        experience: "MAX LEVEL"
      },
      {
        name: "Mistral AI Certification",
        level: 95,
        maxLevel: 100,
        description: "Hands-on with ChromaDB, LangChain, and Retrieval-Augmented Generation.",
        experience: "2850/3000 XP"
      },
      {
        name: "Git & Version Control",
        level: 90,
        maxLevel: 100,
        description: "Efficient with Git for team collaboration, branching, and open-source contribution.",
        experience: "2700/3000 XP"
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
