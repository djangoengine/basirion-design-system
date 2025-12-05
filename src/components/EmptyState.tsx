"use client";

import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-basirion-gray-100 dark:bg-basirion-gray-800 flex items-center justify-center">
        <Icon className="h-8 w-8 text-basirion-gray-400 dark:text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-basirion-gray-900 dark:text-foreground mb-2">
        {title}
      </h3>
      <p className="text-basirion-gray-600 dark:text-muted-foreground mb-4">
        {description}
      </p>
      {action && (
        <button 
          onClick={action.onClick} 
          className="basirion-button-primary px-6 py-2 rounded-lg"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

