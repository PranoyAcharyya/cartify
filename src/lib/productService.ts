
import { apiClient } from "./apiClient";
import { Product } from "@/typescript/interfaces";

export async function fetchProducts(category?: string): Promise<Product[]> {
  try {
    const url =
      category && category !== "all"
        ? `/products/category/${category}`
        : `/products`;

    const res = await apiClient.get(url);

    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}