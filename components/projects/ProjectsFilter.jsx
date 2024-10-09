const selectOptions = ['Web Application', 'Mobile Application', 'UI/UX Design', 'Branding'];

function ProjectsFilter({ setSelectProject }) {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className='sm:text-md rounded-lg border bg-secondary-light px-4 py-2 text-sm text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:font-medium dark:text-ternary-light sm:px-6'
    >
      <option className='sm:text-md text-sm'>All Projects</option>

      {selectOptions.map((option) => (
        <option className='text-normal sm:text-md' key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default ProjectsFilter;
