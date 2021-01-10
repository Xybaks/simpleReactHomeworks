import React from "react"
import s from './Message.module.css';

type MessageProps = {
    name: string
    avatar: string
    message: string
    time: string

}


function Message(props: MessageProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.speech}>
                <h3 className={s.name}>{props.name}</h3>
               <h4 className= {s.messageText}> {props.message}</h4>
                   <p className={s.time}>{props.time} </p>
            </div>
        </div>
);
}

export default Message;
