import Button from '@/components/reusable/Button';
import FormInput from '@/components/reusable/FormInput';

function ContactForm() {
  return (
    <div className='w-full lg:w-1/2'>
      <div className='leading-loose'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='m-4 max-w-xl rounded-xl bg-secondary-light p-6 text-left shadow-xl dark:bg-secondary-dark sm:p-10'
        >
          <p className='font-general-medium mb-8 text-2xl text-primary-dark dark:text-primary-light'>
            Contact Form
          </p>

          <FormInput
            inputLabel='Full Name'
            labelFor='name'
            inputType='text'
            inputId='name'
            inputName='name'
            placeholderText='Your Name'
            ariaLabelName='Name'
          />
          <FormInput
            inputLabel='Email'
            labelFor='email'
            inputType='email'
            inputId='email'
            inputName='email'
            placeholderText='Your email'
            ariaLabelName='Email'
          />
          <FormInput
            inputLabel='Subject'
            labelFor='subject'
            inputType='text'
            inputId='subject'
            inputName='subject'
            placeholderText='Subject'
            ariaLabelName='Subject'
          />

          <div className='mt-6'>
            <label
              className='mb-2 block text-lg text-primary-dark dark:text-primary-light'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='text-md w-full rounded-md border border-gray-300 border-opacity-50 bg-ternary-light px-5 py-2 text-primary-dark shadow-sm dark:border-primary-dark dark:bg-ternary-dark dark:text-secondary-light'
              id='message'
              name='message'
              cols='14'
              rows='6'
              aria-label='Message'
            />
          </div>

          <div className='mt-6'>
            <span className='font-general-medium mt-6 rounded-lg bg-indigo-500 px-7 py-4 text-center font-medium tracking-wider text-white duration-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900'>
              <Button title='Send Message' type='submit' aria-label='Send Message' />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
