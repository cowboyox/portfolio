import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link href='/projects/[id]' as={'/projects/' + props.id} aria-label='Single Project' passHref>
        <div className='mb-10 cursor-pointer rounded-xl bg-secondary-light shadow-lg hover:shadow-xl dark:bg-ternary-dark sm:mb-0'>
          <div>
            <Image
              src={props.img}
              className='rounded-t-xl border-none'
              alt='Single Project'
              layout='responsive'
              width={100}
              height={90}
            />
          </div>
          <div className='px-4 py-6 text-center'>
            <p className='font-general-medium mb-2 text-xl text-ternary-dark dark:text-ternary-light md:text-2xl'>
              {props.title}
            </p>
            <span className='text-md text-ternary-dark dark:text-ternary-light'>
              {props.shortTags}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
