import React,{useState} from "react";
import useLocalStorage from "hooks/useLocalStorage";

const AppContext = React.createContext()

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1',[]);
    
    const [search, setSearch] = useState('');
    const [modal,setModal] = useState(false);
    
    
    let searchedTodos = [];
    if(!search>=1){
        searchedTodos=todos;
    }else{
        searchedTodos = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase();
        const searchText = search.toLocaleLowerCase();
        return todoText.includes(searchText);
    
        })
    }
    const addTodo = (text)=>{
        
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text:text
        })
        saveTodos(newTodos);
    }
    const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        
    }


    return(
    <AppContext.Provider value={{
        loading,
        error,
        search,
        setSearch,
        searchedTodos,
        completeTodo,
        deleteTodo,
        todos,
        saveTodos,
        modal,
        setModal,
        addTodo
    }}>
        {props.children}
    </AppContext.Provider> 
    )
}


export  {AppContext,TodoProvider};
