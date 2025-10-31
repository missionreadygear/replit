import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

export default function SocialSection() {
  const handleInstagramClick = () => {
    console.log('Navigate to Instagram');
    window.open('https://instagram.com/missionreadygear', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 px-4" 
      aria-labelledby="social-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-md bg-primary/10">
            <Instagram className="h-12 w-12 text-primary" aria-hidden="true" />
          </div>
        </div>
        
        <h2 
          id="social-heading" 
          className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-4"
        >
          Follow Us on Instagram
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Stay updated with new arrivals and gear up for your next mission.
        </p>
        
        <Button 
          size="lg"
          onClick={handleInstagramClick}
          className="px-8 font-bold uppercase tracking-wider"
          data-testid="button-follow-instagram"
          aria-label="Follow @missionreadygear on Instagram (opens in new window)"
        >
          <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
          @missionreadygear
          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
