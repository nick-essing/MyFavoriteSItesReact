import React from 'react';

export default class Formular extends React.Component {
    constructor() {
        super();

    }
    render(){
        return(
            <div className= "content__card" style={{marginTop: + 15 + 'px'}}>
                <h2>Du willst eine Site für deine Firma hinzufügen ?</h2>
                <p>geb hier die Daten deiner Site und deines Unternehmens an</p>
                <div className="input-group">
                    <input className="input" id= "myName" type="text" required></input>
                    <label id="name">Name *</label>
                </div>
                <div className="input-group">
                    <input className="input" id="myUrl"type="text" required></input>
                    <label id="url">Url *</label>
                </div>
                <div className="input-group">
                    <input className="input" id="myFacebook" type="text" required></input>
                    <label id="facebooksite">Facebookseite</label>
                </div>
                <div className="input-group">
                    <input className="input" id="myAdress" type="text" required></input>
                    <label id="street">Straße/Hr.</label>
                </div>
                <div className="input-group">
                    <input className="input" id="myLocation" type="text" required></input>
                    <label id="city">PLZ/Ort</label>
                </div>
                <div style={{textAlign: 'center', marginTop: + 10 +'px'}}>
                    <button className="button" id= "sendNow">Site hinzufügen</button>
                </div>
            </div>
        );
    }
}


/*
import React from 'react';
import PropTypes from 'prop-types';
import { Mode } from 'chayns-components/lib';


import './user.scss';


const User = ({ userId, name, removeUser }) => (
    <div className="user">
        <div className="user__info">
            <div
                className="user__image"
                style={{
                    backgroundImage: `url(https://sub60.tobit.com/u/${userId}`
                }}
            />
            <div className="user__name">
                {name}
            </div>
        </div>

        <Mode mode={1} group={1}>
            <div
                className="user__remove"
                onClick={() =>
                    removeUser(userId)
                }
            >
                <span>x</span>
            </div>
        </Mode>

    </div>
);

User.propTypes = {
    name: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    removeUser: PropTypes.func.isRequired
};
export default User;
*/