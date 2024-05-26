import { component$ } from "@builder.io/qwik";
import styles from './Sidebar.module.css'
import { NavigationButton } from "./NavigationButton";

export const ButtonsDisplay = component$(()=>{
    return (
        <div class={styles.sidebar}>
            <NavigationButton label="About me"/>
            <NavigationButton label="My projects"/>
            <NavigationButton label="Technologies"/>
        </div>
    )
})