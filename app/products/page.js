import Link from "next/link";

export const instant = false;

export default async function ProductPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <div className="container mt-4">
      <Link href="/" className="btn btn-secondary mb-3">
        Go Back
      </Link>

      <h1 className="mb-4">Our Products</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card p-3 h-100">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <h5 className="mt-3">{product.title}</h5>
              <p className="text-success">${product.price}</p>
              <p>{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}