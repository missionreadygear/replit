import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram } from "lucide-react";
import { SiEbay } from "react-icons/si";
import heroImage from "@assets/generated_images/Military_surplus_hero_background_5fb32799.png";

export default function HeroSection() {
  const handleEbayClick = () => {
    console.log('Navigate to eBay store');
    window.open('https://ebay.com/str/missionreadygear', '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    console.log('Navigate to Instagram');
    window.open('https://instagram.com/missionreadygear', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative flex items-center justify-center min-h-[80vh]"
      aria-label="Hero section"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Military surplus gear including boots, tactical vest, and vintage equipment"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      
      <div className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto">
        <h1 className="font-condensed text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-white mb-4">
          Mission Ready Gear
        </h1>
        <p className="font-condensed text-xl md:text-2xl uppercase tracking-wide text-white/90 mb-3">
          Be Ready for the Next Mission
        </p>
        <p className="font-condensed text-base md:text-lg uppercase tracking-wide text-white/80 mb-8">
          Army Surplus - Tactical Gear
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="outline"
            onClick={handleEbayClick}
            className="w-full sm:w-auto px-8 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold uppercase tracking-wider text-base"
            data-testid="button-ebay-store"
            aria-label="Shop our eBay store (opens in new window)"
          >
            <SiEbay className="mr-2 h-5 w-5" aria-hidden="true" />
            Shop on eBay
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={handleInstagramClick}
            className="w-full sm:w-auto px-8 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold uppercase tracking-wider text-base"
            data-testid="button-instagram"
            aria-label="Follow us on Instagram (opens in new window)"
          >
            <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
            Follow on Instagram
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
