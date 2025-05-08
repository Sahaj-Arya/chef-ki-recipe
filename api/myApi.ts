// src/api/myApi.ts
import axios from "./axiosInstance";

// Define expected types
export interface MyData {
  id: number;
  name: string;
}

export interface PostDataInput {
  name: string;
}

// GET request
export const fetchData = async (): Promise<MyData[]> => {
  const response = await axios.get<MyData[]>("/your-endpoint");
  return response.data;
};

// POST request
export const postData = async (data: PostDataInput): Promise<MyData> => {
  const response = await axios.post<MyData>("/your-endpoint", data);
  return response.data;
};
