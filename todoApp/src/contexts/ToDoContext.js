import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos: [
        {
            id:1,
            todo: "To Do Message",
            completed: false;
        }
    ],
    
})


export const userToDo = () => {
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider