# Supabase Design System - Visual Reference & Code Gallery

## Component Visual Showcase with Code

This document provides visual descriptions and complete code implementations of all Supabase components.

---

## BUTTON COMPONENT SHOWCASE

### Button Variants (Visual + Code)

#### 1. Primary Button
```
┌─────────────────────┐
│  Purple Background  │  ← Primary action, most prominent
│   White Text        │  ← High contrast
└─────────────────────┘
```

**When to use**: Main CTAs, form submissions, primary actions

```typescript
import { Button } from '@/components/ui/Button'

export function PrimaryButton() {
  return <Button variant="primary">Save Changes</Button>
}
```

#### 2. Secondary Button
```
┌─────────────────────┐
│  Light Gray Bg      │  ← Less prominent than primary
│   Dark Text         │  ← Good contrast
└─────────────────────┘
```

**When to use**: Secondary actions, Cancel buttons

```typescript
<Button variant="secondary">Cancel</Button>
```

#### 3. Danger Button
```
┌─────────────────────┐
│   Red Background    │  ← Warns of destructive action
│   White Text        │  ← High contrast for warnings
└─────────────────────┘
```

**When to use**: Delete operations, destructive actions

```typescript
<Button variant="danger" onClick={handleDelete}>
  Delete Account
</Button>
```

#### 4. Outline Button
```
┌──────────────────────────┐
│  Transparent background  │  ← Minimal design
│  Border + Text           │  ← Subtle styling
└──────────────────────────┘
```

**When to use**: Tertiary actions, optional interactions

```typescript
<Button variant="outline">Learn More</Button>
```

#### 5. Link Button
```
Purple Text
→ Links to another page  ← Looks like a hyperlink
No background, no border
```

**When to use**: Navigation links styled as buttons

```typescript
<Button variant="link" asChild>
  <a href="/docs">View Documentation</a>
</Button>
```

#### 6. Text Button
```
Just text, no styling  ← Minimal, invisible button
Hover shows background ← Reveals interactive state
```

**When to use**: Minimal UI, inline actions

```typescript
<Button variant="text" size="small">
  Skip
</Button>
```

### Button Sizes

```
┌───────────┐  ← tiny (h-6, 24px)
│ Tiny Btn  │
└───────────┘

┌─────────────────┐  ← small (h-8, 32px)
│  Small Button   │
└─────────────────┘

┌────────────────────────┐  ← medium (h-10, 40px) - DEFAULT
│   Medium Button Size   │
└────────────────────────┘

┌────────────────────────────┐  ← large (h-12, 48px)
│      Large Button Size     │
└────────────────────────────┘

┌──────────────────────────────┐  ← xlarge (h-14, 56px)
│    X-Large Button Size       │
└──────────────────────────────┘
```

### Button with Icons

```
┌────────────────────────┐
│ ✓ Icon Left | Text     │  ← Left aligned icon
└────────────────────────┘

┌────────────────────────┐
│ Text | Right Icon →    │  ← Right aligned icon
└────────────────────────┘

┌────────────────────────┐
│     ⟳ Loading...       │  ← Loading spinner replaces icon
└────────────────────────┘

┌────────────────────────┐
│    ✗ Disabled (50%)    │  ← Disabled state (faded)
└────────────────────────┘
```

**Full Icon Example**:
```typescript
import { Button } from '@/components/ui/Button'
import { Plus, Trash2, ArrowRight, Loader2 } from 'lucide-react'

export function IconButtons() {
  return (
    <div className="flex gap-2">
      <Button iconLeft={<Plus />}>Add Item</Button>
      <Button iconRight={<ArrowRight />}>Continue</Button>
      <Button iconLeft={<Trash2 />} variant="danger">Delete</Button>
      <Button loading>Processing...</Button>
    </div>
  )
}
```

---

## MENU COMPONENT SHOWCASE

### Menu Types Comparison

