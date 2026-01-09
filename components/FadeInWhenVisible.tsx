// Source - https://stackoverflow.com/a
// Posted by amann, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-06, License - CC BY-SA 4.0
import { motion } from "motion/react";
import React from "react";

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  style: string;
  delay?: number;
};

export const FadeInWhenVisible = ({ children, style, delay = 0}: FadeInWhenVisibleProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className={style}
    >
      {children}
    </motion.div>
  );
}
