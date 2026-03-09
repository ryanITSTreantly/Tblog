import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="bg-light-card border border-border rounded-md p-6 flex flex-col h-full group transition-all duration-300 hover:shadow-hover hover:-translate-y-[5px] hover:border-forest"
      aria-label={`Read: ${post.title}`}
      role="article"
    >
      {/* Image Container */}
      <div className="relative aspect-video -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-md">
        <img 
          src={post.heroImage} 
          alt={`${post.title} — Treantly Blog`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4">
          <div className="bg-tag-bg text-forest font-bold uppercase text-[13px] rounded-pill px-4 py-1.5 shadow-sm tracking-[0.08em]">
            {post.categories[0]}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[20px] font-semibold text-charcoal leading-[1.3] mb-3 line-clamp-2 transition-all duration-300 group-hover:text-mid-green group-hover:translate-x-1">
          {post.title}
        </h3>
        <p className="text-gray-text text-[15px] leading-relaxed mb-6 line-clamp-3 group-hover:text-dark-text transition-colors duration-300">
          {post.excerpt}
        </p>

        {/* Footer Row */}
        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-6 h-6 rounded-full object-cover border border-border shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-[13px] text-charcoal font-bold">
                {post.author.name}
              </span>
              <span className="text-[13px] text-light-text font-medium">
                {post.publishDate} · {post.readTime}
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-green-tint flex items-center justify-center text-bright opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
