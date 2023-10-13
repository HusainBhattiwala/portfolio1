"use client";
import Input from "../ui/Input";

const Label = ({ label, type, name, readInput, value }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    readInput({ name, value });
  };
  return (
    <label>
      <div className='ml-5 text-xs -mb-2 bg-cardPrimary relative z-50 px-1 w-max'>
        {label}
      </div>
      <Input
        onChange={handleChange}
        value={value}
        variant='border'
        name={name}
        type={type || "text"}
        sizes='medium'
      />
    </label>
  );
};

export default Label;
