import { component$ } from "@builder.io/qwik";
import styles from "./About.module.css";
import Prince from '../../../public/PrinceTransparent.png'
import { Imagen } from "./Imagen";


export const Circle = component$(()=>{
    return <div class={styles.circle}>
        
        <Imagen ref={Prince} ancho="20vw" type={true}/>
    </div>
})