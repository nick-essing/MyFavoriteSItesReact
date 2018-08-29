import React from 'react';
import MoreBtn from './moreBtn/MoreBtn';
import SearchBar from './searchBar/SearchBar';
import TempList from './tempList/TempList'
import ReactDOM from 'react-dom';
import { Accordion } from 'chayns-components';


export default class ListContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Accordion head="MyFavoriteSites" defaultOpened className="accordion--fixed" right={<SearchBar />}>
                <TempList/>
                <MoreBtn />
            </Accordion>
        );
    }
}
