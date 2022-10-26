import { http } from "./http";

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
