import { createContext } from "react";

export interface IUser{
    id:string;
    username:string;
    email:string;
}

export interface IAuthStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    user?:IUser;
}

export interface IAuthActionContext{
    register:(email:string,username:string,password:string,type:string)=>void;
    login:(email:string,password:string)=>void;
    logout:()=>void;
}

export const INITIAL_STATE:IAuthStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
    user:undefined,
}

export const AuthStateContext=createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext=createContext<IAuthActionContext>(undefined);