import { useContext, useState } from "react";
import { ProductContext } from "../context/products/productContext";
import { Types } from "../context/products/productReducer";
import ProductType from "../interfaces/product";
import ShowProducts from "./showProducts";
import Form from "../styles/form";
import Navbar from "../components/navbar";
import Sinfoto from "../assets/products/sinfoto.png";
import styled from "styled-components";
import { useUser } from "../context/userContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: max-content;
  border-radius: 5px;
  padding: 20px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  & img {
    border-radius: 5px 5px 0 0;
  }
  & .container {
    padding: 2px 16px;
  }
`;

const Shopping = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { user } = useUser();

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


  const handleSend = (e: any) => {
    e.preventDefault();
    let msg3: string = "";
    for (let product of state.products) {
      msg3 +=  product.amount_product + ' ' + product.name_product   + ", ";
    }

    sendWhatsapp(msg3);
  };

  const sendWhatsapp = (msg3:string) => {
    let msg=`Hola, soy ${user.name_user}  necesito los siguientes productos : ${msg3}`
    window.open(
      `https://api.whatsapp.com/send/?phone=59165722183&text=${msg}`,
      "_blank"
    );
  };

  return (
    <div>
      <Navbar />
      <Form>
        <form>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            onChange={(e) => {
              handleForm("name_product", e.target.value);
            }}
            value={form.name_product}
            disabled
          />
          <label htmlFor="">Descripcion</label>
          <textarea
            onChange={(e) => {
              handleForm("description_product", e.target.value);
            }}
            value={form.description_product}
            disabled
          ></textarea>
          <label htmlFor="">Precio</label>
          <input
            type="text"
            onChange={(e) => {
              handleForm("price_product", e.target.value);
            }}
            value={form.price_product}
            disabled
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
          <button onClick={(e) => handleSend(e)}>Finalizar pedido</button>
        </form>
      </Form>

      <Container>
        {state.products.map((v, i) => (
          <Card key={i}>
            <img src={Sinfoto} alt="Avatar" />
            <div className="container">
              <h4>
                <b>{v.name_product}</b>
              </h4>
              <p>{v.description_product}</p>
              <p>{v.amount_product}</p>
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
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Shopping;
