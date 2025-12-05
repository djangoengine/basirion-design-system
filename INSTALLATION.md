# Installation Guide

## Quick Start

### 1. Copy Files to Your Project

Copy the following files to your project:

```
basirion-design-system/
├── src/styles/globals.css     → your-project/src/app/globals.css (or similar)
├── tailwind.config.js         → your-project/tailwind.config.js (merge with existing)
└── src/components/            → your-project/src/components/ (copy components you need)
```

### 2. Install Dependencies

```bash
npm install tailwindcss autoprefixer postcss lucide-react
```

### 3. Configure Tailwind

Merge the Basirion color palette into your `tailwind.config.js`:

```js
module.exports = {
  // ... your existing config
  theme: {
    extend: {
      colors: {
        // ... your existing colors
        // Add Basirion colors from tailwind.config.js
        basirion: {
          // ... copy basirion color palette
        }
      }
    }
  }
}
```

### 4. Import Styles

In your main CSS file (e.g., `globals.css`):

```css
@import 'basirion-design-system/src/styles/globals.css';
```

Or copy the contents of `globals.css` into your project's CSS file.

### 5. Use Components

```tsx
import { LoadingState, ErrorState, EmptyState } from './components';

function MyComponent() {
  return <LoadingState message="Loading..." />;
}
```

## Using as npm Package (Future)

Once published to npm:

```bash
npm install basirion-design-system
```

Then import:

```tsx
import { LoadingState } from 'basirion-design-system';
import 'basirion-design-system/dist/styles.css';
```

## Using from Git Repository

```bash
npm install git+https://github.com/YOUR_USERNAME/basirion-design-system.git
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "basirion-design-system": "git+https://github.com/YOUR_USERNAME/basirion-design-system.git"
  }
}
```

