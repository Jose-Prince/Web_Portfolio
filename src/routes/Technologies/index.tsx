import { component$, useStore } from "@builder.io/qwik";
import { ButtonsDisplay } from "~/components/Sidebar/ButtonsDisplay";
import styles from './Tech.module.css'
import { LabelEnd } from "~/components/Technologie/LabelEnd";
import { TechDisplay } from "~/components/Technologie/techDisplay";

export default component$(() => {

    const state = useStore({
        front: [
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
                name: 'React'
            },
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
                name: 'React'
            },
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
                name: 'React'
            },
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
                name: 'React'
            },
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
                name: 'React'
            }
        ]
    })

    return (
        <>
            <ButtonsDisplay/>
            <div class={styles.techDisplay}>
                <LabelEnd label="Front-end"/>
                <LabelEnd label="Back-end"/>
                <LabelEnd label="Database"/>
                <TechDisplay listTech={state.front}/>
                <p>ddsadas</p>
                <p>ddsadas</p>
            </div>
        </>
    )
})