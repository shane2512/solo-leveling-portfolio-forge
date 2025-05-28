
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InventorySidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InventorySidebar = ({ open, onOpenChange }: InventorySidebarProps) => {
  const tools = [
    { name: 'React', type: 'Framework', rarity: 'Epic' },
    { name: 'TypeScript', type: 'Language', rarity: 'Epic' },
    { name: 'Python', type: 'Language', rarity: 'Epic' },
    { name: 'TensorFlow', type: 'ML Tool', rarity: 'Legendary' },
    { name: 'AWS', type: 'Cloud', rarity: 'Rare' },
    { name: 'Docker', type: 'DevOps', rarity: 'Rare' },
  ];

  const projects = [
    { name: 'AI Code Assistant', status: 'Completed', difficulty: 'S-Rank' },
    { name: 'E-commerce Platform', status: 'Completed', difficulty: 'A-Rank' },
    { name: 'Data Visualization Tool', status: 'In Progress', difficulty: 'B-Rank' },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'from-yellow-500 to-orange-500';
      case 'Epic': return 'from-purple-500 to-pink-500';
      case 'Rare': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-96 glass-effect border-primary/30">
        <SheetHeader>
          <SheetTitle className="font-orbitron text-primary neon-glow">
            {'>> SYSTEM INVENTORY'}
          </SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          {/* Tools Section */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle className="font-orbitron text-secondary">Development Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-2 rounded border border-primary/20">
                  <div className="space-y-1">
                    <p className="font-rajdhani font-medium">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.type}</p>
                  </div>
                  <Badge className={`bg-gradient-to-r ${getRarityColor(tool.rarity)} text-white`}>
                    {tool.rarity}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle className="font-orbitron text-secondary">Quest Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between p-2 rounded border border-primary/20">
                  <div className="space-y-1">
                    <p className="font-rajdhani font-medium">{project.name}</p>
                    <p className="text-xs text-muted-foreground">{project.status}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {project.difficulty}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default InventorySidebar;
