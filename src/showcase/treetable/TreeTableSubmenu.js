import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class TreeTableSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu p-clearfix">
                <ul>
                    <li><Link to="/treetable">&#9679; Documentation</Link></li>
                    <li><Link to="/treetable/templating">&#9679; Templating</Link></li>
                    <li><Link to="/treetable/page">&#9679; Page</Link></li>
                    <li><Link to="/treetable/sort">&#9679; Sort</Link></li>
                    <li><Link to="/treetable/selection">&#9679; Selection</Link></li>
                    <li><Link to="/treetable/colgroup">&#9679; ColGroup</Link></li>
                    <li><Link to="/treetable/lazy">&#9679; Lazy</Link></li>
                    <li><Link to="/treetable/edit">&#9679; Edit</Link></li>
                </ul>
            </div>
        );
    }
}