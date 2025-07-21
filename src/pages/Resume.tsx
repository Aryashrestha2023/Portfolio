import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  // You can replace this with your actual resume URL
  const resumeUrl = "/Arya_BMU_Resume.pdf"; // Place your resume in the public folder

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">Resume</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download or view my complete resume to learn more about my background, 
              skills, and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <Card className="bg-card hover:shadow-elegant transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">My Resume</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground mb-6">
                  View or download my latest resume in PDF format
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleView} className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    View Resume
                  </Button>
                  <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resume Preview Section */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-center">Resume Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[8.5/11] bg-background border rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-muted-foreground">
                      Place your resume.pdf file in the public folder to display it here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      The resume will be embedded for preview once uploaded
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;