import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const Other = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="food">
        <h1>Otros</h1>
      </div>
      <Link to="/">
        <button className="button-64">Menú Principal</button>
      </Link>
    </>
  );
};
