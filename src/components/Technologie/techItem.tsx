import { component$ } from "@builder.io/qwik";
import styles from './Technology.module.css'

interface ItemsProps {
    link: string
    name: string
}

export const TechItem = component$<ItemsProps>((props)=>{
    return (
        <div class={styles.techItem}>
            <img src={props.link} style={{width: '100%'}}/>
            <h2 class={styles.techName}>React JS</h2>
        </div>
    )
})