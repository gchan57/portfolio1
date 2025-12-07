import { motion } from "framer-motion";
import { Linkedin, Code2, Trophy, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const profiles = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/guna-chandru-160501233",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/tgunachandru",
    color: "hover:text-[#FFA116]",
  },
  {
    name: "AtCoder",
    icon: Trophy,
    url: "https://atcoder.jp/users/Guncahandru",
    color: "hover:text-[#222222] dark:hover:text-[#00BFFF]",
  },
  {
    name: "Codeforces",
    icon: ExternalLink,
    url: "https://codeforces.com/profile/gunachandru",
    color: "hover:text-[#1F8ACB]",
  },
];

export const ProfileSection = () => {
  return (
    <section id="profile" className="py-24 bg-section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Find me on various platforms where I solve problems, compete, and
            share my professional journey. Let's connect and collaborate!
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {profiles.map((profile, index) => (
              <Tooltip key={profile.name}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className={`icon-button ${profile.color}`}
                    aria-label={profile.name}
                  >
                    <profile.icon className="w-6 h-6" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{profile.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
