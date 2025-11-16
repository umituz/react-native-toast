/**
 * Toast Domain - Barrel Export
 *
 * Universal toast notification system for all App Factory applications.
 * Provides consistent, customizable toast messages via react-native-toast-message.
 *
 * @domain toast
 * @enabled true (All apps)
 *
 * ARCHITECTURE:
 * - Domain Layer: Entities (types, presets, utilities)
 * - Presentation Layer: Hooks (useToast)
 *
 * FEATURES:
 * - Success, error, info, warning toast types
 * - Customizable position (top/bottom)
 * - Configurable visibility duration
 * - Common presets for frequent messages
 * - TypeScript type safety
 * - Auto-hide support
 * - Callback hooks (onShow, onHide, onPress)
 *
 * USAGE:
 *
 * Basic Hook Example:
 * ```typescript
 * import { useToast } from '@umituz/react-native-toast';
 *
 * const MyComponent = () => {
 *   const { showSuccess, showError } = useToast();
 *
 *   const handleSave = () => {
 *     try {
 *       // Save logic
 *       showSuccess('Saved!', 'Changes saved successfully');
 *     } catch (error) {
 *       showError('Error', 'Failed to save changes');
 *     }
 *   };
 *
 *   return <Button onPress={handleSave}>Save</Button>;
 * };
 * ```
 *
 * Utility Functions Example:
 * ```typescript
 * import { showSuccessToast, showErrorToast, handleApiError } from '@umituz/react-native-toast';
 *
 * const MyComponent = () => {
 *   const handleSave = async () => {
 *     try {
 *       await saveData();
 *       showSuccessToast('Data saved successfully!');
 *     } catch (error) {
 *       handleApiError(error);
 *     }
 *   };
 *
 *   return <Button onPress={handleSave}>Save</Button>;
 * };
 * ```
 *
 * Preset Example:
 * ```typescript
 * import { useToast } from '@umituz/react-native-toast';
 *
 * const MyComponent = () => {
 *   const { showPreset } = useToast();
 *
 *   const handleDelete = () => {
 *     showPreset('DELETED');
 *   };
 *
 *   return <Button onPress={handleDelete}>Delete</Button>;
 * };
 * ```
 *
 * Custom Config Example:
 * ```typescript
 * import { useToast, ToastType, ToastPosition } from '@umituz/react-native-toast';
 *
 * const MyComponent = () => {
 *   const { show } = useToast();
 *
 *   const handleCustom = () => {
 *     show({
 *       type: ToastType.INFO,
 *       text1: 'Custom Message',
 *       text2: 'With custom config',
 *       position: ToastPosition.BOTTOM,
 *       visibilityTime: 3000,
 *       onPress: () => console.log('Toast pressed'),
 *     });
 *   };
 *
 *   return <Button onPress={handleCustom}>Show Custom</Button>;
 * };
 * ```
 *
 * App.tsx Setup (REQUIRED):
 * ```typescript
 * import Toast from 'react-native-toast-message';
 *
 * export default function App() {
 *   return (
 *     <>
 *       <YourAppContent />
 *       <Toast /> // Must be last component
 *     </>
 *   );
 * }
 * ```
 *
 * DEPENDENCIES:
 * - react-native-toast-message: ^2.2.0 (toast notifications)
 *
 * @see https://github.com/calintamas/react-native-toast-message
 */

// Domain Layer - Entities
export {
  ToastType,
  ToastPosition,
  TOAST_CONSTANTS,
  ToastUtils,
  TOAST_PRESETS,
} from './domain/entities/Toast';
export type { ToastConfig, ToastPreset } from './domain/entities/Toast';

// Presentation Layer - Hooks
export { useToast } from './presentation/hooks/useToast';

// Presentation Layer - Utilities
export {
  showToast,
  showSuccessToast,
  showErrorToast,
  showInfoToast,
  showWarningToast,
  handleApiError,
  showLoadingToast,
} from './presentation/utilities/toastUtils';
