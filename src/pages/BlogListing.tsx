import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { useRef } from 'react';
import Navigation from '../components/blog/Navigation';
import Footer from '../components/blog/Footer';
import CategoryFilter from '../components/blog/CategoryFilter';
import BlogCard from '../components/blog/BlogCard';
import CornerstoneCard from '../components/blog/CornerstoneCard';
import NewsletterCTA from '../components/blog/NewsletterCTA';
import { mockPosts, categories } from '../lib/mockData';

export default function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const searchQuery = searchParams.get('q')?.toLowerCase() || '';
  const currentPage = parseInt(searchParams.get('page') || '1');
  const postsPerPage = 6;
  const articlesRef = useRef<HTMLDivElement>(null);

  const filteredPosts = mockPosts.filter((post) => {
    const categoryObj = categories.find(c => c.slug === activeCategory);
    const matchesCategory = !activeCategory || (categoryObj && post.categories.includes(categoryObj.name));
    const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const featuredPost = mockPosts.find(p => p.featured);
  const cornerstonePosts = mockPosts.filter(p => p.cornerstone).slice(0, 3);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
    if (articlesRef.current) {
      const yOffset = -100; // Account for sticky header + some padding
      const y = articlesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navigation />

      {/* Block A — Page Header */}
      <header className="bg-cream pt-32 md:pt-48 pb-16 md:pb-24 relative overflow-hidden border-b border-border">
        <div className="max-w-site mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-[800px]">
            <div className="section-label w-fit">
              Treantly Blog
            </div>
            <h1 className="text-charcoal mb-6 leading-tight text-[32px] md:text-h1 tracking-[-0.02em]">
              Scale Your Operations with <span className="text-bright italic">Global Talent.</span>
            </h1>
            <p className="text-gray-text text-[16px] md:text-body-lg leading-relaxed mb-8 md:mb-12 max-w-[640px]">
              Expert hiring guides, VA tips, and business resources for scaling North American companies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-[540px] group">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white border border-border rounded-pill px-10 md:px-14 py-4 md:py-5 text-charcoal placeholder:text-light-text focus:outline-none focus:ring-2 focus:ring-bright/20 focus:border-bright transition-all shadow-sm"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) searchParams.set('q', val);
                  else searchParams.delete('q');
                  searchParams.set('page', '1');
                  setSearchParams(searchParams);
                }}
                defaultValue={searchQuery}
              />
              <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-light-text group-focus-within:text-bright transition-colors" size={20} />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-site mx-auto px-6 md:px-10 py-12 md:py-24">
        {/* Block C — Featured Post */}
        {featuredPost && currentPage === 1 && (
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-light-card border border-border rounded-md overflow-hidden group hover:shadow-hover transition-all duration-300">
              <Link 
                to={`/blog/${featuredPost.slug}`}
                className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden"
              >
                <img 
                  src={featuredPost.heroImage} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-tag-bg text-forest font-bold uppercase text-[13px] rounded-pill px-4 py-1.5 shadow-lg tracking-[0.08em]">
                    Featured Article
                  </div>
                </div>
              </Link>
              <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-center">
                <div className="section-label mb-4 w-fit">
                  {featuredPost.categories[0]}
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-[24px] md:text-h2 font-bold text-charcoal mb-4 md:mb-6 leading-tight group-hover:text-forest transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-gray-text text-[15px] md:text-body mb-6 md:mb-10 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <img 
                    src={featuredPost.author.avatar} 
                    alt={featuredPost.author.name} 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-border shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="text-charcoal font-bold text-[14px] md:text-[15px]">{featuredPost.author.name}</span>
                    <span className="text-light-text text-[12px] md:text-[13px] font-medium">{featuredPost.publishDate} · {featuredPost.readTime} read</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary w-fit text-[13px] md:text-[14px] px-6 md:px-8 py-3 md:py-4">
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Featured Content Section (formerly Cornerstone) */}
        {cornerstonePosts.length > 0 && currentPage === 1 && (
          <section className="mb-20 md:mb-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-4">
              <h3 className="text-[24px] md:text-h3 font-bold text-charcoal">Featured Content</h3>
              <div className="h-[1px] flex-grow bg-border mx-8 hidden lg:block"></div>
              <span className="text-bright font-bold uppercase text-[11px] md:text-[12px] tracking-widest">Essential Reading</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cornerstonePosts.map((post) => (
                <CornerstoneCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Block B — Category Filter Bar */}
        <CategoryFilter categories={categories} />

        {/* Block D — Post Grid */}
        <div ref={articlesRef} className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 scroll-mt-32">
          <div>
            {!activeCategory && <h3 className="text-h3 font-semibold text-charcoal">Latest Articles</h3>}
            {activeCategory && <h3 className="text-h3 font-semibold text-charcoal capitalize">{activeCategory.replace(/-/g, ' ')}</h3>}
          </div>
          <span className="text-gray-text text-meta font-medium uppercase tracking-widest">{filteredPosts.length} Articles Found</span>
        </div>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>

        {/* Block E — Pagination */}
        {totalPages > 1 && (
          <div className="mt-24 md:mt-32 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-border rounded-sm text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-mid-gray hover:border-bright hover:text-bright transition-all disabled:opacity-30" 
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={clsx(
                    "w-10 h-10 md:w-12 md:h-12 rounded-sm font-bold transition-all text-[14px] md:text-[16px]",
                    currentPage === i + 1 
                      ? "bg-forest text-white shadow-lg" 
                      : "border border-border text-mid-gray hover:border-bright hover:text-bright"
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-border rounded-sm text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-mid-gray hover:border-bright hover:text-bright transition-all disabled:opacity-30"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Block F — Newsletter CTA Banner */}
      <NewsletterCTA />

      {/* Block G — Listing Page Footer Elements */}
      <section className="bg-white py-24 border-t border-border">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-[28px] font-bold text-charcoal mb-2">Explore by Topic</h3>
              <p className="text-mid-gray">Find the specific insights you need to grow your business.</p>
            </div>
            <Link to="/blog" className="text-bright font-bold uppercase tracking-widest text-[14px] hover:underline">View All Topics →</Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/blog?category=${cat.slug}`}
                className="px-6 py-3 bg-light-gray rounded-pill text-forest font-bold uppercase text-[12px] tracking-widest hover:bg-bright hover:text-white transition-all shadow-sm"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
