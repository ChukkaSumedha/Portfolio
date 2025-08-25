import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  implementation?: string;
  icon: React.ReactNode;
  accentColor: "blue" | "purple";
}

export function ProjectCard({
  title,
  period,
  description,
  technologies,
  achievements,
  implementation,
  icon,
  accentColor,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const accentClass = accentColor === "blue" ? "text-blue-accent" : "text-purple-accent";
  const bgAccentClass = accentColor === "blue" ? "bg-blue-accent" : "bg-purple-accent";
  const hoverAccentClass = accentColor === "blue" ? "hover:bg-blue-accent/20" : "hover:bg-purple-accent/20";

  return (
    <Card className="bg-dark-secondary border-dark-accent card-hover" data-testid={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 ${bgAccentClass} rounded-lg flex items-center justify-center mr-4`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-poppins font-semibold text-text-primary">{title}</h3>
            <p className="text-text-secondary text-sm">{period}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-text-secondary mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-3 py-1 ${
                  index % 2 === 0 
                    ? "bg-blue-accent/20 text-blue-accent" 
                    : "bg-purple-accent/20 text-purple-accent"
                } rounded-full text-sm font-mono`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-dark-accent pt-6 mt-6"
            >
              <h4 className={`font-semibold mb-3 ${accentClass}`}>Key Achievements:</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {implementation && (
                <>
                  <h4 className={`font-semibold mb-3 mt-4 ${accentColor === "blue" ? "text-purple-accent" : "text-blue-accent"}`}>
                    Technical Implementation:
                  </h4>
                  <p className="text-text-secondary text-sm">{implementation}</p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`bg-dark-accent ${hoverAccentClass} text-text-primary transition-colors mt-4`}
          data-testid={`project-toggle-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {isExpanded ? "Hide Details" : "View Details"}
        </Button>
      </CardContent>
    </Card>
  );
}
