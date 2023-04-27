import { useState } from "react";

interface TextInputProps {
  name: string;
  placeholder: string;
  label: string;
  setFormValues: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput = ({ name, label, placeholder, setFormValues }: TextInputProps) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setCurrentValue(value);
  };

  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onBlur={setFormValues}
      />
    </>
  );
};

export default TextInput;
