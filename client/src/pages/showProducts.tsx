import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/products/productContext";
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

const ShowProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [data, setData] = useState<IProduct[]>([]);
  const getData = async () => {
    const res = await getProduct();
    setData(res);
  };

  const handleClick = async (id: number) => {
    await deleteProduct(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {data.map((v, i) => (
        <Card key={i}>
          <h2>{v.name_product}</h2>
          <p>{v.description_product}</p>
          <span>{v.price_product}$</span>
          <p>{v.amount_product}</p>
          <button onClick={() => handleClick(v.id_product)}>Eliminar</button>
        </Card>
      ))}
    </Container>
  );
};

export default ShowProducts;
