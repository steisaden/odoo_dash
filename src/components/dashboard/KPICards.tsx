
import { DollarSign, FileText, CheckCircle2, AlertCircle, Percent, TrendingUp, Target, Clock } from 'lucide-react';
import type { DashboardData } from '../../mockData';

interface KPICardsProps {
  data: DashboardData['kpis'];
}

export function KPICards({ data }: KPICardsProps) {
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

  const cards = [
    {
      title: "Total Revenue",
      value: formatCurrency(data.totalRevenue),
      icon: DollarSign,
      trend: "+12.5%",
      trendUp: true,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Quoted Revenue",
      value: formatCurrency(data.quotedRevenue),
      icon: FileText,
      trend: "+5.2%",
      trendUp: true,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Conversion Rate",
      value: `${data.conversionRate}%`,
      icon: Percent,
      trend: "+2.1%",
      trendUp: true,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Avg Deal Size",
      value: formatCurrency(data.averageDealSize),
      icon: TrendingUp,
      trend: "-1.5%",
      trendUp: false,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Paid Invoices",
      value: formatCurrency(data.paidInvoiceTotal),
      icon: CheckCircle2,
      trend: "+18.2%",
      trendUp: true,
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
    {
      title: "Outstanding Invoices",
      value: formatCurrency(data.outstandingInvoiceTotal),
      icon: AlertCircle,
      trend: "-4.5%",
      trendUp: true, // down is good for outstanding
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Target Attainment",
      value: `${data.salesTargetAttainment}%`,
      icon: Target,
      trend: "+12%",
      trendUp: true,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Overdue Invoices",
      value: data.overdueInvoicesCount.toString(),
      icon: Clock,
      trend: "+2",
      trendUp: false, // up is bad for overdue
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-card rounded-xl border p-5 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
            <div className={`p-2 rounded-lg ${card.bg}`}>
              <card.icon size={18} className={card.color} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold tracking-tight">{card.value}</h2>
          </div>
          <div className="mt-2 text-xs flex items-center gap-1 font-medium">
            <span className={card.trendUp ? "text-emerald-500" : "text-rose-500"}>
              {card.trend}
            </span>
            <span className="text-muted-foreground font-normal">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
