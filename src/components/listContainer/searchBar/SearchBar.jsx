import React from 'react';
import './SearchBar.scss'
import { Input } from 'chayns-components';


export default class SearchBar extends React.Component {
    constructor() {
        super();

    }
    render(){
        return(
            <div className="Suche Suche--accordion">
                <Input id= "search" type="text" placeholder="Suche" />                
                <label id="iconlabel">
                    <i className="fa fa-search"></i>
                </label>
            </div>
        );
    }
}