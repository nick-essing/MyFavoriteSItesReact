import React from 'react';

export default class MoreBtn extends React.Component {
    constructor() {
        super();

    }
    render(){
        return(
            <div className='right' style={{textAlign: 'right', margin: 10 + 'px ' + 10 + 'px ' + 5 + 'px ' + 0}}>
                <a href='#' id='right'>Mehr anzeigen</a>             
            </div>
        );
    }
}