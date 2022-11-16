import { PortfolioProject, Technology } from '@data/projects';

const Project = ({
  title,
  description,
  websiteImage,
  websiteLink,
  githubLink,
  technologiesUsed,
  alignment,
}: PortfolioProject) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="grid grid-flow-col grid-cols-12 justify-between items-center mx-auto relative">
        <div className="relative" style={{ gridColumn: '1/12' }}>
          <div className="w-full absolute max-w-2xl">
            <img src={websiteImage}></img>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end z-10 gap-8 text-end" style={{ gridColumn: '8/13' }}>
          <h3>{title}</h3>
          <div className="shadow bg-gray-600 p-4">{description}</div>
          <div>
            <h4>Frontend:</h4>
            <ul className="flex flex-row">
              {technologiesUsed.frontEnd.map(({ name, icon }: Technology) => {
                return (
                  <li key={name} className="flex flex-col">
                    <img className="max-h-4 max-w-4" src={icon} alt={name} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4>Backend:</h4>
            <ul className="flex flex-row">
              {technologiesUsed.backEnd.map(({ name, icon }: Technology) => {
                return (
                  <li key={name} className="flex flex-col">
                    <img className="max-h-4 max-w-4" src={icon} alt={name} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-row justify-end gap-4 w-full">
            {githubLink && (
              <a target="_blank" href={githubLink} title="Github">
                <i className="bx bxl-github"></i>
              </a>
            )}
            <a target="_blank" href={websiteLink} title="Website link">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
