import { GraduationCap, MapPin, Calendar, Code2, Trophy, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePlaceholder from "../assets/profile-placeholder.jpg";

const About = () => {
  const technologies = [
    "C/C++", "Python", "Java", "SQL", "CSS", "HTML", "Javascript", "R", "Git", "AWS", "Node.js", "Tailwind css"
  ];

  const interests = [
    "Machine Learning", "Generative AI", "IOT", "Open Source", "Competitive Programming", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src={profilePlaceholder}
            alt="Alex Johnson"
            className="w-40 h-40 rounded-full mx-auto mb-8 shadow-2xl border-4 border-primary/20"
          />
          <h1 className="text-5xl font-bold font-heading mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate computer science student dedicated to creating innovative solutions 
            and contributing to the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Story */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  Hello! I'm Aryashrestha Sagar, a 4th-year BTech Computer Science student with an insatiable 
                  curiosity for technology and its potential to solve real-world problems. My journey in 
                  programming began during my first year when I wrote my first "Hello World" program, 
                  and since then, I've been captivated by the endless possibilities of code.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Over the years, I've developed a strong foundation in software development and AI/ML , with 
                  particular expertise in modern web technologies. I believe in writing clean, efficient 
                  code and am always eager to learn new technologies and frameworks that can help me 
                  build better solutions.
                </p>
                <p className="text-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, participating 
                  in hackathons, or exploring the latest developments in AI and machine learning. I'm 
                  passionate about using technology to make a positive impact and am always looking for 
                  opportunities to collaborate on meaningful projects.
                </p>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Technologies & Tools
                </CardTitle>
                <CardDescription>
                  Technologies I work with regularly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Areas of Interest
                </CardTitle>
                <CardDescription>
                  Fields I'm passionate about and actively exploring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="px-3 py-1">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">BTech Computer Science</h4>
                  <p className="text-muted-foreground text-sm">BML Munjal University</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    2022 - 2026
                  </div>
                  <p className="text-sm mt-1">CGPA: 8.2/10.0</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Senior Secondary (12th)</h4>
                  <p className="text-muted-foreground text-sm">Delhi Public School Sirsa</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    2021 - 2022
                  </div>
                  <p className="text-sm mt-1">Percentage: 90%</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sirsa, Haryana, India</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Open to remote opportunities
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GitHub Repositories</span>
                  <span className="font-semibold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Years Coding</span>
                  <span className="font-semibold">2+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;