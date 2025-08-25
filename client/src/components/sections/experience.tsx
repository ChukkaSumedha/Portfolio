import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, GraduationCap, Camera, Brain, Cog, TrendingUp } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Research Intern",
      company: "AHRC",
      period: "May 2024 - July 2024",
      icon: <FlaskConical className="text-white text-xl" />,
      color: "blue" as const,
      responsibilities: [
        "Assessed the capability of Mistral AI LLM in performing Theory of Mind (ToM) tasks, focusing on its ability to infer and reason about mental states based on textual input.",
        "Fine-tuned the Mistral AI LLM with varied prompts, integrating diverse NLP techniques and enhancing performance by 25%.",
        "Conducted comprehensive evaluation using multiple metrics to assess model improvements in understanding and reasoning capabilities."
      ],
      technologies: ["Mistral AI", "LLM Fine-tuning", "Theory of Mind", "NLP"],
      highlights: [
        { icon: Brain, text: "Advanced AI research in Theory of Mind" },
        { icon: Cog, text: "25% performance improvement through fine-tuning" },
        { icon: TrendingUp, text: "Comprehensive model evaluation metrics" }
      ]
    },
    {
      title: "Teaching Assistant",
      company: "IIT Bhubaneswar",
      period: "Academic Sessions",
      icon: <GraduationCap className="text-white text-xl" />,
      color: "purple" as const,
      responsibilities: [
        "Worked as Teaching Assistant for Database Management Systems (DBMS) laboratory, helping students understand complex database concepts and SQL operations.",
        "Assisted in Data Structures Laboratory sessions, guiding students through algorithm implementation and problem-solving techniques.",
        "Mentored students in understanding fundamental computer science concepts and provided support in coding assignments and projects."
      ],
      technologies: ["DBMS", "Data Structures", "Teaching", "Mentoring"],
      highlights: [
        { icon: Brain, text: "Database management systems expertise" },
        { icon: Cog, text: "Algorithm implementation guidance" },
        { icon: TrendingUp, text: "Student mentoring and support" }
      ]
    },
    {
      title: "Core Head Member",
      company: "Clix Society, IIT Bhubaneswar",
      period: "Photography Club",
      icon: <Camera className="text-white text-xl" />,
      color: "blue" as const,
      responsibilities: [
        "Led photography initiatives and organized workshops for students interested in photography and visual storytelling.",
        "Coordinated events and competitions, fostering creativity and artistic expression within the campus community.",
        "Developed leadership and team management skills while building a vibrant photography community at the institute."
      ],
      technologies: ["Leadership", "Photography", "Event Management", "Team Building"],
      highlights: [
        { icon: Brain, text: "Photography workshops and training" },
        { icon: Cog, text: "Event coordination and management" },
        { icon: TrendingUp, text: "Community building and leadership" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and research experience in AI/ML development
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-dark-accent"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12"
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${
                experience.color === "blue" ? "bg-blue-accent" : "bg-purple-accent"
              } rounded-full border-4 border-dark-primary`}></div>
              
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:ml-auto md:pl-8"
              }`}>
                <Card className="bg-dark-secondary border-dark-accent card-hover" data-testid={`experience-${experience.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${
                        experience.color === "blue" ? "bg-blue-accent" : "bg-purple-accent"
                      } rounded-lg flex items-center justify-center mr-4`}>
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-poppins font-semibold text-text-primary">{experience.title}</h3>
                        <p className={`font-medium ${
                          experience.color === "blue" ? "text-blue-accent" : "text-purple-accent"
                        }`}>{experience.company}</p>
                        <p className="text-text-secondary text-sm">{experience.period}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`mt-1 h-1 w-1 rounded-full ${
                            experience.color === "blue" ? "bg-blue-accent" : "bg-purple-accent"
                          }`}></div>
                          <p className="text-text-secondary text-sm">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className={`px-3 py-1 ${
                            idx % 2 === 0 
                              ? "bg-blue-accent/20 text-blue-accent" 
                              : "bg-purple-accent/20 text-purple-accent"
                          } rounded-full text-sm font-mono`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
