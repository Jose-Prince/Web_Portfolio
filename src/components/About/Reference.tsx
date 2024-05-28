import { component$ } from "@builder.io/qwik";
import { Imagen } from "./Imagen";

interface ItemsProps {
    link: string
    ref: string
    ancho: string
}

export const Reference = component$<ItemsProps>((props)=>{
    return <a href={props.link} style={{padding: '15px'}}>
        <Imagen ref={props.ref} ancho={props.ancho} type={false}/>
    </a>
})