/**
 * Toast Domain - Entities
 *
 * Core toast notification types and configurations for the App Factory.
 * Wraps react-native-toast-message for consistent notifications.
 *
 * @domain toast
 * @layer domain
 */

import type { ToastShowParams } from 'react-native-toast-message';

/**
 * Toast type (severity level)
 */
export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

/**
 * Toast position
 */
export enum ToastPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

/**
 * Toast configuration
 */
export interface ToastConfig {
  type: ToastType;
  text1: string;
  text2?: string;
  position?: ToastPosition;
  visibilityTime?: number;
  autoHide?: boolean;
  topOffset?: number;
  bottomOffset?: number;
  onShow?: () => void;
  onHide?: () => void;
  onPress?: () => void;
}

/**
 * Toast preset for common messages
 */
export interface ToastPreset {
  text1: string;
  text2?: string;
  type: ToastType;
}

/**
 * Toast constants
 */
export const TOAST_CONSTANTS = {
  VISIBILITY_TIME: {
    SHORT: 2000,
    NORMAL: 4000,
    LONG: 6000,
    VERY_LONG: 10000,
  },
  OFFSET: {
    TOP: 60,
    BOTTOM: 90,
  },
} as const;

/**
 * Toast utility functions
 */
export const ToastUtils = {
  /**
   * Create toast config from params
   */
  createConfig: (params: Partial<ToastConfig>): ToastConfig => ({
    type: params.type || ToastType.INFO,
    text1: params.text1 || '',
    text2: params.text2,
    position: params.position || ToastPosition.TOP,
    visibilityTime: params.visibilityTime || TOAST_CONSTANTS.VISIBILITY_TIME.NORMAL,
    autoHide: params.autoHide !== false,
    topOffset: params.topOffset || TOAST_CONSTANTS.OFFSET.TOP,
    bottomOffset: params.bottomOffset || TOAST_CONSTANTS.OFFSET.BOTTOM,
    onShow: params.onShow,
    onHide: params.onHide,
    onPress: params.onPress,
  }),

  /**
   * Convert ToastConfig to react-native-toast-message params
   */
  toShowParams: (config: ToastConfig): ToastShowParams => ({
    type: config.type,
    text1: config.text1,
    text2: config.text2,
    position: config.position,
    visibilityTime: config.visibilityTime,
    autoHide: config.autoHide,
    topOffset: config.topOffset,
    bottomOffset: config.bottomOffset,
    onShow: config.onShow,
    onHide: config.onHide,
    onPress: config.onPress,
  }),
};

/**
 * Common toast presets
 */
export const TOAST_PRESETS = {
  // Success messages
  SAVED: {
    text1: 'Saved',
    text2: 'Your changes have been saved',
    type: ToastType.SUCCESS,
  },
  DELETED: {
    text1: 'Deleted',
    text2: 'Item has been removed',
    type: ToastType.SUCCESS,
  },
  COPIED: {
    text1: 'Copied',
    text2: 'Copied to clipboard',
    type: ToastType.SUCCESS,
  },
  // Error messages
  ERROR_GENERIC: {
    text1: 'Error',
    text2: 'Something went wrong. Please try again.',
    type: ToastType.ERROR,
  },
  ERROR_NETWORK: {
    text1: 'Network Error',
    text2: 'Please check your connection',
    type: ToastType.ERROR,
  },
  ERROR_VALIDATION: {
    text1: 'Validation Error',
    text2: 'Please check your input',
    type: ToastType.ERROR,
  },
  // Info messages
  INFO_LOADING: {
    text1: 'Loading',
    text2: 'Please wait...',
    type: ToastType.INFO,
  },
  INFO_SYNCING: {
    text1: 'Syncing',
    text2: 'Syncing your data...',
    type: ToastType.INFO,
  },
  // Warning messages
  WARNING_UNSAVED: {
    text1: 'Unsaved Changes',
    text2: 'You have unsaved changes',
    type: ToastType.WARNING,
  },
  WARNING_LIMIT: {
    text1: 'Limit Reached',
    text2: 'You have reached the limit',
    type: ToastType.WARNING,
  },
} as const;
