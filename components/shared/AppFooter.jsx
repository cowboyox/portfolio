import { FiGithub, FiGlobe, FiLinkedin } from 'react-icons/fi';

import AppFooterCopyright from '@/components/shared/AppFooterCopyright';

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: 'https://cowboyox.github.io/portfolio',
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/cowboyox',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/alex-nam-963874330/',
  },
];

function AppFooter() {
  return (
    <div className='container mx-auto'>
      <div className='sm:pt-30 mt-20 border-t-2 border-primary-light pb-8 pt-20 dark:border-secondary-dark'>
        {/* Footer social links */}
        <div className='font-general-regular mb-12 flex flex-col items-center justify-center sm:mb-28'>
          <p className='mb-5 text-3xl text-primary-dark dark:text-primary-light sm:text-4xl'>
            Follow me
          </p>
          <ul className='flex gap-4 sm:gap-8'>
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target='__blank'
                key={link.id}
                className='cursor-pointer rounded-lg bg-gray-50 p-4 text-gray-400 shadow-sm duration-300 hover:bg-gray-100 hover:text-indigo-500 dark:bg-ternary-dark dark:hover:text-indigo-400'
              >
                <i className='text-xl sm:text-2xl md:text-3xl'>{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
}

export default AppFooter;
