import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: Array<{
    label: string;
    path: string;
  }>;
}

const PageHero = ({ title, description, breadcrumbs }: PageHeroProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className={cn(
        "relative py-20 bg-tattoo-gray transition-opacity duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-tattoo-black/80 to-tattoo-black/40" />
      
      <div className="container relative z-10">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link 
                to="/" 
                className="text-tattoo-white/60 hover:text-tattoo-white transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded p-1"
              >
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-tattoo-white/40" aria-hidden="true" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-tattoo-white/80" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-tattoo-white/60 hover:text-tattoo-white transition-colors focus:outline-none focus:ring-2 focus:ring-tattoo-red focus:ring-offset-2 rounded p-1"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas text-tattoo-white animate-fade-up">
          {title}
        </h1>
        
        {description && (
          <p className="mt-4 text-lg text-tattoo-white/80 max-w-2xl animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;