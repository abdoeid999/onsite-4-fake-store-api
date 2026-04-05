import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";
import Swal from "sweetalert2";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(false);

    fetch(`https://fakestoreapi.com/products/${id}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ClockLoader color="#0c32bb" size={80} speedMultiplier={1.5} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">Something went wrong</h4>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h4 className="fw-bold">{product.title}</h4>

          <p className="text-muted">
            ⭐ {product.rating?.rate || 0} / 5 ({product.rating?.count || 0} reviews)
          </p>

          <p className="mt-3">{product.description}</p>

          <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
            <p className="fs-3 fw-bold text-primary mb-0">
              ${product.price}
            </p>

            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                Swal.fire({
                  title: "Add to Cart?",
                  text: `Do you want to add "${product.title}" to your cart?`,
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, add it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      "Added!",
                      "Item has been added to your cart.",
                      "success"
                    );
                  }
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;