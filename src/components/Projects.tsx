import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built for a local retail business",
      image: "/lovable-uploads/2cd77b6d-8e6a-419b-9f38-b020e605f48d.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development",
      date: "2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with POS, inventory, and customer management",
      image: "/lovable-uploads/96594e1b-e7f6-4533-86d6-7850093a4c95.png",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      category: "SaaS Platform",
      date: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Patient management and appointment booking system for healthcare providers",
      image: "/lovable-uploads/c71b88b2-cf82-4265-aee0-6eb00751ac57.png",
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS"],
      category: "Healthcare",
      date: "2024",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Educational LMS",
      description: "Learning management system with video streaming and interactive assessments",
      image: "/lovable-uploads/9a921f90-c335-40c8-a042-9657da584de9.png",
      technologies: ["React", "Django", "Redis", "Docker"],
      category: "Education",
      date: "2023",
      status: "Completed"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Real-time financial analytics and reporting dashboard for investment firms",
      image: "/lovable-uploads/0a704aa7-19eb-45f5-8742-02af7c0236ea.png",
      technologies: ["Next.js", "Python", "TensorFlow", "Chart.js"],
      category: "Fintech",
      date: "2023",
      status: "Completed"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Mobile-first social networking platform with real-time messaging",
      image: "/lovable-uploads/d1ff1f98-774c-43f5-85f8-5c325f42a655.png",
      technologies: ["React Native", "Firebase", "GraphQL", "Redis"],
      category: "Mobile App",
      date: "2023",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful projects across various industries. 
            From startups to enterprises, we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={14} className="mr-1" />
                    View Live
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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