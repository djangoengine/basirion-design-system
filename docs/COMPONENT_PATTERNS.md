# Component Patterns Library

Reusable component patterns for the Basirion Design System.

## LoadingState

```tsx
import { LoadingState } from 'basirion-design-system';

<LoadingState message="Loading..." size="md" />
```

## ErrorState

```tsx
import { ErrorState } from 'basirion-design-system';

<ErrorState 
  title="Error" 
  message="Something went wrong" 
  onRetry={() => refetch()} 
/>
```

## EmptyState

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

## Usage Examples

See README.md for complete examples and usage instructions.

