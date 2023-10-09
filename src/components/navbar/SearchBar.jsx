import { Search } from "lucide-react";
import { FC } from "react";
import Input from "../ui/Input";

const SearchBar = ({}) => {
  return (
    <label className='flex items-center w-96'>
      <Search size={20} />
      <Input placeholde='Search...' />
    </label>
  );
};

export default SearchBar;
