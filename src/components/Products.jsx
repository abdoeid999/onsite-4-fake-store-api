import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(false);

    fetch("https://fakestoreapi.com/products", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <FadeLoader height={15} margin={8} radius={2} width={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">Failed to load products</h4>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Our Products</h2>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="product-card h-100 d-flex flex-column shadow-sm rounded">
              
              {/* Image */}
              <div className="position-relative text-center p-3">
                <span className="badge bg-secondary position-absolute top-0 start-0 m-2">
                  {product.category}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ height: "180px", objectFit: "contain" }}
                />
              </div>

              {/* Body */}
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate" title={product.title}>
                  {product.title}
                </h6>

                <p className="fw-bold text-primary mb-2">
                  ${product.price}
                </p>

                <div className="mt-auto d-flex gap-2 flex-wrap">
                  <button
                    className="btn btn-outline-primary flex-grow-1"
                    onClick={() => {
                      Swal.fire({
                        title: product.title,
                        html: `
                          <div class="text-start">
                            <p class="text-muted mb-3">${product.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                              <span class="fs-5 fw-bold text-primary">$${product.price}</span>
                              <span class="badge bg-secondary">${product.category}</span>
                            </div>
                          </div>
                        `,
                        imageUrl: product.image,
                        imageHeight: 180,
                        imageAlt: product.title,
                        showCancelButton: true,
                        confirmButtonText: "Add to Cart",
                        cancelButtonText: "Close",
                        confirmButtonColor: "#4f46e5",
                        cancelButtonColor: "#6b7280",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            "Added!",
                            "Your item has been added to the cart.",
                            "success"
                          );
                        }
                      });
                    }}
                  >
                    Quick View
                  </button>

                  <NavLink
                    className="btn btn-primary flex-grow-1 text-white d-flex align-items-center justify-content-center"
                    to={`/product/${product.id}`}
                  >
                    Details
                  </NavLink>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;