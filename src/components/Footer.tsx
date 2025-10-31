import { Instagram, Mail, ArrowUp } from "lucide-react";
import { SiEbay } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEbayClick = () => {
    window.open('https://ebay.com/str/missionreadygear', '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/missionreadygear', '_blank', 'noopener,noreferrer');
  };

  const handleContactScroll = () => {
    document.getElementById('contact-heading')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border py-12 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide mb-4">
              Mission Ready Gear
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              High-quality army surplus tactical clothing, backpacks, and accessories built for 
              durability and performance.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={handleEbayClick}
                data-testid="button-footer-ebay"
                aria-label="Visit our eBay store (opens in new window)"
              >
                <SiEbay className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleInstagramClick}
                data-testid="button-footer-instagram"
                aria-label="Follow us on Instagram (opens in new window)"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={handleEbayClick}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-ebay"
                  >
                    eBay Store
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleInstagramClick}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-instagram"
                  >
                    Instagram
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleContactScroll}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-contact"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-about"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide mb-4">
              Connect With Us
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Follow @missionreadygear on Instagram
            </p>
            <Button
              onClick={handleInstagramClick}
              className="w-full md:w-auto font-bold uppercase tracking-wider"
              data-testid="button-footer-follow"
              aria-label="Follow @missionreadygear on Instagram (opens in new window)"
            >
              <Instagram className="mr-2 h-4 w-4" aria-hidden="true" />
              Follow Us
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Mission Ready Gear. All rights reserved.
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            data-testid="button-scroll-top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to Top
          </Button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            This website is fully accessible and follows WCAG 2.1 AA guidelines
          </p>
        </div>
      </div>
    </footer>
  );
}
