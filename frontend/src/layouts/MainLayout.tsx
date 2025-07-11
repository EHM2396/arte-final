import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Sun, Moon } from "lucide-react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { theme, toggleTheme } = useDarkMode();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <Link to="/" className="text-blue-600 font-bold">
          Arte Final
        </Link>
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="font-semibold">Hola, {user.name}</span>
              <button
                onClick={logout}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Cambiar tema"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>
      <main className="p-4">{children}</main>
      <footer className="text-center text-xs text-gray-500 py-4">
        &copy; 2025 Arte Final
      </footer>
    </div>
  );
}
