import { $, component$, useStore } from "@builder.io/qwik";
import styles from '../../routes/My projects/Projects.module.css';
import calc from '../../../public/clac.png'
import blog from '../../../public/blog.png'
import sonic from '../../../public/sonic.png'
import { Imagen } from "../About/Imagen";

export const OwnProjects = component$(()=>{

    const state = useStore({
        active: 0,
        items: [
          { id: 1, 
            title: "Movies' Blog", 
            content: 'adskjakjlsdlk',
            picture: blog,
            technologies: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            ] },
          { id: 2, 
            title: 'Sonic CSS', 
            content: 'adskjakjlsdlk' ,
            picture: sonic,
            technologies: [
              ''
            ] },
          { id: 3, 
            title: 'Calculator', 
            content: 'adskjakjlsdlk' ,
            picture: calc,
            technologies: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            ] },
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
    

    return (
        <>
        <div class={styles.slider}>
            <button id={styles.prev} onClick$={handlePrev}>{'<'}</button>
          {state.items.map((item, index) => {
              const style = getStyles(index);
              return (
                  <div key={item.id} class={styles.item} style={style}>
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
                    {
                      item.technologies.map((tech)=>(
                        <Imagen ref={tech} type={false} ancho="3"/>
                      ))
                    }
                  </div>
            );
        })}
        <button id={styles.next} onClick$={handleNext}>{'>'}</button>
        </div>
        </>
    )
})