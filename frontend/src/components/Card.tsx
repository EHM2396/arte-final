type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 ${className}`}
    >
      {children}
    </div>
  );
}
