
type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

export const instant = false;

export default async function ProductDetails({
  params,
}: ProductDetailsProps) {
  const { id } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product = await response.json();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product Details</h1>

      <div className="card p-4">
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "250px",
            objectFit: "contain",
          }}
        />

        <h2 className="mt-4">{product.title}</h2>

        <h4 className="text-success">
          Price: ${product.price}
        </h4>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>
      </div>
    </div>
  );
}
