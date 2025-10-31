import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

export default function SocialSection() {
  const handleInstagramClick = () => {
    console.log('Navigate to Instagram');
    window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
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
          Join Our Community
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          Follow us on Instagram for daily updates on new arrivals, vintage finds, and exclusive deals. 
          Join thousands of military surplus enthusiasts and collectors.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl font-bold text-primary" data-testid="text-follower-count">
            2.4K
          </span>
          <span className="text-muted-foreground">Followers</span>
        </div>
        
        <Button 
          size="lg"
          onClick={handleInstagramClick}
          className="px-8 font-bold uppercase tracking-wider"
          data-testid="button-follow-instagram"
          aria-label="Follow us on Instagram (opens in new window)"
        >
          <Instagram className="mr-2 h-5 w-5" aria-hidden="true" />
          Follow Us on Instagram
          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
        
        <div className="mt-12 grid grid-cols-2 gap-4 max-w-xl mx-auto">
          <div className="text-center p-4 bg-muted/30 rounded-md">
            <p className="text-2xl font-bold text-foreground mb-1" data-testid="text-posts-count">
              450+
            </p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-md">
            <p className="text-2xl font-bold text-foreground mb-1" data-testid="text-engagement">
              95%
            </p>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
