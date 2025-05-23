import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      BOCAGRANDE CRA 2 # 9-96, Cartagena, Colombia <br />
      300 8375584 <br /> juicenerd01@gmail.com
    </p>

    <a href="https://www.instagram.com/juicenerd/" alt="ig" target="_blank">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <br />
    <a
      href="https://www.facebook.com/juicenerdpage?locale=sv_SE"
      alt="fb"
      target="_blank"
    >
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <p>©JuiceNerd Cartagena</p>
  </footer>
);
