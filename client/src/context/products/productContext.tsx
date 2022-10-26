import { createContext, useReducer } from "react";
import IProduct from "../../interfaces/product";
import appReducer, { EActionKind } from "./appReducer";

interface child {
  children: JSX.Element;
}

const initialState = {
  products: [] as IProduct[],
  addProduct: (p: IProduct) => {},
};

export const ProductContext = createContext(initialState);

export const ProductContextProvider = ({ children }: child) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addProduct = (product: IProduct) => {
    dispatch({
      type: EActionKind.ADD_PRODUCT,
      payload: product,
    });
  };

  return (
    <ProductContext.Provider value={{ ...state, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
