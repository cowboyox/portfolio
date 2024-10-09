function AppFooterCopyright() {
  return (
    <div className='font-general-regular flex items-center justify-center text-center'>
      <div className='text-lg text-ternary-dark dark:text-ternary-light'>
        &copy; {new Date().getFullYear()}
        <a
          href=''
          target='__blank'
          className='ml-1 font-medium text-secondary-dark duration-500 hover:text-indigo-600 hover:underline dark:text-secondary-light dark:hover:text-indigo-300'
        >
          cowboy
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
