import { component$, useStore, $ } from '@builder.io/qwik';
import { ButtonsDisplay } from '~/components/Sidebar/ButtonsDisplay';
import styles from './Projects.module.css';
import { OwnProjects } from '~/components/OwnProjects/OwnProjects';
import { InProgress } from '~/components/OwnProjects/InProgress';

export default component$(() => {
  
  return (
    <>
      <ButtonsDisplay />
      <div class={styles.projectDisplay}>
        <div class={styles.indicator}>
          <h1 style={{margin:'0', opacity: 'none'}}>Projects finished:</h1>
        </div>
        <OwnProjects />
        <div class={styles.indicator}>
          <h1 style={{margin:'0', opacity: 'none'}}>In production:</h1>
        </div>
        <InProgress />
      </div>
    </>
  );
});
