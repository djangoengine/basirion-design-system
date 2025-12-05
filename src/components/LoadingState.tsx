"use client";

import { LucideIcon } from "lucide-react";

interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export function LoadingState({ message = 'Loading...', size = 'md', icon: Icon }: LoadingStateProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex items-center justify-center p-8">
      {Icon ? (
        <Icon className={`animate-spin ${sizeClasses[size]} text-basirion-primary dark:text-primary`} />
      ) : (
        <div className={`animate-spin rounded-full border-b-2 border-[hsl(var(--primary))] ${sizeClasses[size]}`}></div>
      )}
      {message && (
        <span className="ml-3 text-basirion-gray-600 dark:text-muted-foreground">{message}</span>
      )}
    </div>
  );
}

