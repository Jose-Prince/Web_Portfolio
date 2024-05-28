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
                link: 'https://avatars.githubusercontent.com/u/138123704?v=4',
                name: 'Qwik'
            },
            {
                link: 'https://itproger.com/img/tests/1567591805.svg',
                name: 'Kotlin'
            },
            {
                link: 'https://www.wonderpush.com/wp-content/uploads/2019/09/ionic.png',
                name: 'Ionic'
            }
        ],
        back :[
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png',
                name: 'Python'
            },
            {
                link: 'https://education.oracle.com/file/general/p-80-java.png',
                name: 'Java'
            },
            {
                link: 'https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png',
                name: 'Docker'
            }
        ],
        data : [
            {
                link: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
                name: 'PostgreSQL'
            },
            {
                link: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80ODk2NWRhMmM3NTM5MGU4YzQ4NjA1OGMyODJiMzVjZD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.6DscqHBxt8ExFrTU-ok22ZG5PhY4hYWjHduL7B80klw',
                name: 'Firebase'
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
                <TechDisplay listTech={state.back}/>
                <TechDisplay listTech={state.data}/>
            </div>
        </>
    )
})