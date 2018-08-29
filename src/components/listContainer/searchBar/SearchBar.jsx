import React from 'react';
import './SearchBar.scss'

export default class SearchBar extends React.Component {
    constructor() {
        super();

    }
    render(){
        return(
            <div className="Suche Suche--accordion">
                <input id= "search" type="text" placeholder="Suche">
                </input>
                <label id="iconlabel">
                    <i className="fa fa-search"></i>
                </label>
            </div>
        );
    }
}