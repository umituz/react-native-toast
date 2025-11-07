/**
 * Toast Domain - useToast Hook
 *
 * React hook for displaying toast notifications.
 * Provides simple API for success, error, info, and warning messages.
 *
 * @domain toast
 * @layer presentation
 */

import { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import type { ToastConfig } from '../../domain/entities/Toast';
import {
  ToastType,
  ToastPosition,
  TOAST_CONSTANTS,
  ToastUtils,
  TOAST_PRESETS,
} from '../../domain/entities/Toast';

/**
 * Hook for toast notifications
 *
 * @example
 * const { showSuccess, showError, showInfo, showWarning } = useToast();
 *
 * // Show success toast
 * showSuccess('Changes saved!');
 *
 * // Show error with details
 * showError('Error', 'Something went wrong');
 *
 * // Show with custom config
 * show({
 *   type: ToastType.INFO,
 *   text1: 'Custom message',
 *   visibilityTime: 3000,
 * });
 */
export const useToast = () => {
  /**
   * Show toast with custom config
   */
  const show = useCallback((config: Partial<ToastConfig>) => {
    const fullConfig = ToastUtils.createConfig(config);
    const params = ToastUtils.toShowParams(fullConfig);
    Toast.show(params);
  }, []);

  /**
   * Show success toast
   */
  const showSuccess = useCallback(
    (text1: string, text2?: string, visibilityTime?: number) => {
      show({
        type: ToastType.SUCCESS,
        text1,
        text2,
        visibilityTime,
      });
    },
    [show]
  );

  /**
   * Show error toast
   */
  const showError = useCallback(
    (text1: string, text2?: string, visibilityTime?: number) => {
      show({
        type: ToastType.ERROR,
        text1,
        text2,
        visibilityTime,
      });
    },
    [show]
  );

  /**
   * Show info toast
   */
  const showInfo = useCallback(
    (text1: string, text2?: string, visibilityTime?: number) => {
      show({
        type: ToastType.INFO,
        text1,
        text2,
        visibilityTime,
      });
    },
    [show]
  );

  /**
   * Show warning toast
   */
  const showWarning = useCallback(
    (text1: string, text2?: string, visibilityTime?: number) => {
      show({
        type: ToastType.WARNING,
        text1,
        text2,
        visibilityTime,
      });
    },
    [show]
  );

  /**
   * Show preset toast
   */
  const showPreset = useCallback(
    (preset: keyof typeof TOAST_PRESETS, customText2?: string) => {
      const presetConfig = TOAST_PRESETS[preset];
      show({
        type: presetConfig.type,
        text1: presetConfig.text1,
        text2: customText2 || presetConfig.text2,
      });
    },
    [show]
  );

  /**
   * Hide current toast
   */
  const hide = useCallback(() => {
    Toast.hide();
  }, []);

  return {
    // Main show function
    show,
    // Convenience functions by type
    showSuccess,
    showError,
    showInfo,
    showWarning,
    // Preset function
    showPreset,
    // Hide function
    hide,
    // Constants for external use
    ToastType,
    ToastPosition,
    TOAST_CONSTANTS,
    TOAST_PRESETS,
  };
};
