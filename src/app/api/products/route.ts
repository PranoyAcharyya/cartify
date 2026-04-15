export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "";

    const apiUrl =
      category && category !== "all"
        ? `https://fakestoreapi.com/products/category/${category}`
        : `https://fakestoreapi.com/products`;

    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    const res = await fetch(proxyUrl, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return Response.json([]);

    const json = await res.json();

    // IMPORTANT SAFE PARSE
    
    if (!json?.contents) return Response.json([]);

    const data = JSON.parse(json.contents);

    return Response.json(data);

  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json([]);
  }
}