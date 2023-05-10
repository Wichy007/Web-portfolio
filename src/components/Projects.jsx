import React, { useState } from "react";
import projectimage1 from '../assets/img/project-img1.png'

const Projects = () => {
    const [buttonSelected, setButtonSelected] = useState('tab1')
    // const buttonSelected = 'tab1'

    const dataProject = {
        tab1:[
            {
                imgSrc: projectimage1,
                title: 'Web Portfolio',
                description: 'Create a personal portfolio with responsive',
                skills: 'Use: HTML CSS Bootstrap JavaScript React others libaries',
                sourceCode:'',
                link: ''
            },
            {
                imgSrc: projectimage1,
                title: 'React Basic web',
                description: 'Basic web for practice handle state',
                skills: 'Use: HTML CSS React',
                sourceCode:'https://github.com/Wichy007/react-assessment-JSD4',
                link: 'https://react-assessment-jsd-4.vercel.app/'
            },
            {
                imgSrc: projectimage1,
                title: 'Find my hat',
                description: 'Create a JavaScript game run on terminal',
                skills: 'Use: JavaScript',
                sourceCode:'https://replit.com/@Wichy007/JSD-Assesment',
                link: 'https://replit.com/@Wichy007/JSD-Assesment'
            },
        ],
        tab2:[

            {
                imgSrc: projectimage1,
                title: 'Colmar',
                description: 'Create a responsive website ',
                skills: 'Use: HTML CSS',
                sourceCode:'',
                link: ''
            },
        ],
        tab3:[
            {
                imgSrc: '',
                title: '',
                description: ''
            },
        ],
    }

    const handlerSelected = (button) => {
        setButtonSelected(button)
    }

    return(
        <div className="projects-section" id="projects">
            <h2 style={{margin:"30px 0"}}>Projects</h2>
            <p style={{margin:"15px 0 50px 0"}}>All of this is my project. You can mouse over it to see more detail.</p>
            <div className="navigation-bar">
                <div className="navigation-box">
                    <button className={buttonSelected==="tab1"?"button1In":"button1Out"} onClick={()=>{handlerSelected('tab1')}}>
                        <div className="navigation-text">
                            Tab 1
                        </div>
                    </button>
                </div>
                <div className="navigation-box" style={{borderLeft:"1px lightgray solid", borderRight:"1px lightgray solid"}}><button className={buttonSelected==="tab2"?"button2In":"button2Out"} onClick={()=>{handlerSelected('tab2')}}><div className="navigation-text">Tab 2</div></button></div>
                <div className="navigation-box"><button disabled={true} className={buttonSelected==="tab3"?"button3In":"button3Out"} onClick={()=>{handlerSelected('tab3')}}><div className="navigation-text">Tab 3</div></button></div>
            </div>
            <ProjectCards renderPage={dataProject[buttonSelected]} />
        </div>
    )
}

const ProjectCards = ({renderPage}) => {
    return (
        <div className="project-container">
        {
            renderPage.map((project,index)=>{
                return(
                    <div className="projects-card">
                        <div className="project-image">
                            <img src={project.imgSrc} alt="project " />
                        </div>
                        <div className="project-title" style={{width:"100%"}}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.skills}</p>
                            <a href={project.sourceCode} style={{color:"white"}}>Source Code</a>
                            <a href={project.link} style={{color:"white"}}>Visit Project</a>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Projects;