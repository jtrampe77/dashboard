/*
    Import data
    Send data to Render function
    RenderFunction(template, data) ==> component markup with data

    1. Create template
    2. Setup page init function async - fetch RTD data
    3. Load the data - read page (update delete share same data...)
*/

import { ref, get } from "firebase/database";
import { db } from "./libs/firebase/firebaseConfig";
import {renderUser} from "./templates/user"

let store = [];

async function pageInit(){
    
    const userRef = ref(db,'users/');
    const userSnapShot = await get(userRef);
    const userData = {...userSnapShot.val()};

    /*
         extract the keys of each data
         Object
            obj.prop
    */

    const users = Object.keys(userData).map(user=>{
        return(userData[user])
    })

    console.log(users)

  

    
}

pageInit()