
import { Calendar, Filter, Users, MapPin, Package, X } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="bg-card rounded-xl border p-4 shadow-sm mb-6 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 mr-2 text-sm font-medium text-muted-foreground">
        <Filter size={16} />
        Filters:
      </div>

      <div className="flex items-center gap-2 border bg-background rounded-md px-3 py-1.5 text-sm cursor-pointer hover:border-primary/50 transition-colors">
        <Calendar size={14} className="text-primary" />
        <span>YTD (Jan 1 - Dec 31, 2026)</span>
      </div>

      <div className="flex items-center gap-2 border bg-primary/5 border-primary/20 rounded-md px-3 py-1.5 text-sm cursor-pointer hover:bg-primary/10 transition-colors text-primary font-medium">
        <Users size={14} />
        <span>All Sales Teams</span>
      </div>

      <div className="flex items-center gap-2 border bg-background rounded-md px-3 py-1.5 text-sm cursor-pointer hover:border-primary/50 transition-colors text-muted-foreground">
        <MapPin size={14} />
        <span>Region: All</span>
      </div>

      <div className="flex items-center gap-2 border bg-background rounded-md px-3 py-1.5 text-sm cursor-pointer hover:border-primary/50 transition-colors text-muted-foreground">
        <Package size={14} />
        <span>Product: All</span>
      </div>
      
      <div className="flex-1"></div>
      
      <button className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
        <X size={14} /> Clear
      </button>
    </div>
  );
}
