import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container-fluid text-center mt-5">
      <img src="https://scontent.fctg3-1.fna.fbcdn.net/v/t1.6435-9/116473563_887263981761005_8469172096226830960_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF29bveES0km3rlw5rxtmUlS_nfoH1alQBL-d-gfVqVAGvhaZZrXhWPoKdODe4A3mc&_nc_ohc=bWLYY6rnuPgQ7kNvwEiAlG-&_nc_oc=Adl5uR87T1vgDg6Am43NelQVY6IRSF7SZ-PB0A4PMLsOVY_zl2iGO2O7vRLxGoXJkZk&_nc_zt=23&_nc_ht=scontent.fctg3-1.fna&_nc_gid=QTKg-LTSZ0ZkNVOeW7sZJA&oh=00_AfKA19CPmImcEmwEzgIc8SgA6WyAZbr9YjSpdijjViItCw&oe=68576D24" />
      {/* Burger */}
      <Link className="noULine" to="/demo">
        <div className="burger">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faBurger} />
          </button>
        </div>
      </Link>
      {/* Sandwich */}
      <Link className="noULine" to="/demo">
        <div className="sandwich">
          <button className="button-56" role="button">
            🥪
          </button>
        </div>
      </Link>
      {/* Hotdog */}
      <Link className="noULine" to="/demo">
        <div className="hotDog">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faHotdog} />
          </button>
        </div>
      </Link>
      {/* Antojitos */}
      <Link className="noULine" to="/demo">
        <div className="antojitos">
          <button className="button-56" role="button">
            <strong>😋Antojitos😋</strong>
          </button>
        </div>
      </Link>
      {/* Otros */}
      <Link className="noULine" to="/demo">
        <div className="otros">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
      </Link>
      {/* Green Salads */}
      <Link className="noULine" to="/demo">
        <div className="greenSalad">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faPlateWheat} />
          </button>
        </div>
      </Link>
      {/* Pizzas */}
      <Link className="noULine" to="/demo">
        <div className="pizza">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faPizzaSlice} />
          </button>
        </div>
      </Link>
      {/* Ceviches */}
      <Link className="noULine" to="/demo">
        <div className="ceviche">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faShrimp} />
          </button>
        </div>
      </Link>
      {/* Beverages */}
      <Link className="noULine" to="/demo">
        <div className="bebida">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            Bebidas <FontAwesomeIcon icon={faWhiskeyGlass} />
          </button>
        </div>
      </Link>
      {/* Desserts */}
      <Link className="noULine" to="/demo">
        <div className="postre">
          <button className="button-56" role="button">
            <FontAwesomeIcon icon={faIceCream} /> Postres{" "}
            <FontAwesomeIcon icon={faStroopwafel} />
          </button>
        </div>
      </Link>
    </div>
  );
};
