"use client";

import React, { useContext, useState, createContext, useEffect } from "react";

const MenuContext = createContext({
  showMenu: false,
  showMenuVisibility: (status) => {},
});

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showMenu]);

  const showMenuVisibility = (status) => {
    setShowMenu(status);
  };

  return (
    <MenuContext.Provider value={{ showMenu, showMenuVisibility }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
