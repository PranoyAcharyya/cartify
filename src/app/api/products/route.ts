export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "";

  const Api =
    category && category !== "all"
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

  // USE PROXY
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(Api)}`;

  const res = await fetch(proxyUrl);

  if (!res.ok) {
    console.error("API FAILED");
    return Response.json([], { status: 200 });
  }

  const json = await res.json();
  const data = JSON.parse(json.contents);

  return Response.json(data);
}