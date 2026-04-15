"use client";

import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistContent() {
  const items = useWishlistStore((state) => state.items);

  if (items.length === 0) {
    return <p style={{ padding: "20px" }}>No items in wishlist</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}