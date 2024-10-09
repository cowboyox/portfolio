'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';

import useThemeSwitcher from '@/hooks/useThemeSwitcher';

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className='mt-5 flex flex-col items-center sm:flex-row sm:justify-between md:mt-2'
    >
      <div className='w-full text-left md:w-2/5'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className='font-general-semibold text-center text-2xl text-ternary-dark dark:text-primary-light sm:text-left lg:text-3xl xl:text-4xl'
        >
          Hi, I am Alex!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className='font-general-medium mt-4 text-center text-lg leading-normal text-gray-500 dark:text-gray-200 sm:text-left md:text-xl lg:text-2xl xl:text-3xl'
        >
          An Experienced
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className='font-general-medium text-center text-lg leading-normal text-gray-500 dark:text-gray-200 sm:text-left md:text-xl lg:text-2xl xl:text-3xl'
        >
          Blockchain & Web Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3,
          }}
          className='flex justify-center sm:block'
        >
          <a
            download='alex.pdf'
            href='/portfolio/files/alex.pdf'
            className='font-general-medium mb-6 mt-12 flex w-36 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 py-2.5 text-lg text-gray-500 shadow-lg duration-500 hover:bg-indigo-500 hover:text-white focus:ring-1 focus:ring-indigo-900 dark:border-ternary-dark sm:mb-0 sm:w-48 sm:py-3'
            aria-label='Download Resume'
          >
            <FiArrowDownCircle className='sn:w-6 ml-0 mr-2 h-5 w-5 duration-100 sm:ml-1 sm:mr-3 sm:h-6' />
            <span className='text-sm duration-100 sm:text-lg'>Download CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className='float-right mt-8 w-full text-right sm:mt-0 sm:w-3/5'
      >
        <Image
          layout='responsive'
          src={
            activeTheme === 'dark'
              ? '/portfolio/images/developer.svg'
              : '/portfolio/images/developer-dark.svg'
          }
          alt='Developer'
          width={'100'}
          height={'100'}
        />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
