import { component$ } from "@builder.io/qwik";
import styles from './About.module.css'

interface ItemsProps {
    ref: string
}

export const Imagen = component$<ItemsProps>((props)=>{
    return <img src={props.ref} class={styles.imgPosition}/>
})