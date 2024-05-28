import { component$, useStore } from "@builder.io/qwik";
import styles from './Progress.module.css'; // Asegúrate de tener tu archivo CSS en la ruta correcta
import { Imagen } from "../About/Imagen";

export const InProgress = component$(() => {
  const state = useStore({
    items: [
      { id: 1, 
        title: 'SABTE', 
        description: 'Proyecto desarrollado para crear una plataforma por la cual se pueda facilitar la contratación de empleados que tengan trabajos informales. Diseñada para Guatemala, actualmente desarrollada por un equipo de 5 personas.', 
        objectives: [
          'Facilitar la contratación de trabajos informales',
          'Plataforma disponible como página web y aplicación móvil'
        ],
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        ] 
      },
      { id: 2, title: 'Card 2', content: 'Content for card 2', imgSrc: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Card 3', content: 'Content for card 3', imgSrc: 'https://via.placeholder.com/150' },
      { id: 4, title: 'Card 4', content: 'Content for card 4', imgSrc: 'https://via.placeholder.com/150' }
    ]
  });

  return (
    <div class={styles.cardContainer}>
      {state.items.map((item) => (
        <div class={styles.project}>
            <h2>{item.title}</h2>
            <div style={{display:'flex', height: '60%', width: '100%'}}>
              <div class={styles.objDisplay}>
                <ul>
                  {
                    item.objectives?.map((obj, index)=>(
                      <li key={index} style={{marginBottom: '10px'}}>{obj}</li>
                    ))
                  }
                </ul>
              </div>
              <div class={styles.descDisplay}>
                {item.description}
              </div>
            </div>
            <h4 style={{margin: '0', width: '100%', paddingLeft: '20px', paddingTop: '10px'}}>Technologies:</h4>
            {
              item.technologies?.map((tech)=>(
                <Imagen ref={tech} type={false} ancho="3"/>
              ))
            }
        </div>
      ))}
    </div>
  );
});
