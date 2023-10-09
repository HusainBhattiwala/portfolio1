"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const imgVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const ProfilePic = ({}) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={imgVariants}
      transition={{
        type: "spring",
        duration: 1,
      }}
      className=''
    >
      <Image
        alt='Husain Bhattiwala'
        src='/images/HusainBhattiwala.jpg'
        height={120}
        width={120}
        className='object-cover border-4 border-white rounded-full shadow-md'
      />
    </motion.div>
  );
};

export default ProfilePic;
