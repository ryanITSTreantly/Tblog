import { useState } from 'react';
import { Check } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="bg-forest py-24 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10">
        <div className="section-label mb-6 w-fit mx-auto">Weekly Insights</div>
        <h2 className="text-white text-[40px] md:text-[56px] font-bold mb-6 leading-tight">Get Hiring Tips in Your Inbox</h2>
        <p className="text-white/80 text-[18px] md:text-[20px] mb-12 max-w-[600px] mx-auto">
          Join 5,000+ business owners who receive our weekly guide on scaling with global talent.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-3 text-lime font-bold text-xl animate-in fade-in slide-in-from-bottom-4">
            <Check size={28} />
            You're in! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6 max-w-[600px] mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white rounded-pill px-8 py-5 text-charcoal focus:outline-none focus:ring-2 focus:ring-lime shadow-lg"
            />
            <button type="submit" className="btn-pill bg-lime text-bright hover:bg-white hover:text-bright px-10 py-5 text-[16px]">
              Subscribe Free
            </button>
          </form>
        )}
        
        {!isSubmitted && (
          <p className="text-white/40 text-[13px] font-medium uppercase tracking-[0.1em]">
            No spam. Unsubscribe anytime.
          </p>
        )}
      </div>
    </section>
  );
}
