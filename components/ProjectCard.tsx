import React from 'react';
import Logo from './Logo';
import AnimatedCard from './AnimatedCard';
import Image from "next/image";
import { Project } from '../data/projectData';

interface Props {
  index: number;
  project: Project;
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <AnimatedCard index={props.index}>
      <div className="relative flex flex-col h-full max-w-md min-h-full pb-8 m-auto overflow-hidden transition transform bg-white rounded-lg shadow-lg hover:-translate-y-2 md:mx-2">
        <a href={props.project.liveLink} target="_blank" rel="noreferrer">
          <Image
            src={props.project.media}
            className="object-cover object-top w-full !h-64 !relative"
            alt={`Hero image for ${props.project.title}`}
            fill
          />
        </a>
        <div className="flex flex-col h-1/2">
          <h2 className="px-8 pt-4 text-2xl font-bold tracking-wide text-gray-900">
            {props.project.title}
          </h2>
          <p className="px-8 pt-1 text-xs tracking-widest text-gray-600 uppercase">
            {props.project.technologies.join(' | ')}
          </p>
          <div className="h-full px-8 pt-2 text-gray-900">
            {props.project.copy}
          </div>
          <div className="flex m-auto mt-4">
            {props.project.liveLink && (
              <Logo
                icon="/external-link.svg"
                link={props.project.liveLink}
                name="Live Site"
              />
            )}
            {props.project.gitLink && (
              <Logo
                icon="/GitHub-Mark.svg"
                link={props.project.gitLink}
                name="GitHub"
              />
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;
