import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CornerstoneCardProps {
  post: BlogPost;
}

export default function CornerstoneCard({ post }: CornerstoneCardProps) {
  return (
    <Link 
      to={`/${post.slug}`}
      className="group flex flex-col bg-white border border-border rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={post.heroImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="absolute top-4 left-4">
          <div className="bg-bright text-white font-bold uppercase text-[10px] px-3 py-1 rounded-sm shadow-lg tracking-[0.15em]">
            Featured
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-lime"></span>
            <span className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">
              {post.categories[0]}
            </span>
          </div>
          <h3 className="text-[20px] font-bold text-white leading-[1.3] group-hover:text-lime transition-colors duration-300">
            {post.title}
          </h3>
        </div>
      </div>
      <div className="px-6 py-4 bg-white border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-bright font-bold text-[11px] uppercase tracking-[0.15em] group/link">
          Read Guide 
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-2" />
        </div>
        <span className="text-[11px] text-light-text font-medium italic">{post.readTime}</span>
      </div>
    </Link>
  );
}
