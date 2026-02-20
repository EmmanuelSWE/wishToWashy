import {createContext} from 'react';


//The machine shape(structure/interface)
export interface IMachine{
    id:string;
    house_id:string;
    landlord_id:string;
    name:string;
    state:string;
    description:string;
    image:string;
}

//The machine state context shape(structure/interface)
export interface IMachineStateContext{
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    machine?:IMachine;
    machines?:IMachine[];
}

//Interface for things that could be done to machine(s)
//Will extend to include book machine
export interface IMachineActionContext{
    getMachine:(id:string)=>void;
    getMachines:()=>void;
    updateMachine:(machine:IMachine)=>void;
    createMachine:(machine:IMachine)=>void;
    deleteMachine:(id:string)=>void;
}

//Create the initial state with everything to false and machine(s) to nothing
export const INITIAL_STATE:IMachineStateContext={
    isPending:false,
    isSuccess:false,
    isError:false,
}

//Create machine state context with the initial state
export const MachineStateContext= createContext<IMachineStateContext>(INITIAL_STATE);

//Create machine action context, if no action, it is undefined
export const MachineActionContext=createContext<IMachineActionContext>(undefined);