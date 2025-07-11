import { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useApi } from "../hooks/useApi";
import { getTestMessage } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const { data, loading, error } = useApi(getTestMessage); // se conecta al endpoint protegido
  const { user, logout } = useAuth();

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("🔍 Buscar:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className="w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold mb-2">🚀 Home JWT + UI</h1>

        {loading && <Loader />}
        {error && <p className="text-red-500">Error: {error}</p>}
        {/* {data && (
          <p>
            Bienvenido, tu correo es: <span className="font-mono">{data.user.email}</span>
          </p>
        )} */}

        <Button onClick={() => alert("¡Hola desde Home!")} variant="primary">
          Click aquí
        </Button>

        <div className="space-y-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar algo..."
            className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
          {debouncedQuery && (
            <p>
              Buscando: <span className="font-mono">{debouncedQuery}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          {user ? (
            <>
              <p>
                Hola {user.name} ({user.email})
              </p>
              <Button onClick={logout}>Cerrar sesión</Button>
            </>
          ) : (
            <p className="text-gray-500">No estás logueado localmente.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Home;
