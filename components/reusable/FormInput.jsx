const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div className='font-general-regular mb-4'>
      <label
        className='mb-1 block text-lg text-primary-dark dark:text-primary-light'
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className='text-md w-full rounded-md border border-gray-300 border-opacity-50 bg-ternary-light px-5 py-2 text-primary-dark shadow-sm dark:border-primary-dark dark:bg-ternary-dark dark:text-secondary-light'
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
