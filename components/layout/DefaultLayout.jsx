import dynamic from 'next/dynamic';

import PagesMetaHead from '@/components/PagesMetaHead';
import AppFooter from '@/components/shared/AppFooter';

const AppHeader = dynamic(() => import('@/components/shared/AppHeader'), {
  ssr: false,
});

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
