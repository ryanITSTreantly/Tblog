import { Author } from '../../types';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-light-gray border-t-4 border-lime rounded-default p-8 my-16 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <img 
        src={author.avatar} 
        alt={author.name} 
        className="w-16 h-16 rounded-full object-cover shadow-md"
        referrerPolicy="no-referrer"
      />
      <div className="flex-grow text-center md:text-left">
        <h4 className="text-[20px] font-bold text-charcoal mb-2">{author.name}</h4>
        <p className="text-mid-gray text-[14px] uppercase tracking-widest mb-4">{author.role}</p>
        <p className="text-dark-text text-[16px] leading-relaxed mb-6">
          {author.bio || "Expert in remote staffing and business operations."}
        </p>
        <a href="#" className="text-forest font-bold text-[14px] hover:text-bright transition-colors uppercase tracking-widest">
          View all posts by {author.name.split(' ')[0]} →
        </a>
      </div>
    </div>
  );
}
