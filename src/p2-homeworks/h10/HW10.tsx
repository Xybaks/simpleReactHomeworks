import React, {useEffect} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, noLoadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading);
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC())

    };
     useEffect(() => {
         if(loading) {
             const timer = setTimeout(() => {
                 dispatch(noLoadingAC())
             }, 2000);
             return () => clearTimeout(timer);
         }
     }, [loading]);


    return (
        <div>
            <hr/>
            homeworks 10
            <hr/>
            {loading
                ? (
                    <div>
                        <img src="https://ux.pub/wp-content/uploads/2018/09/6-2.gif"
                             style={{width: "200px", height: "200px"}}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
