import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  const navLinkClasses = "relative text-gray-300 hover:text-white transition-colors cursor-pointer group";
  const navLinkAfterClasses = "absolute -bottom-1 left-0 w-full h-0.5 bg-tattoo-red transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100";

  return (
    <Link to={to} className={navLinkClasses}>
      {children}
      <span className={navLinkAfterClasses}></span>
    </Link>
  );
};

export default NavLink;