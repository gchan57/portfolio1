import { motion } from "framer-motion";
import { Award, Medal, Star, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Programming",
    description: "Secured 5th Position at TopCoder",
    date: "2025",
  },
  {
    icon: Medal,
    title: "Hackathon Winner",
    description: "Secured 4th Position at Sakthi Hackathon 1.0",
    date: "2025",
  },
  {
    icon: Award,
    title: "Paper Presentations",
    description: "Secured 2nd Position at IEEE Technical Syposium",
    date: "2025",
  },
  {
    icon: Star,
    title: "Project ",
    description: "Coverted our idea to Protype for two SIH Problem Statements",
    date: "2025",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and recognitions along my journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center glow-hover group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <achievement.icon className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {achievement.description}
              </p>
              <span className="text-xs font-medium text-accent-primary">
                {achievement.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
