import React from 'react';
import MoreBtn from './MoreBtn';
import SearchBar from './searchBar/SearchBar';


export default class ListContainer extends React.Component {
    constructor() {
        super();

    }
    render(){
        return(
            <div className="accordion accordion--fixed accordion--open" style={{overflow: 'hidden',marginTop: 30 +'px'}}>
                <div className="accordion__head"style={{padding: 4 + 'px' + 9 + 'px' + 3 + 'px' + 3 + 'px',position: 'relative'}}>
                    <div className="accordion--trigger accordion__head--search--wrapper" style={{overflow: 'hidden', display: 'inline-table'}}>
                        <div className="accordion--trigger accordion__head--search" style={{maxWidth: 80 + '%', textOverflow: 'ellipsis'}}>
                            MyFavoriteSites
                        </div>
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div className="accordion__body" id="list1">

                </div>
                <MoreBtn></MoreBtn>
            </div>
        );
    }
}