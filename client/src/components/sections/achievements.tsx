import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Atom, GraduationCap } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "JEE Advanced 2020",
      description: "Secured rank under the top 7% among more than 1,60,000 students from all over India",
      metric: "Top 7% Rank",
      detail: "Out of 1,60,000+ candidates",
      icon: <Trophy className="text-white text-2xl" />,
      color: "blue" as const,
    },
    {
      title: "JEE Mains 2020",
      description: "Achieved exceptional performance with 99.28 percentile in the national level entrance examination",
      metric: "99.28 Percentile",
      detail: "National Level Examination",
      icon: <Medal className="text-white text-2xl" />,
      color: "purple" as const,
    },
    {
      title: "KVPY Fellowship 2020",
      description: "Secured the prestigious Kishore Vaigyanik Protsahan Yojana fellowship among 0.15 million students",
      metric: "KVPY Fellow",
      detail: "Selected from 1.5 lakh students",
      icon: <Award className="text-white text-2xl" />,
      color: "blue" as const,
    },
    {
      title: "NSEC Chemistry",
      description: "Ranked among the top 1% of candidates across the nation in the National Standard Examination in Chemistry",
      metric: "Top 1% Rank",
      detail: "National Chemistry Olympiad",
      icon: <Atom className="text-white text-2xl" />,
      color: "purple" as const,
    },
  ];

  const academicRecord = {
    title: "Academic Excellence",
    description: "Consistently maintained high academic standards throughout my educational journey",
    records: [
      { metric: "CGPA 8.17", detail: "IIT Bhubaneswar", color: "blue" },
      { metric: "92.6%", detail: "12th Standard", color: "purple" },
      { metric: "87%", detail: "10th Standard", color: "blue" },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 gradient-text">Achievements</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Recognition and accomplishments that highlight my academic excellence and competitive spirit
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-dark-secondary border-dark-accent card-hover text-center" data-testid={`achievement-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${
                    achievement.color === "blue" ? "bg-blue-accent" : "bg-purple-accent"
                  } rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {achievement.icon}
                  </div>
                  <h3 className={`text-xl font-poppins font-semibold mb-4 ${
                    achievement.color === "blue" ? "text-blue-accent" : "text-purple-accent"
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {achievement.description}
                  </p>
                  <div className={`${
                    achievement.color === "blue" ? "bg-blue-accent/10" : "bg-purple-accent/10"
                  } rounded-lg p-4`}>
                    <p className={`${
                      achievement.color === "blue" ? "text-blue-accent" : "text-purple-accent"
                    } font-semibold`}>
                      {achievement.metric}
                    </p>
                    <p className="text-text-secondary text-sm">{achievement.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Academic Excellence Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className="bg-dark-secondary border-dark-accent card-hover text-center" data-testid="achievement-academic-excellence">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4 gradient-text">
                  {academicRecord.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {academicRecord.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {academicRecord.records.map((record, index) => (
                    <div
                      key={record.metric}
                      className={`${
                        record.color === "blue" ? "bg-blue-accent/10" : "bg-purple-accent/10"
                      } rounded-lg p-4`}
                    >
                      <p className={`${
                        record.color === "blue" ? "text-blue-accent" : "text-purple-accent"
                      } font-semibold`}>
                        {record.metric}
                      </p>
                      <p className="text-text-secondary text-sm">{record.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
