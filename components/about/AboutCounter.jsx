'use client';

import { useCountUp } from 'react-countup';

import CounterItem from './CounterItem';

function AboutCounter() {
  useCountUp({ ref: 'experienceCounter', end: 9, duration: 2 });
  useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
  useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
  useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

  return (
    <div className='mt-10 bg-primary-light shadow-sm dark:bg-ternary-dark sm:mt-20'>
      <div className='font-general-medium container mx-auto block items-center py-20 sm:flex sm:justify-between'>
        <CounterItem
          title='Years of experience'
          counter={<span id='experienceCounter' />}
          measurement=''
        />

        <CounterItem
          title='Stars on GitHub'
          counter={<span id='githubStarsCounter' />}
          measurement='k+'
        />

        <CounterItem
          title='Positive feedback'
          counter={<span id='feedbackCounter' />}
          measurement='%'
        />

        <CounterItem
          title='Projects completed'
          counter={<span id='projectsCounter' />}
          measurement='%'
        />
      </div>
    </div>
  );
}

export default AboutCounter;
