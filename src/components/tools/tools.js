import React from 'react';
import {connect} from 'react-redux';
import {toggleAll, deleteCompleted} from './../../actions/actions';
import './tools.scss';

const Tools=({toggleAll, deleteCompleted, doneCount})=>{
  return(
    <div className="tools btn-group">
      <button className="tools-button-left"
              onClick={()=>toggleAll(doneCount===0)}>
              {
                (doneCount===0)?
                'Select All':'Unselect All'
              }
      </button>
      <button className="tools-button-right"
              onClick={()=>deleteCompleted()}>
              Delete completed
      </button>
    </div>
  );
};


//Количество выполненных дел
const mapStateToProps=(state) =>{
  const doneCount = state.todos.filter((el)=>el.done).length;
  return {
    doneCount
  }
}


const mapDispatchToProps = dispatch => ({
  toggleAll: (done) => dispatch(toggleAll(done)),
  deleteCompleted: () => dispatch(deleteCompleted())
})


export default connect(mapStateToProps, mapDispatchToProps)(Tools);