#### Type 1: Text Menu
```
┌──────────────────────┐
│ Home                 │  ← Minimal styling
│ About                │  ← Just text
│ Services             │  ← Active item darker
│ Contact              │  ← Clean, minimalist
└──────────────────────┘
```

**Code**:
```typescript
<Menu type="text">
  <Menu.Item icon={<Home />} active>Home</Menu.Item>
  <Menu.Item icon={<Info />}>About</Menu.Item>
</Menu>
```

#### Type 2: Border Menu
```
┌──────────────────────┐
│ ▌ Home               │  ← Left border appears on active
│ │ ▌ Dashboard        │  ← Great for sidebars
│ │ ▌ Settings         │  ← Clear indication of selection
│ User Profile         │  ← Inactive items have no border
└──────────────────────┘
```

**Code**:
```typescript
<Menu type="border">
  <Menu.Item icon={<Home />} active>Dashboard</Menu.Item>
  <Menu.Item icon={<Settings />}>Settings</Menu.Item>
  <Menu.Item icon={<User />}>Profile</Menu.Item>
</Menu>
```

#### Type 3: Pills Menu
```
┌────────────────────────┐
│  Home       Dashboard   │  ← Inactive items plain text
│ [Settings]  [Profile]  │  ← Active items get background
│            [Logout]    │  ← Rounded background (pills)
└────────────────────────┘
```

**Code**:
```typescript
<Menu type="pills">
  <Menu.Item icon={<Home />} active>Home</Menu.Item>
  <Menu.Item icon={<Settings />}>Settings</Menu.Item>
</Menu>
```

### Menu with Groups

```
┌────────────────────────┐
│ 🏠 NAVIGATION          │  ← Group header with icon
│  • Dashboard           │  ← Menu items under group
│  • Analytics           │
│                        │
│ ⚙️ SETTINGS            │  ← Second group
│  • Preferences         │
│  • Account             │
│  • Billing             │
└────────────────────────┘
```

**Full Example**:
```typescript
import Menu from '@/components/ui/Menu'
import { BarChart, Settings, Bell, Slack } from 'lucide-react'

export function NavigationMenu() {
  const [active, setActive] = useState('dashboard')

  return (
    <Menu type="border" className="w-64 p-4 border-r">
      <Menu.Group icon={<BarChart />} title="Analytics">
        <Menu.Item
          icon={<BarChart />}
          active={active === 'dashboard'}
          onClick={() => setActive('dashboard')}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          icon={<Bell />}
          active={active === 'notifications'}
          onClick={() => setActive('notifications')}
        >
          Notifications
        </Menu.Item>
      </Menu.Group>

      <Menu.Group icon={<Settings />} title="Configuration">
        <Menu.Item icon={<Settings />}>Settings</Menu.Item>
        <Menu.Item icon={<Slack />}>Integrations</Menu.Item>
      </Menu.Group>
    </Menu>
  )
}
```

---

## TREEVIEW COMPONENT SHOWCASE

### Visual Structure

```
📁 production                    ← Level 1 (root)
  ▼ 📊 analytics_events         ← Level 2 (folder)
    • columns                    ← Level 3 (file)
    • indexes
    • triggers
  ► 👥 users                    ← Collapsed folder
  ▼ 🛒 orders                   ← Expanded folder
    • id (primary key)
    • user_id (foreign key)
    • created_at

📁 staging                       ← Another root
  ► 📊 analytics
```

