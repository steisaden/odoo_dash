export interface Salesperson {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface Opportunity {
  id: string;
  name: string;
  amount: number;
  stage: 'New' | 'Qualified' | 'Proposition' | 'Won' | 'Lost';
  probability: number;
  expectedClosing: string;
  salespersonId: string;
  regionId: string;
}

export interface Invoice {
  id: string;
  number: string;
  amount: number;
  status: 'Draft' | 'Posted' | 'Paid' | 'Overdue';
  dueDate: string;
  customerId: string;
  customerName: string;
}

export interface DashboardData {
  lastUpdated: string;
  kpis: {
    totalRevenue: number;
    quotedRevenue: number;
    paidInvoiceTotal: number;
    outstandingInvoiceTotal: number;
    conversionRate: number; // percentage
    averageDealSize: number;
    salesTargetAttainment: number; // percentage
    overdueInvoicesCount: number;
  };
  charts: {
    revenueOverTime: { month: string; revenue: number; target: number }[];
    pipelineByStage: { stage: string; value: number; count: number }[];
    salesBySalesperson: { name: string; revenue: number }[];
    topProducts: { name: string; sales: number }[];
    invoiceStatusBreakdown: { status: string; value: number }[];
    regionalPerformance: { region: string; revenue: number }[];
  };
  recentOpportunities: Opportunity[];
  recentInvoices: Invoice[];
}

export const mockData: DashboardData = {
  lastUpdated: new Date().toISOString(),
  kpis: {
    totalRevenue: 1250000,
    quotedRevenue: 450000,
    paidInvoiceTotal: 950000,
    outstandingInvoiceTotal: 300000,
    conversionRate: 24.5,
    averageDealSize: 45000,
    salesTargetAttainment: 112,
    overdueInvoicesCount: 15,
  },
  charts: {
    revenueOverTime: [
      { month: 'Jan', revenue: 90000, target: 100000 },
      { month: 'Feb', revenue: 110000, target: 100000 },
      { month: 'Mar', revenue: 105000, target: 110000 },
      { month: 'Apr', revenue: 125000, target: 110000 },
      { month: 'May', revenue: 140000, target: 120000 },
      { month: 'Jun', revenue: 180000, target: 120000 },
      { month: 'Jul', revenue: 195000, target: 130000 },
    ],
    pipelineByStage: [
      { stage: 'New', value: 800000, count: 45 },
      { stage: 'Qualified', value: 550000, count: 28 },
      { stage: 'Proposition', value: 300000, count: 12 },
      { stage: 'Won', value: 1250000, count: 35 },
    ],
    salesBySalesperson: [
      { name: 'Sarah Jenkins', revenue: 450000 },
      { name: 'Michael Chen', revenue: 380000 },
      { name: 'David Rodriguez', revenue: 290000 },
      { name: 'Emily Watts', revenue: 130000 },
    ],
    topProducts: [
      { name: 'Enterprise License', sales: 650000 },
      { name: 'Professional Services', sales: 300000 },
      { name: 'Cloud Storage Add-on', sales: 200000 },
      { name: 'Premium Support Teams', sales: 100000 },
    ],
    invoiceStatusBreakdown: [
      { status: 'Paid', value: 65 },
      { status: 'Posted (Not Due)', value: 20 },
      { status: 'Overdue', value: 10 },
      { status: 'Draft', value: 5 },
    ],
    regionalPerformance: [
      { region: 'North America', revenue: 750000 },
      { region: 'Europe', revenue: 350000 },
      { region: 'Asia Pacific', revenue: 150000 },
    ],
  },
  recentOpportunities: [
    {
      id: 'OPP-1045',
      name: 'TechCorp Enterprise Rollout',
      amount: 150000,
      stage: 'Proposition',
      probability: 75,
      expectedClosing: '2026-04-15',
      salespersonId: 'sp-1',
      regionId: 'reg-1',
    },
    {
      id: 'OPP-1046',
      name: 'GlobalTech EMEA Expansion',
      amount: 85000,
      stage: 'Qualified',
      probability: 40,
      expectedClosing: '2026-05-01',
      salespersonId: 'sp-2',
      regionId: 'reg-2',
    },
    {
      id: 'OPP-1047',
      name: 'StartupX Initial License',
      amount: 12000,
      stage: 'Won',
      probability: 100,
      expectedClosing: '2026-03-10',
      salespersonId: 'sp-3',
      regionId: 'reg-1',
    },
    {
      id: 'OPP-1048',
      name: 'MegaCorp Cloud Migration',
      amount: 450000,
      stage: 'New',
      probability: 10,
      expectedClosing: '2026-08-01',
      salespersonId: 'sp-1',
      regionId: 'reg-1',
    },
  ],
  recentInvoices: [
    {
      id: 'INV-2026-0012',
      number: 'INV/2026/0012',
      amount: 45000,
      status: 'Paid',
      dueDate: '2026-02-15',
      customerId: 'cust-1',
      customerName: 'TechCorp Industries',
    },
    {
      id: 'INV-2026-0013',
      number: 'INV/2026/0013',
      amount: 12500,
      status: 'Overdue',
      dueDate: '2026-03-01',
      customerId: 'cust-2',
      customerName: 'BetaFirm',
    },
    {
      id: 'INV-2026-0014',
      number: 'INV/2026/0014',
      amount: 85000,
      status: 'Posted',
      dueDate: '2026-04-01',
      customerId: 'cust-3',
      customerName: 'Gamma Solutions',
    },
    {
      id: 'INV-2026-0015',
      number: 'INV/2026/0015',
      amount: 5000,
      status: 'Draft',
      dueDate: '2026-04-15',
      customerId: 'cust-4',
      customerName: 'Delta Systems',
    },
  ]
};
