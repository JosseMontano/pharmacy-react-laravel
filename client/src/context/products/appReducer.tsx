import IProduct from "../../interfaces/product";

export enum EActionKind {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}

interface IAction {
  type: EActionKind;
  payload: IProduct;
}

interface IState {
  products: IProduct[];
}

export default function appReducer(state: IState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        value: [...state.products, payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        value: [],
      };
    default:
      return state;
  }
}
