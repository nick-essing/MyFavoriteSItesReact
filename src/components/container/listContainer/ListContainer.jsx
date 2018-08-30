import React from 'react';
import MoreBtn from './moreBtn/MoreBtn';
import SearchBar from './searchBar/SearchBar';
import CreateList from './createList/CreateList'
import { Accordion } from 'chayns-components';
import fetchData from '../../../utils/getData/fetchData';

export default class ListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            tempList: [],
            count: '10',
            serachString: 'love'
        };
        this.appendList(this.state.serachString);
    }

    render() {
        return (
            <Accordion head="MyFavoriteSites" defaultOpened className="accordion--fixed" right={<SearchBar callback={(value) => {this.state.tempList=[];this.appendList(value)}}/>}>
                <CreateList tempList={this.state.tempList}/>
                <MoreBtn callback={() => this.appendList(this.state.searchString)}/>
            </Accordion>
        );
    }
    appendList = (searchString) => {
        fetchData("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=" + searchString + "&Skip="+ this.state.tempList.length +"&Take="+ this.state.count).then((data) => {  
            console.log(this.state.tempList.length);
        if (data.Data !== null){
                this.setState({
                    tempList: this.state.tempList.concat(data.Data),
                    searchString
                });
            }
        });
    } 
}
