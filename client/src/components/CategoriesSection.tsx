import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import tacticalImage from "@assets/generated_images/Tactical_clothing_category_image_425e8b5b.png";
import bootsImage from "@assets/generated_images/Military_boots_product_photo_abfa7b23.png";
import fieldGearImage from "@assets/generated_images/Field_gear_collection_photo_3fab10bb.png";
import vintageImage from "@assets/generated_images/Vintage_collectibles_display_photo_36035719.png";
import campingImage from "@assets/generated_images/Camping_equipment_product_photo_73de775d.png";
import accessoriesImage from "@assets/generated_images/Military_accessories_product_photo_e9da81e9.png";

const categories = [
  {
    title: "Tactical Clothing",
    description: "Authentic military uniforms, jackets, and cargo pants in various camo patterns",
    image: tacticalImage,
    alt: "Military camouflage tactical jacket and cargo pants"
  },
  {
    title: "Footwear & Boots",
    description: "Combat boots, tactical footwear, and military-grade hiking boots",
    image: bootsImage,
    alt: "Black leather military combat boots"
  },
  {
    title: "Field Gear",
    description: "Backpacks, rucksacks, canteens, and essential field equipment",
    image: fieldGearImage,
    alt: "Vintage military field gear including backpack and mess kit"
  },
  {
    title: "Vintage Collectibles",
    description: "Historical military memorabilia, medals, patches, and insignia",
    image: vintageImage,
    alt: "Collection of vintage military medals, patches and insignia"
  },
  {
    title: "Camping Equipment",
    description: "Military-grade tents, sleeping bags, and outdoor survival gear",
    image: campingImage,
    alt: "Military camping equipment including tent and sleeping bag"
  },
  {
    title: "Accessories & Patches",
    description: "Belts, dog tags, patches, and authentic military accessories",
    image: accessoriesImage,
    alt: "Military accessories including tactical belt, patches, and dog tags"
  }
];

export default function CategoriesSection() {
  const handleCategoryClick = (categoryName: string) => {
    console.log(`View ${categoryName} on eBay`);
    window.open('https://www.ebay.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 px-4 bg-muted/30" 
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="categories-heading" 
            className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-4"
          >
            Shop by Category
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of authentic military surplus gear
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate"
              data-testid={`card-category-${index}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-condensed text-xl uppercase tracking-wide">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="outline"
                  className="w-full font-bold uppercase tracking-wider"
                  onClick={() => handleCategoryClick(category.title)}
                  data-testid={`button-view-${index}`}
                  aria-label={`View ${category.title} on eBay (opens in new window)`}
                >
                  View on eBay
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
