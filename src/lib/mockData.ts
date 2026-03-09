import { BlogPost, Category } from '../types';

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-hire-filipino-va',
    title: 'How to Hire a Filipino Virtual Assistant: The Complete 2024 Guide',
    excerpt: 'Hiring a full-time employee in the US costs $72,000/year on average — before benefits, desk space, or management time. In this guide, you\'ll discover how to find, vet, and hire top-tier Filipino talent for a fraction of the cost.',
    content: `...`,
    publishDate: '2024-03-01',
    updatedDate: '2024-03-05',
    author: {
      name: 'John Doe',
      role: 'Treantly Hiring Specialist',
      avatar: 'https://picsum.photos/seed/author1/64/64',
      bio: 'John has helped over 500 businesses scale their operations by integrating high-performing remote teams from the Philippines.'
    },
    categories: ['Hiring from the Philippines', 'Offshore Hiring'],
    tags: ['Hiring', 'Remote Work', 'Philippines'],
    heroImage: 'https://picsum.photos/seed/blog1/1200/630',
    readTime: '8 min',
    featured: true,
    faqItems: [
      {
        question: 'How much does a Filipino VA cost?',
        answer: 'A full-time Filipino VA typically costs between $800 and $1,500 per month depending on their specialization and experience level.'
      },
      {
        question: 'How do I pay my VA?',
        answer: 'If you hire through Treantly, we handle all payroll and compliance. If hiring directly, platforms like Wise or Payoneer are commonly used.'
      }
    ],
    relatedSlugs: ['va-vs-full-time-employee', 'outsourcing-for-startups']
  },
  {
    id: '2',
    slug: 'scaling-with-offshore-talent',
    title: 'Scaling Your Operations with Offshore Talent',
    excerpt: 'Learn how to build a scalable business model by leveraging offshore hiring strategies that reduce overhead and increase productivity.',
    content: 'Full content for scaling...',
    publishDate: '2024-02-20',
    updatedDate: '2024-02-20',
    author: {
      name: 'Jane Smith',
      role: 'Operations Expert',
      avatar: 'https://picsum.photos/seed/author2/64/64'
    },
    categories: ['Offshore Hiring', 'Growth & Scaling'],
    tags: ['Strategy', 'Hiring'],
    heroImage: 'https://picsum.photos/seed/blog2/1200/630',
    readTime: '6 min',
    cornerstone: true
  },
  {
    id: '3',
    slug: 'remote-team-culture',
    title: 'Building a Strong Culture in a Remote Team',
    excerpt: 'Culture isn\'t about office snacks. Discover how to build trust and engagement in a fully remote team spread across different time zones.',
    content: 'Full content for culture...',
    publishDate: '2024-02-15',
    updatedDate: '2024-02-15',
    author: {
      name: 'John Doe',
      role: 'Treantly Hiring Specialist',
      avatar: 'https://picsum.photos/seed/author1/64/64'
    },
    categories: ['Remote Team Management'],
    tags: ['Management', 'Culture'],
    heroImage: 'https://picsum.photos/seed/blog3/1200/630',
    readTime: '10 min',
    cornerstone: true
  },
  {
    id: '4',
    slug: 'growth-strategies-2024',
    title: 'Growth Strategies for Small Businesses in 2024',
    excerpt: 'How to use remote talent to fuel your growth without the risk of traditional hiring. A roadmap for small business owners.',
    content: 'Full content for growth...',
    publishDate: '2024-03-10',
    updatedDate: '2024-03-10',
    author: {
      name: 'Jane Smith',
      role: 'Operations Expert',
      avatar: 'https://picsum.photos/seed/author2/64/64'
    },
    categories: ['Growth & Scaling'],
    tags: ['Growth', 'Scaling'],
    heroImage: 'https://picsum.photos/seed/blog4/1200/630',
    readTime: '7 min',
    cornerstone: true
  },
  {
    id: '5',
    slug: 'philippines-hiring-trends',
    title: '2024 Hiring Trends in the Philippines',
    excerpt: 'What you need to know about the evolving job market in the Philippines and how to stay competitive as an employer.',
    content: 'Full content for trends...',
    publishDate: '2024-03-12',
    updatedDate: '2024-03-12',
    author: {
      name: 'John Doe',
      role: 'Treantly Hiring Specialist',
      avatar: 'https://picsum.photos/seed/author1/64/64'
    },
    categories: ['Hiring from the Philippines'],
    tags: ['Trends', 'Philippines'],
    heroImage: 'https://picsum.photos/seed/blog5/1200/630',
    readTime: '5 min'
  },
  {
    id: '6',
    slug: 'managing-remote-payroll',
    title: 'Managing Remote Payroll and Compliance',
    excerpt: 'A deep dive into the complexities of paying international teams and staying compliant with local labor laws.',
    content: 'Full content...',
    publishDate: '2024-03-15',
    updatedDate: '2024-03-15',
    author: {
      name: 'Jane Smith',
      role: 'Operations Expert',
      avatar: 'https://picsum.photos/seed/author2/64/64'
    },
    categories: ['Remote Team Management', 'Offshore Hiring'],
    tags: ['Payroll', 'Compliance'],
    heroImage: 'https://picsum.photos/seed/blog6/1200/630',
    readTime: '12 min'
  },
  {
    id: '7',
    slug: 'scaling-customer-support',
    title: 'Scaling Customer Support with Virtual Assistants',
    excerpt: 'How to build a 24/7 support team using VAs from the Philippines to improve customer satisfaction.',
    content: 'Full content...',
    publishDate: '2024-03-18',
    updatedDate: '2024-03-18',
    author: {
      name: 'John Doe',
      role: 'Treantly Hiring Specialist',
      avatar: 'https://picsum.photos/seed/author1/64/64'
    },
    categories: ['Hiring from the Philippines', 'Growth & Scaling'],
    tags: ['Customer Support', 'Scaling'],
    heroImage: 'https://picsum.photos/seed/blog7/1200/630',
    readTime: '9 min'
  },
  {
    id: '8',
    slug: 'the-future-of-offshore-work',
    title: 'The Future of Offshore Work: 2025 and Beyond',
    excerpt: 'Predicting the major shifts in the global labor market and how businesses can prepare for a more decentralized workforce.',
    content: 'Full content...',
    publishDate: '2024-03-20',
    updatedDate: '2024-03-20',
    author: {
      name: 'Jane Smith',
      role: 'Operations Expert',
      avatar: 'https://picsum.photos/seed/author2/64/64'
    },
    categories: ['Offshore Hiring'],
    tags: ['Future of Work', 'Trends'],
    heroImage: 'https://picsum.photos/seed/blog8/1200/630',
    readTime: '15 min'
  },
  {
    id: '9',
    slug: 'top-tools-for-remote-teams',
    title: 'Top 10 Tools for Managing High-Performing Remote Teams',
    excerpt: 'From communication to project management, these are the essential tools every remote leader needs in their stack.',
    content: 'Full content...',
    publishDate: '2024-03-22',
    updatedDate: '2024-03-22',
    author: {
      name: 'John Doe',
      role: 'Treantly Hiring Specialist',
      avatar: 'https://picsum.photos/seed/author1/64/64'
    },
    categories: ['Remote Team Management'],
    tags: ['Tools', 'Productivity'],
    heroImage: 'https://picsum.photos/seed/blog9/1200/630',
    readTime: '11 min'
  },
  {
    id: '10',
    slug: 'case-study-scaling-agency',
    title: 'Case Study: How a Marketing Agency Scaled to $5M with VAs',
    excerpt: 'A behind-the-scenes look at the hiring strategy that allowed one agency to double their capacity in 12 months.',
    content: 'Full content...',
    publishDate: '2024-03-25',
    updatedDate: '2024-03-25',
    author: {
      name: 'Jane Smith',
      role: 'Operations Expert',
      avatar: 'https://picsum.photos/seed/author2/64/64'
    },
    categories: ['Growth & Scaling', 'Offshore Hiring'],
    tags: ['Case Study', 'Growth'],
    heroImage: 'https://picsum.photos/seed/blog10/1200/630',
    readTime: '14 min'
  }
];

export const categories: Category[] = [
  { 
    name: 'Offshore Hiring', 
    slug: 'offshore-hiring', 
    count: mockPosts.filter(p => p.categories.includes('Offshore Hiring')).length 
  },
  { 
    name: 'Hiring from the Philippines', 
    slug: 'hiring-from-the-philippines', 
    count: mockPosts.filter(p => p.categories.includes('Hiring from the Philippines')).length 
  },
  { 
    name: 'Remote Team Management', 
    slug: 'remote-team-management', 
    count: mockPosts.filter(p => p.categories.includes('Remote Team Management')).length 
  },
  { 
    name: 'Growth & Scaling', 
    slug: 'growth-and-scaling', 
    count: mockPosts.filter(p => p.categories.includes('Growth & Scaling')).length 
  },
];
