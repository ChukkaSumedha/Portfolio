import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Scale, Brain, Shield, Train } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Media Bias Mitigation",
      period: "M.Tech Project • Jul 2024 - Apr 2025",
      description: "Developed an AI system to detect and mitigate bias in media content using pretrained language models, focusing on the Kolkata Rape Case coverage through YouTube and Reddit analysis.",
      technologies: ["Transformers", "RAG", "Qwen-2.5", "NLP"],
      achievements: [
        "Built custom dataset from YouTube and Reddit comments",
        "Implemented classification models for bias and sentiment detection",
        "Used Retrieval-Augmented Generation with dual-headed prompt retrieval",
        "Achieved 74% effective debiasing using multiple evaluation metrics"
      ],
      implementation: "Evaluated performance using accuracy, F1-score, BERTScore, Sentence Similarity, and BLEU score metrics for comprehensive bias mitigation assessment.",
      icon: <Scale className="text-white text-xl" />,
      accentColor: "blue" as const,
    },
    {
      title: "Brain Tumor Detection",
      period: "Self Project • Aug 2023 - Oct 2023",
      description: "Built a deep learning model for automated brain tumor detection using medical imaging data, implementing VGG-16 architecture for accurate classification and early diagnosis support.",
      technologies: ["TensorFlow", "Keras", "VGG-16", "CNN"],
      achievements: [
        "Implemented VGG-16 Neural Network Architecture",
        "Used TensorFlow and Keras for model development",
        "Achieved high accuracy in tumor classification",
        "Medical imaging data preprocessing and augmentation"
      ],
      implementation: "This project demonstrates the application of deep learning in healthcare, potentially assisting medical professionals in early tumor detection and diagnosis.",
      icon: <Brain className="text-white text-xl" />,
      accentColor: "purple" as const,
    },
    {
      title: "Credit Card Fraud Detection",
      period: "Self Project • Feb 2022 - Apr 2022",
      description: "Developed a machine learning system to detect fraudulent credit card transactions using advanced algorithms and data preprocessing techniques on highly imbalanced datasets.",
      technologies: ["Scikit-learn", "Logistic Regression", "KNN", "EDA"],
      achievements: [
        "Performed comprehensive data preprocessing and EDA",
        "Handled highly imbalanced dataset using advanced techniques",
        "Conducted univariate and bivariate analysis",
        "Utilized grid search for optimal parameter tuning"
      ],
      implementation: "Achieved 93% classification recall using optimized machine learning algorithms, demonstrating high effectiveness in fraud detection while minimizing false negatives.",
      icon: <Shield className="text-white text-xl" />,
      accentColor: "blue" as const,
    },
    {
      title: "Metro Rail App",
      period: "Course Project • Aug 2021 - Oct 2021",
      description: "Implemented a metro travel application optimizing route selection for economical and time-saving travel using graph algorithms and data structures.",
      technologies: ["Dijkstra's Algorithm", "Graph Theory", "Data Structures", "C++"],
      achievements: [
        "Implemented Dijkstra's algorithm for shortest path calculation",
        "Optimized for both time and cost efficiency",
        "Used graph data structures for metro network representation",
        "Provided multiple route options with cost analysis"
      ],
      implementation: "The application ensures efficient route optimization, helping users find the most economical and time-saving travel options in metro systems.",
      icon: <Train className="text-white text-xl" />,
      accentColor: "purple" as const,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcase of my work in AI/ML, deep learning, and software development
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
