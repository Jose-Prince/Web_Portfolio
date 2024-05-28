import { $, component$, useStore } from "@builder.io/qwik";
import styles from '../../routes/My projects/Projects.module.css';
import calc from '../../../public/clac.png'
import blog from '../../../public/blog.png'
import sonic from '../../../public/sonic.png'
import { Imagen } from "../About/Imagen";
import { useNavigate } from "@builder.io/qwik-city";

export const OwnProjects = component$(()=>{

    const state = useStore({
        active: 0,
        items: [
          { id: 1, 
            title: "Movies' Blog", 
            content: 'Web blog that shows the best movies in my opinion. It has two screens: Home and Admin. In the Home screen you can visualize the content of each movie; Admin has the same functions of Home but it adds the possibility to create, modify and delete movies. ',
            picture: blog,
            technologies: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
              'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
              'https://vitejs.dev/logo-with-shadow.png',
              'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
            ],
            page: 'http://172.233.155.162:8090/Home' },
          { id: 2, 
            title: 'Sonic CSS', 
            content: 'Recreation of Sonic running in "Green Hills Zone 1", using only CSS and HTML.' ,
            picture: sonic,
            technologies: [
              'https://cdn-icons-png.flaticon.com/256/174/174854.png',
              'https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg'
            ],
            page: '' },
          { id: 3, 
            title: 'Calculator', 
            content: 'Calculator that uses addition, subtraction, multiplication and division functions. The purpose of making it was to learn how to do testing with Vitest. The calculator is simple and allows only one operation at a time.' ,
            picture: calc,
            technologies: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
              'https://vitejs.dev/logo-with-shadow.png',
              'https://vitest.dev/logo-shadow.svg'
            ],
            page: '' },
        ]
      });
    
      const getStyles = (index: number) => {
        const stt = Math.abs(index - state.active);
        const translateX = 200 * stt * (index > state.active ? 1 : -1);
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
    
      const handleClick = $(() => {
        const navigate = useNavigate()
        navigate('http://172.233.155.162:8090/Home')
      })

    return (
        <>
        <div class={styles.slider}>
            <button id={styles.prev} onClick$={handlePrev}>{'<'}</button>
          {state.items.map((item, index) => {
              const style = getStyles(index);
              return (
                  <a href="http://172.233.155.162:8090/Home" key={item.id} class={styles.item} style={style}>
                    <h2>{item.title}</h2>
                    <div style={{display:'flex', height: '50%', width: '100%'}}>
                      <div class={styles.picDisplay}>
                        <img src={item.picture} alt='Imagen' style={{width: '100%', height: '100%'}}/>
                      </div>
                      <div class={styles.descDisplay}>
                          {item.content}
                      </div>
                    </div>
                    <h4 style={{margin: '0', width: '100%', paddingLeft: '20px', paddingTop: '10px'}}>Technologies:</h4>
                    <div style={{display: 'flex', gap: '10px'}}>
                      {
                        item.technologies.map((tech)=>(
                          
                          <Imagen ref={tech} type={false} ancho="3"/>
                        ))
                      }
                    </div>
                  </a>
            );
        })}
        <button id={styles.next} onClick$={handleNext}>{'>'}</button>
        </div>
        </>
    )
})