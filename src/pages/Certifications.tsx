import { Award, Calendar, ExternalLink, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "June 2025",
      credentialId: "AWS",
      description: "Completed foundational AWS training covering core cloud concepts, global infrastructure, pricing models, and key services (EC2, S3, RDS, IAM). Gained knowledge of AWS security, architecture best practices, and cost optimization strategies.",
      skills: ["Cloud Concepts", "AWS Services", "Security", "Cost Optimization", "Architecture", "Deployment"],
      verifyUrl: "https://aws.amazon.com/verification",
      certificateUrl: "/AWS_Certificate.pdf",
      logo: "🏆",
      featured: true,
    },
    {
      id: 2,
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "June 2025",
      credentialId: "8587088",
      description: "Completed foundational training on Generative AI concepts, including large language models (LLMs), prompt engineering, and real-world applications. Gained hands-on experience with Google Cloud’s AI tools and APIs for building generative solutions.",
      skills: ["Gen AI", "LLMs", "Prompt Engineering", "Google Cloud AI"],
      verifyUrl: "https://cloud.google.com/certification",
      certificateUrl: "/Google_GenAI_Certificate.pdf",
      logo: "☁️",
      featured: true,
    },
    {
      id: 3,
      title: "Google Data Analytics",
      issuer: "Google (via Coursera)",
      date: "July 2023",
      credentialId: "B5T9KNZ6BK62",
      description: "Completed an 8-course, practice-based program by Google focused on preparing, cleaning, and analyzing data for actionable insights. Gained hands-on experience with real-world datasets and applied analytical thinking for data-driven decision-making.",
      skills: ["Data Analysis", "Tools & Platforms", "Data Visualization", "Analytical Thinking"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/B5T9KNZ6BK62",
      certificateUrl: "/GDA.pdf",
      logo: "⚛️",
      featured: false,
    },
    {
      id: 4,
      title: "Mastering Python",
      issuer: "Infosys Springboard",
      date: "June 2023",
      credentialId: "QR-Code in Certificate",
      description: "Completed an advanced Python program covering core and advanced concepts, data structures, object-oriented programming, and best practices for writing efficient, scalable code. Built real-world projects integrating APIs, automation, and data analysis.",
      skills: ["Core Python", "Object-Oriented Programming", "NumPy", "Pandas" , "Matplotlib"],
      verifyUrl: "https://verify.onwingspan.com/",
      certificateUrl: "/Infosys.pdf",
      logo: "🍃",
      featured: false,
    },
    // {
    //   id: 5,
    //   title: "Docker Certified Associate",
    //   issuer: "Docker Inc.",
    //   date: "July 2024",
    //   credentialId: "DOCKER-DCA-2024-07",
    //   description: "Demonstrates proficiency in containerization, Docker fundamentals, and container orchestration.",
    //   skills: ["Docker", "Containerization", "Docker Compose", "DevOps"],
    //   verifyUrl: "https://docker.com/certification",
    //   certificateUrl: "#",
    //   logo: "🐳",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Certified Kubernetes Application Developer",
    //   issuer: "Cloud Native Computing Foundation",
    //   date: "June 2024",
    //   credentialId: "CKAD-2024-06",
    //   description: "Validates skills in designing and deploying applications in Kubernetes environments.",
    //   skills: ["Kubernetes", "Container Orchestration", "YAML", "kubectl"],
    //   verifyUrl: "https://cncf.io/certification/verify",
    //   certificateUrl: "#",
    //   logo: "⚙️",
    //   featured: false,
    // },
    // {
    //   id: 7,
    //   title: "GitHub Actions Certification",
    //   issuer: "GitHub",
    //   date: "May 2024",
    //   credentialId: "GH-ACTIONS-2024-05",
    //   description: "Demonstrates expertise in automating workflows, CI/CD pipelines, and DevOps practices using GitHub Actions.",
    //   skills: ["CI/CD", "GitHub Actions", "Automation", "DevOps"],
    //   verifyUrl: "https://github.com/verify",
    //   certificateUrl: "#",
    //   logo: "🚀",
    //   featured: false,
    // },
    // {
    //   id: 8,
    //   title: "TensorFlow Developer Certificate",
    //   issuer: "TensorFlow",
    //   date: "April 2024",
    //   credentialId: "TF-DEV-2024-04",
    //   description: "Validates proficiency in building and training neural networks using TensorFlow for various ML applications.",
    //   skills: ["TensorFlow", "Machine Learning", "Neural Networks", "Python"],
    //   verifyUrl: "https://tensorflow.org/certificate",
    //   certificateUrl: "#",
    //   logo: "🧠",
    //   featured: false,
    // },
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to 
            continuous learning in various technologies and platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Cloud Platforms</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Most Recent Year</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Skills Validated</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Featured Certifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCertifications.map((cert) => (
              <Card key={cert.id} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{cert.logo}</div>
                      <div>
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <CardDescription className="font-medium text-primary">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>
                  </div>
                  <CardDescription className="mt-2">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="default" size="sm" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Verify
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h2 className="text-3xl font-bold font-heading mb-8">Other Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCertifications.map((cert) => (
              <Card key={cert.id} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl">{cert.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Verify
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
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
              <CardTitle className="text-2xl">Continuous Learning</CardTitle>
              <CardDescription className="text-gray-200">
                I'm constantly updating my skills and earning new certifications. 
                Check back regularly for the latest additions!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="/projects">View My Projects</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
