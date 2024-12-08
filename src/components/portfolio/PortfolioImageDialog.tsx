import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type ReactNode } from "react";

interface PortfolioImageDialogProps {
  src: string;
  alt: string;
  children: ReactNode;
}

const PortfolioImageDialog = ({ src, alt, children }: PortfolioImageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent 
        className="max-w-3xl bg-white border-tattoo-red"
        aria-label={`${alt} - enlarged view`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain"
          loading="eager"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioImageDialog;