import React from "react";
import style from './Project.module.css'
import {ProjectsPropsType} from "../Projects";

export function Project(props: ProjectsPropsType) {
    return (
        <div className={style.project}>
            <h3>{props.title}</h3>
            <div className={style.imgContainer}>
                <img src="" alt=""/>
                <a href="#"> view link</a>
            </div>
            <h4>{props.projTitle}</h4>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}
