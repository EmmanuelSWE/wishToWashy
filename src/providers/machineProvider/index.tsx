import { useContext, useReducer } from "react";
import { getAxiosInstance } from "../../utils/axiosInstance";
import { MachineReducer } from "./reducer";
import { IMachine, INITIAL_STATE, MachineActionContext, MachineStateContext } from "./context";
import { createMachineError, createMachinePending, createMachineSuccess, deleteMachineError, deleteMachinePending, deleteMachineSuccess, getMachineError, getMachinePending, getMachinesPending, getMachinesSuccess, getMachineSuccess, MachineActionEnums, updateMachineError, updateMachinePending, updateMachineSuccess } from "./actions";
import { flattenResponse,flattenResponses } from "../../utils/flattenResponse";



//Logic inside this will be refactored to use the official firebase libraries for get, set docs
//Currently using endpoints coz it was for demo

export const MachineProvider=({children}:{children:React.ReactNode})=>{
    const [state,dispatch]=useReducer(MachineReducer,INITIAL_STATE);
    const instance=getAxiosInstance();

    const getMachine=async(id:string)=>{
        dispatch(getMachinePending());
        const endpoint=`/machines/${id}`;
        await instance.get(endpoint)
            .then((response)=>{
                response.data=flattenResponse(response.data);
                dispatch(getMachineSuccess(response.data));
            })
            .catch((error)=>{
                console.log(error);
                dispatch(getMachineError());
            });
    }

    const getMachines=async ()=>{
        dispatch(getMachinesPending());
        const endpoint=`/machines`;
        await instance.get(endpoint)
            .then((response)=>{
                response.data = flattenResponses(response.data);
                console.log(response.data)
                dispatch(getMachinesSuccess(response.data));
            })
            .catch((error)=>{
                console.log(error);
                dispatch(getMachineError());
            });
    }

    const createMachine=async (machine:IMachine)=>{
        dispatch(createMachinePending());
        console.log(machine);
        const endpoint=`/machines`;
        const firestoreData = {
            fields: {
                    name: { stringValue: machine.name },
                    description: { stringValue: machine.description },
                    image: { stringValue: machine.image },
                    house_id: { stringValue: machine.house_id },
                    landlord_id: { stringValue: machine.landlord_id },
                    state: { stringValue: machine.state },
                    id: { stringValue: machine.id }
            }   
        };
        await instance.post(endpoint, firestoreData)
        .then((response) => {
            const flattened = flattenResponse(response.data);
            dispatch(createMachineSuccess(flattened));
            })
        .catch((error)=>{
            console.log(error);
            dispatch(createMachineError());
        })
    }

    const updateMachine=async(machine:IMachine)=>{
        dispatch(updateMachinePending());
        const endpoint=`/machines/${machine.id}`;
        await instance.put(endpoint)
            .then((response)=>{
                dispatch(updateMachineSuccess(response.data));
            })
            .catch((error)=>{
                console.log(error);
                dispatch(updateMachineError());
            })
    }

    const deleteMachine=async(id:string)=>{
        dispatch(deleteMachinePending());
        const endpoint=`/machines/${id}`
        await instance.delete(endpoint)
            .then((response)=>{
                dispatch(deleteMachineSuccess(response.data));
            })
            .catch((error)=>{
                console.log(error);
                dispatch(deleteMachineError());
            })

    }

    return(
        <MachineStateContext.Provider value={state}>
            <MachineActionContext.Provider value={{getMachine, getMachines,createMachine,deleteMachine,updateMachine}}>
                {children}
            </MachineActionContext.Provider>
        </MachineStateContext.Provider>
    )
};


export const useMachineState=()=>{
    const context=useContext(MachineStateContext);
    if(!context){
        throw new Error('useMachineState must be used within a MchineProvider');
    }
    return context;
}

export const useMachineActions=()=>{
    const context = useContext(MachineActionContext);
    if (!context) {
        throw new Error('useMachineActions must be used within a MachineProvider');
    }  
    return context;
}
