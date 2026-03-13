import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="font-bold font-display text-foreground">WasteWise</span>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          © 2026 WasteWise AI. Reducing waste, one kitchen at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
