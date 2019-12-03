import React from 'react';
import { Switch, Route } from 'react-router-dom';

//todos
import AppHeader from '../app-header';
//menu: All, Active, Done
import StatusFilter from '../status-filter';
//AddItem
import AddItem from '../add-item';
//(Un)Select All, Delete Completed
import Tools from '../tools';
//Todo List containers: All, Active, Done
import {All, Done, Active} from '../containers';


import './global.scss';
import './app.scss';

const  App =()=>{
        return (
                  <div className="todo-app">
                        <AppHeader />
                        <StatusFilter />
                        <Switch>
                            <Route exact path='/' component={All} />
                            <Route path='/active' component={Active} />
                            <Route path='/done' component={Done} />
                        </Switch>
                        <AddItem/>
                        <Tools/>
                  </div>
        );
}

export default App;
