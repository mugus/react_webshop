import { useState,useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase/firebase.config'

function Custom_hook() {
    const[currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
        })
    })
  return {currentUser}
}

export default Custom_hook