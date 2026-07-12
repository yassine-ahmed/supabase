# Supabase UI Components - Detailed Reference

## Complete Component Catalog

This document provides in-depth details for every component available in the Supabase UI library.

---

## 1. BUTTON COMPONENT

**File**: `packages/ui/src/components/Button/Button.tsx`

### Variants

| Variant | Use Case | Styling |
|---------|----------|---------|
| `primary` | Main CTAs, primary actions | Purple background, white text |
| `default` | Secondary actions | Light gray background |
| `secondary` | Alternative secondary action | Dark foreground, light background |
| `outline` | Tertiary actions | Transparent, bordered |
| `dashed` | Destructive dashed actions | Dashed border |
| `link` | Link-like button | Purple text, no background |
| `text` | Minimal text button | Text only |
| `danger` | Delete/destructive actions | Red background |
| `warning` | Warning actions | Orange background |

### Sizes

```typescript
type Size = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'

// Height values
tiny:    'h-6'     // 24px
small:   'h-8'     // 32px
medium:  'h-10'    // 40px (default)
large:   'h-12'    // 48px
xlarge:  'h-14'    // 56px
```

### Complete Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Styling
  variant?: 'primary' | 'default' | 'secondary' | 'outline' | 'dashed' | 'link' | 'text' | 'danger' | 'warning'
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  rounded?: boolean          // rounded-full
  block?: boolean            // w-full

  // State
  loading?: boolean          // Shows spinner, disables button
  disabled?: boolean

  // Icons
  icon?: React.ReactNode     // Deprecated, use iconLeft
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode

  // Advanced
  asChild?: boolean          // Slot pattern - render as different element
}
```

### Usage Examples

```typescript
// Simple button
<Button>Click me</Button>

// Primary CTA with loading
<Button variant="primary" size="large" loading>
  Saving...
</Button>

// Danger with icon
<Button variant="danger" iconLeft={<Trash2 />}>
  Delete
</Button>

// Full width
<Button block variant="primary">
  Continue
</Button>

// Disabled state
<Button disabled>
  Unavailable
</Button>

// Icon only (using Slot)
<Button asChild>
  <a href="/settings">
    <Settings className="w-4 h-4" />
  </a>
</Button>

// Link-style button
<Button variant="link">
  Learn more →
</Button>

// Text button (minimal)
<Button variant="text" size="small">
  Cancel
</Button>
```

---

## 2. MENU COMPONENT

**File**: `packages/ui/src/components/Menu/Menu.tsx`

### Menu Types

#### Type: `text`
Minimal styling, suitable for vertical navigation

```typescript
<Menu type="text">
  <Menu.Item icon={<Home />} active>Home</Menu.Item>
  <Menu.Item icon={<Settings />}>Settings</Menu.Item>
</Menu>
```

#### Type: `border`
Left border accent for active items

```typescript
<Menu type="border">
  <Menu.Item icon={<Dashboard />} active>
    Dashboard
  </Menu.Item>
  <Menu.Item icon={<Users />}>Users</Menu.Item>
</Menu>
```

#### Type: `pills`
Rounded background for active items

```typescript
<Menu type="pills">
  <Menu.Item icon={<Home />} active>Home</Menu.Item>
  <Menu.Item icon={<Settings />}>Settings</Menu.Item>
</Menu>
```

### Menu Props

```typescript
interface MenuProps {
  children: React.ReactNode
  className?: string        // Container classes
  ulClassName?: string      // UL element classes
  type?: 'text' | 'pills' | 'border'  // Default: 'text'
  style?: React.CSSProperties
}

interface MenuItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  active?: boolean
  rounded?: boolean
  onClick?: () => void
  showActiveBar?: boolean
  style?: React.CSSProperties
}

interface MenuGroupProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  title: React.ReactNode
}
```

### Complete Example

```typescript
'use client'

import { useState } from 'react'
import Menu from '@/components/ui/Menu'
import { BarChart3, Database, Settings, Users, LogOut } from 'lucide-react'

