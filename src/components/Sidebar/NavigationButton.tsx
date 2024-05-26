import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import styles from './Sidebar.module.css';
import { useLocation, useNavigate } from "@builder.io/qwik-city";

interface ItemsProps {
    label: string;
}

export const NavigationButton = component$<ItemsProps>((props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = useSignal(false);

    useTask$(({ track }) => {
        track(() => location.url.pathname)
        const encodedLocation = location.url.pathname
        const decodedLocation = decodeURIComponent(encodedLocation).replace(/\/$/, '').replace('/', '')      
        
        if (decodedLocation === props.label) {
            state.value = true;
        } else {
            state.value = false;
        }
    });

    return (
        <button
            class={state.value ? styles.navButtonA : styles.navButton}
            onClick$={() => navigate('/' + props.label)}
        >
            <p class={styles.textRot}>
                {props.label.toUpperCase()}
            </p>
        </button>
    );
});
