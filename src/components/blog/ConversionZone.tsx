import { Check, ArrowRight } from 'lucide-react';

export default function ConversionZone() {
  const trustSignals = [
    'Interview First, Pay Nothing',
    'Pre-Vetted Talent Only',
    'Hands-On Onboarding Support'
  ];

  const stats = [
    { value: '513K+', label: 'hours saved' },
    { value: '350+', label: 'Filipino VAs placed' },
    { value: '$1M+', label: 'in savings' }
  ];

  return (
    <section id="conversion" className="my-24 bg-forest rounded-default overflow-hidden text-white">
      <div className="p-12 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-white text-[32px] font-bold mb-4 leading-tight">
              Ready to Hire a Filipino VA?
            </h2>
            <p className="text-white/80 text-[18px] mb-8">
              Book a free discovery call today and we'll help you find the perfect match for your business.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime flex items-center justify-center">
                    <Check size={12} className="text-forest" />
                  </div>
                  <span className="text-[15px] font-medium">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <button className="w-full bg-lime text-forest font-bold py-6 rounded-sm text-[18px] hover:bg-bright hover:text-white transition-all duration-200 flex items-center justify-center gap-3">
              Book a Free Discovery Call <ArrowRight size={20} />
            </button>
            <a href="#" className="text-center text-lime font-bold uppercase tracking-widest text-[14px] hover:text-bright transition-colors">
              or Browse Available VAs →
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-[48px] font-display font-bold text-white mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-white/60 text-[14px] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
