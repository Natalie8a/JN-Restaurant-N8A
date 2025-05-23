import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const Bebidas = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <h1>Bebidas</h1>
    </>
  );
};
