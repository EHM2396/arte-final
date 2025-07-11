type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent" | "info" | "success";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none transition-colors duration-200";
  const variants: Record<string, string> = {
    primary: "bg-brand-primary text-white hover:bg-purple-800",
    secondary: "bg-brand-secondary text-white hover:bg-red-700",
    accent: "bg-brand-accent text-gray-900 hover:bg-yellow-500",
    info: "bg-brand-info text-white hover:bg-cyan-700",
    success: "bg-brand-success text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
