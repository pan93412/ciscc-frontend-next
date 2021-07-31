import type { TextareaHTMLAttributes } from "react";
import React from "react";

export interface BaseTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onValueChange: (value: string) => void;
}

export default function BaseTextarea({
  value,
  onValueChange,
  placeholder = "在此輸入內容⋯⋯",
  className = "border-b-1 bg-gray-50 shadow p-4",
  ...props
}: BaseTextareaProps) {
  return (
    <textarea
      // We extend TextareaHTMLAttributes.
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      onChange={(event) => onValueChange(event.target.value)}
      placeholder={placeholder}
      className={className}
      value={value}
    />
  );
}
