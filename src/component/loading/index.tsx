"use client";
import { Variants, motion } from "framer-motion";

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
} as Variants;

const BarLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-5 w-2 bg-[#e3f7ff]" />
        <motion.div variants={variants} className="h-5 w-2 bg-[#e3f7ff]" />
        <motion.div variants={variants} className="h-5 w-2 bg-[#e3f7ff]" />
        <motion.div variants={variants} className="h-5 w-2 bg-[#e3f7ff]" />
        <motion.div variants={variants} className="h-5 w-2 bg-[#e3f7ff]" />
      </motion.div>
    </div>
  );
};

export default BarLoader;
