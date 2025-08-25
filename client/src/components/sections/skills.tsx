import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bot, Globe, BarChart3, Database, Settings } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white text-xl" />,
      color: "blue" as const,
      skills: ["Python", "C++", "SQL", "C"],
    },
    {
      title: "ML/AI Frameworks",
      icon: <Bot className="text-white text-xl" />,
      color: "purple" as const,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
    },
    {
      title: "Web Development",
      icon: <Globe className="text-white text-xl" />,
      color: "blue" as const,
      skills: ["React JS", "Node JS", "Bootstrap", "API Development"],
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="text-white text-xl" />,
      color: "purple" as const,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Databases",
      icon: <Database className="text-white text-xl" />,
      color: "blue" as const,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="text-white text-xl" />,
      color: "purple" as const,
      skills: ["Git/GitHub", "Google Colab", "Linux", "Kaggle"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My expertise spans across various domains of computer science and artificial intelligence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark-secondary border-dark-accent card-hover" data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.color === "blue" ? "bg-blue-accent" : "bg-purple-accent"} rounded-lg flex items-center justify-center mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-text-primary">{category.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`px-3 py-2 ${
                          skillIndex % 2 === 0 
                            ? "bg-blue-accent/20 text-blue-accent" 
                            : "bg-purple-accent/20 text-purple-accent"
                        } rounded-full text-sm font-mono`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
