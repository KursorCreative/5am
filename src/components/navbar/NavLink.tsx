import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="relative text-gray-300 hover:text-white transition-colors cursor-pointer group focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 focus:ring-offset-tattoo-black rounded px-2 py-1"
    >
      {children}
      <span 
        className="absolute -bottom-1 left-0 w-full h-0.5 bg-tattoo-red transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
};

export default NavLink;