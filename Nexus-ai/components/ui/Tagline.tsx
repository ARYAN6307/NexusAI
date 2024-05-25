import Image from 'next/image';
import brackets from "../assets/svg/Brackets";

interface TagLineProps {
  className?: string;
  children: React.ReactNode;
}

const TagLine: React.FC<TagLineProps> = ({ className, children }) => {

  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      <Image src={brackets("left").src} alt="Left Bracket" />
      <div className="mx-3 text-n-3">{children}</div>
      <Image src={brackets("right").src} alt="Right Bracket" />
    </div>
  );
};

export default TagLine;