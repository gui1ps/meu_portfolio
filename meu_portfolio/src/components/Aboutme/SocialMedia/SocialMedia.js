import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from './SocialMedia.module.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/whatsapp'
import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/email'
import 'react-social-icons/linkedin'

function SocialMedia(){
    return (
        <Container className="p-0">
            <SocialIcon className={styles.SocialMediaIcons}  url="www.github.com" />
            <SocialIcon className={styles.SocialMediaIcons}  url="www.linkedin.com" />
            <SocialIcon className={styles.SocialMediaIcons}  url="www.email.com" />
            <SocialIcon className={styles.SocialMediaIcons}  url="www.instagram.com" />
            <SocialIcon className={styles.SocialMediaIcons}  url="www.whatsapp.com" />
        </Container>
    )
}
export default SocialMedia;