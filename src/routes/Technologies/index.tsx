import { component$ } from "@builder.io/qwik";
import { ButtonsDisplay } from "~/components/Sidebar/ButtonsDisplay";
import styles from './Tech.module.css'

export default component$(() => {
    return (
        <>
            <ButtonsDisplay/>
            <div class={styles.techDisplay}>
                <p>ddsadas</p>
                <p>ddsadas</p>
                <p>ddsadas</p>
                <p>ddsadas</p>
                <p>ddsadas</p>
                <p>ddsadas</p>
            </div>
        </>
    )
})