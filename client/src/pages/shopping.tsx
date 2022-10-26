import { useContext } from "react";
import { ProductContext } from "../context/products/productContext";

const Shopping = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((v, i) => (
        <div>
          <p>{v.id}</p>
          <p>{v.description_product}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Shopping;
