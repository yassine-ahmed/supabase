# 🌐 Supabase Marketing Website - Complete Extraction & Reference Guide

## Overview

The Supabase marketing website (`/apps/www/`) is a **Next.js 15 application** that serves as the main public-facing platform. It contains:

- **Professional marketing pages** (Homepage, Product pages, Pricing, Blog)
- **Advanced UI patterns** (Hero sections, Feature showcases, Testimonials, CTAs)
- **Blog system** (MDX-based content management)
- **Events system** (Webinars, conferences, community events)
- **Customer stories** (Case studies, testimonials)
- **Enterprise features** (Demo requests, contact forms)
- **Interactive components** (3D globes, animations, live charts)
- **SEO optimization** (Metadata, sitemaps, structured data)

---

## 📁 Folder Structure

```
apps/www/
├── app/                          # Next.js App Router pages
│   ├── (home)/                   # Homepage layout group
│   │   ├── page.tsx             # Main landing page
│   │   └── layout.tsx
│   ├── (products)/              # Product pages layout group
│   │   ├── auth/page.tsx
│   │   ├── database/page.tsx
│   │   ├── edge-functions/page.tsx
│   │   ├── realtime/page.tsx
│   │   └── storage/page.tsx
│   ├── blog/                    # Blog pages
│   │   ├── page.tsx             # Blog listing
│   │   ├── [slug]/page.tsx      # Single blog post
│   │   ├── authors/[author]/
│   │   ├── categories/[category]/
│   │   └── tags/[tag]/
│   ├── pricing/page.tsx         # Pricing page
│   ├── events/page.tsx          # Events listing
│   ├── contribute/              # Community contribution pages
│   ├── state-of-startups/       # Annual report
│   ├── wrapped/                 # Year in review
│   └── layout.tsx               # Root layout
│
├── components/                   # Reusable components (42 folders)
│   ├── Hero/                    # Hero section variants
│   ├── AIDemo/                  # AI feature demo
│   ├── Blog/                    # Blog-related components
│   ├── CaseStudies/             # Customer case studies
│   ├── Charts/                  # Data visualizations
│   ├── CodeBlock/               # Syntax highlighted code
│   ├── CodeTabs/                # Tabbed code examples
│   ├── CommandMenu/             # Command palette UI
│   ├── CTABanner/               # Call-to-action banners
│   ├── CustomerStories/         # Testimonials
│   ├── DashboardFeatures/       # Product dashboard previews
│   ├── Enterprise/              # Enterprise-specific components
│   ├── Events/                  # Event listings
│   ├── Examples/                # Code examples showcase
│   ├── ExampleCard/             # Example project cards
│   ├── FeaturesMatrix/          # Feature comparison tables
│   ├── FloatingIcons/           # Animated icons
│   ├── Footer/                  # Footer variants
│   ├── Forms/                   # Contact and signup forms
│   ├── LaunchWeek/              # Launch event components
│   ├── Layouts/                 # Layout wrappers
│   ├── Legal/                   # Legal page components
│   ├── Loading/                 # Loading states
│   ├── Logos/                   # Brand and partner logos
│   ├── Marketing/               # Marketing-specific patterns
│   ├── Navigation/              # Nav and menus
│   ├── PageHeader/              # Page title sections
│   ├── Pricing/                 # Pricing page components
│   └── ... (and 20+ more)
│
├── data/                        # Static data files
│   ├── solutions/               # Solution descriptions
│   ├── developers/              # Developer resources
│   ├── partners/                # Partner information
│   ├── customers/               # Customer data
│   └── pricing/                 # Pricing tiers
│
├── _blog/                       # Blog posts (MDX files)
├── _customers/                  # Customer testimonials
├── _events/                     # Event data
├── _alternatives/               # Competitor comparison pages
│
├── hooks/                       # Custom React hooks
├── layouts/                     # Layout components
├── lib/                         # Utility functions
├── middleware.ts                # Request middleware
└── next.config.js              # Next.js configuration
```

---

## 🎯 Main Pages

### 1. Homepage (`/app/(home)/page.tsx`)
- Hero section with animated background
- Product showcase grid
- Feature highlights
- Customer testimonials
- CTAs (Sign up, Get started)
- Built with Supabase section

