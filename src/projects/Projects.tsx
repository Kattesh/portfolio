import React from "react";
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";


export type ProjectsPropsType={
    title:string
    description:string
    projTitle: string
}

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h3 className={style.title}>Projects</h3>
                <div className={style.skills}>
                    <Project title={'проект1'} projTitle={'название'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officia.'}/>
                    <Project title={'проект2'} projTitle={'название'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, impedit!'}/>
                </div>
            </div>

        </div>
    )
}
