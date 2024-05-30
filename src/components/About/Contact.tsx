import React from 'react';
import { Imagen } from "./Imagen";
import styles from '../About/About.module.css';

interface ItemsProps {
  src: string;
  info: string;
}

export const Contact: React.FC<ItemsProps> = (props) => {
  return (
    <div className={styles.horizontalDisplay}>
      <Imagen src={props.src} ancho="2vw" type={false} variant="contact" />
      <p style={{ marginLeft: '10px' }}>{props.info}</p>
    </div>
  );
};
