
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  lastUpdated: string;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Layout({ children, lastUpdated, isDark, toggleTheme }: LayoutProps) {
  return (
    <div className={`flex h-screen bg-background text-foreground overflow-hidden ${isDark ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header lastUpdated={lastUpdated} isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
          <div className="max-w-7xl mx-auto space-y-6 pb-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
