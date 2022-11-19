import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/products/productContext";
import { Types } from "../context/products/productReducer";
import { useUser } from "../context/userContext";
import IProduct from "../interfaces/product";
import { getProduct, deleteProduct } from "../services/product";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  background-color: #f2f2f2;
  margin: 15px;
  padding: 10px;
  width: 300px;
`;

enum roleEnum {
  Funcionario = 1,
  Cliente = 2,
}

const ShowProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [data, setData] = useState<IProduct[]>([]);
  const { user } = useUser();

  const getData = async () => {
    const res = await getProduct();
    setData(res);
  };

  const handleClick = async (id: number) => {
    await deleteProduct(id);
    getData();
  };

  const handleAddShopp = (v: IProduct) => {
    v.amount_product = 1;
    dispatch({
      type: Types.Add,
      payload: {
        product: v,
      },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function showDelProduct(id: number) {
    return <button onClick={() => handleClick(id)}>Eliminar</button>;
  }

  return (
    <Container>
      {data.map((v, i) => (
        <Card key={i}>
          <h2>{v.name_product}</h2>
          <p>{v.description_product}</p>
          <span>{v.price_product}$</span>
          <p>{v.amount_product}</p>

          <button onClick={() => handleAddShopp(v)}>Añadir carrito</button>

          {user.id_role == roleEnum.Funcionario && showDelProduct(v.id_product)}
        </Card>
      ))}
    </Container>
  );
};

export default ShowProducts;
