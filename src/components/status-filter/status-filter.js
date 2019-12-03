import React from 'react';

import {Link, withRouter} from 'react-router-dom';

import './status-filter.scss';

const StatusFilter =({location})=>{
    const currentPath=location.pathname;
    const classNames="filter-bar-item btn btn-light col-sm"
    return (
      <div className="filter-bar row">
        <Link   to='/'
                className={currentPath.search('/') ? classNames:classNames+' active'}>
                All
        </Link>
        <Link   to='/active'
                className={currentPath.search('/active') ? classNames:classNames+' active'}>
                Active
        </Link>
        <Link   to='/done'
                className={currentPath.search('/done') ? classNames:classNames+' active'}>
                Done
        </Link>
      </div>
    );
}

export default withRouter(StatusFilter);
