import { useSearchParams } from 'react-router-dom';
import { Category } from '../../types';
import { clsx } from 'clsx';

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-8 bg-white border border-border rounded-lg mb-12 md:mb-16 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-light-text">Filter by Topic</span>
        <button 
          onClick={() => handleCategoryChange('all')}
          className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-bright hover:underline"
        >
          Reset Filters
        </button>
      </div>
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar whitespace-nowrap pb-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={clsx(
            'px-4 md:px-6 py-2.5 md:py-3 rounded-pill text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300',
            activeCategory === 'all' 
              ? 'bg-forest text-white shadow-lg' 
              : 'bg-cream text-forest hover:bg-tag-bg'
          )}
        >
          All Articles
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug)}
            className={clsx(
              'px-4 md:px-6 py-2.5 md:py-3 rounded-pill text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 flex items-center gap-2 md:gap-3',
              activeCategory === cat.slug 
                ? 'bg-forest text-white shadow-lg' 
                : 'bg-cream text-forest hover:bg-tag-bg'
            )}
          >
            {cat.name}
            <span className={clsx(
              "text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded-full font-bold",
              activeCategory === cat.slug ? "bg-white/20 text-white" : "bg-forest/10 text-forest"
            )}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
