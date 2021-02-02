import {ActionType, PeopleType} from "../HW8";


export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): Array<PeopleType> => {

    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return state
                    .map(man => ({...man}))
                    .sort((a, b) => (a.age < b.age) ? -1 : 1)
            } else if (action.payload === "down") {
                return state
                    .map(man => ({...man}))
                    .sort((a, b) => (a.age < b.age) ? 1 : -1)
            }
            return state
        }
        case "check": {
            return state
                .map(man => ({...man}))
                .filter((man) => (man.age > action.payload))
        }
        default:
            return state
    }
};