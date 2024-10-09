import Image from 'next/image';

import { aboutMeData } from '@/data/aboutMeData';

function AboutMeBio() {
  return (
    <div className='mt-10 block sm:mt-20 sm:flex sm:gap-10'>
      <div className='mb-7 w-full sm:mb-0 sm:w-1/4'>
        <Image
          src='/portfolio/images/logo.svg'
          width={200}
          height={200}
          className='rounded-lg'
          alt='Profile Image'
        />
      </div>

      <div className='font-general-regular w-full text-left sm:w-3/4'>
        {aboutMeData.map((bio) => (
          <p className='mb-4 text-lg text-ternary-dark dark:text-ternary-light' key={bio.id}>
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMeBio;
