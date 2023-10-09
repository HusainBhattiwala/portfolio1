import Cover from "@/components/Cover";
import CardSection from "@/components/sections/CardSection";
import ProjectsCardSection from "@/components/sections/ProjectsCardSection";
import {
  backendCard,
  databaseCard,
  frontendCard,
  otherCards,
  projectCard,
} from "@/components/utils/Data";

export default function Home() {
  return (
    <div>
      <Cover />
      {/* Hero */}
      <div className='flex flex-col gap-10 lg:px-10'>
        <ProjectsCardSection title='Projects' data={projectCard} />{" "}
        <CardSection title='Frontend' data={frontendCard} />
        <CardSection title='Backend' data={backendCard} />
        <CardSection title='Database' data={databaseCard} />
        <CardSection title='Others' data={otherCards} />
      </div>
    </div>
  );
}
