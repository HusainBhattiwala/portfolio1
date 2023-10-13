"use client";
import { Menu, User, X } from "lucide-react";
import SearchBar from "./navbar/SearchBar";
import Button from "./ui/Button";
import { useContact, useMenu } from "./Provider";

const Navbar = ({}) => {
  const { showMenu, showMenuVisibility } = useMenu();
  const { showForm, setFormVisibility } = useContact();
  return (
    <nav className='flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between'>
      {/* SearchBar */}
      <div>{/* Place holder for search bar */}</div>

      <div className='flex items-center gap-5'>
        <Button onClick={() => setFormVisibility(!showForm)}>
          Contact Me <User size={18} />
        </Button>

        <button onClick={() => showMenuVisibility(!showMenu)} type='button'>
          <Menu className='flex lg:hidden cursor-pointer hover:text-primary transition-colors' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
