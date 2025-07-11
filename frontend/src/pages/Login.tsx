import { useState } from "react";
import { loginApi } from "../services/api";
import { useAuth } from "../context/AuthContext";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginApi(email, password);
      localStorage.setItem("token", data.token);
      login({ name: email, email }); // ajusta según payload real
      alert("🚀 Login exitoso");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className="w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold mb-2">🚀 Login JWT API</h1>
        <input
          type="email"
          className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? <Loader /> : "Iniciar sesión"}
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </Card>
    </div>
  );
}

export default Login;
