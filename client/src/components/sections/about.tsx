import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, Languages, Scale, Microscope } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for artificial intelligence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-secondary border-dark-accent card-hover">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-blue-accent">Education & Background</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-accent pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-text-primary">B.Tech + M.Tech Computer Science</h4>
                  <p className="text-text-secondary mb-1">Indian Institute of Technology, Bhubaneswar</p>
                  <p className="text-text-secondary mb-2">Nov 2020 - May 2025 | CGPA: 8.17</p>
                  <p className="text-sm text-text-secondary">Specialized in Machine Learning, Deep Learning, and Natural Language Processing</p>
                </div>
                <div className="border-l-4 border-purple-accent pl-6">
                  <h4 className="text-xl font-semibold mb-2 text-text-primary">Academic Excellence</h4>
                  <p className="text-text-secondary mb-1">12th Standard - 92.6% (CBSE)</p>
                  <p className="text-text-secondary">10th Standard - 87% (CBSE)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-secondary border-dark-accent card-hover">
              <CardHeader>
                <h3 className="text-2xl font-poppins font-semibold text-purple-accent">Research Interests</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="text-blue-accent mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Artificial Intelligence & Machine Learning</h4>
                    <p className="text-text-secondary text-sm">Deep learning, neural networks, and AI model optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Languages className="text-purple-accent mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Natural Language Processing</h4>
                    <p className="text-text-secondary text-sm">LLM fine-tuning, bias detection, and text analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Scale className="text-blue-accent mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-semibold text-text-primary">AI Ethics & Bias Mitigation</h4>
                    <p className="text-text-secondary text-sm">Developing fair and unbiased AI systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Microscope className="text-purple-accent mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Computer Vision</h4>
                    <p className="text-text-secondary text-sm">Medical imaging, object detection, and image classification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
