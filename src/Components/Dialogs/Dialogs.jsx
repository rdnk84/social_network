import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Viktor" id="5" />
                <DialogItem name="Valera" id="6" />


                {/*/!*<div className={s.dialog + ' ' + s.active}>*!/*/}
                {/*/!* <NavLink to="/dialogs/1">Dimych</NavLink>*!/*/}
                {/*/!*</div>*!/*/}
                {/*<div className={s.dialog}><NavLink to="/dialogs/2">Andrey</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to="/dialogs/3">Sveta</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to="/dialogs/4">Sasha</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to="/dialogs/5">Viktor</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to="/dialogs/6">Valera</NavLink></div>*/}
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your..?"}/>
                <Message message={"Good afternoon"}/>
                {/*<div className={s.dialog}>How is your..?</div>*/}
                {/*<div className={s.dialog}>Good afternoon</div>*/}
            </div>
        </div>

    );
}

export default Dialogs;
