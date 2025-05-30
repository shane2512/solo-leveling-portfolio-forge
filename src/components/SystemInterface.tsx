import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Terminal, User, Briefcase, Trophy, BookOpen, MessageSquare, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SystemTerminal from './SystemTerminal';
import StatsDisplay from './StatsDisplay';
import QuestBoard from './QuestBoard';
import SkillTree from './SkillTree';
import SystemLogs from './SystemLogs';
import ContactPortal from './ContactPortal';
import SkillsSummaryDialog from './SkillsSummaryDialog';
import InventorySidebar from './InventorySidebar';
import ResumeTab from './ResumeTab';
import VideoBackground from './VideoBackground';

const SystemInterface = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [skillsDialogOpen, setSkillsDialogOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [introDialogOpen, setIntroDialogOpen] = useState(false);
  const [statsDialogOpen, setStatsDialogOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'System Boot', icon: Terminal },
    { id: 'stats', label: 'Stats', icon: User },
    { id: 'quests', label: 'Quests', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Trophy },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'logs', label: 'Logs', icon: BookOpen },
    { id: 'contact', label: 'Portal Access', icon: MessageSquare },
  ];

  const handleStartJourney = () => {
    console.log('Start Journey clicked - opening intro dialog');
    setIntroDialogOpen(true);
  };

  const handleStatsClick = () => {
    console.log('Stats clicked - opening stats dialog');
    setStatsDialogOpen(true);
  };

  const handleInventoryClick = () => {
    console.log('Inventory clicked - opening inventory sidebar');
    setInventoryOpen(true);
  };

  const stats = [
    { name: 'Frontend Mastery', value: 70 },
    { name: 'ML Skills', value: 70 },
    { name: 'Generative AI', value: 90 },
    { name: 'Problem Solving', value: 80 },
    { name: 'Cloud Engineer', value: 50 },
    { name: 'Leadership', value: 60 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <VideoBackground />
      
      {/* System Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-10 h-10 object-contain filter drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity"
              />
              <h1 className="text-xl font-orbitron font-bold text-primary neon-glow">
                SYSTEM v2.0.1
              </h1>
            </div>
            <div className="text-sm text-muted-foreground font-rajdhani">
              Status: <span className="text-primary">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main System Interface */}
      <div className="pt-20 relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="fixed left-0 top-20 bottom-0 w-64 glass-effect border-r border-primary/20 z-40">
            <TabsList className="flex flex-col h-full w-full bg-transparent p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`w-full justify-start gap-3 p-4 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary/20 text-primary neon-border'
                        : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-rajdhani font-medium">{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="ml-64 min-h-screen">
            <TabsContent value="home" className="m-0 h-screen">
              <div className="relative h-full flex items-center justify-center">
                <div className="grid lg:grid-cols-1 gap-12 items-center max-w-4xl mx-auto px-8">
                  <div className="space-y-8 text-center">
                    <div className="mb-8">
                      <img 
                        src="/logo.png" 
                        alt="System Logo" 
                        className="w-32 h-32 mx-auto object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <SystemTerminal />
                    
                    <div className="space-y-4">
                      <button 
                        className="w-full bg-gradient-to-r from-primary to-secondary text-background font-orbitron font-bold py-6 text-lg neon-glow hover:scale-105 transition-transform rounded-lg border-0"
                        onClick={handleStartJourney}
                      >
                        {'{>'}{'>'}  Start Journey
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          className="border border-primary/50 text-primary hover:bg-primary/10 font-rajdhani font-semibold py-4 hover:scale-105 transition-transform rounded-lg bg-transparent"
                          onClick={handleStatsClick}
                        >
                          Stats
                        </button>
                        <button 
                          className="border border-secondary/50 text-secondary hover:bg-secondary/10 font-rajdhani font-semibold py-4 hover:scale-105 transition-transform rounded-lg bg-transparent"
                          onClick={handleInventoryClick}
                        >
                          Inventory
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="m-0 p-8">
              <StatsDisplay />
            </TabsContent>

            <TabsContent value="quests" className="m-0 p-8">
              <QuestBoard />
            </TabsContent>

            <TabsContent value="skills" className="m-0 p-8">
              <SkillTree />
            </TabsContent>

            <TabsContent value="resume" className="m-0 p-8">
              <ResumeTab />
            </TabsContent>

            <TabsContent value="logs" className="m-0 p-8">
              <SystemLogs />
            </TabsContent>

            <TabsContent value="contact" className="m-0 p-8">
              <ContactPortal />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Introduction Dialog */}
      <Dialog open={introDialogOpen} onOpenChange={setIntroDialogOpen}>
        <DialogContent className="max-w-2xl glass-effect border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-primary text-xl neon-glow">
              Welcome to My Digital Realm
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Greetings! I'm Shane Joans, an S-Class Developer specializing in Frontend Architecture 
              and Machine Learning Integration. This interactive portfolio showcases my journey through 
              the digital realm, inspired by the Solo Leveling universe.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Navigate through different sections to explore my skills, completed quests (projects), 
              and achievements. Each area reveals different aspects of my professional journey and 
              technical expertise.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-rajdhani">System Status: Online & Ready</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Stats Dialog */}
      <Dialog open={statsDialogOpen} onOpenChange={setStatsDialogOpen}>
        <DialogContent className="max-w-xl glass-effect border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-primary text-xl neon-glow">
              Hunter Profile Summary
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-rajdhani text-sm">{stat.name}</span>
                    <span className="text-primary font-bold text-sm">{stat.value}/100</span>
                  </div>
                  <Progress value={stat.value} className="h-2" />
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong className="text-primary">Level:</strong> 15 | <strong className="text-primary">XP:</strong> 15,420/20,000
              </p>
              <p className="text-muted-foreground text-sm">
                <strong className="text-primary">Rank:</strong> S-Class Developer
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Existing Dialogs and Sidebars */}
      <SkillsSummaryDialog 
        open={skillsDialogOpen} 
        onOpenChange={setSkillsDialogOpen} 
      />
      <InventorySidebar 
        open={inventoryOpen} 
        onOpenChange={setInventoryOpen} 
      />
    </div>
  );
};

export default SystemInterface;
