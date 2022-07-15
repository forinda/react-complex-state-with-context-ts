import APP_STATE_NAME from "constants/app.name";
import React from "react";
import userReducer from 'state/reducers/userReducer'
import { AppStateActionTypes, IGlobalStateInterface, TypeMapper } from "./types";

const initialState: IGlobalStateInterface = {
    user: localStorage.getItem(APP_STATE_NAME) ? JSON.parse(localStorage.getItem(APP_STATE_NAME)!) : { isAuthenticated: false, profile: {} }
}

type ContextState = {
    state: IGlobalStateInterface,
    useAppDispatch: React.Dispatch<TypeMapper<AppStateActionTypes>>
}


const AppContext = React.createContext<ContextState>({
    useAppDispatch: () => null,
    state: initialState
})


const combinedReducers = ({ user }: IGlobalStateInterface, action: AppStateActionTypes) => ({
    user: userReducer(user, action)
})

const AppState = ({ children }: { children: React.ReactElement }) => {
    const [state, useAppDispatch] = React.useReducer(combinedReducers, initialState)
    React.useEffect(() => {
        localStorage.setItem(APP_STATE_NAME, (JSON.stringify(state.user)))
    }, [state])
    console.log(state);

    return (
        <AppContext.Provider value={{ state, useAppDispatch }}>
            {children}
        </AppContext.Provider>)
}

export { AppContext }

export default AppState