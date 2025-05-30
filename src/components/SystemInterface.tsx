import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Terminal, User, Briefcase, Trophy, BookOpen, MessageSquare, FileText, Menu, X } from 'lucide-react';
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true); // Start collapsed

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
                className="w-10 h-10 object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                loading="eager"
                style={{ willChange: 'opacity' }}
              />
              <h1 className="text-xl font-orbitron font-bold primary-text-glow">
                SYSTEM v2.0.1
              </h1>
            </div>
            <div className="text-sm improved-text-visibility font-rajdhani font-medium">
              Status: <span className="primary-text-glow">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main System Interface */}
      <div className="pt-20 relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className={`fixed left-0 top-20 bottom-0 glass-effect border-r border-primary/20 z-40 transition-all duration-300 ${
            sidebarCollapsed ? 'w-16' : 'w-64'
          }`}>
            {/* Sidebar Toggle Button */}
            <div className="p-4 border-b border-primary/20">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full justify-center hover:bg-primary/20 improved-text-visibility"
              >
                {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
              </Button>
            </div>

            <TabsList className="flex flex-col h-full w-full bg-transparent p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start px-4'} gap-3 py-4 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary/20 primary-text-glow neon-border'
                        : 'hover:bg-muted/50 improved-text-visibility hover:text-primary'
                    }`}
                    title={sidebarCollapsed ? tab.label : undefined}
                  >
                    <Icon size={20} />
                    {!sidebarCollapsed && (
                      <span className="font-rajdhani font-medium">{tab.label}</span>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className={`transition-all duration-300 min-h-screen ${
            sidebarCollapsed ? 'ml-16' : 'ml-64'
          }`}>
            <TabsContent value="home" className="m-0 h-screen">
              <div className="relative h-full flex items-center justify-center pt-8">
                <div className="grid lg:grid-cols-1 gap-8 items-center max-w-4xl mx-auto px-8">
                  <div className="space-y-6 text-center">
                    <div className="mb-6">
                      <img 
                        src="/logo.png" 
                        alt="System Logo" 
                        className="w-24 h-24 mx-auto object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                        loading="eager"
                        style={{ willChange: 'transform, opacity' }}
                      />
                    </div>
                    
                    <SystemTerminal />
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary text-background font-orbitron font-bold py-5 text-lg neon-glow hover:scale-105 transition-transform rounded-lg border-0"
                        onClick={handleStartJourney}
                      >
                        {'{>'}{'>'}  Start Journey
                      </Button>
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          variant="outline"
                          className="border-primary/50 primary-text-glow hover:bg-primary/10 font-rajdhani font-semibold py-3 hover:scale-105 transition-transform rounded-lg bg-transparent"
                          onClick={handleStatsClick}
                        >
                          Stats
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-secondary/50 text-secondary hover:bg-secondary/10 font-rajdhani font-semibold py-3 hover:scale-105 transition-transform rounded-lg bg-transparent"
                          onClick={handleInventoryClick}
                        >
                          Inventory
                        </Button>
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
            <DialogTitle className="font-orbitron primary-text-glow text-xl">
              Welcome to My Digital Realm
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="improved-text-visibility leading-relaxed">
              Greetings! I'm Shane Joans, an S-Class Developer specializing in Frontend Architecture 
              and Machine Learning Integration. This interactive portfolio showcases my journey through 
              the digital realm, inspired by the Solo Leveling universe.
            </p>
            <p className="improved-text-visibility leading-relaxed">
              Navigate through different sections to explore my skills, completed quests (projects), 
              and achievements. Each area reveals different aspects of my professional journey and 
              technical expertise.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="primary-text-glow font-rajdhani">System Status: Online & Ready</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Stats Dialog */}
      <Dialog open={statsDialogOpen} onOpenChange={setStatsDialogOpen}>
        <DialogContent className="max-w-xl glass-effect border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-orbitron primary-text-glow text-xl">
              Hunter Profile Summary
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-rajdhani text-sm improved-text-visibility">{stat.name}</span>
                    <span className="primary-text-glow font-bold text-sm">{stat.value}/100</span>
                  </div>
                  <Progress value={stat.value} className="h-2" />
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <p className="improved-text-visibility text-sm">
                <strong className="primary-text-glow">Level:</strong> 15 | <strong className="primary-text-glow">XP:</strong> 15,420/20,000
              </p>
              <p className="improved-text-visibility text-sm">
                <strong className="primary-text-glow">Rank:</strong> S-Class Developer
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
