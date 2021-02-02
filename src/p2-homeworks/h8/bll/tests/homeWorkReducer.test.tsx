import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {PeopleType} from "../../HW8";

let initialState: Array<PeopleType>;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
        const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

        console.log(newState);
        expect(newState.length).toBe(6);
        for (let i = 1; i < newState.length; i++) {
            expect(newState[i].age > newState[i - 1].age).toBe(true)
        }
    }
);
test("sort name down", () => {
        const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});
        console.log(newState);
        expect(newState.length).toBe(6);
        for (let i = 1; i < newState.length; i++) {
            expect(newState[i].age < newState[i - 1].age).toBe(true)
        }
    }
)
;
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});
    console.log(newState);
    expect(newState.length).toBe(4);
    newState.forEach((man) =>{
        expect(man.age>18).toBe(true);
    });
    expect(newState).toEqual([
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55}
    ]);

});
