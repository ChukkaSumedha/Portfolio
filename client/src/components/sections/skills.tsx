import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Bot, Globe, BarChart3, Database, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: "blue" | "purple";
}

function SkillBar({ skill, percentage, color }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const colorClass = color === "blue" ? "bg-blue-accent" : "bg-purple-accent";

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-text-primary">{skill}</span>
        <span className="text-text-secondary text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-dark-accent rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white text-xl" />,
      color: "blue" as const,
      skills: [
        { name: "Python", percentage: 95 },
        { name: "C++", percentage: 85 },
        { name: "SQL", percentage: 80 },
        { name: "C", percentage: 75 },
      ],
    },
    {
      title: "ML/AI Frameworks",
      icon: <Bot className="text-white text-xl" />,
      color: "purple" as const,
      skills: [
        { name: "TensorFlow", percentage: 90 },
        { name: "PyTorch", percentage: 85 },
        { name: "Keras", percentage: 88 },
        { name: "Scikit-learn", percentage: 85 },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="text-white text-xl" />,
      color: "blue" as const,
      skills: [
        { name: "React JS", percentage: 80 },
        { name: "Node JS", percentage: 75 },
        { name: "Bootstrap", percentage: 85 },
        { name: "API Development", percentage: 70 },
      ],
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="text-white text-xl" />,
      color: "purple" as const,
      skills: [
        { name: "NumPy", percentage: 90 },
        { name: "Pandas", percentage: 88 },
        { name: "Matplotlib", percentage: 85 },
        { name: "Seaborn", percentage: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="text-white text-xl" />,
      color: "blue" as const,
      skills: [
        { name: "MySQL", percentage: 85 },
        { name: "MongoDB", percentage: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="text-white text-xl" />,
      color: "purple" as const,
      skills: [
        { name: "Git/GitHub", percentage: 90 },
        { name: "Google Colab", percentage: 95 },
        { name: "Linux", percentage: 80 },
        { name: "Kaggle", percentage: 85 },
      ],
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
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.percentage}
                      color={category.color}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
