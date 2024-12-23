import Link from 'next/link';
import { useMemo } from 'react';

export function NavBar({ title }: { title: string }) {
  return (
    <nav className="flex w-full gap-8 m-auto mt-6 mb-4 text-2xl font-semibold text-gray-600 lg:gap-12">
      <NavItem name="Home" location="/" currentPage={title} />
      <NavItem name="Projects" location="/projects" currentPage={title} />
      <NavItem name="Contact" location="/contact" currentPage={title} />
    </nav>
  );
}

interface NavItemProps {
  currentPage: string;
  name: string;
  location: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const current = useMemo(() => {
    return props.currentPage === props.name;
  }, [props.currentPage, props.name]);
  return (
    <Link
      href={props.location}
      className={`transition border-b-2 border-black ${
        current ? 'border-opacity-40' : 'border-opacity-0'
      } hover:border-opacity-90`}
    >
      {props.name}
    </Link>
  );
};

export default NavBar;
