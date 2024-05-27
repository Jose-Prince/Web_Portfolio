import { component$ } from "@builder.io/qwik";
import { ButtonsDisplay } from "~/components/Sidebar/ButtonsDisplay";
import styles from '../../components/About/About.module.css'
import image from '../../../public/PrinceTransparent.png'
import { Imagen } from "~/components/About/Imagen";
import { Circle } from "~/components/About/Circle";

export default component$(() => {
    return (
        <>
            <ButtonsDisplay/>
            <div class={styles.aboutDisplay}>
                <Circle />
            </div>
        </>
    )
})