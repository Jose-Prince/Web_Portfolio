import { component$ } from "@builder.io/qwik";
import styles from './Technology.module.css';

interface ItemsProps {
    link: string;
    name: string;
}

export const TechItem = component$<ItemsProps>(({ link, name }) => {
    return (
        <div class={styles.techItem}>
            <img src={link} alt={name} width="10" height="20"/>
            <h2 class={styles.techName}>{name}</h2>
        </div>
    );
});
