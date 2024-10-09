import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

import Button from './reusable/Button';

const selectOptions = ['Web Application', 'Mobile Application', 'UI/UX Design', 'Branding'];

function HireMeModal({ onClose, onRequest }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='font-general-medium fixed inset-0 z-30 transition-all duration-500'
    >
      {/* Modal Backdrop */}
      <div className='bg-filter fixed inset-0 z-20 h-full w-full bg-black bg-opacity-50' />

      {/* Modal Content */}
      <main className='flex h-full w-full flex-col items-center justify-center'>
        <div className='modal-wrapper z-30 flex items-center'>
          <div className='modal relative mx-5 max-h-screen max-w-md flex-row rounded-lg bg-secondary-light shadow-lg dark:bg-primary-dark md:max-w-xl lg:max-w-xl xl:max-w-xl'>
            <div className='modal-header flex justify-between gap-10 border-b border-ternary-light p-5 dark:border-ternary-dark'>
              <h5 className='text-xl text-primary-dark dark:text-primary-light'>
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className='px-4 font-bold text-primary-dark dark:text-primary-light'
              >
                <FiX className='text-3xl' />
              </button>
            </div>
            <div className='modal-body h-full w-full p-5'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className='m-4 max-w-xl text-left'
              >
                <div className=''>
                  <input
                    className='text-md w-full rounded-md border bg-secondary-light px-5 py-2 text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light'
                    id='name'
                    name='name'
                    type='text'
                    required
                    placeholder='Name'
                    aria-label='Name'
                  />
                </div>
                <div className='mt-6'>
                  <input
                    className='text-md w-full rounded-md border bg-secondary-light px-5 py-2 text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light'
                    id='email'
                    name='email'
                    type='text'
                    required
                    placeholder='Email'
                    aria-label='Email'
                  />
                </div>
                <div className='mt-6'>
                  <select
                    className='text-md w-full rounded-md border bg-secondary-light px-5 py-2 text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light'
                    id='subject'
                    name='subject'
                    type='text'
                    required
                    aria-label='Project Category'
                  >
                    {selectOptions.map((option) => (
                      <option className='text-normal sm:text-md' key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='mt-6'>
                  <textarea
                    className='text-md w-full rounded-md border bg-secondary-light px-5 py-2 text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light'
                    id='message'
                    name='message'
                    cols='14'
                    rows='6'
                    aria-label='Details'
                    placeholder='Project description'
                  />
                </div>

                <div className='mt-6 pb-4 sm:pb-1'>
                  <span
                    onClick={onRequest}
                    type='submit'
                    className='rounded-md bg-indigo-500 px-4 py-2 text-white duration-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 sm:px-6 sm:py-2.5'
                    aria-label='Submit Request'
                  >
                    <Button title='Send Request' />
                  </span>
                </div>
              </form>
            </div>
            <div className='modal-footer border0-t mt-2 px-8 py-5 text-right sm:mt-0'>
              <span
                onClick={onClose}
                type='button'
                className='rounded-md bg-gray-600 px-4 py-2 text-primary-light duration-500 hover:bg-ternary-dark focus:ring-1 focus:ring-indigo-900 dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light sm:px-6'
                aria-label='Close Modal'
              >
                <Button title='Close' />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default HireMeModal;
