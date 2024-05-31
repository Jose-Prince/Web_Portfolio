import styles from '../../pages/Projects.module.css';
import calc from '../../../public/clac.png';
import blog from '../../../public/blog.png';
import sonic from '../../../public/sonic.png';
import { Imagen } from "../About/Imagen";
import { useEffect, useLayoutEffect, useState } from 'react';

export const OwnProjects: React.FC = () => {
  const [state, setState] = useState({
    active: 0,
    items: [
      { id: 1, 
        title: "Movies' Blog", 
        content: 'Web blog that shows the best movies in my opinion. It has two screens: Home and Admin. In the Home screen you can visualize the content of each movie; Admin has the same functions as Home but adds the ability to create, modify and delete movies.',
        picture: blog,
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
          'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
          'https://vitejs.dev/logo-with-shadow.png',
          'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
        ],
        page: 'http://172.233.174.82:8110/Home',
        repo: 'https://github.com/Jose-Prince/Blog_movies.git'
      },
      { id: 2, 
        title: 'Sonic CSS', 
        content: 'Recreation of Sonic running in "Green Hills Zone 1", using only CSS and HTML.',
        picture: sonic,
        technologies: [
          'https://cdn-icons-png.flaticon.com/256/174/174854.png',
          'https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg'
        ],
        page: 'http://172.233.174.82:8100/',
        repo: 'https://github.com/Jose-Prince/Lab_CSS.git'
      },
      { id: 3, 
        title: 'Calculator', 
        content: 'Calculator that uses addition, subtraction, multiplication and division functions. The purpose of making it was to learn how to do testing with Vitest. The calculator is simple and allows only one operation at a time.',
        picture: calc,
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
          'https://vitejs.dev/logo-with-shadow.png',
          'https://vitest.dev/logo-shadow.svg'
        ],
        page: 'http://172.233.174.82:8130/',
        repo: 'https://github.com/Jose-Prince/Lab_test.git'
      },
    ]
  });
  
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };

    updateSize(); // Set the initial size
    window.addEventListener('resize', updateSize);

    console.log(window.innerWidth);
    
  }, []);


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

  const handleNext = () => {
    setState((prevState) => ({
      ...prevState,
      active: prevState.active + 1 < prevState.items.length ? prevState.active + 1 : prevState.active
    }));
  };

  const handlePrev = () => {
    setState((prevState) => ({
      ...prevState,
      active: prevState.active - 1 >= 0 ? prevState.active - 1 : prevState.active
    }));
  };

  const handleClick = (link1: string, link2: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (link1) {
      const firstWindow = window.open(link2, '_blank');
      if (firstWindow) {
        firstWindow.addEventListener('load', () => {
          if (link2) {
            window.open(link2, '_blank');
          }
        });
      }
    }
  };
  
  if ( screenWidth > 500){
    return (
      <>
        <div className={styles.slider}>
          <button id={styles.prev} onClick={handlePrev}>{'<'}</button>
          {state.items.map((item, index: number) => {
            const style = getStyles(index);
            return (
              <a
                key={item.id}
                className={styles.item}
                style={style}
                href={item.page}
                onClick={(event) => handleClick(item.page, item.repo, event)}
                target="_blank"  // Open the project page in a new tab
              >
                <h2 style={{ cursor: 'pointer', margin: '5px', color: 'white' }}>
                  {item.title}
                </h2>
                <div className={styles.bodyDisplay}>
                  <div className={styles.picDisplay}>
                    <img src={item.picture.src} alt='Imagen' style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className={styles.descDisplay}>
                    {item.content}
                  </div>
                </div>
                <h4 style={{ margin: '0', width: '100%', paddingLeft: '20px', paddingTop: '5px', fontSize: '13px', color: 'white' }}>Technologies:</h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {item.technologies.map((tech: string) => (
                    <Imagen key={tech} src={tech} type={false} ancho="2vw" variant={'contact'} />
                  ))}
                </div>
              </a>
            );
          })}
          <button id={styles.next} onClick={handleNext}>{'>'}</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.slider}>
          <button id={styles.prev} onClick={handlePrev}>{'<'}</button>
          {state.items.map((item, index: number) => {
            const style = getStyles(index);
            return (
              <a
                key={item.id}
                className={styles.item}
                style={style}
                href={item.page}
                onClick={(event) => handleClick(item.page, item.repo, event)}
                target="_blank"  // Open the project page in a new tab
              >
                <h2 style={{ cursor: 'pointer', margin: '5px', color: 'white' }}>
                  {item.title}
                </h2>
                <div className={styles.bodyDisplay}>
                  <div style={{display: 'flex', flexDirection: 'column', border: '1px solid white'}}>
                    <h4 style={{ margin: '0', width: '100%', fontSize: '12px', color: 'white' }}>Technologies:</h4>
                    <div className={styles.techGrid}>
                    {item.technologies.map((tech: string) => (
                      <Imagen key={tech} src={tech} type={false} ancho="3vw" variant={'contact'} />
                    ))}
                  </div>
                  </div>
                  <div className={styles.descDisplay}>
                    {item.content}
                  </div>
                </div>
                <div className={styles.picDisplay}>
                    <img src={item.picture.src} alt='Imagen' style={{ width: '100%', height: '100%', borderRadius: '0 0 10px 10px' }} />
                  </div>
              </a>
            );
          })}
          <button id={styles.next} onClick={handleNext}>{'>'}</button>
        </div>
      </>
    )
  }
}
