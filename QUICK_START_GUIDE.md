# Supabase Design System - Quick Start Guide

## Overview

You have successfully extracted Supabase's professional design system! Here's everything you need to know to start using it on your platform.

---

## What You've Extracted

### 📂 Main Folder to Extract
```
📁 packages/ui/src/
```

This contains all the production-ready components used by Supabase.

### 🎯 Key Components Included

1. **Button** (9 variants) - Primary, secondary, danger, warning, outline, link, text, dashed
2. **Menu** (3 types) - Text, border, pills navigation systems
3. **TreeView** - File/folder hierarchies with editing
4. **Icon System** - Custom icons with backgrounds
5. **Input** - Form inputs from shadcn/ui
6. **Loading** - Spinners and progress bars
7. **SidePanel** - Slide-out panels
8. **Theme Provider** - Light/dark mode support
9. **Custom Elements** - Headings and semantic HTML
10. **Animations** - Advanced Framer Motion patterns

---

## 3-Step Setup

### Step 1: Copy the Components Folder

```bash
# Option A: Copy manually
cp -r /path/to/supabase/packages/ui/src/* your-project/src/components/ui/

# Option B: Clone repo and reference
git clone https://github.com/supabase/supabase.git
cp -r supabase/packages/ui/src/* your-project/src/
```

### Step 2: Install Dependencies

```bash
npm install class-variance-authority clsx cmdk framer-motion lucide-react @radix-ui/react-* react-hook-form recharts sonner
```

### Step 3: Configure Tailwind

Update your `tailwind.config.ts` with the design tokens and colors (see COMPONENT_EXTRACTION_GUIDE.md).

---

## Where to Find Everything

### Documentation Files Created

| File | Purpose |
|------|---------|
| `DESIGN_SYSTEM_EXTRACT.md` | Complete design system overview with colors, typography, patterns |
| `COMPONENT_EXTRACTION_GUIDE.md` | Step-by-step setup and implementation guide (791 lines) |
| `DETAILED_COMPONENTS_REFERENCE.md` | In-depth component reference with 100+ code examples (881 lines) |
| `QUICK_START_GUIDE.md` | This file - quick navigation |

### File Locations in Supabase Repo

```
packages/ui/src/
├── components/Button/          ← Most used component
├── components/Menu/            ← Navigation system
├── components/TreeView/        ← Complex hierarchies
├── components/Icon/            ← Custom icon system
├── components/shadcn/ui/       ← Form components
├── lib/utils/cn.ts             ← Essential utility
├── lib/commonCva.ts            ← Variant system
└── lib/constants.ts            ← Design constants
```

---

## Most Important Files to Extract

**Priority 1 (Essential)**
```
Button/                ✓ Most used component
Menu/                  ✓ Navigation foundation
Input/                 ✓ Forms
Icon/                  ✓ Visual consistency
lib/utils/cn.ts        ✓ Critical utility
```

**Priority 2 (Recommended)**
```
TreeView/              ✓ Hierarchical data
Loading/               ✓ User feedback
ThemeProvider/         ✓ Light/dark mode
lib/commonCva.ts       ✓ Variant patterns
lib/constants.ts       ✓ Design tokens
```

**Priority 3 (Nice to Have)**
```
SidePanel/             ← Slide panels
AnimatedCounter/       ← Number animations
CustomHTMLElements/    ← Semantic HTML
hooks/                 ← Utility hooks
```

---

## Core Concepts

### 1. CVA (Class Variance Authority)

The magic behind Supabase's component system. Variants are defined once:

```typescript
// Define variants
const buttonVariants = cva('base-styles', {
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { small: '...', large: '...' },
  }
})

// Use with type safety
<Button variant="primary" size="large">Click</Button>
```

**Benefit**: No manual class strings, type-safe props, smaller bundle size.

### 2. Semantic Tokens (CSS Variables)

Instead of hardcoded colors:

```typescript
// ✗ Don't do this
<div className="bg-white text-black border-gray-300">

// ✓ Do this
<div className="bg-background text-foreground border-border">
```

**Benefit**: Automatic dark mode support, consistent theming, one place to update colors.

### 3. Compound Components

Components that work together:

```typescript
<Menu type="border">
  <Menu.Group title="Section">
    <Menu.Item>Item 1</Menu.Item>
  </Menu.Group>
</Menu>
```

**Benefit**: Flexible, composable, easy to maintain.

---

## Design Tokens at a Glance

### Colors
- **13 color scales** with 12 shades each
- **Semantic naming**: foreground, background, border, brand, destructive, warning
- **Dark mode**: Automatic via CSS variables
- **Theme support**: 11 theme variants

### Typography
- **2 fonts maximum**: Heading + Body
- **Line heights**: 1.4-1.6 for readability
- **Weights**: Regular, medium, semibold, bold

### Spacing
- **8px base unit**: 0, 4, 8, 12, 16, 24, 32, 48...
- **Gap classes**: Use for flexbox/grid spacing
- **Padding/margin**: Consistent scale

### Components
- **9 button variants** for different contexts
- **3 menu types** for different UX needs
- **CVA-based**: All components use Class Variance Authority
- **Accessible**: ARIA labels, semantic HTML, keyboard support

---

## Copy-Paste Quick Reference

### Button Variants
```typescript
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="link">Link</Button>
<Button variant="text">Text only</Button>
```

