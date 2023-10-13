"use client";
import Link from "next/link";
import Button from "../ui/Button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const ProfileName = ({}) => {
  const btnVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: [0.8, 1.3, 1] },
  };

  return (
    <div className='text-3xl flex flex-col font-bold text-highlight'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={btnVariants}
        transition={{
          type: "spring",
          duration: 0.7,
        }}
        className='flex flex-row'
      >
        Husain Bhattiwala
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={btnVariants}
        transition={{
          type: "spring",
          duration: 0.7,
        }}
        className='text-sm font-thin flex justify-between items-center'
      >
        @ezCodeBits
        <Link
          className='block md:hidden'
          href='https://github.com/HusainBhattiwala'
          target='_blank'
        >
          <Button variant='primary' sizes={"iconOnly"}>
            <Github />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProfileName;
