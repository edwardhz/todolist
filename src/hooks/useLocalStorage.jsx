import React,{useState,useEffect} from 'react'

const useLocalStorage = (itemName, initialValue) => {

  const [sync, setSync] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue);

  useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false)
        setSync(true)
      }catch(e){
        setError(e)
      }
    },1500);
  },[sync])

  const syncItem = ()=>{
    setLoading(true);
    setSync(false)
  }

  const saveItem = (array) =>{
    localStorage.setItem(itemName,JSON.stringify(array));
  } 

  return {
    item,
    saveItem,
    loading,
    error,
    syncItem,
  };

}

export default useLocalStorage