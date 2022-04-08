import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea placeholder={"write here"}></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    )
}

