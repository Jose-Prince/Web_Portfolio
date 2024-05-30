import React from 'react';
import styles from '../About/About.module.css';

interface ItemsProps {
  src: string;
  ancho: string;
  type: boolean;
  variant: 'contact' | 'reference'; // Nueva prop para diferenciar variantes
}

export const Imagen: React.FC<ItemsProps> = ({ src, ancho, type, variant }) => {
  return (
    <img
      src={src}
      className={`${type ? styles.imgPosition : styles.imgProfile} ${variant === 'contact' ? styles.contactImage : styles.referenceImage}`}
      style={{ width: ancho }}
      alt=""
    />
  );
};
