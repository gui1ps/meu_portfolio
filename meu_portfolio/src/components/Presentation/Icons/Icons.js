import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from './Icons.module.css'
import { Container } from "react-bootstrap";

function Icons(){
    return(
        <IconContext.Provider value={{className:styles.iconsStyle}}>
            <Container className="mt-3 p-0">
                <FaHtml5 size={35}/>
                <FaCss3Alt size={35}/>
                <IoLogoJavascript size={35}/>
                <FaReact size={35}/>
                <FaFigma size={35}/>
                <FaBootstrap size={35}/>
            </Container>
        </IconContext.Provider>
    )
}
export default Icons;