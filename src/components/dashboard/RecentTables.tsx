
import type { DashboardData } from '../../mockData';

interface RecentTablesProps {
  opportunities: DashboardData['recentOpportunities'];
  invoices: DashboardData['recentInvoices'];
}

export function RecentTables({ opportunities, invoices }: RecentTablesProps) {
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

  const getStageColor = (stage: string) => {
    switch(stage) {
      case 'Won': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400';
      case 'Proposition': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400';
      case 'Qualified': return 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400';
      case 'New': return 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Paid': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'Overdue': return 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 border-rose-200 dark:border-rose-800';
      case 'Posted': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      case 'Draft': return 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400 border-slate-200 dark:border-slate-800';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400';
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 pb-6">
      {/* Recent Opportunities */}
      <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-lg font-semibold tracking-tight">Recent Opportunities</h3>
          <button className="text-sm font-medium text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
              <tr>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Stage</th>
                <th className="px-5 py-3 font-semibold">Probability</th>
                <th className="px-5 py-3 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {opportunities.map((opp) => (
                <tr key={opp.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-card-foreground">{opp.name}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStageColor(opp.stage)}`}>
                      {opp.stage}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${opp.probability}%` }}></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{opp.probability}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-semibold text-right">{formatCurrency(opp.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="text-lg font-semibold tracking-tight">Recent Invoices</h3>
          <button className="text-sm font-medium text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
              <tr>
                <th className="px-5 py-3 font-semibold">Number</th>
                <th className="px-5 py-3 font-semibold">Customer</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-primary cursor-pointer hover:underline">{inv.number}</td>
                  <td className="px-5 py-3 text-card-foreground">{inv.customerName}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(inv.status)}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-semibold text-right">{formatCurrency(inv.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
