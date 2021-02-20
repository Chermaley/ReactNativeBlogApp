import { rootReducer } from ".";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


export type InferActionsTypes<T> = T extends {[keys:string]: (...args: any[]) => infer U} ? U : never
