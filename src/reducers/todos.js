import ActionTypes from '../actions/actionTypes';

const initialState = 
    {
      todos:[],
      maxId:1
    };


      // {id:'0',label:'sdlsjh',done:false},
      // {id:'1',label:'dhj',done:false},
      // {id:'2',label:'fsxj',done:false}



export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        todos:[
        ...state.todos,
        {
          id: state.maxId+1,
          label: action.payload,
          done: false
        }],
        maxId:state.maxId+1
      }
    case ActionTypes.TOGGLE_TODO:
      return {
      
          todos: state.todos.map(todo =>
                (todo.id === action.payload)
                  ? {...todo, done: !todo.done}
                  : todo
            ),
          maxId:state.maxId
      }

    case ActionTypes.EDIT_TODO:
      return {
      
        todos: state.todos.map(todo =>
              (todo.id === action.id)
                ? {...todo, label:action.payload}
                : todo
        ),
        maxId:state.maxId
    }



    case ActionTypes.TOGGLE_ALL:
        return {
      
          todos: state.todos.map(todo => {
            return { ...todo, done: action.payload};
          }),
          maxId:state.maxId
      }
      


    //удалить выполненные, т.е вернуть активные
    case ActionTypes.DELETE_COMPLETED_TODOS:
        return {      
          todos: state.todos.filter((el)=>!el.done),
          maxId:state.maxId
      }
       



    case ActionTypes.DELETE_TODO:
        return {      
          todos: state.todos.filter((el)=>el.id!==action.payload),
          maxId:state.maxId
      }
    default:
      return state
  }
}
