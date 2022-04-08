import React from "react";
import style from './Nav.module.css'


export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">home</a>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contact</a>
            <a href="">about me</a>
        </div>
    );
}


