import { http } from "./http";
import ProductType from "../interfaces/product";

export const getProduct = async () => {
  try {
    const response = await fetch(`${http}producto`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {}
};

export const addProduct = async (form: ProductType) => {
  const {
    id_product,
    name_product,
    description_product,
    price_product,
    amount_product,
  } = form;
  try {
    const response = await fetch(`${http}producto`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_product,
        name_product,
        description_product,
        price_product,
        amount_product,
      }),
    });
    if (response.ok) {
      return true;
    }

    return false;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (id:number) => {
  try {
    const response = await fetch(`${http}producto/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {}
};