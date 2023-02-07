import React,{useState,useEffect} from 'react'

const useLocalStorage = (itemName, initialValue) => {

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
      }catch(e){
        setError(e)
      }
    },1500);
  })


 

  const saveItem = (array) =>{
    localStorage.setItem(itemName,JSON.stringify(array));
  } 

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export default useLocalStorage