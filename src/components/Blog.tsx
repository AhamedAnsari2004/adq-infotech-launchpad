import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Every Startup Needs a Website in 2025",
      excerpt: "In today's fast-paced digital world, having a website is no longer a luxury — it's a necessity. For startups and small businesses, a website is often the very first impression potential customers will have of your brand.",
      author: "ADQ INFOTECH Team",
      date: "March 20, 2024",
      image: "/lovable-uploads/2cd77b6d-8e6a-419b-9f38-b020e605f48d.png",
      category: "Digital Strategy",
      content: `In today's fast-paced digital world, having a website is no longer a luxury — it's a necessity. For startups and small businesses, a website is often the very first impression potential customers will have of your brand. In 2025, where competition is tougher and digital presence decides credibility, a strong website can be the game-changer your startup needs.

🌐 1. Your Website Builds Trust and Credibility

Think about it — would you trust a business without a website? Most customers now search online before making any purchase or decision. A clean, professional website signals that your startup is serious, reliable, and ready to serve. Without one, you risk losing customers to competitors who do have a digital presence.

🚀 2. A 24/7 Marketing Tool

Unlike a physical shop or office, your website works for you round the clock. It becomes a 24/7 marketing machine, showcasing your products, services, testimonials, and brand story — even while you sleep. This means more reach, more inquiries, and more growth opportunities.

📱 3. Mobile-First World = More Customers

In 2025, over 70% of online traffic comes from mobile devices. If your startup doesn't have a responsive, mobile-friendly website, you're automatically losing out on a large audience. A well-designed site ensures that your customers have a smooth experience no matter where they browse from.

🎨 4. Showcasing Your Brand Identity

Your website is your digital identity. It reflects your vision, values, and professionalism. From colors and fonts to layouts and interactions, every design choice creates a brand experience for your visitors. A strong UI/UX makes sure they not only stay longer but also trust your business more.

💡 5. Affordable Yet Scalable Growth

The good news? Creating a professional website is now more affordable than ever. Whether you're a solopreneur, startup, or small business, you can start simple and scale as you grow. With the right partner, your website can evolve into an e-commerce platform, a booking system, or even a complete business management tool.

✅ Conclusion

If you're a startup in 2025, not having a website means missing out on opportunities, customers, and growth. A website is more than just an online presence — it's your brand's foundation in the digital age.

At ADQ Infotech, we specialize in helping startups and small businesses design, develop, and elevate their digital presence with creative, modern, and user-friendly websites.`
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "ADQ INFOTECH Team",
      date: "March 15, 2024",
      image: "/lovable-uploads/9a921f90-c335-40c8-a042-9657da584de9.png",
      category: "Technology"
    },
    {
      id: 3,
      title: "Building Scalable Cloud Infrastructure for Modern Businesses",
      excerpt: "Learn how to design and implement cloud solutions that grow with your business needs.",
      author: "ADQ INFOTECH Team",
      date: "March 10, 2024",
      image: "/lovable-uploads/96594e1b-e7f6-4533-86d6-7850093a4c95.png",
      category: "Cloud Solutions"
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