export default function SidebarNavigation() {
  const [active, setActive] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 />, href: '/dashboard' },
    { id: 'databases', label: 'Databases', icon: <Database />, href: '/databases' },
    { id: 'users', label: 'Users', icon: <Users />, href: '/users' },
  ]

  return (
    <aside className="w-64 h-screen border-r border-border bg-background">
      <div className="p-4">
        <h2 className="text-lg font-bold text-foreground mb-6">My App</h2>

        <Menu type="border" className="space-y-2">
          <Menu.Group title="Navigation" icon={<BarChart3 />}>
            {navItems.map((item) => (
              <Menu.Item
                key={item.id}
                icon={item.icon}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Group>

          <Menu.Group title="Settings" icon={<Settings />}>
            <Menu.Item icon={<Settings />} active={active === 'settings'}>
              Preferences
            </Menu.Item>
            <Menu.Item icon={<LogOut />}>
              Logout
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </div>
    </aside>
  )
}
```

---

## 3. TREEVIEW COMPONENT

**File**: `packages/ui/src/components/TreeView/TreeView.tsx`

### Purpose
Hierarchical file/folder tree display with expand/collapse, editing, and context actions.

### Props

```typescript
interface TreeViewProps extends ComponentPropsWithoutRef<'div'> {
  // Standard tree view props from react-accessible-treeview
}

interface TreeViewItemProps {
  level: number              // Depth in tree (1-based)
  levelPadding?: number      // Padding per level (default: 38)
  isExpanded?: boolean       // Folder open state
  isOpened?: boolean         // Being previewed
  isBranch?: boolean         // Has children
  isSelected?: boolean       // Highlighted
  isPreview?: boolean        // Preview state
  isLoading?: boolean        // Loading spinner
  xPadding?: number         // Horizontal padding
  name: string | ReactNode   // Display name
  description?: string       // Tooltip text
  nameForTitle?: string      // Title attribute
  icon?: ReactNode          // Custom icon
  isEditing?: boolean       // Show input field
  onEditSubmit?: (value: string) => void
  onDoubleClick?: (e: React.MouseEvent) => void
  actions?: ReactNode       // Right-side actions
}
```

### Complete Example

```typescript
'use client'

import { useState } from 'react'
import { TreeView, TreeViewItem } from '@/components/ui/TreeView'
import { Database, Table, Edit2, Trash2 } from 'lucide-react'

interface TreeNode {
  id: string
  name: string
  icon: React.ReactNode
  children?: TreeNode[]
}

export default function DatabaseExplorer() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['db-1']))
  const [selectedNode, setSelectedNode] = useState<string | null>('table-1')
  const [editingNode, setEditingNode] = useState<string | null>(null)

  const databases: TreeNode[] = [
    {
      id: 'db-1',
      name: 'production',
      icon: <Database />,
      children: [
        { id: 'table-1', name: 'users', icon: <Table /> },
        { id: 'table-2', name: 'products', icon: <Table /> },
        { id: 'table-3', name: 'orders', icon: <Table /> },
      ],
    },
    {
      id: 'db-2',
      name: 'staging',
      icon: <Database />,
      children: [
        { id: 'table-4', name: 'users_staging', icon: <Table /> },
      ],
    },
  ]

  const renderNode = (node: TreeNode, level: number) => {
    const isExpanded = expandedNodes.has(node.id)
    const isSelected = selectedNode === node.id

    return (
      <div key={node.id}>
        <TreeViewItem
          level={level}
          name={node.name}
          icon={node.icon}
          isBranch={!!node.children?.length}
          isExpanded={isExpanded}
          isSelected={isSelected}
          isEditing={editingNode === node.id}
          onEditSubmit={(newName) => {
            console.log(`Renamed ${node.name} to ${newName}`)
            setEditingNode(null)
          }}
          onDoubleClick={() => setEditingNode(node.id)}
          actions={
            <div className="flex gap-1 opacity-0 group-hover:opacity-100">
              <button onClick={() => setEditingNode(node.id)}>
                <Edit2 className="w-4 h-4" />
              </button>
              <button>
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          }
        />
        {isExpanded && node.children?.map((child) => renderNode(child, level + 1))}
      </div>
    )
  }

  return (
    <div className="p-4 bg-background border-r border-border h-full overflow-auto">
      <h3 className="font-semibold text-foreground mb-4">Database Structure</h3>
      <TreeView>
        {databases.map((db) => renderNode(db, 1))}
      </TreeView>
    </div>
  )
}
```

---

## 4. INPUT COMPONENT

**File**: `packages/ui/src/components/shadcn/ui/input.tsx`

### Props

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Standard HTML input attributes
}
```

### Styled for Supabase Design System

```typescript
// Input styling includes:
// - Focus ring: 2px outline with offset
// - Error state: red text
// - Disabled state: reduced opacity
// - Placeholder: muted color
```

### Usage

```typescript
import { Input } from '@/components/ui/Input'
import { useState } from 'react'

export default function SearchBox() {
  const [query, setQuery] = useState('')

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Search tables..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
    </div>
  )
}
```

