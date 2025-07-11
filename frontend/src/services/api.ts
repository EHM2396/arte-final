const API_URL = import.meta.env.VITE_API_URL;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
}

/**
 * Llamada genérica al API con soporte para JWT
 */
async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  let token = localStorage.getItem("accessToken");

  const config: RequestInit = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : "",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  let response = await fetch(`${API_URL}${endpoint}`, config);

  if (response.status === 401 && localStorage.getItem("refreshToken")) {
    // Intenta refrescar el token
    const refreshResponse = await fetch(`${API_URL}/api/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: localStorage.getItem("refreshToken") }),
    });

    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      localStorage.setItem("accessToken", data.accessToken);

      // Reintenta la request original
      config.headers = {
        ...config.headers,
        "Authorization": `Bearer ${data.accessToken}`,
      };
      response = await fetch(`${API_URL}${endpoint}`, config);
    }
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/**
 * GET al endpoint /api/test
 */
export function getTestMessage() {
  return request<{ message: string }>("/api/test");
}

/**
 * POST al endpoint /api/login
 */
export function loginApi(email: string, password: string) {
  return request<{ token: string }>("/api/login", {
    method: "POST",
    body: { email, password },
  });
}

/**
 * GET al endpoint protegido /api/me
 */
export function getProfile() {
  return request<{ user: { email: string } }>("/api/me");
}
