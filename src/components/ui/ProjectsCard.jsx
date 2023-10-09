import Link from "next/link";

const ProjectsCard = ({ title, Icon, href, bgColor, techStack }) => {
  return (
    <Link target='_blank' href={href || "/"}>
      <div className='flex gap-3 bg-cardPrimary rounded-lg overflow-ellipsis p-3'>
        <div
          className='flex h-20 w-20 rounded-md justify-center items-center'
          style={{ backgroundColor: bgColor }}
        >
          <Icon />
        </div>
        <div className='flex flex-col'>
          <div className='flex font-bold'>{title}</div>
          <div className='flex text-info text-sm'>{techStack}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
