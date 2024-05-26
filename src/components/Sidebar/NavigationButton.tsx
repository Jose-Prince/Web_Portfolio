import { component$ } from "@builder.io/qwik";
import styles from './Sidebar.module.css'
import { useNavigate } from "@builder.io/qwik-city";

interface ItemsProps {
    label : string
}

export const NavigationButton = component$<ItemsProps>((props)=>{
    const navigate = useNavigate()

    return (
        <button class={styles.navButton}
            onClick$={() => navigate('/'+props.label)}><p class={styles.textRot}>{props.label.toUpperCase()}</p></button>
    )
})