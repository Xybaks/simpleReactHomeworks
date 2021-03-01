import React, {useState} from "react";
import s from'./HW11.module.css'
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const min=0
    const max=100
    const [value1, setValue1] = useState(min);
    const [value2, setValue2] = useState(max);


    const onChangeRange2=(newValue:number[])=>{
       if (newValue[1]>=newValue[0]){
        setValue1(newValue[1])
        setValue2(newValue[0])}
    }

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <hr/>

            <div className={s.doubleRange}>
                <span>{value1}</span>
                <SuperDoubleRange
                    min={min}
                    max={max}
                    value={[value1,value2]}
                    onChangeRange={onChangeRange2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>

            <hr/>
        </div>
    );
}

export default HW11;
