import { ButtonsDisplay } from "@/components/Sidebar/ButtonsDisplay";
import { LabelEnd } from "@/components/Technology/LabelEnd";
import { TechDisplay } from "@/components/Technology/techDisplay";
import { useState } from "react";
import styles from './Tech.module.css'

export default function Technologies() {

  const [state] = useState({
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
        },
        {
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
            name: 'TypeScript'
        },
        {
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            name: 'JavaScript'
        },
        {
            link: 'https://vitejs.dev/logo-with-shadow.png',
            name: 'Vite'
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
        },
        {
            link: 'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
            name: 'Node.js'
        },
        {
            link: 'https://vitest.dev/logo-shadow.svg',
            name: 'Vitest'
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
        <div style={{display: 'flex', height: '100%', width: '100vw'}}>
        <ButtonsDisplay/>
          <div className={styles.techDisplay}>
            <LabelEnd label="Front-end"/>
            <LabelEnd label="Back-end"/>
            <LabelEnd label="Database"/>
            <TechDisplay listTech={state.front}/>
            <TechDisplay listTech={state.back}/>
            <TechDisplay listTech={state.data}/>
          </div>
        </div>
      </>

    )
  }