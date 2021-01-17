import React from "react";
import s from "./Error404.module.css";

function Error404() {
    return (
        <div className={s.errorPage}>
            {alert ("Error404")}
            <div className={s.title}> Error 404:</div>
            <div className={s.someText}>Page not found! </div>
            <div className={s.someSmile}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
