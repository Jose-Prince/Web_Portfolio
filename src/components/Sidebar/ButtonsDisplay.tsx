import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import styles from './Sidebar.module.css'
import { NavigationButton } from "./NavigationButton";
import { useLocation } from "@builder.io/qwik-city";

export const ButtonsDisplay = component$(()=>{

    return (
        <div class={styles.sidebar}>
            <NavigationButton label={'About me'}/>
            <NavigationButton label="My projects"/>
            <NavigationButton label="Technologies"/>
        </div>
    )
})