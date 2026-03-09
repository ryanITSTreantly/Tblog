import { BlogPost } from '../../types';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="my-16">
      <h2 className="text-[32px] font-bold text-charcoal mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-white border border-lime rounded-default flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-[24px] font-bold text-charcoal mb-2">Read the Complete VA Hiring Guide</h3>
          <p className="text-mid-gray text-[16px]">Everything you need to know about scaling with remote talent.</p>
        </div>
        <a href="#" className="btn-primary whitespace-nowrap">
          Read Guide →
        </a>
      </div>
    </section>
  );
}
