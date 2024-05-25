import React from 'react';
import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, href, onClick, children, px, white }) => {
  const baseClasses = `relative inline-flex items-center justify-center h-11 transition-colors 
                       hover:text-color-1 ${px || 'px-7'} ${white ? 'text-black' : 'text-white'}`;
  const customClasses = `button-custom ${className || ''}`;
  const spanClasses = "relative z-10 bg-black rounded-md p-4 flex items-center justify-center";

  const renderButton = () => (
    <button className={`${baseClasses} ${customClasses}`} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={`${baseClasses} ${customClasses}`}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
