import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <Link to="/" className="text-blue-600 font-bold">
          Arte Final
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
          </button>
        </div>
      </nav>
      <main className="p-4">{children}</main>
      <footer className="text-center text-xs text-gray-500 py-4">&copy; 2025 Arte Final</footer>
    </div>
  );
}
