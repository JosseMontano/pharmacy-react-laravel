import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/products/productContext";
import IProduct from "../interfaces/product";
import { getProduct } from "../services/product";

const IndexUser = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const { addProduct } = useContext(ProductContext);
  const getData = async () => {
    const res = await getProduct();
    setData(res);
  };

  /*   const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;
    const price = e.target[2].value;
    const amount = e.target[3].value;
    console.log(amount);
  };
 */
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/*  <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Descripcion</label>
        <textarea></textarea>
        <label htmlFor="">Precio</label>
        <input type="text" />
        <label htmlFor="">Cantidad</label>
        <input type="text" />
        <button>Guardar datos</button>
      </form> */}

      <div>
        {data.map((v, i) => (
          <div key={i}>
            <span>{v.name_product}</span>
            <span>{v.description_product}</span>
            <button onClick={() => addProduct(v)}>Agregar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexUser;
