import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "APPRENTICE",
      description: "LinkedIn Post Automation Tool - Streamline your LinkedIn content creation and scheduling with our powerful automation platform",
      image: "/lovable-uploads/c4cbff3a-2fb2-4976-8860-fa50a7e8f6c1.png",
      technologies: ["React", "TypeScript", "Node.js", "LinkedIn API"],
      category: "SaaS Platform",
      date: "2024",
      status: "Live",
      liveUrl: "https://apprentice.lovable.app"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest project that's helping professionals automate their LinkedIn presence and grow their network effectively.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="max-w-md w-full">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2 text-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;