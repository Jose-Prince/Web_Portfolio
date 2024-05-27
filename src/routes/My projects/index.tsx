import { component$, useStore, $ } from '@builder.io/qwik';
import { ButtonsDisplay } from '~/components/Sidebar/ButtonsDisplay';
import styles from './Projects.module.css';
import { OwnProjects } from '~/components/OwnProjects/OwnProjects';

export default component$(() => {
  
  return (
    <>
      <ButtonsDisplay />
      <div class={styles.projectDisplay}>
        <OwnProjects />
      </div>
    </>
  );
});
