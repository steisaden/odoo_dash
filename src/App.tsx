import { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { KPICards } from './components/dashboard/KPICards';
import { ChartCards } from './components/dashboard/ChartCards';
import { RecentTables } from './components/dashboard/RecentTables';
import { FilterBar } from './components/dashboard/FilterBar';
import { mockData } from './mockData';

function App() {
  const [data] = useState(mockData);
  const [isLoading, setIsLoading] = useState(true);
  
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // Simulate initial data loading for realism
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-screen ${isDark ? 'dark bg-background text-foreground' : 'bg-background text-foreground'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-muted-foreground font-medium animate-pulse">Loading Dashboard Data...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout lastUpdated={data.lastUpdated} isDark={isDark} toggleTheme={toggleTheme}>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Sales Executive Dashboard</h1>
          <p className="text-muted-foreground mt-1">Real-time insights across CRM, Sales & Invoicing.</p>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-sm font-medium">Auto-refresh:</span>
          <div className="flex bg-muted rounded-md p-0.5">
            <button className="px-3 py-1 text-xs font-medium rounded shadow-sm bg-background text-foreground">On</button>
            <button className="px-3 py-1 text-xs font-medium rounded text-muted-foreground hover:text-foreground">Off</button>
          </div>
        </div>
      </div>

      <FilterBar />
      
      <KPICards data={data.kpis} />
      
      <ChartCards data={data.charts} />
      
      <RecentTables 
        opportunities={data.recentOpportunities} 
        invoices={data.recentInvoices} 
      />
    </Layout>
  );
}

export default App;
