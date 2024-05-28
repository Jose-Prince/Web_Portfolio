import { component$ } from "@builder.io/qwik";
import styles from './Technology.module.css'
import { TechItem } from "./techItem";

interface Techs {
    link : string
    name: string
}

interface ItemsProps {
    listTech: Array<Techs>
}

export const TechDisplay = component$<ItemsProps>((props)=>{



    return (
        <div class={styles.techGrid}>
            {
                props.listTech.map((tech) => (
                    <TechItem link={tech.link} name={tech.name} width="100" aspectRatio={1}/>
                ))
            }
        </div>
    )
})