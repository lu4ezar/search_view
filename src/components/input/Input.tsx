import React from 'react';
import './Input.scss';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const Input = ({ label, type, value, onChange, onSubmit }: InputProps) => {
  const inputId = label.toLowerCase();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };
  const submitForm = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (value === '') {
      return;
    }
    onSubmit(value);
  };
  return (
    <div className="input">
      <form>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} type={type} value={value} onChange={handleChange} />
        <input type="submit" value="Ok" onClick={submitForm} />
      </form>
    </div>
  );
};

export default Input;
