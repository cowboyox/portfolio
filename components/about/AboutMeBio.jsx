'use client';

import Image from 'next/image';

import { usePortfolioContext } from '@/context/index';
import { aboutMeData } from '@/data/aboutMeData';
import logoDark from '@/public/images/logo-dark.png';
import logoLight from '@/public/images/logo-light.png';

function AboutMeBio() {
  const { activeTheme } = usePortfolioContext();

  return (
    <div className='mt-10 block sm:mt-20 sm:flex sm:gap-10'>
      <div className='mb-7 w-full sm:mb-0 sm:w-1/4'>
        {activeTheme === 'dark' ? (
          <Image
            src={logoDark}
            className='cursor-pointer'
            alt='Dark Logo'
            width={300}
            height={240}
          />
        ) : (
          <Image
            src={logoLight}
            className='cursor-pointer'
            alt='Dark Logo'
            width={300}
            height={240}
          />
        )}
      </div>

      <div className='font-general-regular w-full text-left sm:w-3/4'>
        {aboutMeData.map((bio) => (
          <p
            className='sm:text-md mb-4 text-ternary-dark dark:text-ternary-light lg:text-xl'
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