---

## 5. ICON SYSTEM

**File**: `packages/ui/src/components/Icon/`

### Components

```typescript
// IconBase: Simple icon wrapper
<IconBase className="text-foreground-light">
  <YourIcon />
</IconBase>

// IconBackground: Icon with background circle
<IconBackground className="bg-brand-100 text-brand-600">
  <YourIcon />
</IconBackground>

// IconContext: Provides icon theme to children
<IconContext.Provider value={{ color: 'brand' }}>
  <YourIcon />
</IconContext.Provider>
```

### Using Lucide Icons

```typescript
import {
  Home,
  Settings,
  Users,
  Database,
  MoreVertical,
  ChevronRight,
  Check,
  X,
  Loader2,
  AlertCircle,
} from 'lucide-react'

export function IconShowcase() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Home className="w-6 h-6 text-foreground" />
      <Settings className="w-6 h-6 text-foreground-light" />
      <Users className="w-6 h-6 text-brand-600" />
      <Database className="w-6 h-6 text-destructive" />
    </div>
  )
}
```

---

## 6. LOADING COMPONENT

**File**: `packages/ui/src/components/Loading/Loading.tsx`

### Types of Loaders

```typescript
// Spinning loader
<Loading />

// Loading line (progress bar)
<LoadingLine />

// Logo loader (animated)
<LogoLoader />
```

### Usage

```typescript
import { Loading, LoadingLine, LogoLoader } from '@/components/ui/Loading'

export function LoadingStates() {
  return (
    <div className="space-y-8">
      {/* Full page loader */}
      <div className="flex items-center justify-center h-64">
        <Loading />
      </div>

      {/* Progress bar */}
      <LoadingLine />

      {/* Branded loader */}
      <div className="flex items-center justify-center h-64">
        <LogoLoader />
      </div>
    </div>
  )
}
```

---

## 7. CUSTOM HTML ELEMENTS

**File**: `packages/ui/src/components/CustomHTMLElements/`

### Heading Component

Semantic heading with customizable level and styling:

```typescript
import { Heading } from '@/components/ui/CustomHTMLElements'

export function HeadingExample() {
  return (
    <div className="space-y-4">
      <Heading level={1}>H1: Main Title</Heading>
      <Heading level={2}>H2: Section Title</Heading>
      <Heading level={3}>H3: Subsection</Heading>
    </div>
  )
}
```

---

## 8. SIDE PANEL COMPONENT

**File**: `packages/ui/src/components/SidePanel/SidePanel.tsx`

Sliding panel from the side of the screen:

```typescript
import { SidePanel } from '@/components/ui/SidePanel'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X } from 'lucide-react'

export function SidePanelDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Panel
      </Button>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Panel Title</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-foreground-light">Panel content goes here</p>
        </div>
      </SidePanel>
    </>
  )
}
```

---

## 9. THEME PROVIDER

**File**: `packages/ui/src/components/ThemeProvider/`

Manages theme state and dark mode:

```typescript
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// In your component:
import { useTheme } from '@/components/ui/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current: {theme}
    </button>
  )
}
```

---

## 10. UTILITIES & HELPERS

### cn() - Class Merger

**File**: `packages/ui/src/lib/utils/cn.ts`

Merges Tailwind classes safely, avoiding conflicts:

```typescript
import { cn } from '@/lib/utils/cn'

export function MyButton({ isActive }: { isActive: boolean }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md transition',
        isActive ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-800'
      )}
    >
      Click me
    </button>
  )
}
```

### Constants

**File**: `packages/ui/src/lib/constants.ts`

```typescript
export const SIZE_VARIANTS = {
  tiny: 'h-6 text-xs',
  small: 'h-8 text-sm',
  medium: 'h-10 text-sm',
  large: 'h-12 text-base',
  xlarge: 'h-14 text-base',
}

export const COMMON_SIZES = ['tiny', 'small', 'medium', 'large', 'xlarge']
```

### Class Variance Authority (CVA)

**File**: `packages/ui/src/lib/commonCva.ts`

```typescript
import { cva, VariantProps } from 'class-variance-authority'

// Define variants once, use everywhere
export const commonButtonStyles = cva('rounded-md font-medium transition', {
  variants: {
    size: {
      small: 'px-3 py-1 text-sm',
      large: 'px-6 py-2 text-lg',
    },
    variant: {
      primary: 'bg-brand-600 text-white',
      secondary: 'bg-gray-200 text-gray-800',
    },
  },
})

// Usage
<button className={commonButtonStyles({ size: 'large', variant: 'primary' })}>
  Click
</button>
```

