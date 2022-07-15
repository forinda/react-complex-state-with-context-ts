export type TypeMapper<T> = {
    [Prop in keyof T]: T[K]
}
export type TypeMapper2<T> = {
    [K in keyof T]: K extends undefined ? K : { type: K, payload: T[K] }
}

type UserActionsType = {
    ['loginSuccess']: {
        isAuthnticated: boolean,
        profile: {
            username: string,

        }
    },
    ['loginFailure']: {

    },
    ['loginStart']: {

    },
    ['logoutUser']:{}
}
type LecturerActionsType = {
    ['fetchLecturersSuccess']: {
        isAuthnticated: boolean,
        profile: {
            username: string,

        }
    },
    ['fetChLecturersFailure']: {

    },
    ['fetchLecturersStart']: {

    }
}

export type IuserStateType={
    isAuthenticated:boolean
    profile:{
        [x:string]:any
    }
}

export type IGlobalStateInterface = {
    user:IuserStateType
}
export type AppStateActionTypes =  
TypeMapper2<UserActionsType>[keyof UserActionsType]
| TypeMapper2<LecturerActionsType>[keyof LecturerActionsType]




