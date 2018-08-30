import React from 'react';
import './listSyles.scss'
import ListItem from './ListItem';

export default class TempList extends React.Component {

    render(){
        return (
        <React.Fragment>
            {this.props.tempList.map(s => <ListItem key={s.siteId} {...s} />)}
        </React.Fragment>
        );
    } 
}