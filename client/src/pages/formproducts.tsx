import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/products/productContext";
import { useUser } from "../context/userContext";
import ProductType from "../interfaces/product";
import { addProduct } from "../services/product";
import Form from "../styles/form";
import ShowProducts from "./showProducts";

enum roleEnum {
  Funcionario = 1,
  Cliente = 2,
}

const IndexUser = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [form, setForm] = useState({} as ProductType);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await addProduct(form);
    if (res) alert("se guardo de forma correcta");
  };

  const showForm = () => {
    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <form>
          <h2>Guardar datos</h2>
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

          <button onClick={(e) => handleSubmit(e)}>Guardar datos</button>
        </form>
      </Form>
    );
  };

  return (
    <>
      {user.id_role == roleEnum.Funcionario && showForm()}

      <ShowProducts />

      <button
        onClick={() => {
          navigate("/shopping");
        }}
      >
        Ver Carrito
      </button>
    </>
  );
};

export default IndexUser;
