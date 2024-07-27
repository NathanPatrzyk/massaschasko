import React from "react";

export function Container({ className, children }) {
  return <div className={`px-8 md:px-16 ${className}`}>{children}</div>;
}
