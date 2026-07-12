# Clubedge Setup & Run Guide

Complete guide to running the Clubedge marketing website locally.

## Project Overview

**Clubedge** is a Supabase marketing website clone with:
- ✅ Rebranded to "Clubedge" (replaces all "Supabase" text)
- ✅ Blue color scheme (replaces Supabase green with primary blue #3b82f6)
- ✅ Modern, responsive marketing website
- ✅ 5+ pages (home, features, pricing, blog, about)
- ✅ Beautiful components and design system

## Project Location

```
/vercel/share/v0-project/clubedge/
```

## Quick Start (Already Done!)

✅ Dependencies installed  
✅ Dev server running on port 3000  
✅ Ready to access at http://localhost:3000

## Pages Available

| Page | URL | Description |
|------|-----|-------------|
| Homepage | http://localhost:3000 | Hero, features, stats, CTA |
| Features | http://localhost:3000/features | Detailed feature list & comparison |
| Pricing | http://localhost:3000/pricing | Plans, FAQs, CTA |
| Blog | http://localhost:3000/blog | Blog posts listing |
| About | http://localhost:3000/about | Company story, values, team |

## File Structure

```
clubedge/
├── app/
│   ├── layout.tsx              # Root layout (navigation, footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # CSS with blue color variables
│   ├── features/page.tsx       # Features page
│   ├── pricing/page.tsx        # Pricing page
│   ├── blog/page.tsx           # Blog page
│   └── about/page.tsx          # About page
├── components/
│   ├── Navigation.tsx          # Top navigation bar
│   └── Footer.tsx              # Footer with links & social
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project overview
└── .gitignore                  # Git ignore rules
```

## Color Scheme (Blue Theme)

All Supabase green colors replaced with blue:

### CSS Variables (in app/globals.css)

```css
--primary: 217 91% 60%;        /* Blue #3b82f6 */
--background: 0 0% 100%;       /* White (light mode) */
--foreground: 240 10% 6%;      /* Dark text (light mode) */
--border: 217 20% 94%;         /* Light gray border */

/* Dark mode (automatic) */
--background: 217 33% 6%;      /* Dark background */
--foreground: 0 0% 98%;        /* Light text */
--border: 217 20% 20%;         /* Dark gray border */
```

### Color Usage

- **Primary Blue**: Buttons, links, accents
- **Background**: Page background
- **Foreground**: Text color
- **Border**: Card borders, dividers
- **Card**: Card backgrounds

## Tailwind Configuration

File: `tailwind.config.ts`

```typescript
colors: {
  primary: 'hsl(var(--primary))',      // Blue
  background: 'hsl(var(--background))', // White/Dark
  foreground: 'hsl(var(--foreground))', // Text
  border: 'hsl(var(--border))',         // Borders
  // ... more colors
}
```

## Typography

**Font**: Inter from Google Fonts

Configured in:
- `app/globals.css` - CSS variable: `--font-sans`
- `tailwind.config.ts` - fontFamily theme
- `app/layout.tsx` - Meta tags

## Responsive Design

Mobile-first approach using Tailwind breakpoints:

- Mobile: < 640px
- Tablet: md: 768px
- Desktop: lg: 1024px
- Large: xl: 1280px

## Dark Mode

Automatic dark mode support via:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables */
  }
}
```

Applies automatically based on system preferences.

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Development Tips

### Adding a New Page

1. Create directory in `app/` (e.g., `app/contact/`)
2. Add `page.tsx` file
3. Export default React component
4. Add link in `components/Navigation.tsx`

Example:
```typescript
// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">Contact Us</h1>
    </div>
  )
}
```

### Adding a Component

1. Create file in `components/` (e.g., `components/Hero.tsx`)
2. Export React component
3. Use in pages

Example:
```typescript
// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      {/* Component content */}
    </section>
  )
}
```

### Changing Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;      /* Change this HSL value */
  --primary-foreground: 0 0% 100%;
  /* ... other colors */
}
```

Use in components:
```typescript
<button className="bg-primary text-primary-foreground">
  Click Me
</button>
```

### Changing Fonts

1. Import in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const font = YourFont({ subsets: ['latin'] })
```

2. Add to `app/globals.css`:
```css
--font-sans: 'YourFont', sans-serif;
```

## Customization Ideas

- [ ] Change brand colors (blue to another color)
- [ ] Add more pages (careers, contact, case studies)
- [ ] Add blog post functionality (MDX)
- [ ] Add contact form with backend
- [ ] Add authentication
- [ ] Add API integration
- [ ] Add more animations
- [ ] Add product showcase section
- [ ] Add customer testimonials section
- [ ] Add comparison table enhancements

## Deployment

### To Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy (automatic on push)

### To Other Platforms

```bash
# Build production version
npm run build

# Deploy the `.next` folder
```

Supports: Vercel, Netlify, AWS, Docker, etc.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not applying | Clear `.next/` folder and restart dev server |
| Dark mode not working | Check `@media (prefers-color-scheme: dark)` in CSS |
| Port 3000 in use | Change port: `npm run dev -- -p 3001` |
| Component not showing | Check import path, ensure component exported |
| Colors look wrong | Verify CSS variables in `app/globals.css` |

## Performance

- Static generation for pages
- Optimized images
- CSS minification
- Tree-shaking
- Minimal dependencies

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: Modern browsers

## Dependencies

Core:
- `next@16` - React framework
- `react@18` - UI library
- `typescript@5` - Type safety
- `tailwindcss@4` - CSS framework

UI:
- `lucide-react` - Icons
- `framer-motion` - Animations (optional)
- `@radix-ui/*` - UI primitives

Utilities:
- `class-variance-authority` - Component variants
- `clsx` - Class merging
- `tailwind-merge` - Tailwind class merging

## Next Steps

1. **Explore**: Visit http://localhost:3000 and browse pages
2. **Customize**: Edit colors, text, images in components
3. **Build**: Create new pages and components
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Extend**: Add features, integrations, and functionality

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## Support

For issues:
1. Check this guide
2. Read component comments
3. Review Next.js documentation
4. Check error console in browser

---

**Happy building with Clubedge! 🚀**
