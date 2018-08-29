import React from 'react';
import Formular from './listContainer/Formular';
import ListContainer from './listContainer/ListContainer';

const Content = () => (
    <div className="tapp__content">
        
        <Formular/>
    </div>
);

export default Content;

//<ListContainer/>





/*
export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    addUser = (user) => {
        const { users } = this.state;
        if (users.find(u => u.userId === user.userId)) {
            return;
        }

        this.setState({
            users: [...users, user]
        });
    };

    removeUser = (userId) => {
        const { users } = this.state;
        this.setState({
            users: users.filter(u => u.userId !== userId)
        });
    };

    render() {
        const { users } = this.state;
        return (
            <div className="tapp__content content">


                    <Mode mode={1} group={1}>
                        <PersonFinder
                        addUser={this.addUser}
                        />
                    </Mode>

                <Formular
                    user={users}
                    removeUser={this.removeUser}
                /> 
            </div>
        );
    }
}
*/