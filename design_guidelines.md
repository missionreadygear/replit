# Army Surplus Store Landing Page - Design Guidelines

## Design Approach
**Reference-Based with Military/Tactical Aesthetic**
Drawing inspiration from rugged outdoor retailers (REI, 5.11 Tactical) combined with modern e-commerce clarity (Shopify stores). The design balances authentic military heritage with contemporary web accessibility and conversion optimization.

## Core Design Principles
1. **Rugged Authenticity**: Military-inspired design elements without becoming costume-y
2. **Clear Pathways**: Prominent, unambiguous CTAs to eBay and Instagram
3. **Universal Access**: WCAG 2.1 AA compliance as foundation, not afterthought
4. **Trust Through Imagery**: Real product photography over generic military stock photos

## Typography System
**Primary Font**: Roboto Condensed (Google Fonts) - Bold, compact military aesthetic
- H1: 4xl (2.25rem) / font-bold / uppercase / tracking-wide
- H2: 3xl (1.875rem) / font-bold / uppercase / tracking-wide
- H3: 2xl (1.5rem) / font-semibold / uppercase
- Body: base (1rem) / font-normal / Roboto (regular weight)
- CTA Buttons: lg (1.125rem) / font-bold / uppercase / tracking-wider

**Secondary Font**: Roboto (Google Fonts) - Clean readability for body content

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: gap-8 or gap-12
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for forms and text-heavy sections)

## Page Structure & Sections

### 1. Hero Section (80vh)
- Full-width background image: Authentic military surplus gear laid out (boots, tactical vest, vintage canteen, dog tags)
- Centered content overlay with semi-transparent backdrop
- Store name/logo at top
- Compelling headline: "AUTHENTIC MILITARY SURPLUS | GEAR THAT ENDURES"
- Subheadline explaining store purpose
- Dual CTA buttons (blurred backgrounds):
  - Primary: "SHOP ON EBAY" (larger, more prominent)
  - Secondary: "FOLLOW ON INSTAGRAM"
- Accessibility: All interactive elements keyboard-navigable, screen reader optimized

### 2. About/Mission Section
- Two-column layout (md:grid-cols-2)
- Left: Compelling story about authenticity, military history preservation
- Right: High-quality image of vintage military equipment or store selection
- 3-4 key differentiators with icons (authentic gear, expert knowledge, fair pricing, veteran-owned if applicable)

### 3. Featured Categories/Products Section
- Three-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- 6 category cards with images:
  - Tactical Clothing
  - Footwear & Boots
  - Field Gear
  - Vintage Collectibles
  - Camping Equipment
  - Accessories & Patches
- Each card: image, category name, brief description, "View on eBay" link
- Accessibility: High contrast text overlays, descriptive alt text

### 4. Social Proof Section
- Single-column centered content
- "JOIN OUR COMMUNITY" headline
- Instagram grid preview (3x3 grid showing recent posts)
- Instagram follower count and engagement stats
- Large "FOLLOW US ON INSTAGRAM" CTA
- User testimonials in 2-column layout below (if available)

### 5. Contact Form Section
- Two-column layout (md:grid-cols-2):
  - Left: Form fields
  - Right: Contact information, store hours, location (if physical)
- Form fields with full accessibility:
  - Name (required, aria-required="true")
  - Email (required, type="email", aria-required="true")
  - Subject dropdown (Inquiry type: General, eBay Order, Product Request, Other)
  - Message textarea (required, aria-required="true")
  - Submit button with loading state indication
- All inputs: Visible labels (no placeholder-only), clear focus states, error messaging
- Form validation with descriptive error messages
- Success confirmation with clear feedback

### 6. Footer
- Three-column layout (grid-cols-1 md:grid-cols-3):
  - Column 1: Store info, brief description
  - Column 2: Quick links (eBay Store, Instagram, Contact, About)
  - Column 3: Newsletter signup (email only, accessible)
- Social media icons (eBay, Instagram) with proper aria-labels
- Copyright and accessibility statement link
- Skip-to-top button for keyboard users

## Component Library

### Buttons
- Primary (eBay CTAs): Solid, bold, uppercase, px-8 py-4, rounded-md, w-full md:w-auto
- Secondary (Instagram CTAs): Outlined style, same sizing
- Tertiary (Footer links): Text-only with underline on hover
- All buttons: Minimum 44px touch target, visible focus rings, aria-labels where needed

### Cards (Product/Category)
- Rounded corners (rounded-lg)
- Subtle shadow (shadow-md hover:shadow-xl transition)
- Image aspect ratio: 4:3 or 1:1
- Padding: p-6
- Clear hover states without color dependencies

### Form Inputs
- Border: 2px solid, rounded-md
- Padding: px-4 py-3
- Font size: text-base (minimum)
- Clear focus states: thicker border, focus ring
- Error states: Red border with error icon, descriptive message below
- Success states: Green border with checkmark icon

### Icons
**Font Awesome** (via CDN):
- fa-shopping-cart (eBay)
- fa-instagram (Instagram)
- fa-envelope (Contact/Email)
- fa-shield-alt (Authenticity)
- fa-star (Reviews/Featured)
- fa-map-marker-alt (Location)

## Accessibility Features Implementation

### Keyboard Navigation
- Logical tab order through all interactive elements
- Visible focus indicators (2px solid ring with offset)
- Skip navigation link at page top
- All modals/overlays keyboard-escapable

### Screen Reader Support
- Semantic HTML5 structure (<header>, <nav>, <main>, <section>, <footer>)
- Descriptive aria-labels for icon-only buttons
- aria-live regions for dynamic content (form submission feedback)
- Image alt text describes content, not decorative

### Visual Accessibility
- Text/background contrast ratios meet WCAG AA (minimum 4.5:1)
- No information conveyed by color alone
- Minimum font size: 16px (1rem)
- Line height: 1.6 for body text
- Avoid justified text alignment

### Interactive Elements
- Minimum touch target size: 44x44px
- Sufficient spacing between clickable elements (minimum 8px)
- Clear hover, focus, and active states
- No time-limited interactions

## Images

### Hero Image
Large, high-resolution background image (1920x1080 minimum) featuring:
- Authentic military surplus gear arrangement (boots, tactical vest, vintage equipment)
- Aged, textured aesthetic suggesting history and authenticity
- Neutral/earth-toned color palette
- Professional product photography, not generic stock

### Category Cards (6 images)
Square format (800x800px minimum):
- Tactical clothing: Camo jacket/pants display
- Footwear: Combat boots close-up
- Field gear: Backpack and canteen
- Vintage collectibles: Medals, patches, insignia
- Camping equipment: Tent, mess kit, sleeping bag
- Accessories: Patches, belts, dog tags arrangement

### About Section Image
Horizontal format (1200x800px) showing:
- Store interior with organized surplus gear displays, OR
- Collection of vintage military equipment with historical significance

### Instagram Grid (9 images)
Recent product posts, customer photos, or behind-the-scenes content

All images require descriptive alt text for accessibility.