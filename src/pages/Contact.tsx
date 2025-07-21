import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aryashrestha17@gmail.com",
      href: "mailto:aryashrestha17@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9306193139",
      href: "tel:+91 9306193139",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sirsa, Haryana, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aryashrestha-sagar-584960285/",
      username: "@AryashresthaSagar",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aryashrestha2023",
      username: "@Arya0427",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, 
            and anyone interested in technology. Let's start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send me a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      {item.href === "#" ? (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      ) : (
                        <a 
                          href={item.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media and professional platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors group"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{social.label}</p>
                      <p className="text-muted-foreground text-xs">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time to Reach:</span>
                    <span className="font-medium">9 AM - 6 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Status:</span>
                    <span className="font-medium text-green-600">Available for Projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16">
          <Card className="bg-gradient-hero border-0 text-white shadow-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Prefer a Quick Chat?</CardTitle>
              <CardDescription className="text-gray-200">
                Schedule a brief call to discuss your project or collaboration ideas
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <a href="https://calendly.com/alexjohnson" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;