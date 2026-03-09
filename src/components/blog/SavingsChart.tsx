import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'US Employee', cost: 72000, color: '#1C1C1C' },
  { name: 'Treantly VA', cost: 18000, color: '#4CAF50' },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

export default function SavingsChart() {
  return (
    <div className="my-16 bg-white border border-border rounded-default p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-[24px] font-bold text-charcoal mb-2">Annual Cost Comparison</h3>
        <p className="text-mid-gray text-[16px]">Comparing a full-time US employee vs. a dedicated Treantly VA.</p>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0DDD6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B6B6B', fontSize: 14, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B6B6B', fontSize: 12 }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip 
              cursor={{ fill: '#F2F0EA' }}
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid #E0DDD6',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
              formatter={(value: number) => [formatCurrency(value), 'Annual Cost']}
            />
            <Bar dataKey="cost" radius={[8, 8, 0, 0]} barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-light flex items-center justify-center text-bright font-bold text-xl">
            75%
          </div>
          <div>
            <div className="text-charcoal font-bold text-[18px]">Potential Savings</div>
            <div className="text-mid-gray text-[14px]">Average annual reduction in labor costs</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-bright font-bold text-[32px] leading-none mb-1">$54,000</div>
          <div className="text-mid-gray text-[12px] uppercase tracking-widest font-bold">Saved Per Year</div>
        </div>
      </div>
    </div>
  );
}