### 2. Product Pages (`/app/(products)/`)
- Auth - Authentication & authorization
- Database - PostgreSQL features
- Edge Functions - Serverless computing
- Realtime - Real-time subscriptions
- Storage - File storage

Each includes:
- Feature breakdown
- Code examples
- Live demos
- Pricing integration
- Case studies

### 3. Pricing (`/app/pricing/page.tsx`)
- Pricing tiers comparison
- Feature matrix
- FAQ section
- Enterprise contact form
- Usage calculators

### 4. Blog (`/app/blog/`)
- Blog listing page
- Individual post pages (MDX rendered)
- Author pages
- Category filtering
- Tag filtering
- Search functionality

### 5. Events (`/app/events/page.tsx`)
- Upcoming events
- Webinars
- Conferences
- Community meetups
- Event registration forms

---

## 🧩 Key Components (42 Total)

### Navigation & Layout
- **Navbar** - Top navigation with logo, links, CTA
- **Footer** - Multi-column footer with links
- **Sidebar** - Collapsible navigation
- **Container** - Max-width wrapper
- **PageHeader** - Section title with breadcrumbs

### Hero & Feature Sections
- **Hero** - Large hero with image/video
- **HeroGradientText** - Animated gradient text
- **FeatureGrid** - 3-column feature showcase
- **FeaturesMatrix** - Comprehensive comparison table

### Content Components
- **CodeBlock** - Syntax-highlighted code
- **CodeTabs** - Tabbed code snippets
- **CodeWindow** - Browser-like code frame
- **InlineCode** - Inline code formatting

### Interactive Components
- **AIDemo** - AI feature demonstration
- **Charts** - Data visualization (Recharts)
- **Globe** - 3D world globe (Cobe)
- **ImageGrid** - Responsive image layouts
- **ImageModal** - Lightbox image viewer
- **CommandMenu** - Command palette

### Marketing Components
- **CTASection** - Call-to-action section
- **CTABanner** - Inline CTA banner
- **Badge** - Announcement badge
- **BackedBy** - Investor logos
- **BrandLogo** - Partner/customer logos

### Social & Testimonial
- **CustomerStories** - Client testimonials
- **CaseStudies** - In-depth case studies
- **ExampleCard** - Code example showcase
- **Avatar** - User profile pictures

