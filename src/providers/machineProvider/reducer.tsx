import { handleActions } from "redux-actions";
import { IMachine, IMachineStateContext, INITIAL_STATE } from "./context";
import { MachineActionEnums } from "./actions";



export const MachineReducer=handleActions<IMachineStateContext,IMachineStateContext>(
    {
        [MachineActionEnums.getMachinePending]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.getMachineSuccess]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.getMachineError]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.getMachinesPending]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.getMachinesSuccess]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.getMachinesError]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.createMachinePending]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        //We did this to get the new machine on the list afyer adding
        [MachineActionEnums.createMachineSuccess]:(state,action)=>({
            ...state,
            isPending:false,
            isError:false,
            isSuccess:true,
            machine: action.payload.machine,
            machines: state.machines
                ? [...state.machines, action.payload.machine]
                : [action.payload.machine],
        }),

        [MachineActionEnums.createMachineError]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.updateMachineError]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.updateMachinePending]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.updateMachineSuccess]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.deleteMachinePending]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.deleteMachineSuccess]:(state,action)=>({
            ...state,
            ...action.payload,
        }),

        [MachineActionEnums.deleteMachineError]:(state,action)=>({
            ...state,
            ...action.payload,
        }),
    },INITIAL_STATE
);