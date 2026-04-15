import styles from "./page.module.css";
import { Product , PageProps} from "@/typescript/interfaces";
import { Suspense } from "react";
import NextDynamic from "next/dynamic";


export const dynamic = "force-dynamic";

const SortDropdown = NextDynamic(() => import("@/components/layout/sortDropdown"), { ssr: true });
const MainLayout = NextDynamic(() => import("@/components/layout/landingLayout"), { ssr: true });
const SidebarLayout = NextDynamic(() => import("@/components/layout/sidebarComponent"), { ssr: true });
const ProductCard = NextDynamic(() => import("@/components/productCard"),{ssr:true})

async function getProductsFromApi(
  sort: string,
  category: string
): Promise<Product[]> {

  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);

  // KEY FIX → RELATIVE URL
  const res = await fetch(`https://cartify-pi-seven.vercel.app/api/products?${params}`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const products: Product[] = await res.json();

  if (sort === "price-low") products.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") products.sort((a, b) => b.price - a.price);
  else if (sort === "newest") products.sort((a, b) => b.id - a.id);
  else if (sort === "popular")
    products.sort((a, b) => b.rating.rate - a.rating.rate);

  return products;
}

export default async function Page({ searchParams }: PageProps) {
   const params = await searchParams;

  const sortValue = params.sort || "recommended";
  const categoryValue = params.category || "all";

  const products = await getProductsFromApi(sortValue, categoryValue);

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeading}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </section>

      <MainLayout
        itemCount={products.length}
        sortElement={<SortDropdown defaultValue={sortValue} />}
        sidebar={
          <Suspense fallback={<div>Loading filters...</div>}>
            <SidebarLayout />
          </Suspense>
        }
        productGrid={
          <>
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        }
      />
    </div>
  );
}