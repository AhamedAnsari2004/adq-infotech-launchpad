import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const mainProjects = [
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
    },
    {
      id: 2,
      title: "ApplyMate",
      description: "AI-powered job application automation tool that helps job seekers streamline their application process with intelligent matching and automated submissions",
      image: "/lovable-uploads/27b471c7-c842-4eb7-86fc-926e9aaf30e3.png",
      technologies: ["React", "TypeScript", "AI/ML", "API Integration"],
      category: "AI Platform",
      date: "2024",
      status: "Live",
      liveUrl: "https://applymat.lovable.app"
    },
    {
      id: 3,
      title: "CloudNest",
      description: "Cloud-based platform for seamless data management and collaboration with modern architecture and scalable infrastructure",
      image: "/lovable-uploads/cloudnest-logo.png",
      technologies: ["React", "TypeScript", "Cloud Services", "API Integration"],
      category: "Cloud Platform",
      date: "2024",
      status: "Live",
      liveUrl: "https://cloudnestt.lovable.app"
    }
  ];

  const portfolioProjects = [
    {
      id: 4,
      title: "Abdulrahman Portfolio",
      description: "Personal portfolio website showcasing projects and skills with modern design and interactive elements",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Portfolio",
      date: "2024",
      status: "Live",
      liveUrl: "https://abdulrahman-portfolio.lovable.app"
    },
    {
      id: 5,
      title: "Abdulsalam Portfolio",
      description: "Professional portfolio website featuring clean design and comprehensive project showcase",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Portfolio",
      date: "2024",
      status: "Live",
      liveUrl: "https://abdulsalam-portfolio.lovable.app"
    },
    {
      id: 6,
      title: "Ahamed Ansari Portfolio",
      description: "Creative portfolio website with unique design elements and smooth animations",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Portfolio",
      date: "2024",
      status: "Live",
      liveUrl: "https://ahamedansari-portfolio.lovable.app"
    },
    {
      id: 7,
      title: "Althaf Hussain Portfolio",
      description: "Modern portfolio website with responsive design and professional layout",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Portfolio",
      date: "2024",
      status: "Live",
      liveUrl: "https://althaffhussain-portfolio.lovable.app"
    }
  ];

  const allProjects = showAllProjects ? [...mainProjects, ...portfolioProjects] : mainProjects;

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
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects that are helping professionals automate their workflows and enhance their productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {allProjects.map((project) => (
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

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show Less' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;