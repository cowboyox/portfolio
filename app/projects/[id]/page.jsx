import Image from 'next/image';
import { FiClock, FiTag, FiGlobe, FiGithub, FiMapPin } from 'react-icons/fi';

import PagesMetaHead from '@/components/PagesMetaHead';
// import RelatedProjects from '@/components/projects/RelatedProjects';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';

function ProjectSingle({ params }) {
  const { id } = params;

  const project = projectsData.find((project) => project.id === parseInt(id));

  return project ? (
    <div className='container mx-auto'>
      <PagesMetaHead title={project.title} />

      {/* Header */}
      <div>
        <p className='font-general-medium mb-7 mt-14 text-left text-3xl font-bold text-primary-dark dark:text-primary-light sm:mt-20 sm:text-4xl'>
          {project.title}
        </p>
        <div className='flex'>
          <div className='mr-10 flex items-center'>
            <FiClock className='text-xl text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {project.duration}
            </span>
          </div>
          <div className='mr-10 flex items-center'>
            <FiMapPin className='h-4 w-4 text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {project.location}
            </span>
          </div>
          <div className='mr-10 flex items-center'>
            <FiGlobe className='h-4 w-4 text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              Remote
            </span>
          </div>
          <div className='flex items-center'>
            <FiTag className='h-4 w-4 text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {project.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-3 sm:gap-10'>
        {project.images.map((project) => {
          return (
            <div className='mb-10 sm:mb-0' key={project.id}>
              <Image
                src={project.img}
                className='cursor-pointer rounded-xl shadow-lg sm:shadow-none'
                alt={project.title}
                key={project.id}
                layout='responsive'
                width={100}
                height={90}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className='mt-14 block gap-0 sm:gap-10'>
        <div className='w-full text-left'>
          {/* Single project client details */}
          {/* <div className='mb-7'>
            <p className='font-general-regular mb-2 text-2xl font-semibold text-secondary-dark dark:text-secondary-light'>
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className='leading-loose'>
              {project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className='font-general-regular text-ternary-dark dark:text-ternary-light'
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href=''
                      className={
                        info.title === 'Website' || info.title === 'Phone'
                          ? 'cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400'
                          : ''
                      }
                      aria-label='Project Website and Phone'
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}
          <div className='mb-7'>
            <p className='font-general-regular mb-2 text-2xl font-semibold text-secondary-dark dark:text-secondary-light'>
              Repository
            </p>
            <Link href={project.repoUrl} target='_blank'>
              <div className='flex items-center'>
                <FiGithub className='h-4 w-4 text-ternary-dark dark:text-ternary-light' />
                <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
                  {project.repoUrl}
                </span>
              </div>
            </Link>
          </div>

          {/* Single project objectives */}
          {/* <div className='mb-7'>
            <p className='font-general-regular mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light'>
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className='font-general-regular text-primary-dark dark:text-ternary-light'>
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </div> */}

          {/* Single project technologies */}
          <div className='mb-7'>
            <p className='font-general-regular mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light'>
              {project.tech[0].title}
            </p>
            <p className='font-general-regular text-primary-dark dark:text-ternary-light'>
              {project.tech[0].techs.join(', ')}
            </p>
          </div>

          {/* Single project social sharing */}
          {/* <div>
            <p className='font-general-regular mb-2 text-2xl font-semibold text-ternary-dark dark:text-ternary-light'>
              {project.ProjectInfo.SocialSharingHeading}
            </p>
            <div className="flex items-center gap-3 mt-5">
							{project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div>
          </div> */}
        </div>

        {/*  Single project right section details */}
        <div className='mt-10 w-full text-left sm:mt-0'>
          <p className='mb-7 text-2xl font-bold text-primary-dark dark:text-primary-light'>
            Description
          </p>
          {project.description.map((desc) => {
            return (
              <p
                key={desc.id}
                className='font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light'
              >
                {desc.details}
              </p>
            );
          })}
        </div>
      </div>

      {/* <RelatedProjects /> */}
    </div>
  ) : (
    <div />
  );
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(), // Ensure id is a string
  }));
}

export default ProjectSingle;
