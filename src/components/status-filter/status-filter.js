import React from 'react';

import { NavLink} from 'react-router-dom';

import './status-filter.scss';

const StatusFilter =()=>{


    const classNames="filter-bar-item btn btn-light col-sm"
    return (
      <div className="filter-bar row">
        <NavLink   to='/all'
                className={classNames}
                activeClassName='active'>
                All
        </NavLink>
        <NavLink   to='/active'
                className={classNames}
                activeClassName='active'>
                Active
        </NavLink>
        <NavLink   to='/done'
                className={classNames}
                activeClassName='active'>
                Done
        </NavLink>
      </div>
    );
}

export default StatusFilter;
