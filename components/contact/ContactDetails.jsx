import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const contacts = [
  {
    id: 1,
    name: 'Dallas, Texas, United States',
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: 'alex.nam.eth@outlook.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '(314) 514-5713',
    icon: <FiPhone />,
  },
];

function ContactDetails() {
  return (
    <div className='w-full lg:w-1/2'>
      <div className='max-w-xl px-6 text-left'>
        <h2 className='font-general-medium mb-8 mt-12 text-2xl text-primary-dark dark:text-primary-light'>
          Contact details
        </h2>
        <ul>
          {contacts.map((contact) => (
            <li className='flex' key={contact.id}>
              <i className='mr-4 mt-1 text-2xl text-neutral-500 dark:text-neutral-400'>
                {contact.icon}
              </i>
              <span className='mb-4 text-lg text-ternary-dark dark:text-ternary-light'>
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails;
