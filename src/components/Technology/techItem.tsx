import styles from './Technology.module.css';

interface ItemsProps {
    link: string;
    name: string;
    width: string;  // Nueva propiedad para el ancho
    aspectRatio: number; // Nueva propiedad para la relación de aspecto
}

export const TechItem: React.FC<ItemsProps> =({ link, name, width, aspectRatio }) => {
    const widthNum = parseFloat(width);
    const heightNum = widthNum / aspectRatio;

    return (
        <div className={styles.techItem}>
            <img
                src={link}
                alt={name}
                className={styles.techImage}
                style={{ width: `${widthNum}px`, height: `${heightNum}px` }}
                width={widthNum}
                height={heightNum}
            />
            <h2 className={styles.techName}>{name}</h2>
        </div>
    );
}
