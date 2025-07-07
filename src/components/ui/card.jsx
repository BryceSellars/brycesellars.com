import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-2xl backdrop-blur-sm transition ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
