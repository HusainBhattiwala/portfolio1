import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Trello,
  FlameIcon,
  Linkedin,
  Tv,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Video,
  X,
} from "lucide-react";
import List from "../ui/List";
import { useMenu } from "../Provider";
import { AnimatePresence, motion } from "framer-motion";

const sideBarVariants = {
  initial: { x: -100, opacity: 0 },
  final: { x: 0, opacity: 1 },
};

const Menu = ({}) => {
  const { showMenuVisibility } = useMenu();
  return (
    <motion.div
      key='menu'
      initial='initial'
      animate='final'
      exit='initial'
      variants={sideBarVariants}
      transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
      className='flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5'
      onClick={() => showMenuVisibility(false)}
    >
      <div className='block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl'>
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link='/' effect='slideUp'>
        <Home /> Home
      </List>

      <List link='/' effect='slideUp'>
        <Flame /> Trending
      </List>

      <List link='/' effect='slideUp'>
        <Code /> Snippets
      </List>

      {/* List 2 */}
      <div className='mt-5'>Socials</div>
      <List
        target='_blank'
        link='https://github.com/HusainBhattiwala'
        effect='slideUp'
      >
        <Github color='#2a9d8f' /> Github
      </List>

      <List
        target='_blank'
        link='https://www.linkedin.com/in/husain-bhattiwala-5253hb'
        effect='slideUp'
      >
        <Linkedin color='#0277b5' /> Linkedin
      </List>

      {/* List 3 */}
      <div className='mt-5'>Projects</div>
      <List
        target='_blank'
        link='https://github.com/HusainBhattiwala/Tshirt-Store'
        effect='slideUp'
      >
        <Shirt /> Tshirt Store
      </List>

      <List
        target='_blank'
        link='https://github.com/HusainBhattiwala/Ecommerce'
        effect='slideUp'
      >
        <ShoppingCart /> Ecommerce
      </List>

      <List
        target='_blank'
        link='https://github.com/HusainBhattiwala/trello-clone'
        effect='slideUp'
      >
        <Trello /> Trello-Clone
      </List>

      <List
        target='_blank'
        link='https://github.com/HusainBhattiwala/YelpCamp'
        effect='slideUp'
      >
        <FlameIcon /> Yelpcamp
      </List>

      <List
        target='_blank'
        link='https://netflix-clone-6db0b.web.app/'
        effect='slideUp'
      >
        <Tv /> Netflix Clone
      </List>
    </motion.div>
  );
};

export default Menu;
