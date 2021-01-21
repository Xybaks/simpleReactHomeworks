import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from "./SuperInputText.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void           //отслеживание изменения Текста  при вводе
    onEnter?: () => void                             //отслеживание нажатия "Enter"  при вводе
    error?: string                                  // отслеживание притутствия текста ошибки
    spanClassName?: string                          // передача типа
};

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,           // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,    // CallBack  изменения текста в поле ввода  через  onChange/ onChangeText
        onKeyPress, onEnter,              // CallBack  нажатия клавиши "Enter" через onEnter
        error,                                  // передача текста ошибки
        className, spanClassName, // передача имени клас вниз/вверх

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      //  если приходит функция с объектом ввода e
        onChange        // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)
        //  если приходит функция с  текстом из объектом ввода  e
        onChangeText    // а если есть пропс onChangeText
        && onChangeText(e.currentTarget.value); // то передать ему текщее значение инпута (поскольку onChangeText не обязателен)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        //1й способ реагирования - на нажатие любой клавиши
        onKeyPress         // если есть пропс onKeyPress  реагирование на нажатие клавиш
        && onKeyPress(e);
//2й способ реагирования ( на ентер)
        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(); // то вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`; //стиль  вывода теста ошибки при наличии ошибки!
    //  если есть spanClassName в пропсах, то испоьлзуем s.error + spanClassName
    const finalInputClassName = `${error?s.errorInput:s.superInput} ${className}`; // стиль вывода экрана ввода норм/ошибка
// если  есть ошибка в пропсах, тогда s.errorInput, если нет s.superInput +   стиль из просов className, если он задан

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
                // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default SuperInputText;
