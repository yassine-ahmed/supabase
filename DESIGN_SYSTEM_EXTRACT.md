# Supabase Design System - Complete Extraction Guide

This document provides a comprehensive breakdown of the design patterns, components, color systems, and styling conventions used in the Supabase repository. Use this as a reference to implement similar design patterns in your own platform.

---

## 📋 Table of Contents

1. [Framework & Technology Stack](#framework--technology-stack)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Component Architecture](#component-architecture)
5. [Styling Patterns](#styling-patterns)
6. [Design Tokens](#design-tokens)
7. [UI Patterns](#ui-patterns)
8. [Button Component Breakdown](#button-component-breakdown)
9. [Advanced Patterns](#advanced-patterns)
10. [Implementation Best Practices](#implementation-best-practices)

---

## Framework & Technology Stack

### Core Technologies
- **Framework**: Next.js (React-based)
- **Styling**: Tailwind CSS v4
- **Component Library**: Radix UI
- **Icon Library**: Lucide React
- **Styling Utilities**: 
  - `class-variance-authority` (CVA) - for component variants
  - `clsx` - for conditional class names
  - `tailwind-merge` - for merging Tailwind classes
- **State Management**: React (with custom hooks)
- **Form Handling**: React Hook Form
- **Animation**: Framer Motion
- **Data Visualization**: Recharts
- **UI Enhancements**:
  - `sonner` - Toast notifications
  - `cmdk` - Command menu/search
  - `vaul` - Drawer component
  - `react-resizable-panels` - Resizable layouts

### Package Manager
- **pnpm** (v10.24.0)
- **Node**: >=22

### Build & Development
- **Monorepo**: Turbo (v2.9.14)
- **Testing**: Vitest with Jest-compatible API
- **Linting**: ESLint v9
- **Formatting**: Prettier v3

---

## Color System

### Color Philosophy
Supabase uses a comprehensive, semantic color system with **light and dark theme support**. The system uses CSS variables (CSS Custom Properties) for maximum flexibility and consistency.

### Color Scales

The color system defines **13 color scales**, each with **12 shades** (100-1200):

#### Available Color Scales
1. **Amber** - Warm yellow/orange tones
2. **Blue** - Cool primary blue
3. **Crimson** - Deep red/burgundy
4. **Gold** - Warm metallic
5. **Gray** - Neutral grays
6. **Green** - Success/positive indicator
7. **Indigo** - Deep blue-purple
8. **Orange** - Warm orange
9. **Pink** - Bright pink/rose
10. **Purple** - Purple tones
11. **Red** - Danger/error indicator
12. **Slate** - Cool neutrals (default for light mode)
13. **Tomato** - Bright red
14. **Violet** - Purple-blue
15. **Yellow** - Bright yellow

#### Brand Color Scale
The **brand scale** (200-600) maps to semantic theme tokens and switches between light/dark automatically.

### Color Naming Convention

```
--color-{hue}-{shade}

Examples:
--color-blue-100    (lightest, almost white)
--color-blue-600    (medium)
--color-blue-1100   (darkest)
```

### Light Mode Example (Slate Scale)
```css
--color-slate-100: hsl(206, 30%, 98.8%);    /* near white */
--color-slate-900: hsl(206, 6%, 56.1%);     /* medium gray */
--color-slate-1200: hsl(206, 24%, 9%);      /* near black */
```

### Dark Mode Example (Slate Scale)
```css
--color-slate-100: hsl(200, 7%, 8.8%);      /* near black */
--color-slate-900: hsl(206, 6%, 43.9%);     /* medium gray */
--color-slate-1200: hsl(210, 6%, 93%);      /* near white */
```

### Semantic Theme Tokens

Beyond raw colors, Supabase defines **semantic tokens** that map to design intent:

**Light Mode:**
```css
background: 0 0% 100%              /* white */
foreground: 240 10% 3.9%           /* near black */
card: 0 0% 100%                    /* white */
primary: 240 5.9% 10%              /* dark */
secondary: 240 4.8% 95.9%          /* light gray */
muted: 240 4.8% 95.9%              /* light gray */
accent: 240 4.8% 95.9%             /* light gray */
destructive: 0 84.2% 60.2%         /* red */
border: 240 5.9% 90%               /* light border */
input: 240 5.9% 90%                /* light input */
ring: 240 5.9% 10%                 /* focus ring */
```

**Dark Mode:**
```css
background: 240 10% 3.9%           /* near black */
foreground: 0 0% 98%               /* near white */
card: 240 10% 3.9%                 /* near black */
primary: 0 0% 98%                  /* near white */
secondary: 240 3.7% 15.9%          /* dark gray */
muted: 240 3.7% 15.9%              /* dark gray */
accent: 240 3.7% 15.9%             /* dark gray */
destructive: 0 62.8% 30.6%         /* darker red */
border: 240 3.7% 15.9%             /* dark border */
input: 240 3.7% 15.9%              /* dark input */
ring: 240 4.9% 83.9%               /* light focus ring */
```

### Theme Variants

Supabase supports **11 pre-configured theme variants**:

1. **Zinc** - Modern, neutral with high contrast
2. **Slate** - Cool, professional neutrals
3. **Stone** - Warm, earthy neutrals
4. **Gray** - Pure, balanced neutrals
5. **Neutral** - Absolute neutral (0° hue)
6. **Red** - Red-focused primary color
7. **Rose** - Rose/pink primary
8. **Orange** - Orange primary
9. **Green** - Green primary (success-oriented)
10. **Blue** - Blue primary
11. **Yellow** - Yellow primary
12. **Violet** - Violet/purple primary

Each theme can be toggled via CSS class or data attribute.

---

## Typography

### Font Stack Pattern

Supabase uses a **maximum of 2 font families**:

```typescript
// Headings
font-sans: 'Geist', 'Geist Fallback'

// Body/Regular
font-mono: 'Geist Mono', 'Geist Mono Fallback'
```

### Font Weights Used
- **Regular** (400) - Body text
- **Medium** (500) - Emphasis
- **Semibold** (600) - Subheadings
- **Bold** (700) - Headings

### Line Height Conventions
```css
/* body text */
line-height: 1.4-1.6  (Tailwind: leading-relaxed, leading-6)

/* headings */
line-height: 1.2-1.3  (Tailwind: leading-tight)
```

### Text Rendering Optimization
```css
body {
  font-synthesis-weight: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Component Architecture

### Component Organization

```
packages/ui/src/components/
├── Button/
│   ├── Button.tsx
│   └── index.ts
├── Input/
│   ├── Input.tsx
│   └── index.ts
├── Icon/
├── Loading/
├── Menu/
├── SidePanel/
├── TreeView/
├── ThemeProvider/
└── shadcn/
    └── ui/          (shadcn/ui re-exports)
```

### Component Patterns Used

1. **shadcn/ui Components** - Pre-built, unstyled components from shadcn
2. **Custom Components** - Supabase-specific implementations
3. **UI Patterns** - Complex, feature-rich patterns in `packages/ui-patterns`
4. **Compound Components** - Components that work together (e.g., dialogs)

### Component Composition Approach

All components follow:
- **Composition over Inheritance** - Use React composition
- **Single Responsibility** - Each component has one job
- **Prop Drilling Minimization** - Use context for shared state
- **Controlled Components** - Support both controlled and uncontrolled modes

---

## Styling Patterns

### Tailwind CSS v4 Setup

```css
@import 'tailwindcss';
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

### Theme Configuration (Tailwind v4)

In `globals.css`:
```css
@theme {
  --container-site: 128rem;
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
}
```

### Class-Variance-Authority (CVA) Pattern

```typescript
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'base classes',
  {
    variants: {
      variant: {
        primary: 'primary styles',
        secondary: 'secondary styles',
        outline: 'outline styles',
      },
      size: {
        sm: 'small styles',
        md: 'medium styles',
        lg: 'large styles',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonProps = VariantProps<typeof buttonVariants>
```

### Utility Functions

```typescript
// Import utilities from ui library
import { cn } from '@ui/lib/utils/cn'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Usage
className={cn(
  buttonVariants({ variant, size }),
  customClasses
)}
```

### Base Styles with @layer

```css
@layer base {
  body {
    @apply bg-default text-foreground;
  }
  
  * {
    @apply border-border;
  }
}

@layer utilities {
  .step {
    counter-increment: step;
  }
  
  .chunk-container {
    @apply shadow-none;
  }
}
```

### Responsive Design Pattern

```typescript
// Mobile-first approach with Tailwind prefixes
<div className="flex-col md:flex-row lg:grid lg:grid-cols-3">
  {/* Mobile: flex column, Tablet: flex row, Desktop: grid 3 cols */}
</div>
```

### Spacing Convention
```css
/* Use Tailwind spacing scale (4px base unit) */
p-2   /* 8px */
p-4   /* 16px */
px-6  /* 24px horizontal */
py-8  /* 32px vertical */
gap-4 /* 16px gap */

/* Avoid arbitrary values when possible */
p-[16px]  /* ❌ Don't use */
p-4       /* ✅ Do use */
```

---

## Design Tokens

### CSS Custom Properties Structure

```css
/* Light mode defaults */
:root {
  /* Semantic tokens */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --muted: 240 4.8% 95.9%;
  --accent: 240 4.8% 95.9%;
  --destructive: 0 84.2% 60.2%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  
  /* Chart colors */
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

/* Dark mode overrides */
[data-theme='dark'] {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  /* ... etc */
}
```

### Using Tokens in Tailwind

```css
/* In globals.css @theme block */
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
}
```

### Applying in Components

```typescript
// Use Tailwind class names based on tokens
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

---

## UI Patterns

### Advanced Patterns Available

The `packages/ui-patterns` includes 50+ complex patterns:

1. **AssistantChat** - AI assistant chat interface
2. **Banners** - Alert/notification banners
3. **CodeBlock** - Syntax-highlighted code
4. **CommandMenu** - Command palette
5. **DatePicker** - Calendar date selection
6. **Dialogs** - Modal dialogs
7. **ErrorDisplay** - Error states
8. **FilterBar** - Advanced filtering
9. **Image** - Image components with optimization
10. **MetricCard** - KPI/metric displays
11. **Markdown** - Markdown renderer
12. **Mermaid** - Diagram rendering
13. **Tooltip** - Hover tooltips
14. **And many more...**

### Pattern Usage Example

```typescript
// Import from UI patterns
import { CodeBlock } from '@ui-patterns'

<CodeBlock
  language="typescript"
  code={`const x = 1;`}
  showLineNumbers
/>
```

---

## Button Component Breakdown

### Complete Button Implementation

The Button component shows the full Supabase pattern:

```typescript
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { Slot } from 'radix-ui'
import { forwardRef, ReactNode } from 'react'
import { cn } from '../../lib/utils/cn'

// Define variants with CVA
const buttonVariants = cva(
  `relative inline-flex items-center justify-center cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-hidden transition-all focus-visible:outline-solid focus-visible:outline-4 focus-visible:outline-offset-1 border`,
  {
    variants: {
      variant: {
        primary: `bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 focus-visible:outline-brand-600`,
        
        default: `text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger`,
        
        secondary: `bg-foreground text-background hover:text-border-stronger border-foreground-light hover:border-foreground-lighter`,
        
        outline: `text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong`,
        
        dashed: `text-foreground border border-dashed border-strong hover:border-stronger bg-transparent`,
        
        link: `text-brand-600 border border-transparent/0 hover:bg-brand-400 shadow-none`,
        
        text: `text-foreground hover:bg-accent shadow-none border-transparent`,
        
        danger: `text-foreground bg-destructive-300 dark:bg-destructive-400 hover:bg-destructive-400 dark:hover:bg-destructive/50 border-border-destructive hover:border-destructive`,
        
        warning: `text-foreground bg-warning-300 dark:bg-warning-400 hover:bg-warning-400 dark:hover:bg-warning/50 border-border-warning hover:border-warning`,
      },
      size: {
        tiny: 'px-2 py-1 text-xs',
        small: 'px-3 py-2 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
      },
      block: {
        true: 'w-full flex items-center justify-center',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
  }
)

// Button Component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      size = 'tiny',
      variant = 'primary',
      children,
      loading,
      block,
      icon,
      iconRight,
      iconLeft,
      type = 'button',
      rounded,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : 'button'
    const disabled = loading === true || props.disabled
    const computedTabIndex = props.tabIndex !== undefined 
      ? props.tabIndex 
      : disabled 
        ? -1 
        : 0

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={disabled}
        tabIndex={computedTabIndex}
        className={cn(
          buttonVariants({ variant, size, disabled, block, rounded }),
          props.className
        )}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
export { Button, buttonVariants }
```

### Button Variants

| Variant | Use Case |
|---------|----------|
| **primary** | Main call-to-action buttons |
| **default** | Secondary actions |
| **secondary** | Dark/inverse actions |
| **outline** | Bordered, less prominent |
| **dashed** | Placeholder/add actions |
| **link** | Inline links that look like buttons |
| **text** | Ghost/transparent buttons |
| **danger** | Destructive actions (delete, etc) |
| **warning** | Warning/caution actions |

### Button Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'default' | 'secondary' | 'outline' | 'dashed' | 'link' | 'text' | 'danger' | 'warning'
  size?: 'tiny' | 'small' | 'medium' | 'large'
  block?: boolean              // full width
  disabled?: boolean
  loading?: boolean            // shows spinner
  icon?: ReactNode             // left icon
  iconLeft?: ReactNode
  iconRight?: ReactNode
  rounded?: boolean            // rounded-full
  asChild?: boolean            // render as child component
}
```

---

## Advanced Patterns

### 1. Dark Mode Implementation

```typescript
// Using data-theme attribute
document.documentElement.setAttribute('data-theme', 'dark')

// Or using next-themes
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2. Component Composition with Compound Pattern

```typescript
// Define sub-components
Button.Icon = ({ children }) => (
  <span className={cn(IconContainerVariants({ size, variant }))}>
    {children}
  </span>
)

// Usage
<Button variant="primary">
  <Button.Icon>
    <SearchIcon />
  </Button.Icon>
  Search
</Button>
```

### 3. Form Integration with React Hook Form

```typescript
import { useForm } from 'react-hook-form'
import { Button } from '@ui'

export function LoginForm() {
  const { register, handleSubmit } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  )
}
```

### 4. Loading States with Suspense

```typescript
import { Suspense } from 'react'

<Suspense fallback={<Button loading />}>
  <AsyncButton />
</Suspense>
```

### 5. Accessibility Patterns

```typescript
// Focus management with tabIndex
const computedTabIndex = tabIndex !== undefined 
  ? tabIndex 
  : disabled 
    ? -1 
    : 0

// ARIA attributes
<button
  aria-label="Close menu"
  aria-expanded={isOpen}
  aria-controls="menu-content"
>
  {/* ... */}
</button>

// Semantic HTML
<button type="button">Action</button>
<a href="#">Link</a>
```

### 6. Toast Notifications with Sonner

```typescript
import { toast } from 'sonner'

// Success
toast.success('Item created!')

// Error
toast.error('Something went wrong')

// Custom
toast.custom((t) => (
  <div>Custom content</div>
))
```

---

## Implementation Best Practices

### 1. File Organization

```
src/
├── components/          # Reusable components
│   ├── Button/
│   ├── Input/
│   └── Card/
├── lib/
│   ├── utils/
│   │   ├── cn.ts       # Class name utility
│   │   └── constants.ts
│   └── hooks/
├── styles/
│   ├── globals.css
│   └── animations.css
└── types/
    └── index.ts
```

### 2. Component Template

```typescript
import { forwardRef, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const componentVariants = cva('base classes', {
  variants: {
    variant: {
      default: 'default styles',
      secondary: 'secondary styles',
    },
    size: {
      sm: 'small styles',
      md: 'medium styles',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
)

Component.displayName = 'Component'
export { Component, componentVariants }
```

### 3. CSS Utility Pattern

```typescript
// lib/utils/cn.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4. Styling Do's and Don'ts

**✅ DO:**
- Use semantic Tailwind classes: `items-center`, `justify-between`
- Use spacing scale: `p-4`, `gap-6`, `mx-2`
- Use flexbox for 1D layouts
- Use grid for 2D layouts
- Use `text-balance` for better typography

**❌ DON'T:**
- Use arbitrary values: `p-[16px]`
- Mix margin with gap on same element
- Use floats (outdated)
- Use absolute positioning unless necessary
- Use more than 2 font families
- Use more than 5 colors

### 5. Performance Optimization

```typescript
// Use React.memo for expensive components
export const MemoizedButton = React.memo(Button)

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // ...
}, [])

// Use useMemo for expensive computations
const memoizedValue = useMemo(() => {
  return computeExpensiveValue()
}, [dependencies])
```

### 6. Type Safety

```typescript
// Always type props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

// Use enums for restricted values
enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

// Generic component types
interface GenericProps<T> {
  value: T
  onChange: (value: T) => void
}
```

### 7. Testing Pattern

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-brand-400')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalled()
  })
})
```

### 8. Environment Setup

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Testing
pnpm test

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Formatting
pnpm format
```

---

## Advanced Color Customization

### Creating a Custom Theme Variant

```typescript
// registry/themes.ts
export const themes = [
  {
    name: 'custom',
    label: 'Custom Theme',
    activeColor: {
      light: '210 100% 50%',  // Your primary color
      dark: '210 100% 60%',
    },
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '220 13% 20%',
        primary: '210 100% 50%',
        'primary-foreground': '0 0% 98%',
        secondary: '220 14.3% 95.9%',
        // ... other tokens
      },
      dark: {
        background: '220 13% 20%',
        foreground: '0 0% 98%',
        primary: '210 100% 60%',
        'primary-foreground': '220 13% 20%',
        // ... other tokens
      },
    },
  },
]
```

### Applying Theme in CSS

```css
:root[data-theme='custom'] {
  --background: 0 0% 100%;
  --foreground: 220 13% 20%;
  --primary: 210 100% 50%;
  /* ... */
}

[data-theme='custom'].dark {
  --background: 220 13% 20%;
  --foreground: 0 0% 98%;
  --primary: 210 100% 60%;
  /* ... */
}
```

---

## Integration Checklist

When implementing Supabase design patterns in your platform, use this checklist:

- [ ] Install Tailwind CSS v4
- [ ] Set up Radix UI components
- [ ] Import Lucide React icons
- [ ] Create design token CSS variables
- [ ] Implement light/dark theme switching
- [ ] Create CVA-based components
- [ ] Set up utility functions (cn, clsx, twMerge)
- [ ] Configure TypeScript for strict type checking
- [ ] Set up ESLint and Prettier
- [ ] Create component testing setup
- [ ] Document custom components
- [ ] Set up responsive design breakpoints
- [ ] Implement accessibility features (ARIA labels, keyboard nav)
- [ ] Configure monorepo structure (if needed)
- [ ] Set up CI/CD pipelines

---

## Resources & Files

### Key Files in Supabase Repository

- **Color System**: `packages/config/css/colors.css`
- **Theme Config**: `apps/design-system/registry/themes.ts`
- **UI Components**: `packages/ui/src/components/`
- **UI Patterns**: `packages/ui-patterns/src/`
- **Tailwind Config**: `packages/config/tailwind.config.css`
- **Globals/Base Styles**: `apps/design-system/styles/globals.css`
- **Button Component**: `packages/ui/src/components/Button/Button.tsx`

### External Dependencies

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Radix UI Docs](https://radix-ui.com)
- [Class Variance Authority](https://cva.style)
- [React Hook Form](https://react-hook-form.com)
- [Framer Motion](https://www.framer.com/motion)
- [Sonner (Toasts)](https://sonner.emilkowal.ski)

---

## Summary

Supabase's design system is built on:

1. **Tailwind CSS v4** for utility-first styling
2. **Radix UI** for accessible, unstyled components
3. **Class Variance Authority** for managing component variants
4. **CSS Custom Properties** for semantic theming
5. **React best practices** for component composition
6. **TypeScript** for type safety
7. **Monorepo structure** for scalability

This comprehensive approach allows for:
- ✅ Highly consistent UI across the platform
- ✅ Easy theme switching (light/dark, multiple color schemes)
- ✅ Maintainable, scalable component library
- ✅ Strong type safety
- ✅ Performance optimization
- ✅ Accessibility compliance
- ✅ Developer productivity

Use these patterns as a foundation for your own design system implementation!

---

**Generated from Supabase Repository Analysis**
**Last Updated: 2026**
