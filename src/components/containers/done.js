import {connect} from 'react-redux';
import TodoList from '../todo-list';


//фильтруем и передаем списку выполненные
const mapStateToProps=(state) =>{
      const data = state.todos.filter((el)=>el.done);;
      return {
        data
      }
    }

export default connect(mapStateToProps)(TodoList);
