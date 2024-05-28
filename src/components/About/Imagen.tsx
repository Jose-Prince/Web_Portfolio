import { component$ } from "@builder.io/qwik";
import styles from './About.module.css';

interface ItemsProps {
    ref: string;
    ancho: string;
    type: boolean;
}

export const Imagen = component$<ItemsProps>(({ ref, ancho, type }) => {
    const aspectRatio = 1; // Por ejemplo, 1 para una imagen cuadrada. Ajusta según la proporción real de tu imagen.

    // Convertir ancho a número y calcular la altura
    const widthNum = parseFloat(ancho);
    const heightNum = widthNum / aspectRatio;

    return (
        <img
            src={ref}
            class={type ? styles.imgPosition : styles.imgProfile}
            style={{ width: `${widthNum}vw`, height: `${heightNum}vw` }}
            width={widthNum}
            height={heightNum}
        />
    );
});
