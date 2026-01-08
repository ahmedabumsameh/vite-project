import { Link } from "react-router-dom";

function Product({ product, showButton }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-truncate" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.description}
        </p>
        <p> Price: {Number(product.price).toFixed(2)}$</p>
        {showButton && (
          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
