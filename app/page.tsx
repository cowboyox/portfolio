import Link from 'next/link';

import PagesMetaHead from '@/components/PagesMetaHead';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import Button from '@/components/reusable/Button';
import AppBanner from '@/components/shared/AppBanner';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <PagesMetaHead title='Home' />

      <AppBanner />

      <ProjectsGrid />

      <div className='sm:mt-15 mt-10 flex justify-center'>
        <div className='font-general-medium flex items-center rounded-lg bg-indigo-500 px-6 py-3 text-lg text-white shadow-lg duration-300 hover:bg-indigo-600 hover:shadow-xl focus:ring-1 focus:ring-indigo-900 sm:text-xl'>
          <Link href='/projects' aria-label='More Projects' passHref>
            <Button title='More Projects' />
          </Link>
        </div>
      </div>
    </div>
  );
}