**Complete Code**:
```typescript
'use client'

import { useState } from 'react'
import { TreeView, TreeViewItem } from '@/components/ui/TreeView'
import {
  Database,
  Table,
  Edit2,
  Trash2,
  Copy,
  ChevronRight,
} from 'lucide-react'

interface DatabaseNode {
  id: string
  name: string
  type: 'database' | 'table' | 'column'
  children?: DatabaseNode[]
}

const databaseStructure: DatabaseNode[] = [
  {
    id: 'db-prod',
    name: 'production',
    type: 'database',
    children: [
      {
        id: 'tbl-users',
        name: 'users',
        type: 'table',
        children: [
          { id: 'col-id', name: 'id (UUID)', type: 'column' },
          { id: 'col-email', name: 'email (TEXT)', type: 'column' },
          { id: 'col-created', name: 'created_at (TIMESTAMP)', type: 'column' },
        ],
      },
      {
        id: 'tbl-products',
        name: 'products',
        type: 'table',
        children: [
          { id: 'col-id', name: 'id (UUID)', type: 'column' },
          { id: 'col-name', name: 'name (TEXT)', type: 'column' },
          { id: 'col-price', name: 'price (DECIMAL)', type: 'column' },
        ],
      },
    ],
  },
]

export function DatabaseExplorer() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(['db-prod', 'tbl-users'])
  )
  const [selectedNode, setSelectedNode] = useState<string>('tbl-users')
  const [editingNode, setEditingNode] = useState<string | null>(null)

  const getIcon = (type: string) => {
    switch (type) {
      case 'database':
        return <Database className="w-4 h-4" />
      case 'table':
        return <Table className="w-4 h-4" />
      default:
        return null
    }
  }

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }
    setExpandedNodes(newExpanded)
  }

  const renderNode = (node: DatabaseNode, level: number) => {
    const isExpanded = expandedNodes.has(node.id)
    const isSelected = selectedNode === node.id

    return (
      <div key={node.id}>
        <TreeViewItem
          level={level}
          name={node.name}
          icon={getIcon(node.type)}
          isBranch={!!node.children?.length}
          isExpanded={isExpanded}
          isSelected={isSelected}
          isEditing={editingNode === node.id}
          onEditSubmit={(newName) => {
            console.log(`Renamed ${node.name} to ${newName}`)
            setEditingNode(null)
          }}
          onDoubleClick={() => setEditingNode(node.id)}
          onClick={() => setSelectedNode(node.id)}
          actions={
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleNode(node.id)
                }}
                className="p-1 hover:bg-control rounded"
              >
                <Edit2 className="w-3 h-3" />
              </button>
              <button className="p-1 hover:bg-control rounded">
                <Copy className="w-3 h-3" />
              </button>
              <button className="p-1 hover:bg-control rounded text-destructive">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          }
        />
        {isExpanded &&
          node.children?.map((child) => renderNode(child, level + 1))}
      </div>
    )
  }

  return (
    <div className="flex h-full">
      {/* Left panel: Tree view */}
      <div className="w-64 border-r border-border p-4 overflow-auto">
        <h3 className="font-semibold text-foreground mb-4">Databases</h3>
        <TreeView>
          {databaseStructure.map((db) => renderNode(db, 1))}
        </TreeView>
      </div>

      {/* Right panel: Details */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          {selectedNode} Details
        </h2>
        <p className="text-foreground-light">
          Selected item: {selectedNode}
        </p>
      </div>
    </div>
  )
}
```

---

## FORM COMPONENT SHOWCASE

### Complete Login Form

```
┌────────────────────────────────┐
│      Sign In to Account        │  ← Title
├────────────────────────────────┤
│ Email Address                  │  ← Label
│ ┌──────────────────────────────┐│  ← Input field
│ │ user@example.com             ││
│ └──────────────────────────────┘│
│                                │
│ Password                       │  ← Label
│ ┌──────────────────────────────┐│  ← Password input
│ │ ••••••••••••••               ││
│ └──────────────────────────────┘│
│ Forgot password? →             │  ← Link
│                                │
│ ┌────────────────────────────────┐  ← CTA Button
│ │  Sign In (loading spinner) ⟳   │
│ └────────────────────────────────┘
│                                |
│ Don't have an account? Sign up │  ← Link to signup
└────────────────────────────────┘
```

