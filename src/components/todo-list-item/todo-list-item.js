import React,{useState, useRef} from 'react';
import {connect} from 'react-redux';
import {toggleTodo,deleteTodo, editTodo} from './../../actions/actions';
import './todo-list-item.scss';

const TodoListItem =({id,label,editTodo, deleteTodo,toggleTodo,done})=>{

    const [editMode,setEditMode]=useState(false);

    const inputEl = useRef();

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

    const onEditClick=(e)=>{
        e.preventDefault(); 
        if(editMode){
            console.log(newLabel);
            //если после изменения пустая тудушка, удаляем ее
            newLabel===''?
                  deleteTodo(id):editTodo(id,newLabel);
            //меняем режим по нажатию кнопки редактирования 
            setEditMode(false);
        }else{                     
            setNewLabel(label);
            //меняем режим по нажатию кнопки редактирования             
            setEditMode(true);
            //выводим курсор по нажатию кнопки редактирования
            inputEl.current.focus();
        }

    };



    return (
        <form className={classNames}
            onSubmit={onEditClick}>
            <div
                className="left"
                onClick={ ()=>toggleTodo(id)}>
                <input
                        ref={inputEl} 
                        type='text'
                        className='left-edit'
                        value={!editMode?label:newLabel}
                        onChange={onLabelChange}
                        onSubmit={onEditClick}
                        readOnly={!editMode}
                />
            </div>

            <div className="right">    
                    <button type="button"
                        className="right-btn btn btn-outline-danger btn-sm float-right"
                        onClick={()=>deleteTodo(id)}>
                        <i className="my-icon fa fa-trash-o" />
                    </button>
                    <button type="button"
                        className={classNameEdit}
                        onClick={onEditClick}>
                        <i className="my-icon fa fa-pencil" />
                    </button>
            </div>

      </form>
    );
};

//выполнить, удалить, редактировать
const mapDispatchToProps = ({
      toggleTodo,
      deleteTodo,
      editTodo
})


export default connect(null,mapDispatchToProps)(TodoListItem);
