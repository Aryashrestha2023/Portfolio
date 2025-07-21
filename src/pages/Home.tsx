import { ArrowRight, Cloud, Code, Database, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import profilePlaceholder from "../assets/profile-placeholder.jpg";

const Home = () => {
  const skills = [
    {
      icon: Code,
      title: "Programming & Development",
      description: "C++, Python, Object-Oriented Programming, Data Structures & Algorithms, Socket Programming, Multithreading",
    },
    {
      icon: Cloud,
      title: "Web & Cloud Technologies",
      description: "React, Node.js, Streamlit, AWS, Google Cloud, Babylon.js",
    },
    {
      icon: Globe,
      title: "Data, AI & Analytics",
      description: "Machine Learning, Deep Learning, Data Analytics, Generative AI, LLMs, Prompt Engineering, LangChain",
    },
    {
      icon: Smartphone,
      title: " Tools & Other Skills",
      description: "Git, GitHub, Selenium, Problem Solving, Agile Methodologies",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <img
              src={profilePlaceholder}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Aryashrestha Sagar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              4th Year BTech Student • Software Development • AI/ML • Data Science • Tech Enthusiast
            </p>
            <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building the future through code.
              Currently pursuing Computer Science Engineering with a focus on modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and growing in various technologies to build better solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Explore My Work</h2>
            <p className="text-xl text-muted-foreground">
              Discover my projects, achievements, and ways to connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">Projects</CardTitle>
                <CardDescription>
                  Applications and innovative solutions I've built
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gradient" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
                <CardDescription>
                  Learn more about my background, education, and journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gradient" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">Certifications</CardTitle>
                <CardDescription>
                  Professional certifications and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="gradient" asChild>
                  <Link to="/certifications">View Certificates</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;