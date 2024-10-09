const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className='mb-20 sm:mb-0'>
      <h2 className='mb-2 text-center text-4xl text-secondary-dark dark:text-secondary-light'>
        {counter} {measurement}
      </h2>
      <span className='font-general-regular text-md block text-center text-ternary-dark dark:text-ternary-light'>
        {title}
      </span>
    </div>
  );
};

export default CounterItem;
