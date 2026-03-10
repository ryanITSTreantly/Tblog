import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { Star, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react';

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="pt-40 pb-20 bg-cream overflow-hidden border-b border-border">
      <div className="max-w-site mx-auto px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[12px] text-light-text mb-12 uppercase tracking-[0.2em] font-bold">
          <Link to="/" className="hover:text-bright transition-colors">Home</Link>
          <span className="text-lime/50">/</span>
          <Link to="/" className="hover:text-bright transition-colors">Blog</Link>
          <span className="text-lime/50">/</span>
          <span className="text-forest">{post.categories[0]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="section-label w-fit">
              {post.categories[0]}
            </div>
            
            <h1 className="text-charcoal mb-8 leading-tight text-h1 tracking-[-0.02em]">
              {post.title}
            </h1>
            
            <p className="text-gray-text text-body-lg leading-relaxed mb-12 max-w-[640px]">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12">
              {/* Author Chip */}
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover border border-border shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-charcoal font-bold text-[16px]">{post.author.name}</span>
                  <span className="text-light-text text-[13px] font-medium">{post.publishDate}</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-md border border-border shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <div className="h-4 w-[1px] bg-border mx-1"></div>
                <span className="text-[13px] font-bold text-charcoal">4.9/5</span>
                <span className="text-[13px] text-light-text font-medium">Google Reviews</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-light-text">Share Article</span>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300 shadow-sm">
                  <Linkedin size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300 shadow-sm">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-forest hover:text-white transition-all duration-300 shadow-sm">
                  <LinkIcon size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-video lg:aspect-[4/5] rounded-md overflow-hidden shadow-card relative group">
              <img 
                src={post.heroImage} 
                alt={`${post.title} — Treantly Blog`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-bright/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
