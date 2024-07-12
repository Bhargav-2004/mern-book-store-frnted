import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const posts = [
  {
    id: 1,
    title: '10 Must-Read Books for Summer 2024',
    href: '#',
    description: 'Discover our top picks for summer reading. From thrillers to romance, find the perfect book to enjoy under the sun.',
    date: 'Jul 1, 2024',
    datetime: '2024-07-01',
    category: { title: 'Recommendations', href: '#' },
    author: {
      name: 'Jane Doe',
      role: 'Book Critic',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1603415526960-2a9a7a2e68aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to Create the Perfect Reading Nook',
    href: '#',
    description: 'Learn how to design a cozy and inviting reading space in your home with our expert tips.',
    date: 'Jun 20, 2024',
    datetime: '2024-06-20',
    category: { title: 'Lifestyle', href: '#' },
    author: {
      name: 'John Smith',
      role: 'Interior Designer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Interview with Bestselling Author Sarah J. Maas',
    href: '#',
    description: 'Get insights into the writing process and upcoming projects from one of the most popular authors today.',
    date: 'May 15, 2024',
    datetime: '2024-05-15',
    category: { title: 'Author Interviews', href: '#' },
    author: {
      name: 'Emily Taylor',
      role: 'Journalist',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'The Benefits of Reading Fiction',
    href: '#',
    description: 'Explore how reading fiction can improve empathy, reduce stress, and boost creativity.',
    date: 'Apr 10, 2024',
    datetime: '2024-04-10',
    category: { title: 'Health & Wellness', href: '#' },
    author: {
      name: 'Alice Johnson',
      role: 'Psychologist',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Top 5 Book Series to Binge Read',
    href: '#',
    description: 'Looking for a new series to dive into? Check out our recommendations for the best book series to binge read.',
    date: 'Mar 25, 2024',
    datetime: '2024-03-25',
    category: { title: 'Recommendations', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // Add more posts here if needed...
];

const Blog = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='text-center mt-28'>
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your love for books with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
