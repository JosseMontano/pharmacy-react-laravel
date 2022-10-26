import ProductType from "../../interfaces/product";

export enum Types {
  Create = "CREATE_PRODUCT",
  Add = "ADD_PRODUCT",
  AddAmount = "ADD_AMOUNT",
  Edit = "EDIT_PRODUCT",
  Delete = "DELETE_PRODUCT",
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
    id_product: number;
    name_product: string;
    description_product: string;
    price_product: number;
    amount_product: number;
  };
  [Types.Add]: {
    product: ProductType;
  };
  [Types.Edit]: {
    id_product: number;
    product: ProductType;
  };
  [Types.Delete]: {
    id_product: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return [...state, action.payload.product];

    case Types.Delete:
      return [
        ...state.filter(
          (product) => product.id_product !== action.payload.id_product
        ),
      ];

    case Types.Edit:
      return [
        ...state.filter((v) => v.id_product !== action.payload.id_product),
        action.payload.product,
      ];
    default:
      return state;
  }
};

type ShoppingCartPayload = {
  [Types.AddAmount]: undefined;
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.AddAmount:
      return state + 1;
    default:
      return state;
  }
};