**Complete Code**:
```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface LoginFormData {
  email: string
  password: string
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Login:', data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto p-8 border border-border rounded-lg">
      <h1 className="text-2xl font-bold text-foreground mb-6">
        Sign In to Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <a href="#" className="text-sm text-brand-600 hover:text-brand-700">
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
            className={errors.password ? 'border-destructive' : ''}
          />
          {errors.password && (
            <p className="text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          block
          loading={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-foreground-light mt-6">
        Don&apos;t have an account?{' '}
        <a href="#" className="text-brand-600 hover:text-brand-700 font-medium">
          Sign up here
        </a>
      </p>
    </div>
  )
}
```

---

## DASHBOARD LAYOUT SHOWCASE

### Full Dashboard Structure

```
┌────────────────────────────────────────────────────────────┐
│  📦 Dashboard  🔔  ⚙️  👤                                   │  ← Header
├──────────────┬─────────────────────────────────────────────┤
│              │                                             │
│ Dashboard    │  Overview                                   │
│ ▌ Analytics  │  ┌──────────┬──────────┬──────────┐        │
│ │ Users      │  │ Revenue  │ Orders   │ Visitors │        │
│ │ Orders     │  │ $12,345  │ 234      │ 1.2K     │
│ │ Products   │  └──────────┴──────────┴──────────┘
│ ▌ Settings   │                                             │
│                │  Recent Orders                             │
│ Account        │  ┌─────┬──────────┬────────┬────────┐   │
│ ▌ Profile      │  │ ID  │ Customer │ Total  │ Status │   │
│ │ Billing      │  ├─────┼──────────┼────────┼────────┤   │
│ │ Security     │  │ 001 │ John Doe │ $1,200 │ Done   │   │
│                │  │ 002 │ Jane D.  │ $945   │ Pending│   │
│                │  └─────┴──────────┴────────┴────────┘   │
│                │                                             │
└──────────────┴─────────────────────────────────────────────┘
  Sidebar (64)          Main Content Area
```

**Code Structure**:
```typescript
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/Button'
import { BarChart3, Users, ShoppingCart, Eye } from 'lucide-react'

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const stats = [
    { label: 'Revenue', value: '$12,345', icon: BarChart3 },
    { label: 'Orders', value: '234', icon: ShoppingCart },
    { label: 'Users', value: '1.2K', icon: Users },
    { label: 'Visitors', value: '2.5K', icon: Eye },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar active={activeSection} onChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 overflow-auto p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Welcome to Dashboard
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 border border-border rounded-lg bg-background"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground-light">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className="w-8 h-8 text-brand-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-alternative border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b border-border hover:bg-alternative">
                    <td className="px-6 py-4 text-sm text-foreground">
                      #000{i}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      Customer {i}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      ${(1000 * i).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          i % 2 === 0
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {i % 2 === 0 ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
```

---

## RESPONSIVE GRID SHOWCASE

### Mobile → Tablet → Desktop

```
MOBILE (1 column)        TABLET (2 columns)      DESKTOP (3 columns)
┌─────────────┐          ┌──────────┬──────────┐ ┌────────┬────────┬────────┐
│   Card 1    │          │  Card 1  │  Card 2  │ │Card 1  │Card 2  │Card 3  │
├─────────────┤          ├──────────┼──────────┤ ├────────┼────────┼────────┤
│   Card 2    │          │  Card 3  │  Card 4  │ │Card 4  │Card 5  │Card 6  │
├─────────────┤          ├──────────┼──────────┤ └────────┴────────┴────────┘
│   Card 3    │          │  Card 5  │  Card 6  │
├─────────────┤          └──────────┴──────────┘
│   Card 4    │
├─────────────┤
│   Card 5    │
├─────────────┤
│   Card 6    │
└─────────────┘
```

**Code**:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {cards.map((card) => (
    <div
      key={card.id}
      className="p-4 border border-border rounded-lg hover:shadow-lg transition"
    >
      {card.content}
    </div>
  ))}
