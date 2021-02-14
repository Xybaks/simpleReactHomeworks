const initState = {
loading:false
};

 type InitStateType=typeof initState

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: true};
        }
        case "NO-LOADING": {
            return {...state, loading: false};
        }
        default: return state;
    }
};

export const loadingAC = ()=> ({type:"LOADING"}) as const; // fix any
export const noLoadingAC = ()=> ({type:"NO-LOADING"}) as const; // fix any
type LoadingActionType= ReturnType<typeof loadingAC>
type noLoadingActionType= ReturnType<typeof noLoadingAC>
type ActionType=LoadingActionType|noLoadingActionType