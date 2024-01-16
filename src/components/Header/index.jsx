import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../Button';
import Link from '../Link';

const navLinks = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Flashcard',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  {
    label: 'FAQ',
    href: '#',
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 px-5 max-w-1272 mx-auto">
      <Logo />

      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-10">
          {navLinks.map((item, index) => (
            <Link key={index} label={item?.label} href={item?.href} />
          ))}
        </div>
        <Button label="Login" />
      </div>
    </div>
  );
};

export default Header;
