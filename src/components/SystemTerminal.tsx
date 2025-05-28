
import { useState, useEffect } from 'react';

const SystemTerminal = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const terminalLines = [
    '>> Initializing System...',
    '>> Loading User Profile...',
    '>> Welcome, Visitor.',
    '>> System Status: OPERATIONAL',
    '>> Ready for Mission Assignment.'
  ];

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const currentLine = terminalLines[currentLineIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedText(prev => {
            const lines = prev.split('\n');
            lines[currentLineIndex] = currentLine.slice(0, charIndex);
            return lines.join('\n');
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
          }, 500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentLineIndex]);

  return (
    <div className="glass-effect rounded-lg p-6 border border-primary/30">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <span className="font-orbitron text-primary text-sm">SYSTEM TERMINAL</span>
      </div>
      
      <div className="font-mono text-sm space-y-1 min-h-[120px]">
        {displayedText.split('\n').map((line, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <span className="text-foreground">{line}</span>
            {index === currentLineIndex && (
              <span className="w-2 h-4 bg-primary animate-pulse ml-1"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemTerminal;
