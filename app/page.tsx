
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/download%20(1).webp"
              className="d-block w-100 rounded-5"
              alt="Banner 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/images/download%20(2).webp"
              className="d-block w-100 rounded-5"
              alt="Banner 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/images/download.webp"
              className="d-block w-100 rounded-5"
              alt="Banner 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center my-4">
        <Link href="/products" className="btn btn-dark btn-lg">
          View Products
        </Link>
      </div>
    </>
  );
}
