import { component$ } from "@builder.io/qwik";
import styles from './Technology.module.css'

interface ItemsProps {
    label : string
}

export const LabelEnd = component$<ItemsProps>((props)=>{
    return (
        <div class={styles.titleDisplay}>
            {props.label}
        </div>
    )
})