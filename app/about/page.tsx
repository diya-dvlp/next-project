
export default function About() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F3EF", minHeight: "80vh" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-8 text-center">
            <p
              className="text-uppercase fw-semibold mb-2"
              style={{ color: "#D4AF37", letterSpacing: "4px" }}
            >
              Welcome to Our Story
            </p>

            <h1
              className="display-3 fw-bold mb-4"
              style={{ color: "#2F1B16" }}
            >
              About Us
            </h1>

            <div
              className="mx-auto mb-4"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#D4AF37",
                borderRadius: "5px",
              }}
            ></div>

            <p
              className="fs-5 lh-lg mb-4"
              style={{ color: "#705A52" }}
            >
              Welcome to our store! We believe shopping should be
              simple, enjoyable, and convenient. Our goal is to
              bring you quality products at affordable prices.
            </p>

            <div
              className="card border-0 shadow-sm p-4 mt-5"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "20px" }}
            >
              <h3 className="fw-bold mb-3" style={{ color: "#2F1B16" }}>
                Why Choose Us?
              </h3>

              <div className="row g-4">
                <div className="col-md-4">
                  <h5 style={{ color: "#8B3A2F" }}>Quality</h5>
                  <p className="text-secondary mb-0">
                    Products selected with care.
                  </p>
                </div>

                <div className="col-md-4">
                  <h5 style={{ color: "#8B3A2F" }}>Affordable</h5>
                  <p className="text-secondary mb-0">
                    Great value for your money.
                  </p>
                </div>

                <div className="col-md-4">
                  <h5 style={{ color: "#8B3A2F" }}>Convenient</h5>
                  <p className="text-secondary mb-0">
                    Easy and comfortable shopping.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
