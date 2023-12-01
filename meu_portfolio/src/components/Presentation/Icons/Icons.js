import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import styles from "./Icons.module.css";

const HoverableHtml5Icon = styled(FaHtml5)`
  &:hover,
  &:active {
    color: #ec6231;
  }
`;

const Hoverablecssicon = styled(FaCss3Alt)`
  &:hover,
  &:active {
    color: #264de4;
  }
`;

const Hoverablejsicon = styled(IoLogoJavascript)`
  &:hover,
  &:active {
    color: #f0db4f;
  }
`;

const Hoverablereacticon = styled(FaReact)`
  &:hover,
  &:active {
    color: #61dbfb;
  }
`;

const Hoverablefigmaticon = styled(FaFigma)`
  &:hover,
  &:active {
    color: #f25425;
  }
`;

const Hoverablebootstrapticon = styled(FaBootstrap)`
  &:hover,
  &:active {
    color: #684e8f;
  }
`;

function Icons() {
  return (
    <IconContext.Provider value={{ className: styles.iconsStyle, size: 35 }}>
      <Container className="mt-3 p-0">
        <HoverableHtml5Icon />
        <Hoverablecssicon />
        <Hoverablejsicon />
        <Hoverablereacticon />
        <Hoverablefigmaticon />
        <Hoverablebootstrapticon />
      </Container>
    </IconContext.Provider>
  );
}

export default Icons;
