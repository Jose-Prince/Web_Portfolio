import styles from '../About/About.module.css'
import Prince from '../../../public/PrinceTransparent.png'
import { Imagen } from "./Imagen"

export const Circle: React.FC = () => {
  return (
    <div className={styles.circle}>
      <Imagen src={Prince.src} ancho="20vw" type={true} variant={'contact'}/>
    </div>
  );
}
