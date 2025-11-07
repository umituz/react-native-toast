# @umituz/react-native-toast

Universal toast notification system for React Native with consistent, customizable toast messages via react-native-toast-message.

## Installation

```bash
npm install @umituz/react-native-toast
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0
- `react-native-toast-message` >= 2.2.0

## Features

- ✅ Success, error, info, warning toast types
- ✅ Customizable position (top/bottom)
- ✅ Configurable visibility duration
- ✅ Common presets for frequent messages
- ✅ TypeScript type safety
- ✅ Auto-hide support
- ✅ Callback hooks (onShow, onHide, onPress)

## Usage

### Basic Example

```typescript
import { useToast } from '@umituz/react-native-toast';

const MyComponent = () => {
  const { showSuccess, showError } = useToast();

  const handleSave = () => {
    try {
      // Save logic
      showSuccess('Saved!', 'Changes saved successfully');
    } catch (error) {
      showError('Error', 'Failed to save changes');
    }
  };

  return <Button onPress={handleSave}>Save</Button>;
};
```

### Preset Example

```typescript
import { useToast } from '@umituz/react-native-toast';

const MyComponent = () => {
  const { showPreset } = useToast();

  const handleDelete = () => {
    showPreset('DELETED');
  };

  return <Button onPress={handleDelete}>Delete</Button>;
};
```

### Custom Config Example

```typescript
import { useToast, ToastType, ToastPosition } from '@umituz/react-native-toast';

const MyComponent = () => {
  const { show } = useToast();

  const handleCustom = () => {
    show({
      type: ToastType.INFO,
      text1: 'Custom Message',
      text2: 'With custom config',
      position: ToastPosition.BOTTOM,
      visibilityTime: 3000,
      onPress: () => console.log('Toast pressed'),
    });
  };

  return <Button onPress={handleCustom}>Show Custom</Button>;
};
```

### App.tsx Setup (REQUIRED)

```typescript
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <YourAppContent />
      <Toast /> {/* Must be last component */}
    </>
  );
}
```

## API

### Hooks

- `useToast()`: Main hook for toast notifications

### Types

- `ToastType`: Success, Error, Info, Warning
- `ToastPosition`: Top, Bottom
- `ToastConfig`: Full toast configuration
- `ToastPreset`: Predefined toast presets

## License

MIT

