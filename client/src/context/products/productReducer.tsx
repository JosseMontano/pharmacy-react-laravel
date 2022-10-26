import ProductType from "../../interfaces/product";

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name_product: string;
    description_product: string;
    price_product: number;
    amount_product: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name_product: action.payload.name_product,
          description_product: action.payload.description_product,
          price_product: action.payload.price_product,
          amount_product: action.payload.amount_product,
        },
      ];
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};
