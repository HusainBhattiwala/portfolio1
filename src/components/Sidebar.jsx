"use client";

import Logo from "./sidebar/Logo";
import Menu from "./sidebar/Menu";
import { useMenu } from "./Provider";
import { AnimatePresence, motion } from "framer-motion";

const sideBarVariants = {
  initial: { x: -100, opacity: 0 },
  final: { x: 0, opacity: 1 },
};

const Sidebar = () => {
  const { showMenu } = useMenu();
  return (
    <AnimatePresence>
      {showMenu ? (
        <aside
          className={`${
            showMenu ? "flex" : "hidden"
          } lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
        >
          {/* Sidebar Container */}

          <div className='toggle flex flex-col lg:m-5 w-full'>
            <Logo />
            <Menu />
          </div>
        </aside>
      ) : (
        <motion.aside
          key='menu'
          initial='initial'
          animate='final'
          exit='initial'
          variants={sideBarVariants}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          className={`${
            showMenu ? "flex" : "hidden"
          } lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
        >
          {/* Sidebar Container */}

          <div className='toggle flex flex-col lg:m-5 w-full'>
            <Logo />
            <Menu />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
