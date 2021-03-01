import React  from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange: (newValue:number[]) => void
    value: [number, number]
    min:number,
    max:number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
       props) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: any, newValue: number | number[]) => {
        console.log()
        props.onChangeRange(newValue as  number[] )
    };

    return (
        <>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
