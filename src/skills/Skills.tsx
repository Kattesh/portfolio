import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export type SkillsPropsType={
    title:string
    description:string
}
export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h3 className={style.title}>Skills</h3>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officia.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa eaque libero magni nemo neque qui quibusdam sapiente sit, soluta. Aspernatur consequatur deserunt esse est inventore ipsum, nemo obcaecati sequi!'}/>
                    <Skill title={'HTML,CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, impedit!'}/>
                </div>
            </div>
        </div>
    )
}
