import { Circle } from "@/components/About/Circle";
import { ButtonsDisplay } from "@/components/Sidebar/ButtonsDisplay";
import styles from '../components/About/About.module.css'
import { Reference } from "@/components/About/Reference";
import { Contact } from "@/components/About/Contact";

export default function About() {
    return (
        <>
        <div style={{display: 'flex', height: '100%', width: '100vw'}}>
            <ButtonsDisplay/>
            <div className={styles.aboutDisplay}>
                    <Circle />
                    <h1 className={styles.myName}>José Alejandro Prince Martinez</h1>
                    <div className={styles.description}>
                        I have been working as a programmer for two years and I am currently a student at the Universidad del Valle de Guatemala, pursuing a degree in Computer Science and Information Technology Engineering. Although I do not have formal work experience as a junior programmer, I have extensive knowledge in various programming languages both in the field of Front-end and Back-end development. My main interest lies in Front-end development for mobile applications and websites, and I have an outstanding proficiency in the associated web technologies. I am avid for knowledge and am constantly exploring new technologies to improve my skills and better understand their application in different contexts.
                    </div>
                    <div style={{display: 'flex'}}>
                        <Reference link="https://www.linkedin.com/in/jos%C3%A9-alejandro-prince-martinez-179ba622a/" src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' ancho="10vw"/>
                        <Reference link="https://github.com/Jose-Prince" src='https://www.svgrepo.com/show/217753/github.svg' ancho="10vw"/>
                    </div>
                    <div className={styles.contactsDis}>
                        <Contact info="joseprince148@gmail.com" src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"/>
                        <Contact info="+502 5975-9958" src="https://cdn-icons-png.freepik.com/256/3870/3870798.png?semt=ais_hybrid"/>
                    </div>
                </div> 
        </div>
        </>
    )
}
