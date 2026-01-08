import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product, { ProductType } from "./Product";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState<ProductType | null>(null);
  const params = useParams<{ productId: string }>();
  
  console.log(params);
  
  useEffect(() => {
    if (params.productId) {
      fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((product) => setProduct(product));
    }
  }, [params.productId]);

  if (!product) {
    return <div>Loading...</div>; // Or handle null state appropriately
  }

  return (
    <Product product={product} showButton={false} />
  );
}

export default ProductDetails;