---

## 11. CUSTOM HOOKS

**File**: `packages/ui/src/components/hooks/`

### useHorizontalScroll

Enables smooth horizontal scrolling:

```typescript
import { useHorizontalScroll } from '@/components/ui/hooks/use-horizontal-scroll'

export function HorizontalScroller() {
  const scrollRef = useHorizontalScroll()

  return (
    <div ref={scrollRef} className="overflow-x-auto flex gap-4 pb-4">
      {/* Horizontally scrollable items */}
    </div>
  )
}
```

### useMobile

Detect mobile viewport:

```typescript
import { useMobile } from '@/components/ui/hooks/use-mobile'

export function ResponsiveComponent() {
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileLayout />
  }

  return <DesktopLayout />
}
```

---

## 12. ANIMATION PATTERNS

**File**: `packages/ui/src/layout/ai-icon-animation/`

Advanced animation using Framer Motion:

```typescript
import { motion } from 'framer-motion'
import { AIIconAnimation } from '@/components/ui/layout/ai-icon-animation'

export function AnimationDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AIIconAnimation />
    </motion.div>
  )
}
```

---

## Color Tokens Reference

### CSS Variables Used

```css
/* Foreground/Text Colors */
--foreground          /* Primary text */
--foreground-light    /* Secondary text */
--foreground-lighter  /* Tertiary text */
--foreground-muted    /* Muted text */

/* Background Colors */
--background          /* Main background */
--alternative         /* Secondary background */
--selection           /* Selected/highlighted */

/* Brand Colors */
--brand               /* Primary brand color */
--brand-400           /* Brand lighter */
--brand-500           /* Brand base */
--brand-600           /* Brand darker */

/* States */
--destructive         /* Red for errors/delete */
--warning             /* Orange for warnings */

/* Borders */
--border              /* Default border */
--border-strong       /* Stronger border */
--border-stronger     /* Strongest border */

/* Specialized */
--sidebar-accent      /* Sidebar accent */
--control             /* Form control background */
--hi-contrast         /* High contrast text */
```

### Using Color Tokens in Tailwind

```typescript
<div className="text-foreground bg-background border-border">
  {/* Automatically works in light and dark mode */}
</div>

<button className="bg-brand-600 hover:bg-brand-700 text-white">
  Primary Action
</button>

<div className="text-destructive">
  Error message
</div>
```

---

## Responsive Design Patterns

```typescript
// Mobile-first responsive design
<div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3 gap-4">
  {/* Single column on mobile, 2 columns on tablet, 3 columns on desktop */}
</div>

// Responsive text sizes
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>

// Hide/show elements responsively
<div className="hidden md:block">
  {/* Only visible on medium screens and up */}
</div>

<div className="md:hidden">
  {/* Only visible on small screens */}
</div>
```

---

## Accessibility Patterns

```typescript
// Semantic HTML
<button
  aria-label="Open menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <MenuIcon />
</button>

// Keyboard navigation
<Menu role="menu" aria-orientation="vertical">
  <Menu.Item role="menuitem">Item 1</Menu.Item>
  <Menu.Item role="menuitem">Item 2</Menu.Item>
</Menu>

// Form accessibility
<label htmlFor="email-input">
  Email Address
</label>
<Input id="email-input" type="email" aria-required="true" />
{errors && <span role="alert" className="text-destructive">{errors}</span>}

// Focus management
<button
  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
>
  Keyboard focused button
</button>
```

---

## Performance Tips

1. **Memoize Components**: Use `memo()` for expensive components
2. **Lazy Load**: Use `dynamic()` for route-based code splitting
3. **Use SVG Icons**: Lucide icons are tree-shakeable
4. **CSS Variables**: Avoid re-renders when switching themes
5. **CVA Pattern**: Generates optimized class strings at build time

---

## Troubleshooting Guide

| Issue | Solution |
|-------|----------|
| Components unstyled | Ensure Tailwind CSS is configured and globals.css is imported |
| Dark mode not working | Check CSS variables are defined in `@media (prefers-color-scheme: dark)` |
| Icons not showing | Install lucide-react and import correctly |
| Classes not merging | Use `cn()` function instead of string concatenation |
| Types not found | Check tsconfig.json has correct paths |
| Tree view not expanding | Ensure `isBranch` prop is set for parent items |

---

**Last Updated**: 2024
**Version**: Based on Supabase Main Branch
