import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navigation from '../components/blog/Navigation';
import Footer from '../components/blog/Footer';
import BlogHero from '../components/blog/BlogHero';
import TOCSidebar from '../components/blog/TOCSidebar';
import QuickAnswer from '../components/blog/QuickAnswer';
import ComparisonSection from '../components/blog/ComparisonSection';
import FAQAccordion from '../components/blog/FAQAccordion';
import ConversionZone from '../components/blog/ConversionZone';
import AuthorBio from '../components/blog/AuthorBio';
import RelatedPosts from '../components/blog/RelatedPosts';
import NewsletterCTA from '../components/blog/NewsletterCTA';
import { mockPosts } from '../lib/mockData';
import { Check } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const relatedPosts = mockPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navigation />
      
      {/* Layer 3 — Hero Zone */}
      <BlogHero post={post} />

      <main className="max-w-site mx-auto px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Content Column */}
          <div className="lg:col-span-8 max-w-[780px]">
            {/* Layer 5 — Intro Block */}
            <div className="mb-16">
              <div className="flex items-center gap-2 text-gray-text text-[13px] mb-8 font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-lime"></div>
                Updated {new Date(post.updatedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              
              {/* Layer 6 — Quick-Win Answer Box */}
              <QuickAnswer 
                answer="Hiring a Filipino VA through a staffing agency takes 5–10 business days and provides access to a highly educated, English-speaking workforce with a strong cultural alignment."
                bullets={[
                  "Cost savings of up to 70% compared to US hires",
                  "Highly proficient English speakers",
                  "Scale operations without long-term overhead"
                ]}
              />
            </div>

            {/* Layer 7 — Body Content Blocks */}
            <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-charcoal prose-headings:tracking-tight prose-p:text-dark-text prose-p:leading-relaxed prose-li:text-dark-text prose-strong:text-charcoal prose-blockquote:border-l-4 prose-blockquote:border-lime prose-blockquote:bg-green-tint prose-blockquote:p-8 prose-blockquote:rounded-r-md prose-blockquote:not-italic prose-blockquote:font-medium">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            {/* Layer 8 — Comparison Section */}
            <ComparisonSection />

            {/* Layer 9 — Pros & Cons Block */}
            <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white border border-border rounded-md p-10 shadow-card">
                <h3 className="text-forest font-bold mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-tint flex items-center justify-center">
                    <Check className="text-bright" size={18} />
                  </div>
                  PRO COLUMN
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-dark-text text-[16px] leading-relaxed">
                    <span className="text-bright font-bold">✓</span>
                    Vetted by Treantly's 5-stage screening process.
                  </li>
                  <li className="flex gap-4 text-dark-text text-[16px] leading-relaxed">
                    <span className="text-bright font-bold">✓</span>
                    Significant cost savings on labor and overhead.
                  </li>
                  <li className="flex gap-4 text-dark-text text-[16px] leading-relaxed">
                    <span className="text-bright font-bold">✓</span>
                    High cultural alignment and English proficiency.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-border rounded-md p-10 shadow-card">
                <h3 className="text-error font-bold mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="text-error font-bold">✕</span>
                  </div>
                  CON COLUMN
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-dark-text text-[16px] leading-relaxed">
                    <span className="text-error font-bold">✕</span>
                    Time zone differences require initial coordination.
                  </li>
                  <li className="flex gap-4 text-dark-text text-[16px] leading-relaxed">
                    <span className="text-error font-bold">✕</span>
                    Requires clear onboarding documentation upfront.
                  </li>
                </ul>
              </div>
            </div>

            {/* Layer 10 — FAQ Section */}
            {post.faqItems && <FAQAccordion items={post.faqItems} />}

            {/* Layer 11 — Conversion Zone */}
            <ConversionZone />

            {/* Layer 12 — Related Content Cluster */}
            <RelatedPosts posts={relatedPosts} />

            {/* Layer 13 — Post Footer (E-E-A-T Signals) */}
            <AuthorBio author={post.author} />
            
            <div className="mt-12 flex flex-col gap-6 text-[14px] text-mid-gray border-t border-border pt-12">
              <a href="#" className="hover:text-forest underline underline-offset-4 font-medium">How We Research & Write — Editorial Standards</a>
              <div className="flex items-center gap-6">
                <span className="font-bold uppercase tracking-widest text-[12px]">Was this article helpful?</span>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-pill border border-border hover:bg-green-light hover:text-forest transition-all">👍 Yes</button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-pill border border-border hover:bg-red-50 hover:text-red-800 transition-all">👎 No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            {/* Layer 4 — Table of Contents (TOC) */}
            <TOCSidebar />
          </div>
        </div>
      </main>

      <NewsletterCTA />
      <Footer />
    </div>
  );
}
