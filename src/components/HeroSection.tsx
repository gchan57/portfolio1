import { motion } from "framer-motion";
import { ArrowDown, FileText, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-border shadow-xl">
              <AvatarImage src="/profile-photo.jpg" alt="Profile photo" />
              <AvatarFallback className="text-3xl sm:text-4xl bg-muted">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase"
          >
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Guna Chandru</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Electronics Student
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about{" "}
            <span className="text-foreground font-medium">Embedded Systems</span> and{" "}
            <span className="text-foreground font-medium">Coding</span>. I build
            hardware-software integrated projects and love exploring 
            programming and new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="glow-hover text-base px-8 py-6"
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-base px-8 py-6 border-2"
            >
              <a href="/resume.pdf" download>
                <FileText className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
