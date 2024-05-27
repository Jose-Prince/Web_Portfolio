import { component$, useStore, $ } from '@builder.io/qwik';
import { ButtonsDisplay } from '~/components/Sidebar/ButtonsDisplay';
import styles from './Projects.module.css';

export default component$(() => {
  const state = useStore({
    active: 3,
    items: [
      { id: 1, title: 'Slide 1', content: 'adskjakjlsdlk' },
      { id: 2, title: 'Slide 2', content: 'adskjakjlsdlk' },
      { id: 3, title: 'Slide 3', content: 'adskjakjlsdlk' },
      { id: 4, title: 'Slide 4', content: 'adskjakjlsdlk' },
      { id: 5, title: 'Slide 5', content: 'adskjakjlsdlk' },
      { id: 6, title: 'Slide 6', content: 'adskjakjlsdlk' },
      { id: 7, title: 'Slide 7', content: 'adskjakjlsdlk' }
    ]
  });

  const getStyles = (index: number) => {
    const stt = Math.abs(index - state.active);
    const translateX = 120 * stt * (index > state.active ? 1 : -1);
    const scale = 1 - 0.2 * stt;
    const opacity = stt > 2 ? 0 : 0.6;
    const zIndex = index === state.active ? 1 : -stt;
    const filter = stt === 0 ? 'none' : 'blur(5px)';
    const rotateY = index > state.active ? -1 : 1;

    if (state.active !== index) {
        return {
          transform: `translateX(${translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY}deg)`,
          opacity,
          zIndex,
          filter,
        };
    }
  };

  const handleNext = $(() => {
    state.active = state.active + 1 < state.items.length ? state.active + 1 : state.active;
  });

  const handlePrev = $(() => {
    state.active = state.active - 1 >= 0 ? state.active - 1 : state.active;
  });

  return (
    <>
      <ButtonsDisplay />
      <div class={styles.projectDisplay}>
        <div class={styles.slider}>
          {state.items.map((item, index) => {
            const style = getStyles(index);
            return (
              <div key={item.id} class={styles.item} style={style}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            );
          })}
          <button id={styles.next} onClick$={handleNext}>{'>'}</button>
          <button id={styles.prev} onClick$={handlePrev}>{'<'}</button>
        </div>
      </div>
    </>
  );
});
