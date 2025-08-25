import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import resumePdf from "@assets/RESUME_SAI SATYA SUMEDHA CHUKKA_1756099940344.pdf";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Sumedha_Chukka_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume downloaded!",
      description: "Thank you for downloading my resume.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities in AI/ML, research collaborations, or any exciting projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-dark-secondary border-dark-accent">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-blue-accent">Contact Information</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-accent rounded-lg flex items-center justify-center">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <p className="text-text-secondary">chukkasumedha2311@gmail.com</p>
                    <p className="text-text-secondary text-sm">20cs02009@iitbbs.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-accent rounded-lg flex items-center justify-center">
                    <Phone className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Phone</h4>
                    <p className="text-text-secondary">+91 9492356033</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-accent rounded-lg flex items-center justify-center">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Location</h4>
                    <p className="text-text-secondary">IIT Bhubaneswar, Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-dark-secondary border-dark-accent">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-purple-accent">Connect With Me</h3>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sumedha-chukka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-accent hover:bg-blue-accent/80 rounded-lg flex items-center justify-center transition-colors"
                    data-testid="link-linkedin-footer"
                  >
                    <Linkedin className="text-white text-xl h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/sumedha-chukka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-accent hover:bg-purple-accent/80 rounded-lg flex items-center justify-center transition-colors"
                    data-testid="link-github-footer"
                  >
                    <Github className="text-white text-xl h-5 w-5" />
                  </a>
                  <a
                    href="mailto:chukkasumedha2311@gmail.com"
                    className="w-12 h-12 bg-blue-accent hover:bg-blue-accent/80 rounded-lg flex items-center justify-center transition-colors"
                    data-testid="link-email-footer"
                  >
                    <Mail className="text-white text-xl h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="bg-dark-secondary border-dark-accent">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-blue-accent">Download Resume</h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-6">Get a comprehensive overview of my experience and skills</p>
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-accent to-purple-accent hover:from-blue-accent/80 hover:to-purple-accent/80 text-white transition-all hover:scale-105 flex items-center space-x-2"
                  data-testid="button-download-resume"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-secondary border-dark-accent">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-purple-accent">Send a Message</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-text-primary">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-dark-primary border-dark-accent text-text-primary focus:ring-blue-accent focus:border-blue-accent"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-text-primary">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-dark-primary border-dark-accent text-text-primary focus:ring-blue-accent focus:border-blue-accent"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-text-primary">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-dark-primary border-dark-accent text-text-primary focus:ring-blue-accent focus:border-blue-accent"
                      data-testid="input-subject"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-text-primary">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-dark-primary border-dark-accent text-text-primary focus:ring-blue-accent focus:border-blue-accent resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-accent to-purple-accent hover:from-blue-accent/80 hover:to-purple-accent/80 text-white transition-all hover:scale-105"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
