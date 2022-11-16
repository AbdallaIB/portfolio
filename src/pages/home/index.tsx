import Banner from '@components/banner';
import Project from '@components/project';
import projectsData, { PortfolioProject } from '@data/projects';

const HomePage = () => {
  return (
    <section className="w-full bg-gray-900 text-white">
      <header className="w-full">
        <Banner></Banner>
      </header>
      <main>
        <div className="relative flex flex-col items-center justify-center">
          {projectsData.map((project: PortfolioProject) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      </main>
      <footer></footer>
    </section>
  );
};

export default HomePage;
