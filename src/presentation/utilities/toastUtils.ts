/**
 * Toast Utilities - Direct function calls
 *
 * Utility functions for showing toast messages without React hooks.
 * These functions can be used in any part of the application.
 *
 * @domain toast
 * @layer presentation
 */

import Toast from 'react-native-toast-message';
import { ToastUtils } from '../../domain/entities/Toast';
import { ToastType } from '../../domain/entities/Toast';

type ToastMessageType = "success" | "error" | "warning" | "info";

/**
 * Convert string type to ToastType enum
 */
const getToastType = (type: ToastMessageType): ToastType => {
  switch (type) {
    case "success":
      return ToastType.SUCCESS;
    case "error":
      return ToastType.ERROR;
    case "warning":
      return ToastType.WARNING;
    case "info":
    default:
      return ToastType.INFO;
  }
};

/**
 * Show a toast notification
 */
export const showToast = ({
  title,
  message,
  type = "info"
}: {
  title?: string;
  message: string;
  type?: ToastMessageType;
  duration?: "short" | "long";
}) => {
  const config = {
    type: getToastType(type),
    text1: title || getDefaultTitle(type),
    text2: message,
  };

  const fullConfig = ToastUtils.createConfig(config);
  const params = ToastUtils.toShowParams(fullConfig);
  Toast.show(params);
};

/**
 * Show a success toast
 */
export const showSuccessToast = (message: string, title?: string) => {
  showToast({ message, title: title || "Success", type: "success" });
};

/**
 * Show an error toast
 */
export const showErrorToast = (message: string, title?: string) => {
  showToast({ message, title: title || "Error", type: "error" });
};

/**
 * Show an info toast
 */
export const showInfoToast = (message: string, title?: string) => {
  showToast({ message, title: title || "Info", type: "info" });
};

/**
 * Show a warning toast
 */
export const showWarningToast = (message: string, title?: string) => {
  showToast({ message, title: title || "Warning", type: "warning" });
};

/**
 * Get default title based on toast type
 */
const getDefaultTitle = (type: ToastMessageType): string => {
  switch (type) {
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    case "info":
    default:
      return "Info";
  }
};

/**
 * Handle API errors and show appropriate toast
 */
export const handleApiError = (error: any, customMessage?: string) => {
  /* eslint-disable-next-line no-console */
  if (__DEV__) console.error("API Error:", error);

  let errorMessage = customMessage || "Something went wrong. Please try again.";

  if (error?.message) {
    errorMessage = error.message;
  } else if (error?.error_description) {
    errorMessage = error.error_description;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  showErrorToast(errorMessage);
};

/**
 * Show a loading toast (for long operations)
 */
export const showLoadingToast = (message: string = "Loading...") => {
  showInfoToast(message, "Loading");
};
