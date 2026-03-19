
import { Search, Bell, Download, RefreshCw, Moon, Sun } from 'lucide-react';
import { format } from 'date-fns';

interface HeaderProps {
  lastUpdated: string;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ lastUpdated, isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="h-16 border-b bg-card flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
          <RefreshCw size={14} className="text-primary" />
          <span>Live Data: {format(new Date(lastUpdated), 'MMM d, yyyy HH:mm')}</span>
        </div>
        <span className="hidden md:inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium border border-primary/20">
          Demo Prototype — final version integrated into Odoo
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search records..." 
            className="pl-9 pr-4 py-1.5 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 transition-all"
          />
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border border-card"></span>
        </button>
        
        <div className="h-8 w-px bg-border mx-1"></div>

        <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
          <Download size={16} />
          <span className="hidden sm:inline">Export PDF</span>
        </button>

        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-medium text-primary ml-2 cursor-pointer">
          JD
        </div>
      </div>
    </header>
  );
}
