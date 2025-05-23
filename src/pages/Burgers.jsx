import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const Burgers = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="food">
        <h1>Hamburgesas</h1>
      </div>
      <Link to="/">
        <div className="centralButton">
          <button className="button-64">Menú Principal</button>
        </div>
      </Link>
    </>
  );
};
