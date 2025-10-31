import { Shield, Award, DollarSign, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import storeImage from "@assets/generated_images/Store_interior_about_section_9d75fa9b.png";

const features = [
  {
    icon: Shield,
    title: "Authentic Gear",
    description: "100% genuine military surplus, inspected for quality"
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Deep understanding of military equipment history"
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Honest prices for quality surplus gear"
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Dedicated to preserving military heritage"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div>
            <h2 
              id="about-heading" 
              className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-6"
            >
              About Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              At Mission Ready Gear, we specialize in high-quality army surplus tactical clothing, backpacks, 
              and accessories built for durability and performance. Whether you're an outdoor enthusiast, 
              prepper, or gear collector, our carefully sourced military surplus ensures you're always ready 
              for the mission ahead.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We take pride in offering reliable surplus gear with excellent customer service. Shop with 
              confidence and gear up for any adventure!
            </p>
          </div>
          
          <div className="order-first md:order-last">
            <img 
              src={storeImage} 
              alt="Organized display of military surplus gear including uniforms, boots, and tactical equipment in our store"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center"
                data-testid={`card-feature-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <Icon 
                      className="h-8 w-8 text-primary" 
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="font-condensed text-lg font-bold uppercase tracking-wide mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
