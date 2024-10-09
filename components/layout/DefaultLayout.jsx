import PagesMetaHead from '@/components/PagesMetaHead';
import AppFooter from '@/components/shared/AppFooter';
import AppHeader from '@/components/shared/AppHeader';

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
