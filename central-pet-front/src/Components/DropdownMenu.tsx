import React, { useState, useEffect, useRef } from "react";

type DropdownMenuProps = {
  title: string;
  items: string[];
};
const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    console.log("Adding event listenter");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("Removing event listenter");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
      className={`dropdown ${isOpen ? "open" : ""}`}
      onClick={toggleDropdown}
    >
      <a href="#">{title}</a>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
