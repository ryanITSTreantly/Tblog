import { Check, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function ComparisonSection() {
  const rows = [
    { label: 'Monthly Cost', traditional: '$5,000+', treantly: '$1,200/mo' },
    { label: 'Time to Hire', traditional: '4-6 weeks', treantly: '1-2 weeks' },
    { label: 'Payroll Taxes', traditional: '15-30%', treantly: '0%' },
    { label: 'Benefits & Insurance', traditional: '$500+/mo', treantly: '$0 (We cover it)' },
    { label: 'Turnover Risk', traditional: 'High', treantly: 'Low (Pre-vetted)' },
  ];

  return (
    <section className="my-24">
      <div className="text-center mb-16">
        <div className="section-label w-fit mx-auto">Save 40%-60% on hiring costs</div>
        <h2 className="text-charcoal text-[32px] md:text-[48px] font-bold mb-4">The Math of Scaling Smarter</h2>
        <p className="text-gray-text text-[18px]">See the real cost difference between traditional hiring and working with Treantly's pre-vetted talent pool.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {/* Traditional Hiring Card */}
        <div className="bg-light-card border border-border rounded-md p-8 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-white rounded-default flex items-center justify-center text-error border border-border">
              <X size={24} />
            </div>
            <div>
              <h4 className="font-bold text-charcoal text-[13px] uppercase tracking-widest">Traditional Hiring</h4>
              <p className="text-gray-text text-[14px] mb-0">The old, expensive way</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {rows.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                <span className="text-gray-text text-[16px]">{row.label}</span>
                <span className="text-charcoal font-bold text-[16px]">{row.traditional}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-dashed border-border flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-gray-text font-bold text-[14px] uppercase tracking-widest">Total Annual Cost</span>
              <span className="text-error font-display font-bold text-[40px] leading-tight">~$72,000+</span>
            </div>
          </div>
        </div>

        {/* Treantly Card */}
        <div className="bg-forest rounded-md p-8 relative overflow-hidden text-white shadow-card ring-4 ring-lime/20">
          <div className="absolute top-0 right-0 bg-lime text-bright font-bold text-[11px] uppercase tracking-widest px-4 py-2 rounded-bl-default">
            Recommended
          </div>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-white/10 rounded-default flex items-center justify-center text-lime">
              <Check size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lime text-[13px] uppercase tracking-widest">Treantly</h4>
              <p className="text-white/60 text-[14px] mb-0">The smart way to scale</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {rows.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                <span className="text-white/60 text-[16px]">{row.label}</span>
                <span className="text-white font-bold text-[16px]">{row.treantly}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-dashed border-white/20 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-white/60 font-bold text-[14px] uppercase tracking-widest">Total Annual Cost</span>
              <span className="text-lime text-[12px] font-bold flex items-center gap-1">
                <Check size={12} /> Save $57,600+ per year
              </span>
            </div>
            <span className="text-lime font-display font-bold text-[40px] leading-tight">~$14,400</span>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-green-tint border border-lime/20 rounded-md p-6 flex items-center gap-6 max-w-[1000px] mx-auto">
        <div className="w-12 h-12 bg-forest rounded-default flex items-center justify-center text-white shrink-0">
          <Check size={24} />
        </div>
        <p className="text-forest font-bold text-[16px] mb-0">
          WE pay for employee health insurance. <span className="font-normal text-gray-text">For all roles you hire through Treantly - included at no extra cost to you.</span>
        </p>
      </div>
    </section>
  );
}
