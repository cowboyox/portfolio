'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

import HireMeModal from '@/components/HireMeModal';
import { usePortfolioContext } from '@/context/index';
import logoDark from '@/public/images/logo-dark.png';
import logoLight from '@/public/images/logo-light.png';

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { activeTheme, setTheme } = usePortfolioContext();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className='sm:container sm:mx-auto'
    >
      {/* Header */}
      <div className='z-10 block max-w-screen-lg py-6 sm:flex sm:items-center sm:justify-between xl:max-w-screen-xl'>
        {/* Header menu links and small screen hamburger menu */}
        <div className='flex items-center justify-between px-4 sm:px-0'>
          <div>
            <Link href='/'>
              {activeTheme === 'dark' ? (
                <Image
                  src={logoDark}
                  className='cursor-pointer'
                  alt='Dark Logo'
                  width={50}
                  height={30}
                />
              ) : (
                <Image
                  src={logoLight}
                  className='cursor-pointer'
                  alt='Dark Logo'
                  width={50}
                  height={30}
                />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='ml-0 block cursor-pointer rounded-xl bg-primary-light p-3 shadow-sm dark:bg-ternary-dark sm:hidden'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light' />
            ) : (
              <FiSun className='text-xl text-gray-200 hover:text-gray-50' />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className='sm:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='focus:outline-none'
              aria-label='Hamburger Menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light'
              >
                {showMenu ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'm-0 block items-center justify-between px-5 py-3 shadow-lg sm:ml-4 sm:mt-3 sm:p-0 sm:shadow-none md:flex'
              : 'hidden'
          }
        >
          <div className='mb-2 block text-left text-lg text-primary-dark hover:text-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:py-2'>
            <Link href='/projects' aria-label='Projects'>
              Projects
            </Link>
          </div>
          <div className='mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark hover:text-secondary-dark dark:border-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2'>
            <Link href='/about' aria-label='About Me'>
              About Me
            </Link>
          </div>
          <div className='mb-2 block border-t-2 border-primary-light pt-3 text-left text-lg text-primary-dark hover:text-secondary-dark dark:border-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2'>
            <Link href='/contact' aria-label='Contact'>
              Contact
            </Link>
          </div>
          {/* <div className='border-t-2 border-primary-light pt-3 dark:border-secondary-dark sm:border-t-0 sm:pt-0'>
            <button
              onClick={showHireMeModal}
              className='font-general-medium text-md mt-2 block w-24 rounded-sm bg-indigo-500 px-4 py-2 text-left text-white shadow-sm duration-300 hover:bg-indigo-600 sm:hidden'
              aria-label='Hire Me Button'
            >
              Hire Me
            </button>
          </div> */}
        </div>

        {/* Header links large screen */}
        <div className='font-general-medium m-0 mt-5 hidden items-center justify-center p-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none'>
          <div
            className='mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:py-2'
            aria-label='Projects'
          >
            <Link href='/projects'>Projects</Link>
          </div>
          <div
            className='mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:py-2'
            aria-label='About Me'
          >
            <Link href='/about'>About Me</Link>
          </div>

          <div
            className='mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light dark:hover:text-secondary-light sm:mx-4 sm:py-2'
            aria-label='Contact'
          >
            <Link href='/contact'>Contact</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className='hidden flex-col items-center justify-between sm:flex md:flex-row'>
          {/* <div className='hidden md:flex'>
            <button
              onClick={showHireMeModal}
              className='text-md font-general-medium rounded-md bg-indigo-500 px-5 py-2.5 text-white shadow-sm duration-300 hover:bg-indigo-600'
              aria-label='Hire Me Button'
            >
              Hire Me
            </button>
          </div> */}

          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='ml-8 cursor-pointer rounded-xl bg-primary-light p-3 shadow-sm dark:bg-ternary-dark'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light' />
            ) : (
              <FiSun className='text-xl text-gray-200 hover:text-gray-50' />
            )}
          </div>
        </div>
      </div>
      <div>
        {showModal ? <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} /> : null}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
