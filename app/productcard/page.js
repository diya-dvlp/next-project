
"use client";

import React, { useEffect, useState } from "react";

export default function ProductCard() {
  const [product, setProduct] = useState([]);

  async function productlist() {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    productlist();
  }, []);

  return (
    <div>
      <button onClick={productlist}>Show Products</button>

      {product.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
        </div>
      ))}
    </div>
  );
}
