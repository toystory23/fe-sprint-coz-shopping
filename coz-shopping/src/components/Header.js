import { useEffect, useRef, useState } from 'react';
import picture2 from '../imgs/logo.png';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img className="logo" alt="logo" src={picture2} />
        </Link>
        <span className="logo_text">COZ Shopping</span>
      </div>
      <FontAwesomeIcon icon={faBars} className="hamburger" alt="button" onClick={handleDropdownToggle} />
      {isDropdownOpen && <Dropdown dropdownRef={dropdownRef} />}
    </header>
  );
}
