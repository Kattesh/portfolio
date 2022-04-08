import React from "react";
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'


export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <h1>Hello, I'm Kattesh a <span>Frontend developer</span></h1>
                    <p></p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}

