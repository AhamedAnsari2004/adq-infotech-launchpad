import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "ADQ INFOTECH Team",
      date: "March 15, 2024",
      image: "/lovable-uploads/c71b88b2-cf82-4265-aee0-6eb00751ac57.png",
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure for Modern Businesses",
      excerpt: "Learn how to design and implement cloud solutions that grow with your business needs.",
      author: "ADQ INFOTECH Team",
      date: "March 10, 2024",
      image: "/lovable-uploads/0a704aa7-19eb-45f5-8742-02af7c0236ea.png",
      category: "Cloud Solutions"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices Every Business Should Follow",
      excerpt: "Essential security measures to protect your business from cyber threats in today's digital world.",
      author: "ADQ INFOTECH Team",
      date: "March 5, 2024",
      image: "/lovable-uploads/c71b88b2-cf82-4265-aee0-6eb00751ac57.png",
      category: "Security"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in technology and business.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;