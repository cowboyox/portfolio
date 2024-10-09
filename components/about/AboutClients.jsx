import AboutClientSingle from '@/components/about/AboutClientSingle';
import { clientsData, clientsHeading } from '@/data/clientsData';

function AboutClients() {
  return (
    <div className='mt-10 sm:mt-20'>
      <p className='font-general-medium text-center text-2xl text-primary-dark dark:text-primary-light sm:text-3xl'>
        {clientsHeading}
      </p>
      <div className='mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-4'>
        {clientsData.map((client) => (
          <AboutClientSingle title={client.title} image={client.img} key={client.id} />
        ))}
      </div>
    </div>
  );
}

export default AboutClients;
