'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// import AboutClients from '@/components/about/AboutClients';
// import AboutCounter from '@/components/about/AboutCounter';
import PagesMetaHead from '@/components/PagesMetaHead';

const AboutMeBio = dynamic(() => import('@/components/about/AboutMeBio'), {
  ssr: false,
});

function about() {
  return (
    <div>
      <PagesMetaHead title='About Me' />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto'
      >
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <AboutCounter />
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto'
      >
        <AboutClients />
      </motion.div> */}
    </div>
  );
}

export default about;
