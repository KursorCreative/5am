import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PortfolioImageProps {
  src: string;
  alt: string;
  category: string;
}

const PortfolioImage = ({ src, alt, category }: PortfolioImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-lg"
          role="listitem"
          tabIndex={0}
          aria-label={`View ${category} tattoo design`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tattoo-black/80 via-tattoo-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white text-lg font-semibold tracking-wider">
              {category}
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent 
        className="max-w-3xl bg-white border-tattoo-red"
        aria-label={`${category} tattoo design - enlarged view`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioImage;