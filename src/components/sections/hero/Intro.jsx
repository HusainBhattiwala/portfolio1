import List from "@/components/ui/List";
import { Eye, History, ThumbsUp } from "lucide-react";
import Image from "next/image";

const Intro = ({}) => {
  return (
    <div className='flex flex-1 justify-center items-center flex-col md:flex-row gap-7'>
      <div className='flex flex-1'>
        <Image
          className='w-full aspect-video rounded-lg object-fill'
          src='/images/Hero.jpg'
          alt='/'
          width={500}
          height={300}
        />
      </div>
      <div className='flex flex-col justify-between flex-1 p-5 md:p-0'>
        <div className='flex flex-col gap-4 '>
          <div className='text-2xl text-highlight font-semibold'>
            Coding is fun - An introduction
          </div>
          <div className='flex gap-4'>
            <List variant='info' sizes='xs'>
              <Eye size={16} />
              2,36,898
            </List>
            <List variant='info' sizes='xs'>
              <History size={16} /> 1 month ago
            </List>
            <List variant='info' sizes='xs'>
              <ThumbsUp size={16} /> 23,729
            </List>
          </div>
        </div>
        <div className='text-secondary text-sm mt-2 md:mt-0  max-w-[500px]'>
          Welcome to the portfolio of Husain Bhattiwala, a passionate Full Stack
          Developer! With expertise in cutting-edge technologies like React
          Three Fiber, Next.js 13.5, and the MERN stack, I&apos;m dedicated to
          crafting immersive web experiences. My proficiency extends to MongoDB
          and REST API development, enabling me to create seamless, data-driven
          applications. Explore my work and journey through the digital world of
          innovation and efficiency.
        </div>
      </div>
    </div>
  );
};

export default Intro;
