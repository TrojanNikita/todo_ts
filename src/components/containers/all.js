import {connect} from 'react-redux';
import TodoList from '../todo-list';

//передаем списку все
const mapStateToProps=(state) =>{
      const data = state.todos;
      return {
        data
      }
    }

export default connect(mapStateToProps)(TodoList);
