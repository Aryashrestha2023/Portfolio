import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img1 from '@/assets/1.png';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "3D Floor Plan Generator",
      description: "Built a deep learning pipeline using CNNs and GATs for room centroid prediction and size optimization, with a graph-based floor plan model. Integrated Babylon.js for real-time 2D-to-3D conversion and interactive visualization.",
      image: img1,
      technologies: ["CNN", "GAT", "Python", "Babylon.js", "Deep Learning"],
      // liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/Aryashrestha2023/AI-Powered_Residential_3D_Floor_Plan_Generator",
      date: "Nov 2024",
      featured: true,
    },
    {
      id: 2,
      title: "Build own Redis Client & Server",
      description: "Built a Redis-like in-memory key-value store from scratch using C++ with custom TCP socket programming and multithreading. Implemented core data structures, command processing, and response formatting for efficient client-server communication.",
      image: img2,
      technologies: ["C++", "Socket Programming", "Multithreading", "Data Structures", "Command Processing and Response Formatting"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      date: "Oct 2024",
      featured: true,
    },
    {
      id: 3,
      title: "Multiscrapper AI",
      description: "Developed an AI-powered multi-source scraper supporting YouTube video summarization, PDF/website content extraction, and real-time QA. Integrated Google Gemini, LLaMA, and LangChain with dynamic proxy handling using Bright Data for seamless data parsing.",
      image: img3,
      technologies: ["GEN AI", "Gemini", "Llama", "Streamlit", "Python", "Selenium", "Web Scrapping"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/Aryashrestha2023/MultiScrapperGenAi",
      date: "Sep 2024",
      featured: false,
    },
    {
      id: 4,
      title: "Alzheimer Disease Detection",
      description: "Implemented VGG16 and custom CNNs for multiclass Alzheimer’s classification using transfer learning. Preprocessed MRI scans with skull stripping, normalization, and rescaling to enhance accuracy and compare performance across datasets.",
      image: img4,
      technologies: ["DIP", "Transfer Learning", "Python", "CNN", "VGG16"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/Aryashrestha2023/alzheimers_mri_classification_vgg16_cnn",
      date: "Aug 2024",
      featured: false,
    },
    {
      id: 5,
      title: "Faculty Management System",
      description: "Developed a faculty management platform with Java and MySQL for efficient record handling, attendance tracking, and workload management. Implemented OOP principles, JDBC connectivity, and a user-friendly GUI for seamless operations.",
      image: img5,
      technologies: ["Java", "MySQL", "OOP's"],
      liveUrl: "https://recipe-finder-demo.com",
      githubUrl: "https://github.com/alexjohnson/recipe-finder",
      date: "Jul 2024",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies. Features smooth animations, dark mode support, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://alexjohnson-portfolio.com",
      githubUrl: "https://github.com/alexjohnson/portfolio",
      date: "Jun 2024",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in various technologies 
            and my passion for creating meaningful solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-2">
            <Tag className="h-6 w-6 text-primary" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold font-heading mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero border-0 text-white max-w-2xl mx-auto shadow-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Interested in Collaboration?</CardTitle>
              <CardDescription className="text-gray-200">
                I'm always open to working on exciting projects and learning new technologies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
