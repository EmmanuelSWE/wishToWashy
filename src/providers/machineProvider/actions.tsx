import { createAction } from "redux-actions";
import {IMachine,IMachineStateContext} from "./context"

//Enums for type of actions that can be dispatched
export enum MachineActionEnums{
    getMachinePending="GET_MACHINE_PENDING",
    getMachineSuccess="GET_MACHINE_SUCCESS",
    getMachineError="GET_MACHINE_ERROR",

    getMachinesPending="GET_MACHINES_PENDING",
    getMachinesSuccess="GET_MACHINES_SUCCESS",
    getMachinesError="GET_MACHINES_ERROR",

    createMachinePending="CREATE_MACHINE_PENDING",
    createMachineSuccess="CREATE_MACHINE_SUCCESS",
    createMachineError="CREATE_MACHINE_ERROR",

    updateMachinePending="UPDATE_MACHINE_PENDING",
    updateMachineSuccess="UPDATE_MACHINE_SUCCESS",
    updateMachineError="UPDATE_MACHINE_ERROR",

    deleteMachinePending="DELETE_MACHINE_PENDING",
    deleteMachineSuccess="DELETE_MACHINE_SUCCESS",
    deleteMachineError="DELETE_MACHINE_ERROR",
}


//Get Single machine actions
export const getMachinePending=createAction<IMachineStateContext>
        (
            MachineActionEnums.getMachinePending,
            ()=>({isPending:true,isSuccess:false,isError:false})
        );

                    
export const getMachineError=createAction<IMachineStateContext>
        (
            MachineActionEnums.getMachineError,
            ()=>({isError:true,isPending:false,isSuccess:false})
        );

                        
export const getMachineSuccess=createAction<IMachineStateContext,IMachine>
        (
            MachineActionEnums.getMachineSuccess,
            (machine:IMachine)=>({
                isSuccess:true,isPending:false,isError:false,machine,
            })
        );


//Get Multple machines actions
export const getMachinesPending=createAction<IMachineStateContext>
        (
            MachineActionEnums.getMachinesPending,
            ()=>({isPending:true,isSuccess:false,isError:false})
        );

                    
export const getMachinesError=createAction<IMachineStateContext>
        (
            MachineActionEnums.getMachinesError,
            ()=>({isError:true,isPending:false,isSuccess:false})
        );

                        
export const getMachinesSuccess=createAction<IMachineStateContext,IMachine[]>
        (
            MachineActionEnums.getMachinesSuccess,
            (machines:IMachine[])=>({
                isSuccess:true,isPending:false,isError:false,machines,
            })
        );



//Create Machine actions
export const createMachinePending=createAction<IMachineStateContext>
        (
            MachineActionEnums.createMachinePending,
            ()=>({isPending:true,isError:false,isSuccess:false})
        );

                
export const createMachineError=createAction<IMachineStateContext>
        (
            MachineActionEnums.createMachineError,
            ()=>({isError:true,isPending:false,isSuccess:false})
        );


export const createMachineSuccess=createAction<IMachineStateContext,IMachine>
        (
            MachineActionEnums.createMachineSuccess,
            (machine:IMachine)=>({
                isSuccess:true,isPending:false,isError:false,machine,
            })
        )



//Update machine actions
export const updateMachinePending=createAction<IMachineStateContext>
        (
            MachineActionEnums.updateMachinePending,
            ()=>({isPending:true,isError:false,isSuccess:false})
        )

    
export const updateMachineError=createAction<IMachineStateContext>
        (
            MachineActionEnums.updateMachineError,
            ()=>({isError:true,isPending:false,isSuccess:false})
        )


export const updateMachineSuccess=createAction<IMachineStateContext,IMachine>
        (
            MachineActionEnums.updateMachineSuccess,
            (machine:IMachine)=>({
                isSuccess:true,isError:false,isPending:false,machine
            })
        )



//Delete machine actions
export const deleteMachinePending=createAction<IMachineStateContext>
        (
            MachineActionEnums.deleteMachinePending,
            ()=>({isPending:true,isError:false,isSuccess:false})
        )

    
export const deleteMachineError=createAction<IMachineStateContext>
        (
            MachineActionEnums.deleteMachineError,
            ()=>({isError:true,isPending:false,isSuccess:false})
        )


export const deleteMachineSuccess=createAction<IMachineStateContext,IMachine>
        (
            MachineActionEnums.deleteMachineSuccess,
            (machine:IMachine)=>({
                isSuccess:true,isError:false,isPending:false,machine
            })
        )
