import { motion } from "framer-motion";
import { ExternalLink, Github, Trash, Wifi, Gauge, Lightbulb, Radio, Shield,Tractor,GaugeIcon,Sprout } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Coolant Dashboard ",
    description: "IoT-based Coolant Dashboard which monitor for Coolant abnormalities in Real-time",
    icon: GaugeIcon,
    tags: ["ESP32", "React", "Firebase"],
    demo: "https://coolantdashm.netlify.app/",
    code: "https://github.com/gchan57/mcetweb1",
  },
  {
    title: "Agro-Smart",
    description: "Aimed to Help Farmers in Hilly Region to achive Efficient Yeild",
    icon: Tractor,
    tags: ["ESP32", "Flutter", "Firebase","ngrok"],
    demo: "https://github.com/gchan57/nepro",
    code: "https://github.com/gchan57/nepro",
  },
  {
    title: "Waste Vision",
    description: "Helps Waste Segrigation and monitoring For urban local Bodies",
    icon: Trash,
    tags: ["ESP32", "Flutter", "Firebase","ngrok"],
    demo: "https://github.com/gchan57/Wastevision",
    code: "https://github.com/gchan57/Wastevision",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of hardware-software integrated projects I've built
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col glow-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <project.icon className="w-6 h-6 text-accent-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
