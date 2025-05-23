import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      <FontAwesomeIcon icon={faLocationDot} />
      BOCAGRANDE CRA 2 # 9-96, Cartagena, Colombia <br />
      <FontAwesomeIcon icon={faPhone} /> 300 8375584
      <br />
      <FontAwesomeIcon icon={faEnvelope} />
      juicenerd01@gmail.com
    </p>

    <a
      href="https://www.instagram.com/juicenerd/"
      className="noULine"
      alt="ig"
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagram} /> juicenerd
    </a>
    <br />
    <a
      href="https://www.facebook.com/juicenerdpage?locale=sv_SE"
      className="noULine"
      alt="fb"
      target="_blank"
    >
      <FontAwesomeIcon icon={faFacebook} />
      juicenerdpage
    </a>
    <p>©JuiceNerd Cartagena</p>
  </footer>
);
