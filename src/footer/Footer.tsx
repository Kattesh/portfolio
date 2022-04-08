import React from "react";
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Me</h3>
                <div className={style.footer}>
                    <div className={style.icons}>1</div>
                    <div className={style.icons}>2</div>
                    <div className={style.icons}>3</div>
                    <div className={style.icons}>4</div>
                </div>
                <span> ©All rights reserved </span>
            </div>
        </div>
    )
}


