import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import sumedhaImage from "@assets/Sumedha_1756099929489.jpg";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="text-lg text-text-secondary mb-4">Hello, I'm</div>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="gradient-text">Sumedha Chukka</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-poppins font-medium text-text-secondary mb-6">
            AI/ML Engineer & Computer Science Graduate
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
            Currently completing my dual degree at IIT Bhubaneswar with expertise in deep learning, 
            natural language processing, and bias mitigation in AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-blue-accent hover:bg-blue-accent/80 text-white px-8 py-3 transition-all hover:scale-105"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white px-8 py-3 transition-all hover:scale-105"
              data-testid="button-projects"
            >
              View My Work
            </Button>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/sumedha-chukka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-blue-accent transition-colors text-xl"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/sumedha-chukka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-blue-accent transition-colors text-xl"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:chukkasumedha2311@gmail.com"
              className="text-text-secondary hover:text-blue-accent transition-colors text-xl"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-accent"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(217, 91%, 60%, 0.3)",
                  "0 0 30px hsl(217, 91%, 60%, 0.6)",
                  "0 0 20px hsl(217, 91%, 60%, 0.3)"
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={sumedhaImage}
                alt="Sumedha Chukka - AI/ML Engineer"
                className="w-full h-full object-cover"
                data-testid="img-hero-photo"
              />
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-accent rounded-full opacity-20"
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-accent rounded-full opacity-30"
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
