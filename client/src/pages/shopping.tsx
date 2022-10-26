import { useContext, useState } from "react";
import { ProductContext } from "../context/products/productContext";
import { Types } from "../context/products/productReducer";
import ProductType from "../interfaces/product";

const Shopping = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [form, setForm] = useState({
    amount_product: 0,
    description_product: "",
    id_product: 0,
    name_product: "",
    price_product: 0,
  } as ProductType);

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

  const startEdit = (id_product: number) => {
    setForm({
      ...state.products.filter((v) => v.id_product === id_product)[0],
      id_product,
    });
  };

  const editProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: Types.Edit,
      payload: {
        id_product: form.id_product,
        product: form,
      },
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("name_product", e.target.value);
          }}
          value={form.name_product}
        />
        <label htmlFor="">Descripcion</label>
        <textarea
          onChange={(e) => {
            handleForm("description_product", e.target.value);
          }}
          value={form.description_product}
        ></textarea>
        <label htmlFor="">Precio</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("price_product", e.target.value);
          }}
          value={form.price_product}
        />
        <label htmlFor="">Cantidad</label>
        <input
          type="text"
          onChange={(e) => {
            handleForm("amount_product", e.target.value);
          }}
          value={form.amount_product}
        />
        <button onClick={(e) => editProduct(e)}>Guardar datos</button>
        {state.shoppingCart}
      </form>

      {state.products.map((v, i) => (
        <div key={i}>
          <p>{v.id_product}</p>
          <p>{v.description_product}</p>
          <button
            onClick={() => {
              dispatch({
                type: Types.Delete,
                payload: {
                  id_product: v.id_product,
                },
              });
            }}
          >
            Quitar
          </button>

          <button onClick={() => startEdit(v.id_product)}>Editar</button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Shopping;
