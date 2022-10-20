import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import projects, { Project } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import Page from '../components/Page';

function Projects() {
  const router = useRouter();
  const { searchQuery } = router.query;

  const [search, setSearch] = useState(
    (Array.isArray(searchQuery) ? searchQuery.join(',') : searchQuery) ?? ''
  );
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          ) ||
          project.copy.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleSearchInput = useCallback(
    (input: string) => setSearch(input),
    []
  );

  return (
    <Page title="Emily Bonar - Projects">
      <SearchBar initialValue={search} onInput={handleSearchInput} />
      <ProjectList projects={filteredProjects} />
    </Page>
  );
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  return (
    <div className="grid grid-flow-row-dense m-auto md:grid-cols-2 xl:grid-cols-3">
      {props.projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
    </div>
  );
};

interface SearchBarProps {
  initialValue: string;
  onInput: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <input
      type="search"
      className="w-full p-3 pl-4 mb-4 text-xl rounded-full outline-none focus:ring-2 ring-gray-500"
      placeholder="Search..."
      onChange={(e) => props.onInput(e.target.value.toLowerCase())}
      defaultValue={props.initialValue}
    ></input>
  );
};

export default Projects;
