import styles from './Progress.module.css'; // Asegúrate de tener tu archivo CSS en la ruta correcta
import { Imagen } from "../About/Imagen";
import { useState } from 'react';

interface Item {
    id: number
    title: string
    description: string
    objectives: Array<string>
    technologies: Array<string>
    repo: string
}

export const InProgress: React.FC = () => {
  const [state] = useState({
    items: [
      { id: 1, 
        title: 'SABTE', 
        description: 'Project developed to create a platform to facilitate the hiring of employees who have informal jobs. Designed for Guatemala, currently developed by a team of 5 people.', 
        objectives: [
          'Facilitating the hiring of informal jobs',
          'Platform available as website and mobile application'
        ],
        technologies: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
          'https://vitejs.dev/logo-with-shadow.png',
          'https://www.wonderpush.com/wp-content/uploads/2019/09/ionic.png',
          'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png',
          'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
          'https://static-00.iconduck.com/assets.00/neo4j-icon-452x512-b63ajo4a.png'
        ],
        repo: 'https://github.com/cmd-AJ/Ing-Software.git' 
      },
    ]
  });

  return (
    <div className={styles.cardContainer}>
      {state.items.map((item : Item) => (
        <a href={item.repo} className={styles.project} target="_blank">
            <h2 style={{color: '#fff'}}>{item.title}</h2>
            <div style={{display:'flex', height: '60%', width: '100%'}}>
              <div className={styles.objDisplay}>
                <ul>
                  {
                    item.objectives?.map((obj, index)=>(
                      <li key={index} style={{marginBottom: '10px'}}>{obj}</li>
                    ))
                  }
                </ul>
              </div>
              <div className={styles.descDisplay}>
                {item.description}
              </div>
            </div>
            <h4 style={{margin: '0', width: '100%', paddingLeft: '20px', paddingTop: '10px', color: '#fff'}}>Technologies:</h4>
            <div style={{display: 'flex', gap: '10px'}}>
              {
                item.technologies?.map((tech: string)=>(
                  <Imagen src={tech} type={false} ancho="2vw" variant={'contact'}/>
                ))
              }
            </div>
        </a>
      ))}
    </div>
  )
}