### Button Sizes
```typescript
<Button size="tiny">Tiny</Button>
<Button size="small">Small</Button>
<Button size="medium">Medium (default)</Button>
<Button size="large">Large</Button>
<Button size="xlarge">X-Large</Button>
```

### Button with Icons
```typescript
<Button iconLeft={<Plus />}>Add</Button>
<Button iconRight={<ChevronRight />}>Next</Button>
<Button loading>Processing...</Button>
<Button disabled>Disabled</Button>
```

### Menu Navigation
```typescript
<Menu type="border">
  <Menu.Group title="Main">
    <Menu.Item icon={<Home />} active>Dashboard</Menu.Item>
  </Menu.Group>
</Menu>
```

### Color Classes
```typescript
// Text
text-foreground              // Primary text
text-foreground-light        // Secondary text
text-destructive             // Error text

// Background
bg-background                // Main background
bg-brand-600                 // Brand color
bg-destructive-300           // Light red

// Border
border-border                // Default
border-border-strong         // Stronger
border-brand-600             // Brand colored
```

---

## Implementation Checklist

Before starting your project:

- [ ] Extract `packages/ui/src/` folder
- [ ] Install all npm dependencies
- [ ] Configure `tailwind.config.ts` with design tokens
- [ ] Create `globals.css` with CSS variables
- [ ] Set up `lib/utils/cn.ts` utility
- [ ] Import ThemeProvider in root layout
- [ ] Test dark mode support
- [ ] Verify Lucide icons are working
- [ ] Check Button component renders correctly
- [ ] Test Menu navigation component

---

## Common Patterns

### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</div>
```

### Form with Validation
```typescript
<form onSubmit={handleSubmit(onSubmit)}>
  <Input {...register('email')} />
  {errors.email && <span className="text-destructive">{errors.email.message}</span>}
  <Button loading={isSubmitting}>Submit</Button>
</form>
```

### Sidebar Layout
```typescript
<div className="flex">
  <Sidebar className="w-64 border-r border-border" />
  <main className="flex-1">Content</main>
</div>
```

### Theme Toggle
```typescript
const { theme, setTheme } = useTheme()

<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  {theme === 'dark' ? '☀️' : '🌙'}
</button>
```

---

## What Each Documentation File Covers

### DESIGN_SYSTEM_EXTRACT.md (1000+ lines)
- Framework & tech stack overview
- Complete color system breakdown
- 13 color scales with all 12 shades
- Typography system
- Component architecture patterns
- 50+ UI pattern examples
- Best practices and guidelines
- Integration checklist

**→ Read this for: Deep understanding of the design system**

### COMPONENT_EXTRACTION_GUIDE.md (791 lines)
- Quick start instructions
- Step-by-step 6-step setup
- Complete folder structure explanation
- Installation and dependency list
- Tailwind configuration
- Global styles setup
- Utility files creation
- Core components documentation
- Implementation examples
- Best practices

**→ Read this for: How to set up and use the components**

### DETAILED_COMPONENTS_REFERENCE.md (881 lines)
- Complete component catalog (12 components)
- Every component's props and variants
- 100+ copy-paste code examples
- Button variants reference table
- Menu types comparison
- TreeView complete example
- Icon system usage
- Input component styling
- Utilities & helpers reference
- Custom hooks documentation
- Color tokens reference
- Responsive patterns
- Accessibility patterns
- Troubleshooting guide

**→ Read this for: Specific component usage and examples**

### QUICK_START_GUIDE.md (This file)
- 30-second overview
- 3-step setup
- File locations
- Core concepts
- Copy-paste reference
- Implementation checklist

**→ Read this for: Quick reference and navigation**

---

## Next Steps

1. **Read Documentation**
   - Start with QUICK_START_GUIDE.md (this file)
   - Then COMPONENT_EXTRACTION_GUIDE.md for setup
   - Reference DETAILED_COMPONENTS_REFERENCE.md when building

2. **Set Up Your Project**
   - Create Next.js project
   - Extract UI components
   - Install dependencies
   - Configure Tailwind

3. **Start Building**
   - Use Button for primary CTAs
   - Use Menu for navigation
   - Reference other components as needed
   - Follow the 100+ code examples

4. **Customize**
   - Update colors in CSS variables
   - Modify spacing in Tailwind config
   - Create new component variants by extending CVA

---

## Key Statistics

- **12 UI Components** ready to use
- **9 Button variants** for different contexts
- **50+ design patterns** documented
- **100+ code examples** provided
- **13 color scales** with 12 shades each
- **3 menu types** for different UX patterns
- **2 fonts** for typography
- **11 theme variants** available

---

## Resources

- **Supabase UI Repo**: https://github.com/supabase/supabase/tree/master/packages/ui
- **Tailwind CSS**: https://tailwindcss.com/
- **CVA Documentation**: https://cva.style/
- **Radix UI**: https://www.radix-ui.com/
- **Lucide Icons**: https://lucide.dev/

---

## Support

- Check DETAILED_COMPONENTS_REFERENCE.md troubleshooting section
- Review code examples for your specific component
- Verify CSS variables are defined in globals.css
- Ensure all dependencies are installed correctly

---

**Version**: Based on Supabase Main Branch (Master)
**Last Updated**: 2024
**Folder to Extract**: `packages/ui/src/`
