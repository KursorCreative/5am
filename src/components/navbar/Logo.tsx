import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold text-white cursor-pointer hover:text-tattoo-red transition-colors"
    >
      5<span className="text-tattoo-red">am</span>
    </Link>
  );
};

export default Logo;