### Forms & Enterprise
- **Forms/** - Contact, signup, enterprise forms
- **EnterpriseFormQuotes** - Enterprise request form
- **Newsletter** - Email signup form

### Blog & Content
- **Blog/** - Blog listing, posts, comments
- **Changelog** - Update announcements
- **BlogCard** - Post preview card

### Loading & States
- **Loading/** - Spinners, skeletons
- **Error404** - Not found page

### 3D & Animations
- **FloatingIcons** - Animated floating elements
- **AnimatedGradient** - Gradient animations
- **ParticleEffect** - Particle animations
- **LaunchWeek/** - Event-specific animations

---

## 🎨 Design Patterns

### Color System (Same as UI Library)
- **Light Mode**: White background, dark text, purple accents
- **Dark Mode**: Dark background, light text, purple accents
- **Semantic Colors**: Success, warning, danger, info

### Typography
- **Headings**: Geist Sans (bold, 200-900)
- **Body**: Geist Sans (regular, 400-500)
- **Code**: Geist Mono (monospace)

### Spacing System
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

### Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Animation Principles
- Smooth transitions (300-500ms)
- Easing: ease-in-out for natural motion
- Framer Motion for complex animations
- GSAP for timeline animations
- CSS transitions for simple properties

---

## 📝 MDX Content System

### Blog Posts
Located in `_blog/` folder, written in MDX format.

**Structure:**
```mdx
---
title: "Your Blog Post Title"
description: "Short description for SEO"
author: "john"
date: "2024-07-12"
categories:
  - "Database"
  - "Tips"
tags:
  - "postgres"
  - "performance"
image: "/img/blog/post-image.jpg"
thumb: "/img/blog/post-thumb.jpg"
ogImage: "/img/blog/post-og.jpg"
---

# Content here

Your markdown and JSX content...

<CodeBlock
  language="sql"
  code={`SELECT * FROM users;`}
/>
```

### Custom MDX Components
- `<CodeBlock />` - Syntax highlighting
- `<CodeTabs />` - Multiple code examples
- `<Alert />` - Info/warning alerts
- `<ImageGrid />` - Responsive images
- `<Callout />` - Highlighted callouts
- `<Video />` - Embedded videos

---

## 🚀 Page Building Patterns

### Hero Section Pattern
```tsx
<section className="relative py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Main Headline
      </h1>
      <p className="text-xl text-gray-600 mt-4">
        Subheading
      </p>
    </div>
  </div>
</section>
```

### Feature Grid Pattern
```tsx
<section className="py-20">
  <div className="grid md:grid-cols-3 gap-8">
    {features.map(feature => (
      <div key={feature.id} className="space-y-4">
        <feature.icon className="w-8 h-8 text-purple-500" />
        <h3 className="text-xl font-bold">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
</section>
```

### CTA Section Pattern
```tsx
<section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
  <div className="max-w-4xl mx-auto text-center text-white space-y-6">
    <h2 className="text-4xl font-bold">Ready to get started?</h2>
    <p className="text-lg opacity-90">Join thousands of developers</p>
    <Button>Sign Up Free</Button>
  </div>
</section>
```

---

## 🔧 Key Technologies

### Framework & Core
- **Next.js 15** - App Router, SSR, Static Generation
- **React 18+** - Component library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS v4** - Utility-first CSS
- **CSS Variables** - Theme management
- **Framer Motion** - React animations
- **GSAP** - Advanced timeline animations

### Content
- **MDX** - Markdown + JSX
- **Next MDX Remote** - MDX rendering
- **Gray Matter** - Front matter parsing
- **Rehype** - HTML processing
- **Remark** - Markdown processing

### Components & UI
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons
- **Recharts** - Data visualization
- **Swiper** - Carousel/slider
- **React Markdown** - Markdown rendering

### 3D & Interactive
- **Cobe** - 3D globe
- **Three.js** - 3D graphics (via Cobe)
- **OGL** - WebGL library
- **Vanilla Tilt** - Tilt effect
- **Anime.js** - Animation library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **hCaptcha** - CAPTCHA protection

### SEO & Meta
- **Next SEO** - SEO optimization
- **Open Graph** - Social media sharing
- **Structured data** - Schema.org markup

---

## 📊 Data Management

### Static Data Files (`/data/`)
```
data/
├── customers.json          # Customer testimonials
├── partners.json           # Partner integrations
├── pricing.json            # Pricing tiers
├── features.json           # Feature list
├── solutions/              # Solution pages data
├── developers/             # Developer resources
└── events.json             # Event listings
```

### Content Collections
```
_blog/               # Blog posts (MDX)
_customers/          # Customer data
_events/             # Event information
_alternatives/       # Competitor comparison
```

---

## 🎯 Advanced Patterns

### 1. Interactive Code Demos
```tsx
<CodeBlock
  language="javascript"
  code={snippets.auth}
  interactive={true}
/>
```

### 2. Animated Counters
```tsx
<CountUp end={1000} duration={2} />
```

### 3. Feature Comparison Tables
```tsx
<FeaturesMatrix 
  features={featureList}
  competitors={['Option A', 'Option B']}
/>
```

### 4. Image Fade Stacks
```tsx
<ImageFadeStack
  images={[img1, img2, img3]}
  interval={5000}
/>
```

### 5. Floating Icon Animations
```tsx
<FloatingIcons 
  icons={iconList}
  speed="slow"
/>
```

### 6. 3D Globe Backgrounds
```tsx
<Globe
  autoRotate={true}
  markers={locationMarkers}
/>
```

---

## 📱 Responsive Design

### Mobile-First Approach
```tsx
// Default = mobile
className="text-sm md:text-base lg:text-lg"

// Visibility helpers
className="hidden md:block"     // Hide on mobile
className="md:hidden"           // Show only on mobile
```

### Grid Layouts
```tsx
// 1 col mobile, 2 cols tablet, 3 cols desktop
className="grid md:grid-cols-2 lg:grid-cols-3"
```

---

## 🔐 SEO & Performance

### Meta Tags
- Dynamic metadata via `generateMetadata()`
- Open Graph images for sharing
- Twitter card optimization
- Structured data (JSON-LD)

### Performance
- Image optimization (Next.js Image)
- Code splitting
- Dynamic imports
- Lazy loading components

### Sitemap & Robots
- Auto-generated sitemap
- Robots.txt for crawling
- Sitemap XML for search engines

---

## 🛠️ Setup Instructions

### 1. Extract Files
```bash
cp -r apps/www your-project/
```

### 2. Install Dependencies
```bash
cd your-project/apps/www
pnpm install
```

### 3. Build Content
```bash
pnpm run content:build
```

### 4. Run Development Server
```bash
pnpm run dev
# Open http://localhost:3000
```

---

## 📚 Component Reference

### Most Used Components in Marketing Site

| Component | Usage | Key Props |
|-----------|-------|-----------|
| Hero | Page headers, CTAs | title, subtitle, image, cta |
| FeatureGrid | Feature showcase | items, columns, icon |
| CodeBlock | Code examples | code, language, title |
| CTASection | Call-to-action | title, description, button |
| ImageGrid | Image showcase | images, columns, gap |
| ExampleCard | Project showcase | title, image, description |
| Forms | User input | fields, onSubmit, validation |
| Testimonial | Customer quotes | quote, author, company |
| FeaturesMatrix | Comparison table | features, items, colors |
| CustomerStories | Case studies | stories, featured |

---

## 🎓 Best Practices

### 1. Component Composition
- Break large pages into smaller components
- Use compound components for flexibility
- Props should be clear and typed

### 2. Content Management
- Keep MDX focused on content, not styling
- Use custom components for complex layouts
- Separate data from presentation

### 3. Performance
- Use Next.js Image component
- Lazy load interactive elements
- Code split heavy components
- Preload critical resources

### 4. Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation
- Color contrast compliance
- Alt text for images

### 5. SEO
- Meaningful page titles
- Descriptive meta descriptions
- Structured data markup
- Internal linking strategy
- Mobile-first design

---

## 🚨 Common Pages to Customize

### Pages to Extract & Modify
1. **Homepage** - Main landing page (most visible)
2. **Product Pages** - Feature showcases
3. **Pricing Page** - Tier comparison
4. **Footer** - Contact and links
5. **Navigation** - Main menu
6. **Blog** - Content strategy
7. **Hero Sections** - Key messaging
8. **CTA Sections** - Conversion points

---

## 📖 Next Steps

1. **Copy the www folder** from `apps/www/`
2. **Install dependencies** with pnpm
3. **Review key pages** (home, pricing, blog)
4. **Customize colors** in `tailwind.config.ts`
5. **Update content** in data files
6. **Add your blog posts** to `_blog/`
7. **Modify footer** with your info
8. **Update links** to your domains

---

## 💡 Key Takeaways

- **Production-ready** - Fully functional marketing site
- **Highly modular** - 42 reusable components
- **SEO optimized** - Built-in metadata and structured data
- **Performance focused** - Image optimization, code splitting
- **Accessible** - WCAG compliant components
- **Animated** - Smooth transitions and interactive elements
- **Mobile responsive** - Works on all devices
- **Content managed** - MDX-based blog system

---

## 📁 Extraction Checklist

- [ ] Copy `/apps/www/` folder
- [ ] Copy `/apps/www/app/` (pages)
- [ ] Copy `/apps/www/components/` (42 components)
- [ ] Copy `/apps/www/data/` (static data)
- [ ] Copy `/apps/www/_blog/` (blog posts)
- [ ] Copy `/apps/www/_customers/` (testimonials)
- [ ] Copy `/apps/www/_events/` (events)
- [ ] Copy Tailwind config
- [ ] Copy global styles
- [ ] Update dependencies
- [ ] Configure environment variables
- [ ] Customize branding/colors
- [ ] Update content and links

---

**Everything you need to build a professional marketing website is here! 🚀**
