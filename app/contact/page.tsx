
export default function Contact() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F3EF", minHeight: "80vh" }}
    >
      <div className="container py-4">
        <div className="text-center mb-5">
          <p
            className="text-uppercase fw-semibold mb-2"
            style={{ color: "#D4AF37", letterSpacing: "4px" }}
          >
            We'd Love to Hear From You
          </p>

          <h1
            className="display-4 fw-bold"
            style={{ color: "#2F1B16" }}
          >
            Contact Us
          </h1>

          <div
            className="mx-auto mt-3"
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#D4AF37",
              borderRadius: "5px",
            }}
          ></div>

          <p className="mt-3 fs-5" style={{ color: "#705A52" }}>
            Have a question? We're here to help!
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm p-4 h-100 text-center"
              style={{ borderRadius: "20px" }}
            >
              <div className="fs-1 mb-3">📍</div>
              <h4 className="fw-bold" style={{ color: "#2F1B16" }}>
                Our Location
              </h4>
              <p className="text-secondary mb-0">
                Kerala, India
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm p-4 h-100 text-center"
              style={{ borderRadius: "20px" }}
            >
              <div className="fs-1 mb-3">📧</div>
              <h4 className="fw-bold" style={{ color: "#2F1B16" }}>
                Email Us
              </h4>
              <p className="text-secondary mb-0">
                We're happy to answer your questions.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm p-4 h-100 text-center"
              style={{ borderRadius: "20px" }}
            >
              <div className="fs-1 mb-3">💬</div>
              <h4 className="fw-bold" style={{ color: "#2F1B16" }}>
                Customer Support
              </h4>
              <p className="text-secondary mb-0">
                We're here to make shopping easier.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p style={{ color: "#705A52" }}>
            Thank you for choosing our store!
          </p>
        </div>
      </div>
    </div>
  );
}
