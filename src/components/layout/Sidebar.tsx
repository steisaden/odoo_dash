
import { 
  BarChart3, 
  Users, 
  Target, 
  Receipt, 
  Settings,
  LayoutDashboard,
  LogOut,
  HelpCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Target, label: 'Sales', active: false },
    { icon: Users, label: 'CRM', active: false },
    { icon: Receipt, label: 'Invoicing', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
  ];

  return (
    <div className="flex flex-col w-64 border-r bg-card h-full text-card-foreground">
      <div className="p-6">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
            <LayoutDashboard size={20} />
          </div>
          Odoo Analytics
        </div>
      </div>
      
      <div className="flex-1 px-4 space-y-2 overflow-y-auto">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">Main Menu</div>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              item.active 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon size={18} className={cn("shrink-0", item.active && "text-primary")} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4 border-t px-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Settings size={18} /> Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <HelpCircle size={18} /> Support
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors mt-4">
          <LogOut size={18} /> Log out
        </button>
      </div>
    </div>
  );
}
