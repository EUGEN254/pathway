// pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Budget Travel",
    excerpt: "Learn how to travel more while spending less.",
    date: "Mar 15, 2024",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Best Time to Visit Europe",
    excerpt: "A month-by-month guide to European travel.",
    date: "Mar 12, 2024",
    author: "Mike Chen",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Packing Like a Pro",
    excerpt: "Essentials you need for any trip.",
    date: "Mar 10, 2024",
    author: "Emma Watson",
    readTime: "3 min read"
  },
  {
    id: 4,
    title: "Solo Travel Guide",
    excerpt: "Tips for your first solo adventure.",
    date: "Mar 8, 2024",
    author: "James Brown",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Travel Blog</h1>
          <p className="text-gray-500">Stories, tips, and guides from our travelers</p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-orange-500">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;