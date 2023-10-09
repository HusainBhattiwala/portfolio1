import Intro from "./hero/Intro";
import Stats from "./hero/Stats";

const Hero = ({}) => {
  return (
    <section className='flex mt-10'>
      <Intro />
      <Stats />
    </section>
  );
};

export default Hero;
