import ActionTypes from './actionTypes';




export const addTodo = (todo) =>(dispatch) => {
    return dispatch({
          type: ActionTypes.ADD_TODO,
          payload: todo
    });
};


export const toggleTodo = (id) =>(dispatch) => {
    return dispatch({
        type: ActionTypes.TOGGLE_TODO,
        payload:id
    });
};

export const toggleAll= (done) =>(dispatch) => {
    return dispatch({
        type: ActionTypes.TOGGLE_ALL,
        payload:done
    });
};

export const editTodo= (id,label) =>(dispatch) => {
    return dispatch({
        type: ActionTypes.EDIT_TODO,
        payload:label,
        id:id
    });
};

export const deleteCompleted=()=>(dispatch)=>{
    return dispatch({
        type: ActionTypes.DELETE_COMPLETED_TODOS
    });
};

export const deleteTodo = (id) =>(dispatch) => {
    return dispatch({
        type: ActionTypes.DELETE_TODO,
        payload:id
    });
};
