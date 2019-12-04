import ActionTypes from './actionTypes';




export const addTodo = (todo) =>({
          type: ActionTypes.ADD_TODO,
          payload: todo
    });

//TODO: если включен режим редактирования не запускается
export const toggleTodo = (id) =>({
        type: ActionTypes.TOGGLE_TODO,
        payload:id
    });

export const toggleAll= (done) =>({
        type: ActionTypes.TOGGLE_ALL,
        payload:done
    });

export const editTodo= (id,newLabel) =>({
        type: ActionTypes.EDIT_TODO,
        payload:newLabel,
        id:id
    });

export const deleteCompleted=()=>({
        type: ActionTypes.DELETE_COMPLETED_TODOS
});

export const deleteTodo = (id) =>({
        type: ActionTypes.DELETE_TODO,
        payload:id
});
