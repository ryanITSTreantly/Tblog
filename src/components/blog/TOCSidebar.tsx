import { useState, useEffect } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { clsx } from 'clsx';

interface TOCItem {
  id: string;
  text: string;
}

export default function TOCSidebar() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2'))
      .map((elem) => ({
        id: elem.id || elem.innerText.toLowerCase().replace(/\s+/g, '-'),
        text: elem.innerText,
      }));
    
    // Assign IDs to headings if they don't have them
    document.querySelectorAll('h2').forEach((elem) => {
      if (!elem.id) {
        elem.id = elem.innerText.toLowerCase().replace(/\s+/g, '-');
      }
    });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    document.querySelectorAll('h2').forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-[120px] lg:w-[260px] h-fit">
      {/* Mobile Accordion */}
      <div className="lg:hidden mb-8">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-light-gray border border-border rounded-default p-4"
        >
          <span className="font-bold uppercase text-[13px] tracking-widest text-lime">In This Article</span>
          <ChevronDown size={20} className={clsx("transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="bg-white border-x border-b border-border p-4 rounded-b-default space-y-3">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block text-[15px] transition-colors",
                  activeId === heading.id ? "text-forest font-bold" : "text-dark-text hover:text-bright"
                )}
              >
                {heading.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop TOC */}
      <div className="hidden lg:block bg-white border border-border rounded-default p-8 shadow-sm">
        <h4 className="font-bold uppercase text-[11px] tracking-[0.2em] text-lime mb-6">In This Article</h4>
        
        {/* Progress Bar */}
        <div className="h-1 bg-border rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-bright transition-all duration-300" style={{ width: '40%' }}></div>
        </div>

        <nav className="space-y-5" role="navigation" aria-label="Table of contents">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={clsx(
                "block text-[14px] border-l-2 pl-5 transition-all duration-300",
                activeId === heading.id 
                  ? "border-lime text-forest font-bold translate-x-1" 
                  : "border-transparent text-mid-gray hover:text-bright hover:translate-x-1"
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>

        <div className="mt-10 pt-8 border-t border-border">
          <a href="#conversion" className="flex items-center gap-3 text-forest font-bold text-[14px] hover:text-bright transition-all group">
            <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center text-lime group-hover:bg-bright group-hover:text-white transition-all">
              <Zap size={14} fill="currentColor" />
            </div>
            Jump to recommendation
          </a>
        </div>
      </div>
    </aside>
  );
}
