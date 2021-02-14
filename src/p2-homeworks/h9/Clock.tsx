import React, {isValidElement, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        setDate(new Date())
        clearTimeout(timerId);
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {

        setShow(false)
    };

    const stringTime = date?.toLocaleTimeString("ru"); // fix with date
    //1st variant
    const stringDate = date?.toLocaleDateString("ru")
    //2nd variant
    //  const stringDate =date?.getDate()+"."+date?.getMonth()+"."+date?.getFullYear()

    return (
        <div>
            <div className={style.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={style.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
