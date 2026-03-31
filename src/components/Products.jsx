import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import Swal from 'sweetalert2'

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <FadeLoader
          color="#0c32bb"
          height={20}
          margin={10}
          radius={2}
          width={5}
        />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Products</h2>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="product-card h-100 d-flex flex-column">
              <div className="image-container">
                <span className="badge-category">{product.category}</span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title text-truncate" title={product.title}>
                  {product.title}
                </h5>
                <div className="mt-auto">
                  <p className="price-tag">${product.price}</p>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-custom flex-grow-1"
                      onClick={() => {
                        Swal.fire({
                          title: product.title,
                          html: `
                            <div class="text-start">
                              <p class="text-muted mb-3">${product.description}</p>
                              <div class="d-flex justify-content-between align-items-center">
                                <span class="fs-4 fw-bold text-primary">$${product.price}</span>
                                <span class="badge bg-secondary">${product.category}</span>
                              </div>
                            </div>
                          `,
                          imageUrl: product.image,
                          imageHeight: 200,
                          imageAlt: product.title,
                          showCancelButton: true,
                          confirmButtonText: 'Add to Cart',
                          cancelButtonText: 'Close',
                          confirmButtonColor: '#4f46e5',
                          cancelButtonColor: '#6b7280',
                          width: '600px'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire(
                              'Added!',
                              'Your item has been added to the cart.',
                              'success'
                            )
                          }
                        })
                      }}
                    >
                      Quick View
                    </button>
                    <NavLink
                      className="btn btn-custom flex-grow-1 text-white text-decoration-none d-flex align-items-center justify-content-center"
                      to={`/product/${product.id}`}
                    >
                      Details
                    </NavLink>
                  </div>
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
