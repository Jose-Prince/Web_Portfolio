import { component$, useStore } from "@builder.io/qwik";
import styles from './Progress.module.css'; // Asegúrate de tener tu archivo CSS en la ruta correcta

export const InProgress = component$(() => {
  const state = useStore({
    items: [
      { id: 1, title: 'Card 1', content: 'Content for card 1', imgSrc: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Card 2', content: 'Content for card 2', imgSrc: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Card 3', content: 'Content for card 3', imgSrc: 'https://via.placeholder.com/150' },
      { id: 4, title: 'Card 4', content: 'Content for card 4', imgSrc: 'https://via.placeholder.com/150' }
    ]
  });

  return (
    <div class={styles.cardContainer}>
      {state.items.map((item) => (
        <div key={item.id} class={styles.card}>
          <img src={item.imgSrc} alt={item.title} class={styles.cardImage} />
          <div class={styles.cardContent}>
            <h2 class={styles.cardTitle}>{item.title}</h2>
            <p class={styles.cardText}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
});
