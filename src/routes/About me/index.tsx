import { component$ } from "@builder.io/qwik";
import { ButtonsDisplay } from "~/components/Sidebar/ButtonsDisplay";
import styles from '../../components/About/About.module.css'
import { Circle } from "~/components/About/Circle";

export default component$(() => {
    return (
        <>
            <ButtonsDisplay/>
            <div class={styles.aboutDisplay}>
                <Circle />
                <h1>José Alejandro Prince Martinez</h1>
                <div class={styles.description}>Programador desde hace 2 años. Actualmente estudiante en la Universidad del Valle de Guatemala en la carrera de Licenciatura en Ingenieria en Ciencias de de la computación y Tecnologías de la Información. Sin experencia laboral como programador junior. Conocimiento variado en diferentes lenguajes tanto de Back-end y Front-end. Se tiene un gusto principalmente en el desarrollo de Front-end tanto para aplicaciones móviles como para páginas web, dominando principalmente las tecnologías web. Se tiene un gusto por el aprendizaje, lo que hace que pruebe diferentes tecnologías para tener una mejor noción sobre el uso de las diferentes tecnologías que existen y cuando es mejor aplicar cada una de ellas. </div>
            </div>
        </>
    )
})