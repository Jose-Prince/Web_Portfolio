import { ButtonsDisplay } from "@/components/Sidebar/ButtonsDisplay";
import styles from './Projects.module.css';
import { InProgress } from "@/components/OwnProjects/inProgress";
import { OwnProjects } from "@/components/OwnProjects/OwnProgress";

export default function About() {
    return (
      
      <>
        <div style={{display: 'flex', height: '100%', width: '100vw'}}>
          <ButtonsDisplay/>
          <div className={styles.projectDisplay}>
        <div className={styles.indicator}>
          <h1 style={{margin:'0', opacity: 'none'}}>Completed projects::</h1>
        </div>
        <OwnProjects />
        <div className={styles.indicator}>
          <h1 style={{margin:'0', opacity: 'none'}}>In production:</h1>
        </div>
        <InProgress />
      </div>
        </div>
      </>

    )
}