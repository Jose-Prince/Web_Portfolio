import styles from './Technology.module.css'
import { TechItem } from "./techItem";

interface Techs {
    link : string
    name: string
}

interface ItemsProps {
    listTech: Array<Techs>
}

export const TechDisplay: React.FC<ItemsProps> = (props)=>{



    return (
        <div className={styles.techGrid}>
            {
                props.listTech.map((tech) => (
                    <TechItem link={tech.link} name={tech.name} width="90" aspectRatio={1}/>
                ))
            }
        </div>
    )
}