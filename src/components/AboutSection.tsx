import { motion } from "framer-motion";
import { Cpu, Code, Zap, BookOpen } from "lucide-react";

const skills = [
  { name: "C", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "STM32", category: "Embedded" },
  { name: "Arduino", category: "Embedded" },
  { name: "ESP32", category: "Embedded" },
  { name: "RTOS", category: "Embedded" },
  { name: "Git", category: "Tools" },
  { name: "Linux", category: "Tools" },
];

const highlights = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Designing firmware for microcontrollers and building IoT solutions",
  },
  {
    icon: Code,
    title: "Competitive Programming",
    description: "Solving algorithmic challenges on LeetCode, Codeforces & AtCoder",
  },
  {
    icon: Zap,
    title: "Hardware-Software Integration",
    description: "Building complete systems from Embedded to application layer",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving my skillset",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate engineer bridging the gap between hardware and software
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <br></br>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As an Electronics 
                student, I've always been fascinated by the
                intersection of hardware and software. My journey began with
                curiosity about how electronic devices work, which led me to
                explore embedded systems programming.
              </p>
              <br></br>
              <p>
                Today, I specialize in developing firmware for microcontrollers,
                 and building complete IoT solutions. I believe in
                writing clean, efficient code and creating hardware that just works.
              </p>
              <br></br>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="glass-card p-6 glow-hover"
              >
                <item.icon className="w-8 h-8 text-accent-primary mb-3" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="tech-tag"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
