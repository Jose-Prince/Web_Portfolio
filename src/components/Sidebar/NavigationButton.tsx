import { component$ } from "@builder.io/qwik";
import styles from './Sidebar.module.css'

interface ItemsProps {
    label : string
}

export const NavigationButton = component$<ItemsProps>((props)=>{
    return (
        <button class={styles.navButton}>{props.label}</button>
    )
})