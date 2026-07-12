# Clubedge - Modern Community Platform

A beautiful, modern marketing website for Clubedge, a community platform built with Next.js 16, Tailwind CSS, and TypeScript.

This is a clone of the Supabase marketing website design patterns, rebranded for Clubedge with a blue color scheme instead of green.

## Features

- **Modern Design**: Built with the latest design patterns from Supabase
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark mode support using CSS variables
- **Fast**: Optimized for performance with Next.js 16
- **Accessible**: Built with accessibility in mind
- **Beautiful Components**: Clean, reusable component architecture

## Pages

- **Home** - Hero section with features and stats
- **Features** - Detailed feature list and comparison table
- **Pricing** - Pricing plans and FAQ
- **Blog** - Blog listing page
- **About** - Company story, values, and team

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd clubedge
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
clubedge/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles with CSS variables
│   ├── features/
│   │   └── page.tsx         # Features page
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   ├── blog/
│   │   └── page.tsx         # Blog page
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   └── Footer.tsx           # Footer
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Design System

### Color Scheme (Blue Theme)

The site uses a blue color scheme with CSS variables for easy customization:

- **Primary**: Blue (#3b82f6)
- **Background**: White (light mode) / Dark (#0f172a) (dark mode)
- **Foreground**: Dark text (light mode) / Light text (dark mode)
- **Border**: Light gray (light mode) / Dark gray (dark mode)

All colors are defined as CSS variables in `app/globals.css` and automatically switch based on system preference.

### Typography

- **Font**: Inter (from Google Fonts)
- **Headings**: Bold weights (700)
- **Body**: Regular weight (400)
- **Line Height**: 1.6 for body text

### Spacing & Layout

- Uses Tailwind's spacing scale
- Mobile-first responsive design
- Flexbox for layout
- Max-width containers for readability

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;  /* Blue */
  --background: 0 0% 100%;  /* White */
  --foreground: 240 10% 6%; /* Dark */
}
```

### Changing Fonts

1. Import different fonts in `app/layout.tsx`
2. Update `--font-sans` variable in `app/globals.css`
3. Update `fontFamily` in `tailwind.config.ts`

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/contact/`)
2. Add a `page.tsx` file
3. Add navigation link in `components/Navigation.tsx`

## Performance

- Static generation for pages
- Image optimization
- CSS minification
- No external dependencies for styling
- Tree-shaking optimized components

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus visible states

## License

MIT License - feel free to use this for your projects

## Support

For issues or questions, create an issue in the repository.

---

**Built with inspiration from Supabase's design system, rebranded for Clubedge**
