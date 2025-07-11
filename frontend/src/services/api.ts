const API_URL = import.meta.env.VITE_API_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
}

/**
 * Llamada genérica al API.
 */
async function request<T>(
  endpoint: string,
  { method = "GET", body, headers = {} }: RequestOptions = {}
): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Ejemplo de llamada GET al endpoint /api/test
 */
export function getTestMessage() {
  return request<{ message: string }>("/api/test");
}

/**
 * Ejemplo de POST al backend.
 */
export function createSomething(data: { name: string; description: string }) {
  return request<{ id: number; name: string }>("/api/something", {
    method: "POST",
    body: data,
  });
}
