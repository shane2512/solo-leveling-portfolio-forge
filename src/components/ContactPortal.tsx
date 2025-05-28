
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Zap, Shield, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPortal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);

    try {
      // Simulate transmission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "{'>> Message Sent to Guildmaster'}",
        description: "Transmission successful. Response expected within 24 hours.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "{'>> Transmission Error'}",
        description: "Portal connection failed. Please try alternative communication methods.",
        variant: "destructive",
      });
    } finally {
      setIsTransmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold text-primary neon-glow">
          PORTAL ACCESS
        </h1>
        <p className="text-muted-foreground text-lg">Establish Communication Link</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Portal Status */}
        <div className="space-y-6">
          <Card className="glass-effect border-primary/30">
            <CardHeader>
              <CardTitle className="font-orbitron text-primary flex items-center gap-2">
                <Zap className="animate-pulse" size={20} />
                Portal Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield size={16} />
                    Security Level
                  </span>
                  <span className="text-primary font-orbitron">MAXIMUM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Globe size={16} />
                    Connection Status
                  </span>
                  <span className="text-green-400 font-orbitron">STABLE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Response Time</span>
                  <span className="text-secondary font-orbitron">&lt; 24 HRS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/30">
            <CardHeader>
              <CardTitle className="font-orbitron text-secondary">
                Alternative Channels
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Send className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-rajdhani font-medium text-foreground">Direct Email</p>
                  <p className="text-muted-foreground text-sm">shanejoans.27csb@licet.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="font-rajdhani font-medium text-foreground">LinkedIn Network</p>
                  <p className="text-muted-foreground text-sm">www.linkedin.com/in/sj1225</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Communication Form */}
        <Card className="glass-effect border-primary/30">
          <CardHeader>
            <CardTitle className="font-orbitron text-primary">
              Transmission Interface
            </CardTitle>
            <p className="text-muted-foreground">
              Establish secure communication channel with the Guildmaster
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-rajdhani font-medium">
                  Hunter Identification
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-rajdhani font-medium">
                  Communication Channel
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary font-rajdhani font-medium">
                  Message Payload
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Compose your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary resize-none text-foreground"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isTransmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-background font-orbitron font-bold text-lg py-4 transition-all duration-300 neon-glow"
              >
                {isTransmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                    Transmitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={18} />
                    {'>> Initiate Transmission'}
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPortal;
