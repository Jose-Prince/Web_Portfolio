import React from 'react';
import { Imagen } from "./Imagen";

interface ItemsProps {
  link: string;
  src: string;
  ancho: string;
}

export const Reference: React.FC<ItemsProps> = (props) => {
  return (
    <a href={props.link} style={{ padding: '15px' }}>
      <Imagen src={props.src} ancho={props.ancho} type={false} variant="reference" />
    </a>
  );
};
