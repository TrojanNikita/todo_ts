import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './../../actions/actions';
import './add-item.scss';


const AddItem=({addTodo})=> {

  const [label, setLabel]=useState('');

  const onLabelChange=(e)=>{
    setLabel(e.target.value);
  };

  const onSubmit=(e)=>{
    e.preventDefault(); //Браузер не будет перезагружать страницу
    addTodo(label);
    setLabel('');
  };

    return(
        <form className='add-item'
              onSubmit={onSubmit}>
              <input  type='text'
                      className='add-item-text form-control'
                      onChange={onLabelChange}
                      placeholder='What needs to be done?'
                      value={label}/>
        </form>
    );
};


//добавление в глобальное хранилище
const mapDispatchToProps = dispatch => ({
  addTodo: (label) => dispatch(addTodo(label))
})


export default connect(null,mapDispatchToProps)(AddItem);
