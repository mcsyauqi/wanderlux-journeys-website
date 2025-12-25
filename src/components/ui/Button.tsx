"use client";

import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean | ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = false,
  iconPosition = "right",
  isLoading = false,
  disabled = false,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider transition-colors";

  const variants = {
    primary: "bg-teal text-white hover:bg-teal-dark",
    secondary: "bg-navy text-white hover:bg-navy-light",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-white",
    gold: "bg-gold text-white hover:bg-gold/90",
    ghost: "text-navy hover:text-teal bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  const renderIcon = () => {
    if (isLoading) return null;
    if (icon === true) return <ArrowRight size={16} />;
    if (icon) return icon;
    return null;
  };

  const iconElement = renderIcon();
  const content = (
    <>
      {isLoading && <Loader2 size={16} className="animate-spin" />}
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </>
  );

  if (href && !disabled && !isLoading) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classes}
    >
      {content}
    </button>
  );
}
