
import { fetchProducts } from "@/lib/productService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";

  const data = await fetchProducts(category);

  return Response.json(data);
}