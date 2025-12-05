"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryButtonText?: string;
}

export function ErrorState({ 
  title = 'Error', 
  message, 
  onRetry,
  retryButtonText = 'Try Again'
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/20 p-4">
      <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
        <AlertTriangle className="h-5 w-5" />
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm text-red-800 dark:text-red-200">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry} 
          className="mt-4 basirion-button-primary px-4 py-2 rounded-lg"
        >
          {retryButtonText}
        </button>
      )}
    </div>
  );
}

