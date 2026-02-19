import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from "../../firebase"
import { doc, setDoc } from 'firebase/firestore';
import User from '../../models/user';


const registerUser=async (email:string,username:string,password:string, type:string)=>{

    try{
        //Create firebase user account
        const newUser=await createUserWithEmailAndPassword(auth,email,password);
         
         //Create a new firestore doc for the user
         const userDoc=doc(db,type,newUser.user.uid);
         const localUser = {
            email: newUser.user.email,
            username: username,
            uid: newUser.user.uid,
            createdAt: new Date(),
        };

         //Add the user inside their firebase doc
         await setDoc(userDoc,localUser);

    }
    catch(e){
        console.error(e);
    }
 }

 export default registerUser;
