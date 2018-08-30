import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

async function init() {
    try {
        await chayns.ready;

        const tappElement = document.querySelector('.tapp');
        ReactDOM.render(<App/>, tappElement);

    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
