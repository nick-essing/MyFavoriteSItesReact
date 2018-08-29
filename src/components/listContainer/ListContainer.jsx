import React from 'react';
import MoreBtn from './moreBtn/MoreBtn';
import SearchBar from './searchBar/SearchBar';
import ReactDOM from 'react-dom';
import { Accordion } from 'chayns-components';


export default class ListContainer extends React.Component {
    constructor() {
        super();
        //const tempList = document.querySelector('#list1');
        //ReactDOM.start(<TempList/>, tempList);

    }

    render() {
        return (
            <Accordion head="MyFavoriteSites" defaultOpened className="accordion--fixed" right={<SearchBar />}>
            <MoreBtn />
            </Accordion>
        );
    }
}
