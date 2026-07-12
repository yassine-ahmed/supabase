# Supabase Design System - Complete Extraction & Implementation Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Folder Structure](#folder-structure)
3. [Step-by-Step Setup](#step-by-step-setup)
4. [Core Components Documentation](#core-components-documentation)
5. [Design Tokens & Styling](#design-tokens--styling)
6. [Implementation Examples](#implementation-examples)
7. [Best Practices](#best-practices)

---

## 🚀 Quick Start

### What to Extract
The main folder you need is:
```
packages/ui/src/
```

This folder contains:
- **Components**: All reusable UI components
- **Utilities**: Helper functions (cn.ts, constants.ts, etc.)
- **Styles**: Global CSS and Tailwind configuration
- **Layout**: Complex layout patterns
- **Hooks**: Custom React hooks

---

## 📁 Folder Structure

### Directory Breakdown

```
packages/ui/src/
├── components/              # All UI components
│   ├── Button/             # Button component (9 variants)
│   ├── Menu/               # Navigation menu system
│   ├── TreeView/           # File tree component
│   ├── Icon/               # Icon system & custom icons
│   ├── Input/              # Form input (from shadcn)
│   ├── Loading/            # Loading states
│   ├── SidePanel/          # Sidebar panel component
│   ├── ThemeProvider/      # Theme system
│   ├── CustomHTMLElements/ # Custom heading, spacing
│   ├── shadcn/             # shadcn/ui components
│   └── hooks/              # Custom React hooks
├── layout/
│   └── ai-icon-animation/  # Advanced animation patterns
├── lib/
│   ├── commonCva.ts        # Shared CVA (Class Variance Authority)
│   ├── constants.ts        # Design constants (sizes, spacing)
│   └── utils/              # Utility functions (cn, clipboard, etc.)
├── static/
│   └── icons/              # SVG icon assets
└── types/
    └── assets.d.ts         # TypeScript type definitions
```

### Package Dependencies

```json
{
  "dependencies": {
    "class-variance-authority": "^0.7.1",    // Variant system
    "clsx": "^2.1.1",                        // Class composition
    "cmdk": "^1.1.1",                        // Command palette
    "framer-motion": "^11.18.2",             // Animations
    "lucide-react": "^0.436.0",              // Icons library
    "radix-ui": "catalog:",                  // Headless components
    "react-hook-form": "^7.71.2",            // Form handling
    "recharts": "catalog:",                  // Charts
    "tailwindcss": "catalog:",               // CSS framework
    "sonner": "^1.5.0"                       // Toast notifications
  }
}
```

---

## 📋 Step-by-Step Setup

### Step 1: Initialize Your Project

```bash
# Create a new Next.js project
npx create-next-app@latest my-platform --typescript --tailwind

# Navigate to project
cd my-platform
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install \
  class-variance-authority \
  clsx \
  cmdk \
  framer-motion \
  lucide-react \
  @radix-ui/react-accordion \
  @radix-ui/react-alert-dialog \
  @radix-ui/react-dropdown-menu \
  react-hook-form \
  recharts \
  sonner
```

### Step 3: Copy the UI Package

```bash
# Create your components directory
mkdir -p src/components/ui

# Copy from Supabase repo
cp -r packages/ui/src/components/* src/components/ui/
cp -r packages/ui/src/lib/* src/lib/
cp -r packages/ui/src/static/* public/
```

### Step 4: Configure Tailwind

Create/update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Semantic tokens
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        border: {
          strong: 'hsl(var(--border-strong) / <alpha-value>)',
          DEFAULT: 'hsl(var(--border) / <alpha-value>)',
        },
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
```

### Step 5: Set Up Global Styles

Create `src/app/globals.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Define CSS Variables for theming */
:root {
  --foreground: 0 0% 13%;
  --background: 0 0% 100%;
  --foreground-light: 0 0% 46%;
  --foreground-lighter: 0 0% 63%;
  --border: 0 0% 89%;
  --border-strong: 0 0% 79%;
  --border-stronger: 0 0% 68%;
  --brand: 264 90% 55%;
  --brand-400: 264 90% 60%;
  --brand-500: 264 90% 55%;
  --brand-600: 264 90% 45%;
  --destructive: 0 84% 60%;
  --warning: 38 92% 50%;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --foreground: 0 0% 89%;
    --background: 0 0% 7%;
    --foreground-light: 0 0% 64%;
    --foreground-lighter: 0 0% 51%;
    --border: 0 0% 18%;
    --border-strong: 0 0% 28%;
    --border-stronger: 0 0% 38%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### Step 6: Create Utility Files

Create `src/lib/utils/cn.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🧩 Core Components Documentation

### 1. Button Component

**Location**: `components/Button/Button.tsx`

**Variants**: primary, default, secondary, outline, dashed, link, text, danger, warning

```typescript
import { Button } from '@/components/ui/Button'

export default function ButtonDemo() {
  return (
    <div className="flex gap-2">
      {/* Primary button */}
      <Button variant="primary">Click me</Button>

      {/* Danger button with loading state */}
      <Button variant="danger" loading>
        Deleting...
      </Button>

      {/* Button with icon */}
      <Button iconLeft={<CheckIcon />} variant="success">
        Success
      </Button>

      {/* Block button (full width) */}
      <Button block variant="primary">
        Full Width Button
      </Button>

      {/* Disabled state */}
      <Button disabled>Disabled</Button>
    </div>
  )
}
```

**Props**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'default' | 'secondary' | 'outline' | 'dashed' | 'link' | 'text' | 'danger' | 'warning'
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  block?: boolean          // Full width
  loading?: boolean        // Shows spinner
  disabled?: boolean
  icon?: ReactNode        // Left icon (deprecated)
  iconLeft?: ReactNode    // Left icon
  iconRight?: ReactNode   // Right icon
  rounded?: boolean       // Rounded corners
  asChild?: boolean       // Slot pattern
}
```

---

### 2. Menu Component

**Location**: `components/Menu/Menu.tsx`

**Types**: text, pills, border

```typescript
import Menu from '@/components/ui/Menu'
import { Home, Settings, Users } from 'lucide-react'

export default function MenuDemo() {
  const [active, setActive] = useState('home')

  return (
    <Menu type="border" className="w-64">
      <Menu.Group icon={<Users />} title="Main">
        <Menu.Item
          icon={<Home />}
          active={active === 'home'}
          onClick={() => setActive('home')}
        >
          Home
        </Menu.Item>
        <Menu.Item
          icon={<Settings />}
          active={active === 'settings'}
          onClick={() => setActive('settings')}
        >
          Settings
        </Menu.Item>
      </Menu.Group>
    </Menu>
  )
}
```

**Menu Types**:
- `text`: Minimal styling
- `pills`: Rounded background
- `border`: Left border accent

---

### 3. TreeView Component

**Location**: `components/TreeView/TreeView.tsx`

```typescript
import { TreeView, TreeViewItem } from '@/components/ui/TreeView'
import { Database } from 'lucide-react'

export default function TreeViewDemo() {
  return (
    <TreeView defaultNodeIds={[1]}>
      <TreeViewItem
        name="Databases"
        nodeId={1}
        isBranch
        icon={<Database />}
      >
        <TreeViewItem name="users" nodeId={2} />
        <TreeViewItem name="products" nodeId={3} />
      </TreeViewItem>
    </TreeView>
  )
}
```

**Features**:
- File tree structure
- Expand/collapse nodes
- Inline editing
- Custom icons
- Loading states
- Context menu support

---

### 4. Icon System

**Location**: `components/Icon/`

```typescript
import { Icon, IconBase, IconBackground } from '@/components/ui/Icon'

export default function IconDemo() {
  return (
    <div className="flex gap-4">
      {/* Simple icon */}
      <IconBase>
        <YourCustomIcon />
      </IconBase>

      {/* Icon with background */}
      <IconBackground className="bg-brand-100">
        <YourCustomIcon />
      </IconBackground>
    </div>
  )
}
```

---

### 5. Theme Provider

**Location**: `components/ThemeProvider/`

```typescript
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

---

## 🎨 Design Tokens & Styling

### Color System

Supabase uses a semantic color system with 13 color scales:

```css
/* Primary colors */
--foreground        /* Text color */
--background        /* Background color */
--brand             /* Brand/Primary color */

/* States */
--destructive       /* Danger/Delete actions */
--warning           /* Warning states */

/* Borders */
--border            /* Default border */
--border-strong     /* Stronger border */
--border-stronger   /* Strongest border */

/* Levels */
--foreground-light  /* Secondary text */
--foreground-lighter /* Tertiary text */
--foreground-muted  /* Muted text */
```

### Size Constants

From `lib/constants.ts`:

```typescript
export const SIZE_VARIANTS = {
  tiny: 'h-6 text-xs',
  small: 'h-8 text-sm',
  medium: 'h-10 text-sm',
  large: 'h-12 text-base',
  xlarge: 'h-14 text-base',
}

export const SIZE_VARIANTS_DEFAULT = 'medium'
```

### CVA (Class Variance Authority) Pattern

```typescript
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  // Base styles applied to all variants
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-brand-600 text-white hover:bg-brand-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      },
      size: {
        small: 'px-3 py-1 text-sm',
        large: 'px-6 py-2 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
)

// Usage
<button className={buttonVariants({ variant: 'primary', size: 'small' })}>
  Click me
</button>
```

---

## 💻 Implementation Examples

### Example 1: Creating a Dashboard Header

```typescript
'use client'

import { Button } from '@/components/ui/Button'
import { Menu } from '@/components/ui/Menu'
import { Bell, Settings, User } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      <div className="flex items-center gap-4">
        <Button variant="text" icon={<Bell />} />
        <Button variant="text" icon={<Settings />} />
        <Button variant="text" icon={<User />} />
      </div>
    </header>
  )
}
```

### Example 2: Form with Validation

```typescript
'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Handle login
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <Input
          {...register('email', { required: true })}
          placeholder="your@email.com"
          type="email"
        />
        {errors.email && <span className="text-destructive text-sm">Email is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Password
        </label>
        <Input
          {...register('password', { required: true })}
          placeholder="••••••••"
          type="password"
        />
        {errors.password && <span className="text-destructive text-sm">Password is required</span>}
      </div>

      <Button
        variant="primary"
        block
        loading={isSubmitting}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  )
}
```

### Example 3: Sidebar Navigation

```typescript
'use client'

import { useState } from 'react'
import Menu from '@/components/ui/Menu'
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')

  return (
    <aside className="w-64 border-r border-border h-screen p-4">
      <Menu type="border">
        <Menu.Group title="Main" icon={<LayoutDashboard />}>
          <Menu.Item
            icon={<LayoutDashboard />}
            active={active === 'dashboard'}
            onClick={() => setActive('dashboard')}
          >
            Dashboard
          </Menu.Item>
        </Menu.Group>

        <Menu.Group title="Management" icon={<Users />}>
          <Menu.Item
            icon={<Users />}
            active={active === 'users'}
            onClick={() => setActive('users')}
          >
            Users
          </Menu.Item>
          <Menu.Item
            icon={<Settings />}
            active={active === 'settings'}
            onClick={() => setActive('settings')}
          >
            Settings
          </Menu.Item>
        </Menu.Group>

        <Menu.Group title="Account">
          <Menu.Item icon={<LogOut />}>Logout</Menu.Item>
        </Menu.Group>
      </Menu>
    </aside>
  )
}
```

---

## ✅ Best Practices

### 1. Import Organization

```typescript
// Always use the index.tsx files for clean imports
import { Button } from '@/components/ui/Button'
import { Menu } from '@/components/ui/Menu'
import { TreeView, TreeViewItem } from '@/components/ui/TreeView'

// Not: import Button from '@/components/ui/Button/Button.tsx'
```

### 2. Component Composition

```typescript
// Use compound components for complex UIs
<Menu type="border">
  <Menu.Group title="Section 1">
    <Menu.Item icon={<Icon />}>Item 1</Menu.Item>
  </Menu.Group>
</Menu>
```

### 3. Variant System

```typescript
// Always use the variant prop pattern with CVA
<Button variant="primary" size="large" disabled>
  Click me
</Button>

// Instead of applying classes manually:
// <button className="bg-brand-600 text-white px-6 py-2 ...">
```

### 4. Semantic Styling

```typescript
// Use semantic tokens instead of hardcoded colors
<div className="bg-background text-foreground border-border">
  Content
</div>

// Not: <div className="bg-white text-black border-gray-300">
```

### 5. Dark Mode Support

Supabase components automatically support dark mode through CSS variables.

```typescript
// Just include this in your globals.css and it works!
@media (prefers-color-scheme: dark) {
  :root {
    --background: 0 0% 7%;
    --foreground: 0 0% 89%;
    /* ... other variables */
  }
}
```

### 6. TypeScript Props

```typescript
// Always type your props for better IDE support
import type { ButtonProps } from '@/components/ui/Button'

interface MyButtonProps extends ButtonProps {
  customProp?: string
}

export function MyButton({ customProp, ...props }: MyButtonProps) {
  return <Button {...props} />
}
```

### 7. Responsive Design

```typescript
// Use Tailwind's responsive prefixes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

---

## 📚 File Checklist for Extraction

When copying components, make sure you have:

```
✓ src/components/ui/
  ✓ Button/
  ✓ Menu/
  ✓ TreeView/
  ✓ Icon/
  ✓ Input/ (from shadcn)
  ✓ Loading/
  ✓ ThemeProvider/
  ✓ hooks/

✓ src/lib/
  ✓ utils/cn.ts
  ✓ commonCva.ts
  ✓ constants.ts

✓ tailwind.config.ts
✓ globals.css
✓ CSS variables defined
```

---

## 🔗 Key Resources

- **CVA Documentation**: https://cva.style/
- **Tailwind CSS**: https://tailwindcss.com/
- **Radix UI**: https://www.radix-ui.com/
- **Lucide Icons**: https://lucide.dev/
- **React Hook Form**: https://react-hook-form.com/

---

## 🆘 Troubleshooting

### Issue: Components not styling correctly
**Solution**: Ensure CSS variables are defined in `globals.css` and Tailwind is configured properly.

### Issue: TypeScript errors on imports
**Solution**: Check that `index.tsx` files exist in component directories and export components properly.

### Issue: Dark mode not working
**Solution**: Add `@media (prefers-color-scheme: dark)` block to `globals.css` with updated CSS variables.

### Issue: Lucide icons not showing
**Solution**: Install `lucide-react` and import icons correctly: `import { IconName } from 'lucide-react'`

---

**Last Updated**: 2024
**Supabase Version**: Latest Main Branch
