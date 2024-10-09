import Image from 'next/image';

function AboutClientSingle({ title, image }) {
  return (
    <div className='mb-5 cursor-pointer rounded-lg border border-ternary-light bg-secondary-light px-10 py-5 shadow-sm dark:border-ternary-dark'>
      <Image src={image} alt={title} layout='responsive' width={100} height={50} />
    </div>
  );
}

export default AboutClientSingle;
