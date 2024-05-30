import styles from './Sidebar.module.css'
import NavigationButton from "./NavigationButton";

export const ButtonsDisplay:React.FC = ()=>{

    return (
        <div className={styles.sidebar}>
            <NavigationButton label='About Me'/>
            <NavigationButton label="My Projects"/>
            <NavigationButton label="Technologies"/>
        </div>
    )
}