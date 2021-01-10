import React from "react";
import {AffairType} from "./HW2";
import s from "./Affair.module.css";



type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback  = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix



    let stile1 =s.high;
   const stileCall= () => {
       if (props.affair.priority==="high") { stile1= s.high}
       else if (props.affair.priority==="low") { stile1= s.low}
       else { stile1= s.middle}
   }
    stileCall()

    return (

        <div className={stile1}>
            {props.affair.name}
            <button className={s.button} onClick={deleteCallback}> X</button>
        </div>
    );
}

export default Affair;
