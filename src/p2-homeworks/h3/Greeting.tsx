import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error.length>0? s.error: s.noError // need to fix with (?:)

    // addUser1  вызов функции addUser(name) родительской компоненты, переданной через пропсы + здоровается
    const addUser1 = () => {
        addUser(name)

    }
    // onKeyPress -   функция реагрования на нажание клавиши Enter,
    // вызывет добавление нового user  через функцию addUser1
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addUser1()
    }
    //
    return (
        <div className={s.someClass}>
            <div><span className={s.ErrorText}>{error}</span></div>
            <input value={name} onChange={setNameCallback} className={inputClass}
                   onKeyPress={onKeyPress}/>
            <button onClick={addUser1}>add</button>
            <span>общее количество имен в  списке= {totalUsers}</span>


        </div>
    );
}

export default Greeting;
