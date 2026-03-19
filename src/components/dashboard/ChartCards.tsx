
import { 
  Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
  PieChart, Pie, Cell,
  ComposedChart, Line
} from 'recharts';
import type { DashboardData } from '../../mockData';

interface ChartsProps {
  data: DashboardData['charts'];
}

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#64748b'];

export function ChartCards({ data }: ChartsProps) {
  const formatCurrency = (val: number) => `$${(val / 1000).toFixed(0)}k`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Revenue Over Time */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-6 tracking-tight">Revenue vs Target</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data.revenueOverTime} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
              <YAxis tickFormatter={formatCurrency} axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
              <Tooltip 
                formatter={(val: any) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(val))}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Area type="monotone" name="Actual Revenue" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              <Line type="monotone" name="Target" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pipeline by Stage */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-6 tracking-tight">Pipeline by Stage</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.pipelineByStage} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
              <XAxis type="number" tickFormatter={formatCurrency} axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} />
              <YAxis type="category" dataKey="stage" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontWeight: 500}} />
              <Tooltip 
                cursor={{fill: 'hsl(var(--muted))'}}
                formatter={(val: any) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(val))}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
              />
              <Bar dataKey="value" name="Value" fill="#8b5cf6" radius={[0, 4, 4, 0]} maxBarSize={40}>
                {data.pipelineByStage.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Invoice Status */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-6 tracking-tight">Invoice Status Breakdown</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.invoiceStatusBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                nameKey="status"
              >
                {data.invoiceStatusBreakdown.map((entry, index) => {
                  let color = COLORS[index % COLORS.length];
                  if (entry.status === 'Paid') color = '#10b981';
                  if (entry.status === 'Overdue') color = '#ef4444';
                  if (entry.status === 'Posted (Not Due)') color = '#3b82f6';
                  if (entry.status === 'Draft') color = '#94a3b8';
                  return <Cell key={`cell-${index}`} fill={color} />;
                })}
              </Pie>
              <Tooltip 
                formatter={(val: any) => `${val}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
              />
              <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales by Salesperson */}
      <div className="bg-card rounded-xl border p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-6 tracking-tight">Top Sales Reps</h3>
        <div className="h-72 flex flex-col justify-center">
          {data.salesBySalesperson.map((rep, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium">{rep.name}</span>
                <span className="text-sm font-bold text-primary">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(rep.revenue)}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(rep.revenue / data.salesBySalesperson[0].revenue) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
