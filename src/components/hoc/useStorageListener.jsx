import React, { useState } from 'react'

function useStorageListener({syncItem}){
    
        const [storageChange,setStorageChange] = useState(false); 

        window.addEventListener('storage', (change)=>{
            if(change.key === 'TODOS_V1'){
                console.log('hubo cambios en todo_V1')
                setStorageChange(true);
            }
        })

        const toggleShow = ()=>{
            setStorageChange(false);
            syncItem();
        }
        return{
            storageChange,
            toggleShow
        }
            
    
}



export  default useStorageListener