import ProjectsCard from "../ui/ProjectsCard";

const ProjectsCardSection = ({ title, data }) => {
  return (
    <section className='grid gap-5 p-5 mt-5 md:p-0'>
      <div className='text-xl font-bold text-highlight'>{title}</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl::grid-cols-3 gap-5'>
        {data.map((card) => (
          <ProjectsCard
            href={card.href}
            key={card.id}
            title={card.title}
            Icon={card.Icon}
            bgColor={card.bgColor}
            techStack={card.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCardSection;
