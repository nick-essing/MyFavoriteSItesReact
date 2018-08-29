import React from 'react';
import { Input } from 'chayns-components';
import { Button } from 'chayns-components';

export default class Formular extends React.Component {
    constructor() {
        super();
        this.myNameValue = '';
        this.myUrlValue = '';
        this.myFacebookValue = '';
        this.myAdressValue = '';
        this.myLocationValue = '';
    }
    render(){
        return(
            <div className= "content__card" style={{marginTop: 15 + 'px'}}>
                <h2>Du willst eine Site für deine Firma hinzufügen ?</h2>
                <p>geb hier die Daten deiner Site und deines Unternehmens an</p>
                <Input id= "myName" placeholder="Name *" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.myNameValue = value;
                }}/>
                <Input id="myUrl" placeholder="Url *" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.myUrlValue = value;
                }}/>
                <Input id="myFacebook" placeholder="Facebook" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.myFacebookValue = value;
                }}/>
                <Input id="myAdress" placeholder="Straße/Hr." style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.myAdressValue = value;
                }}/>
                <Input id="myLocation" placeholder="PLZ/Ort" style={{width: 100 + '%'}}responsive
                onChange={(value)=>{
                    this.myLocationValue = value;
                }}/>
                <div style={{textAlign: 'center', marginTop: 10 +'px'}}>
                    <Button id= "sendNow" onClick={()=>{
                         if (this.myNameValue !== '' && this.myUrlValue !== '') {
                            chayns.intercom.sendMessageToPage({  
                                text:"Neue Site : "+ this.myNameValue +", "+ this.myUrlValue +", "+ this.myFacebookValue +", "+ this.myAdressValue +", "+ this.myLocationValue
                            });
                            document.querySelector('#myName').value = '',
                            document.querySelector('#myUrl').value = '',
                            document.querySelector('#myFacebook').value = '',
                            document.querySelector('#myAdress').value = '',
                            document.querySelector('#myLocation').value = '',
                            this.myNameValue = '',
                            this.myUrlValue = '',
                            this.myFacebookValue = '',
                            this.myAdressValue = '',
                            this.myLocationValue = ''

                        } else {
                            chayns.dialog.alert('Fehler', 'Bitte fülle die Plichtfelder aus.');
                        } 
                    }}
                    >Site hinzufügen</Button>
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