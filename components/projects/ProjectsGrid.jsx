'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import ProjectsFilter from '@/components/projects/ProjectsFilter';
import ProjectSingle from '@/components/projects/ProjectSingle';
import { projectsData } from '@/data/projectsData';

function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section className='mt-5 py-5 sm:mt-10 sm:py-10'>
      <div className='text-center'>
        <p className='font-general-medium mb-1 text-2xl text-ternary-dark dark:text-ternary-light sm:text-4xl'>
          Projects portfolio
        </p>
      </div>

      <div className='mt-10 sm:mt-16'>
        <h3 className='font-general-regular text-md mb-3 text-center text-secondary-dark dark:text-ternary-light sm:text-xl'>
          Search projects by title or filter by category
        </h3>
        <div className='flex justify-between gap-3 border-b border-primary-light pb-3 dark:border-secondary-dark'>
          <div className='flex justify-between gap-2'>
            <span className='hidden cursor-pointer rounded-xl bg-primary-light p-2.5 shadow-sm dark:bg-ternary-dark sm:block'>
              <FiSearch className='h-5 w-5 text-ternary-dark dark:text-ternary-light' />
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className='ont-general-medium sm:text-md rounded-lg border border-gray-200 bg-secondary-light py-2 pl-3 pr-1 text-sm text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light sm:px-4'
              id='name'
              name='name'
              type='search'
              required=''
              placeholder='Search Projects'
              aria-label='Name'
              value={searchProject}
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3'>
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => <ProjectSingle key={index} {...project} />)}
      </div>
    </section>
  );
}

export default ProjectsGrid;
