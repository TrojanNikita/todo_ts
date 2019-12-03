import ActionTypes from '../actions/actionTypes';

const initialState = [];


      // {id:'0',label:'sdlsjh',done:false},
      // {id:'1',label:'dhj',done:false},
      // {id:'2',label:'fsxj',done:false}

let maxId=100;


export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: maxId++,
          label: action.payload,
          done: false
        }
      ]
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload)
          ? {...todo, done: !todo.done}
          : todo
      )

    case ActionTypes.EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, label:action.payload}
          : todo
      )



    case ActionTypes.TOGGLE_ALL:
      return state.map(todo => {
        return { ...todo, done: action.payload};
      })


    //удалить выполненные, т.е вернуть активные
    case ActionTypes.DELETE_COMPLETED_TODOS:
      return state.filter((el)=>!el.done);



    case ActionTypes.DELETE_TODO:
      {
          const idx=state.findIndex((el)=>el.id===action.payload)
          return [
            ...state.slice(0,idx),
            ...state.slice(idx+1)]
      }
    default:
      return state
  }
}
