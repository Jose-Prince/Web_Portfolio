import { component$ } from "@builder.io/qwik";
import { ButtonsDisplay } from "~/components/Sidebar/ButtonsDisplay";
import styles from './Tech.module.css'
import { LabelEnd } from "~/components/Technologie/LabelEnd";

export default component$(() => {
    return (
        <>
            <ButtonsDisplay/>
            <div class={styles.techDisplay}>
                <LabelEnd label="Front-end"/>
                <LabelEnd label="Back-end"/>
                <LabelEnd label="Database"/>
                <p>ddsadas</p>
                <p>ddsadas</p>
                <p>ddsadas</p>
            </div>
        </>
    )
})