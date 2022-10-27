import Image from "next/image";

export interface LogoProps {
  link: string;
  name: string;
  icon: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <a href={props.link} className="mx-2" target="_blank" rel="noreferrer">
      <Image
        src={props.icon}
        width={48}
        height={48}
        className="w-12"
        alt={`Link to ${props.name}`}
      />
    </a>
  );
};

export default Logo;
