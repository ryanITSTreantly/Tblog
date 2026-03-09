import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQItem } from '../../types';
import { clsx } from 'clsx';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-24">
      <div className="text-center mb-16">
        <div className="section-label">Got Questions?</div>
        <h2 className="text-forest text-[32px] md:text-[48px] font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-mid-gray text-[18px]">Everything you need to know before getting started.</p>
      </div>
      
      <div className="max-w-[900px] mx-auto space-y-4">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={clsx(
              "border border-border rounded-default overflow-hidden transition-all duration-300",
              openIndex === idx ? "bg-green-light" : "bg-white hover:bg-green-light/50"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
            >
              <span className={clsx(
                "font-bold text-[18px] transition-colors",
                openIndex === idx ? "text-forest" : "text-charcoal"
              )}>{item.question}</span>
              <div className={clsx(
                "w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300",
                openIndex === idx ? "bg-lime text-forest rotate-180" : "bg-lime/30 text-forest"
              )}>
                <ChevronDown size={20} />
              </div>
            </button>
            {openIndex === idx && (
              <div className="px-6 md:px-8 pb-8 text-dark-text text-[17px] leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="pt-6 border-t border-forest/10">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-mid-gray font-bold mb-6">Still have questions?</p>
        <button className="btn-primary mx-auto">
          Schedule a call with our team <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
