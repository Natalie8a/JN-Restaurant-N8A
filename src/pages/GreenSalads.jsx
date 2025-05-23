import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const GreenSalads = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="food">
        <h1>Ensaladas Verdes</h1>
      </div>
      <Link to="/">
        <div className="centralButton">
          <button className="button-64">Menú Principal</button>
        </div>
      </Link>
    </>
  );
};
