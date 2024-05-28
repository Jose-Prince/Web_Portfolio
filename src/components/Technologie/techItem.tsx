import { component$ } from "@builder.io/qwik";
import styles from './Technology.module.css';

interface ItemsProps {
    link: string;
    name: string;
    width: string;  // Nueva propiedad para el ancho
    aspectRatio: number; // Nueva propiedad para la relación de aspecto
}

export const TechItem = component$<ItemsProps>(({ link, name, width, aspectRatio }) => {
    const widthNum = parseFloat(width);
    const heightNum = widthNum / aspectRatio;

    return (
        <div class={styles.techItem}>
            <img
                src={link}
                alt={name}
                class={styles.techImage}
                style={{ width: `${widthNum}vw`, height: `${heightNum}vw` }}
                width={widthNum}
                height={heightNum}
            />
            <h2 class={styles.techName}>{name}</h2>
        </div>
    );
});
