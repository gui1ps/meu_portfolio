import { Container } from "react-bootstrap";
import styles from "./SocialMedia.module.css";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/whatsapp";
import "react-social-icons/github";
import "react-social-icons/instagram";
import "react-social-icons/email";
import "react-social-icons/linkedin";

function SocialMedia() {
  return (
    <Container className="p-0">
      <SocialIcon
        className={styles.SocialMediaIcons}
        target="_blank"
        url="https://github.com/gui1ps"
      />
      <SocialIcon
        className={styles.SocialMediaIcons}
        target="_blank"
        url="https://www.linkedin.com/in/guilherme-roberto-dos-passos/"
      />
      <SocialIcon
        className={styles.SocialMediaIcons}
        target="_blank"
        network="email"
        url="mailto:guilhermerobertodospassos@gmail.com"
      />
      <SocialIcon
        className={styles.SocialMediaIcons}
        target="_blank"
        url="https://instagram.com/gui_guisinho?igshid=M2RkZGJiMzhjOQ=="
      />
      <SocialIcon
        className={styles.SocialMediaIcons}
        target="_blank"
        network="whatsapp"
        url="https://wa.me/5548996938354"
      />
    </Container>
  );
}
export default SocialMedia;
