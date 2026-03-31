import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";
import Swal from 'sweetalert2';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ClockLoader color="#0c32bb" size={100} speedMultiplier={2} />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="col-md-6">
          <h4>{product.title}</h4>

          <p className="text-muted">
            ⭐⭐⭐⭐⭐ {product.rating?.rate} / 5 ({product.rating?.count}{" "}
            reviews)
          </p>

          <p>{product.description}</p>

          <div className="d-flex align-items-center gap-3 mt-3">
            <p className="fs-4 fw-bold mb-0">${product.price}</p>
            <button
              className="btn btn-primary ms-auto btn-lg"
              onClick={() => {
                Swal.fire({
                  title: 'Add to Cart?',
                  text: `Do you want to add "${product.title}" to your cart?`,
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, add it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      'Added!',
                      'Item has been added to your cart.',
                      'success'
                    )
                  }
                })
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
