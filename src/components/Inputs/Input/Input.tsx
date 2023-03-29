import React, { Dispatch, SetStateAction } from 'react';
import '../Input.scss';

type PropTypes = {
  name: string;
  typeInput: string;
  placeholderText: string;
  value: string;
  errors: { [index: string]: string };
  validateAttributes: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
  handlePatternVisible?: Dispatch<SetStateAction<boolean>>;
};

const Input: React.FC<PropTypes> = ({
  name,
  placeholderText,
  typeInput,
  value,
  errors,
  onChange,

  validateAttributes
}) => {
  return (
    <label htmlFor={name} className="input">
      <input
        id={name}
        className="input__element"
        value={value}
        name={name}
        type={typeInput}
        placeholder={placeholderText}
        onChange={onChange}
        {...validateAttributes}
      />
      <span className="input__placeholder">{placeholderText}</span>
      <span className="input__error" aria-live="polite">
        {errors[name]}
      </span>
    </label>
  );
};

export default Input;
