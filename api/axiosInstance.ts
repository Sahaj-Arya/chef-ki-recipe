// myApi.ts
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

// Axios instance
const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add auth + security headers
axiosInstance.interceptors.request.use(
  async (config: any): Promise<InternalAxiosRequestConfig> => {
    const token = await getToken(); // Async if stored in SecureStore/AsyncStorage
    if (token && !config.headers?.skipAuth) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
        "X-App-Security": "AES256", // Example custom security header
      };
    }
    return config;
  },
  (error) => console.log(error)
);

// Token provider
const getToken = async (): Promise<string | null> => {
  return null; // Replace with actual logic
};

// Generic API call
export const apiCall = async <T = any>(
  config: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosInstance.request<T>(config);
  return response.data;
};

// 🔹 GET hook (runs on mount)
export const useGetData = <T = any>(
  key: string,
  url: string,
  params?: object,
  options?: UseQueryOptions<T>
) =>
  useQuery<T>({
    queryKey: [key, url, params],
    queryFn: () => apiCall<T>({ url, method: "get", params }),
    ...options,
  });

// 🔹 Lazy GET hook (on-demand GET)
export const useLazyGetData = <T = any>(
  options?: UseMutationOptions<T, unknown, { url: string; params?: object }>
) =>
  useMutation<T, unknown, { url: string; params?: object }>({
    mutationFn: ({ url, params }) => apiCall<T>({ url, method: "get", params }),
    ...options,
  });

// 🔹 POST hook
export const usePostData = <T = any, V = any>(
  url: string,
  options?: UseMutationOptions<T, unknown, V>
) =>
  useMutation<T, unknown, V>({
    mutationFn: (data: V) => apiCall<T>({ url, method: "post", data }),
    ...options,
  });

// 🔹 PUT hook
export const usePutData = <T = any, V = any>(
  url: string,
  options?: UseMutationOptions<T, unknown, V>
) =>
  useMutation<T, unknown, V>({
    mutationFn: (data: V) => apiCall<T>({ url, method: "put", data }),
    ...options,
  });

// 🔹 DELETE hook
export const useDeleteData = <T = any>(
  url: string,
  options?: UseMutationOptions<T, unknown, void>
) =>
  useMutation<T>({
    mutationFn: () => apiCall<T>({ url, method: "delete" }),
    ...options,
  });
