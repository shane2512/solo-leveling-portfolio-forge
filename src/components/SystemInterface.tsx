import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Terminal, User, Briefcase, Trophy, BookOpen, MessageSquare, FileText, Menu, X, Zap } from 'lucide-react';
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const tabs = [
    { id: 'home', label: 'System Boot', icon: Terminal, color: 'from-cyan-500 to-blue-500' },
    { id: 'stats', label: 'Stats', icon: User, color: 'from-green-500 to-emerald-500' },
    { id: 'quests', label: 'Quests', icon: Briefcase, color: 'from-orange-500 to-red-500' },
    { id: 'skills', label: 'Skills', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { id: 'resume', label: 'Resume', icon: FileText, color: 'from-purple-500 to-pink-500' },
    { id: 'logs', label: 'Logs', icon: BookOpen, color: 'from-indigo-500 to-purple-500' },
    { id: 'contact', label: 'Portal Access', icon: MessageSquare, color: 'from-pink-500 to-rose-500' },
  ];

  const handleStartJourney = () => {
    setIntroDialogOpen(true);
  };

  const handleStatsClick = () => {
    setStatsDialogOpen(true);
  };

  const handleInventoryClick = () => {
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
      
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Enhanced System Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20 data-stream">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-10 h-10 object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-all duration-300 floating"
                  loading="eager"
                />
                <div className="absolute -inset-2 energy-orb"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-orbitron font-bold primary-text-glow">
                  SYSTEM v2.0.1
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-rajdhani">ONLINE</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm improved-text-visibility font-rajdhani font-medium">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span>Status: <span className="primary-text-glow">OPERATIONAL</span></span>
              </div>
              <Badge className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-primary">
                S-Class
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main System Interface */}
      <div className="pt-20 relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Enhanced Tab Navigation */}
          <div className={`fixed left-0 top-20 bottom-0 glass-effect border-r border-primary/20 z-40 transition-all duration-500 ease-out ${
            sidebarCollapsed ? 'w-16' : 'w-64'
          }`}>
            {/* Enhanced Sidebar Toggle Button */}
            <div className="p-4 border-b border-primary/20">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full justify-center hover:bg-primary/20 improved-text-visibility cyber-button"
              >
                {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
              </Button>
            </div>

            <TabsList className="flex flex-col h-full w-full bg-transparent p-4 space-y-3">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start px-4'} gap-3 py-4 rounded-lg transition-all duration-300 sidebar-item ${
                      activeTab === tab.id
                        ? 'bg-primary/20 primary-text-glow neon-border level-up-effect'
                        : 'hover:bg-muted/50 improved-text-visibility hover:text-primary cyber-button'
                    }`}
                    title={sidebarCollapsed ? tab.label : undefined}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${tab.color} bg-opacity-20`}>
                      <Icon size={20} />
                    </div>
                    {!sidebarCollapsed && (
                      <div className="flex flex-col items-start">
                        <span className="font-rajdhani font-medium">{tab.label}</span>
                        {activeTab === tab.id && (
                          <div className="w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-1"></div>
                        )}
                      </div>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Enhanced Tab Content */}
          <div className={`transition-all duration-500 ease-out min-h-screen ${
            sidebarCollapsed ? 'ml-16' : 'ml-64'
          }`}>
            <TabsContent value="home" className="m-0 h-screen">
              <div className="relative h-full flex items-center justify-center pt-8 hero-gradient">
                <div className="grid lg:grid-cols-1 gap-8 items-center max-w-4xl mx-auto px-8">
                  <div className="space-y-8 text-center">
                    <div className="mb-8 relative">
                      <img 
                        src="/logo.png" 
                        alt="System Logo" 
                        className="w-32 h-32 mx-auto object-contain filter drop-shadow-2xl opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110 floating"
                        loading="eager"
                      />
                      <div className="absolute inset-0 energy-orb w-32 h-32 mx-auto"></div>
                    </div>
                    
                    <div className="hologram-effect p-6 rounded-lg">
                      <SystemTerminal />
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary text-background font-orbitron font-bold py-6 text-lg neon-glow hover:scale-105 transition-all duration-300 rounded-lg border-0 cyber-button"
                        onClick={handleStartJourney}
                      >
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5" />
                          {'{>'}{'>'}  Initialize Journey Protocol
                        </div>
                      </Button>
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          variant="outline"
                          className="border-primary/50 primary-text-glow hover:bg-primary/10 font-rajdhani font-semibold py-4 hover:scale-105 transition-all duration-300 rounded-lg bg-transparent cyber-button stat-card"
                          onClick={handleStatsClick}
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Hunter Stats
                          </div>
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-secondary/50 text-secondary hover:bg-secondary/10 font-rajdhani font-semibold py-4 hover:scale-105 transition-all duration-300 rounded-lg bg-transparent cyber-button stat-card"
                          onClick={handleInventoryClick}
                        >
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            Inventory
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <StatsDisplay />
              </div>
            </TabsContent>

            <TabsContent value="quests" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <QuestBoard />
              </div>
            </TabsContent>

            <TabsContent value="skills" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <SkillTree />
              </div>
            </TabsContent>

            <TabsContent value="resume" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <ResumeTab />
              </div>
            </TabsContent>

            <TabsContent value="logs" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <SystemLogs />
              </div>
            </TabsContent>

            <TabsContent value="contact" className="m-0 p-8 section-gradient">
              <div className="slide-in">
                <ContactPortal />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Enhanced Introduction Dialog */}
      <Dialog open={introDialogOpen} onOpenChange={setIntroDialogOpen}>
        <DialogContent className="max-w-2xl glass-effect border-primary/30 hologram-effect">
          <DialogHeader>
            <DialogTitle className="font-orbitron primary-text-glow text-xl flex items-center gap-3">
              <Zap className="w-6 h-6 animate-pulse" />
              Welcome to My Digital Realm
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="improved-text-visibility leading-relaxed">
                Greetings! I'm Shane Joans, an S-Class Developer specializing in Frontend Architecture 
                and Machine Learning Integration. This interactive portfolio showcases my journey through 
                the digital realm, inspired by the Solo Leveling universe.
              </p>
            </div>
            <p className="improved-text-visibility leading-relaxed">
              Navigate through different sections to explore my skills, completed quests (projects), 
              and achievements. Each area reveals different aspects of my professional journey and 
              technical expertise.
            </p>
            <div className="flex items-center gap-3 pt-4 p-4 bg-black/30 rounded-lg border border-green-500/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse energy-orb"></div>
              <span className="primary-text-glow font-rajdhani font-medium">System Status: Online & Ready</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Stats Dialog */}
      <Dialog open={statsDialogOpen} onOpenChange={setStatsDialogOpen}>
        <DialogContent className="max-w-xl glass-effect border-primary/30 hologram-effect">
          <DialogHeader>
            <DialogTitle className="font-orbitron primary-text-glow text-xl flex items-center gap-3">
              <User className="w-6 h-6" />
              Hunter Profile Summary
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={stat.name} className="space-y-3 stat-card p-3 rounded-lg bg-black/20 border border-primary/10" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-rajdhani text-sm improved-text-visibility">{stat.name}</span>
                    <span className="primary-text-glow font-bold text-sm">{stat.value}/100</span>
                  </div>
                  <div className="progress-enhanced">
                    <Progress value={stat.value} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <span className="improved-text-visibility text-sm">
                  <strong className="primary-text-glow">Level:</strong> 15
                </span>
                <span className="improved-text-visibility text-sm">
                  <strong className="primary-text-glow">XP:</strong> 15,420/20,000
                </span>
              </div>
              <div className="progress-enhanced">
                <Progress value={77} className="h-3" />
              </div>
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