import React from 'react'
import useStorageListener from 'components/hoc/useStorageListener'
import styled from 'styled-components'

const  ChangeAlert = ({syncItem}) => {

  const {storageChange,toggleShow} = useStorageListener(syncItem)
  if(storageChange){
    return (
      <Changes>
        <p>There were changes</p>
        <button
        onClick={()=>(
          toggleShow()
          
          )}
        >Update</button>
      </Changes>
    )
  }else{
    return <div>No hay cambios</div>
  }
}


const Changes = styled.div`
    z-index: 2;
    background: rgba(32,35,41,.8);
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export {ChangeAlert}