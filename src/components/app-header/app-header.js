import React from 'react';
import {connect} from 'react-redux';
import './app-header.scss';

const AppHeader=({activeCount})=>{
  return(
    <div className="app-header d-flex">
        <h1 className="app-header-title d-flex">
          todos
        </h1>
        <h2 className="app-header-subtitle d-flex">
          {activeCount} more to do
        </h2>
    </div>
  );
};


//Cчетчик активных категорий
const mapStateToProps=(state) =>{
      const activeCount = state.todos.todos.filter((el)=>!el.done).length;
      return {
        activeCount
      }
    }

export default connect(mapStateToProps)(AppHeader);
