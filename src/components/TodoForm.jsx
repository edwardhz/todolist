import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {AppContext} from 'context/AppContext'

const TodoForm = () => {

    const [textArea,setTextArea] = useState('');

    const {addTodo,setModal} = useContext(AppContext);

    const onCancel = () =>{
        setModal(prevState => !prevState)
    }
    const onAdd = (event) =>{
        event.preventDefault();
        addTodo(textArea)
        setModal(prevState => !prevState)
    }
    const onChangeText = (event)=>{
        setTextArea(event.target.value);
    }



  return (
    <Form onSubmit={onAdd}>
        <label>What's your next task?</label>
        <textarea
        placeholder="Dar de comer a sansa"
        value={textArea}
        onChange={onChangeText}
        required

        />
        <DivButtons>
            <button onClick={onCancel} type="button">Cancel</button>
            <button type="submit">Add</button>
        </DivButtons>
        
    </Form>
  )
}


const Form = styled.form`
    background: white;
    padding: 30px 30px;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    label{
        color: black;
        align-self: center;
        margin-bottom: 1rem;
    }
    textarea{
        padding: 10px;
        text-align: center;
    }
`
const DivButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    button{
        width: 80px;
        height: 40px;
        margin-top: 1rem;
    }
    button:first-child{
        background-color: red;
        border: none;
        :hover{
            background-color: brown;
        }
    }

`

export default TodoForm