</div>
```

---

## COLOR PALETTE VISUAL

### Light Mode Colors

```
FOREGROUND (Text)               BACKGROUND (Canvas)
┌─────────────────┐            ┌─────────────────┐
│ █ #212529 (13%) │            │ █ #FFFFFF (100%)│  ← Primary
│ █ #757575 (46%) │            │ █ #F5F5F5 (95%) │  ← Alternative
│ █ #A0A0A0 (63%) │            │ █ #E5E5E5 (90%) │  ← Hover
└─────────────────┘            └─────────────────┘

BRAND (Primary Color)           DESTRUCTIVE (Red)
┌─────────────────┐            ┌─────────────────┐
│ █ #7C3AED (600)│            │ █ #DC2626        │  ← Primary
│ █ #A78BFA (400)│            │ █ #FCA5A5 (Light)│
│ █ #6D28D9 (700)│            │ █ #991B1B (Dark) │
└─────────────────┘            └─────────────────┘

BORDER COLORS                   STATES
┌─────────────────┐            ┌─────────────────┐
│ ─ Border        │            │ ⚠️  Warning     │
│ ─ ─ Border Strong│           │ ❌ Destructive   │
│ ─ ─ ─ Stronger   │           │ ✓  Success      │
└─────────────────┘            └─────────────────┘
```

---

## TYPOGRAPHY HIERARCHY

```
H1: Main Page Title                                    ← 32px, Bold
   The biggest, most important heading on the page

H2: Section Heading                                    ← 24px, Semibold
   Major sections within the page

H3: Subsection Heading                                 ← 20px, Semibold
   Smaller sections within sections

Body Text: Regular paragraph content                   ← 16px, Regular
This is regular body text. It's used for most content
and should be easily readable with good line-height
and contrast ratios for accessibility.

Small Text: Secondary information                      ← 14px, Regular
Helper text, labels, and less important information

Micro Text: Captions and timestamps                   ← 12px, Regular
Very small text for dates, file sizes, etc.
```

---

## SPACING SYSTEM VISUAL

```
0 Units
─────────────────────────────────

4 Units (1rem)
─────────────────────────────────
padding / margin

8 Units (2rem)
─────────────────────────────────
component spacing

12 Units (3rem)
─────────────────────────────────
section spacing

16 Units (4rem)
─────────────────────────────────
major section spacing

24 Units (6rem)
─────────────────────────────────
page-level spacing
```

---

## Focus States (Accessibility)

```
Unfocused Button           Focused Button            Active Button
┌─────────────────┐       ┌─────────────────┐      ┌─────────────────┐
│   Click Me      │  →    │   Click Me   ◾  │  →   │  ▪ Click Me ▪   │
└─────────────────┘       └─────────────────┘      └─────────────────┘
                          ↑                        ↑ Active state
                          2px outline with        with different
                          4px offset              styling

KEYBOARD NAVIGATION
Tab through: ← ← ← Focus moves through interactive elements → → →
Space/Enter: Activates focused button
Escape: Closes dialogs/panels
```

---

## Dark Mode Support Visual

### Same Components, Different Themes

```
LIGHT MODE                          DARK MODE
┌────────────────────────┐         ┌────────────────────────┐
│ White Background       │         │ Dark Background        │
│ Black Text             │         │ White Text             │
│ Light Gray Borders     │         │ Dark Gray Borders      │
│ [Purple Button]        │         │ [Purple Button]        │
└────────────────────────┘         └────────────────────────┘
  Uses CSS Variables in Light         Same CSS Variables
  Mode Values (automatic with          in Dark Mode Values
  prefers-color-scheme: light)        (automatic with
                                      prefers-color-scheme:
                                      dark)
```

---

## Summary Table

| Component | Variants | Sizes | Best For |
|-----------|----------|-------|----------|
| Button | 9 | 5 | CTAs, actions, forms |
| Menu | 3 types | — | Navigation, sidebars |
| TreeView | — | — | Hierarchies, file trees |
| Input | — | — | Forms, text entry |
| Icon System | — | — | Visual consistency |
| Loading | 3 types | — | Feedback, waiting states |

---

**Version**: Based on Supabase Main Branch
**Last Updated**: 2024
