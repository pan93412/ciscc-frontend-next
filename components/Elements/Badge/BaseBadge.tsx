import React from "react";

export interface BaseBadgeProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  badgeBasicStyle?: string;
}

export default function BaseBadge({
  children,
  badgeBasicStyle = "py-0.5 px-3 rounded max-w-max inline ml-3",
  className = "bg-black text-white",
  style = {},
}: BaseBadgeProps) {
  return (
    <div className={`${badgeBasicStyle} ${className}`} style={style}>
      {children}
    </div>
  );
}
