import { component$ } from "@builder.io/qwik";
import { Imagen } from "./Imagen";
import styles from './About.module.css'

interface ItemsProps {
    ref: string
    info: string
}

export const Contact = component$<ItemsProps>((props)=>{
    return (
        <div class={styles.horizontalDisplay}>
            <Imagen ref={props.ref} ancho="3" type={false}/>
            <p style={{marginLeft: '10px'}}>{props.info}</p>
        </div>      
    )
})