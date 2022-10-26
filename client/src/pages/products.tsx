import { useContext, useEffect, useState } from "react";
import IProduct from "../interfaces/product";
import { getProduct } from "../services/product";
import { ProductContext } from "../context/products/productContext";
import { Types } from "../context/products/productReducer";
import ProductType from "../interfaces/product";

const IndexUser = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const { state, dispatch } = useContext(ProductContext);
  const [form, setForm] = useState({} as ProductType);
  const getData = async () => {
    const res = await getProduct();
    setData(res);
  };

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    /*const name = e.target[0].value;
    const description = e.target[1].value;
    const price = e.target[2].value;
    const amount = e.target[3].value;
    console.log(amount);*/
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("name_product", e.target.value);
          }}
        />
        <label htmlFor="">Descripcion</label>
        <textarea
          onChange={(e) => {
            handleForm("description_product", e.target.value);
          }}
        ></textarea>
        <label htmlFor="">Precio</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("price_product", e.target.value);
          }}
        />
        <label htmlFor="">Cantidad</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("amount_product", e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: Types.Create,
              payload: {
                id: 1,
                amount_product: form.amount_product,
                description_product: form.description_product,
                name_product: form.name_product,
                price_product: form.price_product,
              },
            });
          }}
        >
          Guardar datos
        </button>
        {state.shoppingCart}
      </form>

      <div>
        {data.map((v, i) => (
          <div key={i}>
            <span>{v.name_product}</span>
            <span>{v.description_product}</span>
            <button>Agregar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexUser;
