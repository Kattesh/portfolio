import React from "react";
import style from './Skill.module.css'
import {SkillsPropsType} from "../Skills";

export function Skill(props:SkillsPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>


        </div>
    )
}
