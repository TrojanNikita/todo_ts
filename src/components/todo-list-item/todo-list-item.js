import React,{useState} from 'react';
import {connect} from 'react-redux';
import {toggleTodo,deleteTodo, editTodo} from './../../actions/actions';
import './todo-list-item.scss';

const TodoListItem =({id,label,editTodo, deleteTodo,toggleTodo,done})=>{

    const [editMode,setEditMode]=useState(false);


    //Для cross out
    let classNames='todo-list-item';
    if (done) classNames+=' done';


    //будем изменять newLabel только при переходе в edit mode
    const [newLabel, setNewLabel]=useState('');
    const onLabelChange=(e)=>{
      setNewLabel(e.target.value);
    };


    //САМОЕ ВАЖНОЕ!!!!
    //Нажатие кнопки редактирования,
    //Если первый раз, то переходим в edit mode, предварительно положив в новый заголовок старый
    //В случае повторного нажатия, если строка не стала пустой изменяем
    //в глобальном хранилище todo, иначе вообще удаляем пустую строку
    const classNameEdit=editMode?
    "right-btn btn btn-outline-dark btn-sm float-right active":
    "right-btn btn btn-outline-dark btn-sm float-right"
    const onEditClick=()=>{
        if(editMode){
            newLabel===''?
                  deleteTodo(id):editTodo(id,newLabel);
            setEditMode(false);
        }else{
            setNewLabel(label);
            setEditMode(true);
        }
    };


    //если режим редактирования включен, создаем инпут , иначе спан
    const item=editMode?
          <input
                className='left-edit'
                value={newLabel}
                onChange={onLabelChange}
          />:
          <span className='left-view'>{label}</span>


    return (
      <div className={classNames}>
            <div
                className="left"
                onClick={()=>toggleTodo(id)}>
                {item}
            </div>
            <div className="right">    
                    <button type="button"
                        className="right-btn btn btn-outline-danger btn-sm float-right"
                        onClick={()=>deleteTodo(id)}>
                        <i className="my-icon fa fa-trash-o" />
                    </button>
                    <button type="button"
                        className={classNameEdit}
                        onClick={()=>onEditClick()}>
                        <i className="my-icon fa fa-pencil" />
                    </button>
            </div>
      </div>
    );
};

//выполнить, удалить, редактировать
const mapDispatchToProps = dispatch => ({
      toggleTodo: (id) => dispatch(toggleTodo(id)),
      deleteTodo: (id) => dispatch(deleteTodo(id)),
      editTodo:(id,label)=>dispatch(editTodo(id, label))
})


export default connect(null,mapDispatchToProps)(TodoListItem);
