import React from "react";

export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
