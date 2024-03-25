import styles from "./Btn.module.css";
import { saveAs } from 'file-saver';
import pdf from './cv.pdf'
function Btn() {
  const handleDownload=()=>{
    const pdfPath=pdf;
    const pdfFileName="Currículo  | Guilherme Roberto dos Passos.pdf";
    saveAs(pdfPath,pdfFileName)
  }
  return (
    <>
      <button onClick={handleDownload} className={styles.Btn}>Download CV</button>
    </>
  );
}
export default Btn;
