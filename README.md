# Basirion Design System

A modern, vibrant design system combining professional neutral palettes with a fiery theme. Built for React/Next.js applications with Tailwind CSS.

## Features

- 🎨 **Fiery Theme**: Vibrant color palette (Ember Red, Flame Orange, Sunset Gold, Deep Magenta, Volcanic Purple)
- 🎯 **Professional Neutrals**: Clean gray palette inspired by Linear/Vercel
- 🌙 **Dark Mode**: Full support for light and dark themes
- 📱 **Responsive**: Mobile-first design with responsive utilities
- ⚡ **Performance**: Optimized CSS with minimal overhead
- 🧩 **Component Patterns**: Reusable React components for common UI patterns
- 🎭 **Utility Classes**: Pre-built classes for rapid development

## Installation

### Using npm

```bash
npm install basirion-design-system
```

### Using git

```bash
git clone https://github.com/drquadeer/basirion-design-system.git
cd basirion-design-system
```

## Quick Start

### 1. Install Dependencies

```bash
npm install tailwindcss autoprefixer postcss
```

### 2. Add to Your Tailwind Config

Copy `tailwind.config.js` to your project and extend it:

```js
// tailwind.config.js
module.exports = {
  // ... your existing config
  extend: {
    // Copy the basirion color palette from tailwind.config.js
  }
}
```

### 3. Import Styles

```css
/* globals.css */
@import 'basirion-design-system/src/styles/globals.css';
```

Or copy `src/styles/globals.css` to your project.

### 4. Use Components

```tsx
import { LoadingState, ErrorState, EmptyState } from 'basirion-design-system';

function MyComponent() {
  return <LoadingState message="Loading..." />;
}
```

## Color Palette

### Neutral Colors

- `basirion-white` - Pure white
- `basirion-off-white` - Off-white background
- `basirion-gray-50` through `basirion-gray-900` - Gray scale

### Fiery Theme Colors

- `fire-ember` - Ember Red (#FF3B30)
- `fire-flame` - Flame Orange (#FF9500)
- `fire-gold` - Sunset Gold (#FFCC00)
- `fire-magenta` - Deep Magenta (#FF2D55)
- `fire-purple` - Volcanic Purple (#AF52DE)

## Components

### LoadingState

```tsx
import { LoadingState } from 'basirion-design-system';

<LoadingState message="Loading..." size="md" />
```

### ErrorState

```tsx
import { ErrorState } from 'basirion-design-system';

<ErrorState 
  title="Error" 
  message="Something went wrong" 
  onRetry={() => refetch()} 
/>
```

### EmptyState

```tsx
import { EmptyState } from 'basirion-design-system';
import { FileText } from 'lucide-react';

<EmptyState
  icon={FileText}
  title="No items found"
  description="Get started by creating your first item"
  action={{
    label: "Create New",
    onClick: () => handleCreate()
  }}
/>
```

## Utility Classes

### Cards

```tsx
<div className="basirion-card">
  {/* Content */}
</div>
```

### Buttons

```tsx
<button className="basirion-button-primary">
  Primary Action
</button>
```

### Inputs

```tsx
<input className="basirion-input" placeholder="Enter text..." />
<select className="basirion-select">
  <option>Option 1</option>
</select>
```

### Links

```tsx
<a href="#" className="basirion-link">Learn More</a>
```

### Badges

```tsx
<span className="basirion-badge basirion-badge-primary">Primary</span>
<span className="basirion-badge basirion-badge-success">Success</span>
```

### Responsive Utilities

```tsx
<p className="text-responsive">Responsive text</p>
<div className="p-responsive">Responsive padding</div>
<div className="flex gap-responsive">Responsive gap</div>
```

## Documentation

- [Design System Guide](./docs/DESIGN_SYSTEM.md)
- [Component Patterns](./docs/COMPONENT_PATTERNS.md)
- [Examples](./examples/)

## Project Structure

```
basirion-design-system/
├── src/
│   ├── styles/
│   │   └── globals.css          # Main CSS file
│   ├── components/
│   │   ├── LoadingState.tsx     # Loading component
│   │   ├── ErrorState.tsx       # Error component
│   │   └── EmptyState.tsx        # Empty state component
│   └── contexts/
│       └── ThemeContext.tsx      # Theme context
├── docs/
│   ├── DESIGN_SYSTEM.md         # Complete guide
│   └── COMPONENT_PATTERNS.md    # Pattern library
├── examples/
│   └── showcase/                # Example showcase
├── tailwind.config.js           # Tailwind configuration
├── package.json
└── README.md
```

## Requirements

- React 18+
- Tailwind CSS 3+
- TypeScript (for TypeScript projects)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Author

drquadeer

## Links

- GitHub: https://github.com/drquadeer/basirion-design-system
- Documentation: See `docs/` directory
- Examples: See `examples/` directory

